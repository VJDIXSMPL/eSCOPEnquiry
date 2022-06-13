function buildAjaxData(id) {


    var settings = $("#datatable_tabletools").dataTable().fnSettings();
    //console.log(settings);

    var obj = {
        //default params
        "draw": settings.iDraw,
        "start": settings._iDisplayStart,
        "length": settings._iDisplayLength ,
        "Search": $('.dataTables_filter input').val(),
        "columns": "",
        "order": "",
        "cmd": "refresh",


    };

    //building the columns
    var col = new Array(); // array

    for (var index in settings.aoColumns) {
        var data = settings.aoColumns[index];
        col.push(data.sName);

    }

    var ord = [{
        "column": settings.aLastSort[0].col,
        "dir": settings.aLastSort[0].dir
    }];

    //assigning
    obj.columns = col;
    obj.order = ord;
    console.log(obj);
    return obj;


}