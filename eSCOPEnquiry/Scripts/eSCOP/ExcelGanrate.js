var tableToExcel = (function () {
    var uri = 'data:application/vnd.ms-excel;base64,'
, template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
, base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
, format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
    return function (table, name) {
        var ctx = { worksheet: name || 'Worksheet', table: table }
        var blob = new Blob([format(template, ctx)]);
        var blobURL = window.URL.createObjectURL(blob);
        return blobURL;
    }
})()
function fnnewExportHTML(tableNames, headerbdColor, filename, pristr, poststr) {

    //****************Validating input parameters********************************
    if (tableNames.trim() === "") {
        alert("No table supplied to export data!");
        return;
    }
    if (headerbdColor.trim() === "") {
        //Default Back Color
        headerbdColor = "#87AFC6";
    }
    if (filename.trim() === "") {
        //Default Filename
        filename = "ExportedData";
    }
    //********************************************************************************

    var export_data = "";
    var arrTableNames = tableNames.split("|");

    if (arrTableNames.length > 0) {
        for (var i = 0 ; i < arrTableNames.length ; i++) {
            export_data += "<table border='2px'><tr bgcolor='" + headerbdColor + "'>";
            objTable = document.getElementById(arrTableNames[i]); // table to export

            if (objTable === undefined) {
                alert("Table not found!");
                return;
            }

            for (var j = 0 ; j < objTable.rows.length ; j++) {
                export_data += objTable.rows[j].innerHTML + "</tr>";
            }

            export_data += "</table>";
        }

        //*********Optional Code: In case not required, please comment it*********************

        //For removing links in table data(if any)
        export_data = export_data.replace(/<A[^>]*>|<\/A>/g, "");

        //For removing images in table data(if any)
        export_data = export_data.replace(/<img[^>]*>/gi, "");

        //For reomving input params(if any)
        export_data = export_data.replace(/<input[^>]*>|<\/input>/gi, "");

        //*************************************************************************************
    }
    else {
        alert("No table supplied to export data!");
        return;
    }
    export_data = pristr + export_data + poststr;

    // If Internet Explorer(Not supported Data URIs), Check navigator details & find whether it is IE or NOT
    if (window.navigator.userAgent.indexOf("MSIE ") > 0 || !!window.navigator.userAgent.match(/Trident.*rv\:11\./)) {
        exportIF.document.open("txt/html", "replace");
        exportIF.document.write(export_data);
        exportIF.document.close();
        exportIF.focus();
        //SaveAs command to Save CSV File
        exportIF.document.execCommand("SaveAs", true, filename + ".xls");
    }
    else //other browsers : Chrome/FireFox (Supported Data URIs)
    {
        //window.open('data:application/vnd.ms-excel,' + encodeURIComponent(export_data));
        var blobURL = tableToExcel(export_data, filename);
        $('#btnExport').attr('download', filename + '.xls')
        $('#btnExport').attr('href', blobURL);
    }
    //return (sa);

    //////////**********Account *************************


}