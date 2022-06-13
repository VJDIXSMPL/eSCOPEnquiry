////Change status
function ChangeStatus(StudentID) {


    var StudentID = StudentID;



    $.ajax({
        url: '/FeesReport/GetStudentDetail',///'@Url.Action("GetStudentDetail","FeesReport")',
        contenType: 'application\json; charset=utf-8',
        data: { StudentID: StudentID },
        success: function (data) {
            var data1 = JSON.parse(data).Table
            var data2 = JSON.parse(data).Table1
            var data3 = JSON.parse(data).Table2
            $('#Dv1').empty();
            //$('#Dv1').append('<div class="row form-group"><p class="col-sm-1"> Adm.No.:</p><p class="col-sm-3"><b>' + data1[0].AdmissionNo + '</b></p>  <p class=col-sm-1>Trainee Name:</p> <p class=col-sm-3> <b>' + data1[0].TName + '</b></p><p class=col-sm-1> Institute Name:</p><p class="col-sm-3"><b>' + data1[0].InstituteName + '</b></div><div class=row form-group> <p class=col-sm-1> Father Name:</p><p class="col-sm-3"><b>' + data1[0].fname + '</b><p class=col-sm-2> NCVT Reg.No. :</p><p class="col-sm-2"><b>' + data1[0].NCVTRegNo + '</b></p><p class="col-sm-2">Semester Name  :</p><p class="col-sm-2"> <b>' + data1[0].Semester + '</b></p></div></hr>');
            $('#Dv1').append('<div class="row form-group"><p class="col-sm-3"> Admission No.:</p><p class="col-sm-3"><b>' + data1[0].AdmissionNo + '</b></p><p class=col-sm-3>Trainee Name:</p> <p class=col-sm-3> <b>' + data1[0].TName + '</b></p></div><div class="row form-group"><p class=col-sm-3> Institute Name:</p><p class="col-sm-3"><b>' + data1[0].InstituteName + '</b></p><p class=col-sm-3> Father Name:</p><p class="col-sm-3"><b>' + data1[0].fname + '</b></div><div class="row form-group"><p class=col-sm-3> NCVT Reg.No. :</p><p class="col-sm-3"><b>' + data1[0].NCVTRegNo + '</b></p><p class="col-sm-3">Semester Name  :</p><p class="col-sm-3"> <b>' + data1[0].Semester + '</b></p></div><div class="row form-group"><p class=col-sm-3> Mobile No.:</p><p class="col-sm-3"><b>' + data1[0].MobileNo + '</b></p><p class=col-sm-3> Current Status:</p><p class="col-sm-3"><b>' + data2[0].curStatus + '</b></div><div class=row form-group><p class=col-sm-3> Net Balance :</p><p class="col-sm-3"><b id="NetBal" >' + data3[0].NetBalance + '</b></p></div></hr>');
            $('#hdStudentID').val(data1[0].StudentID);
            if (data3[0].NetBalance == "0.00") {
                $('#NetBal').css("color", "green");

            } else {
                $('#NetBal').css("color", "red");
            }


            //Bind Status Data


            var datatbl = JSON.parse(data).Table3
            $('#tbldata').empty();
            var htmltbldata = "";
            for (var i = 0; i < datatbl.length; i++) {
                //nxtcomDate
                htmltbldata = '<tr>';
                htmltbldata = htmltbldata + '<td>' + datatbl[i].StatusDate + '</td>';
                htmltbldata = htmltbldata + '<td>' + datatbl[i].Status + '</td>';
                htmltbldata = htmltbldata + '<td>' + datatbl[i].Remark + '</td>';
                htmltbldata = htmltbldata + '<td>' + datatbl[i].nxtcomDate + '</td>';
                htmltbldata = htmltbldata + '<td>' + datatbl[i].EnteredBy + '</td>';
                htmltbldata = htmltbldata + '</tr>';
                $('#tbldata').append(htmltbldata);
            }



        }

    })


    $('#myModal1').modal({
        show: 'true'
    });
}


function SaveStatus() {
    var StudentID = $('#hdStudentID').val();
    var FeeStatus = $('#FeeStatus').val();
    if ($('#ToDate').val() == "") {
        var ToDate = "01/01/1900";
    }
    else {
        var ToDate = $('#ToDate').val();
    }

    var Remark = $('#Remark').val();

    $.ajax({
        url: '/FeesReport/SaveStatus',/// '@Url.Action("SaveStatus", "FeesReport")',
        type: 'Post',
        //contentType: 'application\json;charset=utf-8',
        data: { StudentID: StudentID, FeeStatus: FeeStatus, ToDate: ToDate, Remark: Remark },
        success: function (data) {
            if (data == 'Record Saved Successfully') {

                $('#msg').html("<div class='alert alert-success fade in'> <button class='close' data-dismiss='alert'>×</button><i class='fa-fw fa fa-check'></i><strong>Success!</strong>   Record save successfuly</div>");
                $(window).scrollTop(0);
                $('#hdStudentID').val(0);
                $('#FeeStatus').val('');
                $('#ToDate').val('');
                $('#Remark').val('');
                $('#myModal1').modal('hide');
                //$(".close").click();
                LoadData();


            }
            else {
                $('#msg').html("<div class='alert alert-success fade in'> <button class='close' data-dismiss='alert'>×</button><i class='fa-fw fa fa-check'></i><strong>Success!</strong> '" + data + "'</div>");
                $(window).scrollTop(0);
                $('#hdStudentID').val(0);
                $('#FeeStatus').val('');
                $('#ToDate').val('');
                $('#Remark').val('');
                $('#myModal1').modal('hide');
                LoadData();

            }
        }

    })
};
///////////////////////
$('#BtnSaveStatus').click(function () {
    if ($('#frmChangeStatus').valid()) {
        SaveStatus();

    }
});
//////////Change FeeStatus////////////////
$('#FeeStatus').change(function () {
    if ($('#FeeStatus').val() == 'Active') {
        $('#TodateHide').hide();

    }
    else {
        $('#TodateHide').show();

    }
});

var $checkoutForm = $("#frmChangeStatus").validate({
    // Rules for form validation
    rules: {

        FeeStatus: {
            required: true,
        },
        ToDate: {
            required: true,
        },
        Remark: {
            required: true,
            maxlength: 250
        },

    },

    // Messages for form validation
    messages: {


        FeeStatus: {
            required: 'Please Select  Status'
        },
        ToDate: {
            required: 'Please Select  Date',
        },
        Remark: {
            required: 'Please Enter  Remark',
            maxlength: 'Please Enter  Remark'
        },

    },

    // Do not change code below
    errorPlacement: function (error, element) {
        error.insertAfter(element.parent());
    },

});

$("#ToDate").datepicker({
    defaultDate: "+1w",
    dateFormat: "dd/mm/yy",
    changeMonth: true,
    changeYear: true,
    numberOfMonths: 1,
    prevText: '<i class="fal fa-chevron-left"></i>',
    nextText: '<i class="fal fa-chevron-right"></i>',

    minDate: 0,

    //maxDate: searchMaxDate,
});
///////////