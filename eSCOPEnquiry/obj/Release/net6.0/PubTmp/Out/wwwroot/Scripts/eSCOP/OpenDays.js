
LoadPermissionWiseInstitute("#InstituteID", $("#HdnInstituteID").val());
LoadInstituteWiseProgram("#ProgramID", $("#HdnProgramID").val(), $("#HdnInstituteID").val());
LoadInstituteProgramWisetradeMultisel("#TradeID", $('#ProgramID').val(), $("#InstituteID").val(), $('#HdnTradeID').val());
$("#TradeID").multiselect({
    includeSelectAllOption: true,
    nonSelectedText: 'Trade'
});

$("#InstituteID").change(function () {

    LoadInstituteWiseProgram("#ProgramID", $("#HdnProgramID").val(), $(this).val());

    $("#TradeMl").empty();
    $("#TradeMl").append("<select id='TradeID' name='Trade' class='demo form-control' multiple='multiple'></select>");
    LoadInstituteProgramWisetradeMultisel("#TradeID", $('#ProgramID').val(), $("#InstituteID").val(), $('#HdnTradeID').val());

    $("#TradeID").multiselect({
        includeSelectAllOption: true,
        nonSelectedText: 'Trade'
    });

});
$("#ProgramID").change(function () {
    $("#TradeMl").empty();
    $("#TradeMl").append("<select id='TradeID' name='Trade' class='demo form-control' multiple='multiple'></select>");
    LoadInstituteProgramWisetradeMultisel("#TradeID", $('#ProgramID').val(), $("#InstituteID").val(), $('#HdnTradeID').val());

    $("#TradeID").multiselect({
        includeSelectAllOption: true,
        nonSelectedText: 'Trade'
    });
});


var TradeName = "";


if ($("#HdnTradeName").val() != "") {
    TradeName = $("#HdnTradeName").val();
    $("#TradeMl").empty();
    $("#TradeMl").append("<select id='TradeID' name='Trade' class='demo form-control' multiple='multiple'></select>");
    LoadInstituteProgramWisetradeMultisel("#TradeID", $('#ProgramID').val(), $("#InstituteID").val(), $('#HdnTradeID').val());

    $("#TradeID").multiselect({
        includeSelectAllOption: true,
        nonSelectedText: 'Trade'
    });
    var tradeiddata = $("#HdnTradeName").val().split(",");
    var Trade = $('ul.multiselect-container > li');
    for (var i = 0 ; i < Trade.length; i++) {
        for (var j = 0; j < tradeiddata.length; j++) {
            if ($($('ul [type="checkbox"]')[i]).attr('value') == tradeiddata[j]) {
                $($('ul [type="checkbox"]')[i]).prop('checked', true);
                $($('ul [type="checkbox"]')[i]).prop('checked', true).change();
            }
        }
    }
}
else {
    $("#TradeID").multiselect({
        includeSelectAllOption: true,
        nonSelectedText: 'Trade'
    });
}

$("#TradeMl").on("change", "#TradeID", function () {

    $("#HdnTradeID").val($(this).val());
    TradeName = $("#HdnTradeID").val();
});

if ($('#ToDatebool').is(":checked")) {
    $('#SelectTodate').show(400);


}
else {
    $('#SelectTodate').hide(400);
    //$('#timepicker').attr("hidden", true);

}
$("#ToDatebool").click(function () {
    if ($('#ToDatebool').is(":checked")) {
        $('#SelectTodate').show(400);


    }
    else {
        $('#SelectTodate').hide(400);
        //$('#timepicker').attr("hidden", true);

    }
});


$("#FromDate").datepicker({
    defaultDate: "+1w",
    dateFormat: "dd/mm/yy",

    changeMonth: true,
    changeYear: true,
    numberOfMonths: 1,
    prevText: '<i class="fal fa-chevron-left"></i>',
    nextText: '<i class="fal fa-chevron-right"></i>',

    onClose: function (selectedDate) {
        $("#ToDate").datepicker("option", "minDate", selectedDate);
    }

});

$("#ToDate").datepicker({
    defaultDate: "+1w",
    dateFormat: "dd/mm/yy",

    changeMonth: true,
    changeYear: true,
    numberOfMonths: 1,
    prevText: '<i class="fal fa-chevron-left"></i>',
    nextText: '<i class="fal fa-chevron-right"></i>',
    onClose: function (selectedDate) {
        $("#FromDate").datepicker("option", "maxDate", selectedDate);
    }

});






$("#btnSubmit").click(function () {

    if ($("#OpenDaysForm").valid()) {

        var InstituteID = $("#InstituteID").val();

        var ProgramID = $("#ProgramID").val();
        var RecordID = $("#HdnRecordID").val();


        var FromDate = "01/01/1900";
        var ToDate= "01/01/1900";
        if ($("#FromDate").val() != "") {
            FromDate = $("#FromDate").val();
        }
        if ($('#ToDatebool').is(":checked")) {
            ToDate = $("#ToDate").val();


        }
        
       
        var Reason = $("#Reason").val();
      
        var data = {
            InstituteID: InstituteID, ProgramID: ProgramID,
            TradeName: TradeName, RecordID: RecordID
            ,  Reason: Reason
        };
        $.ajax({
            type: "Post",
            url: "/StudentAttendance/SaveOpenDays",
            data: { SDbal: data, FromDate: FromDate, ToDate: ToDate },
            DataType: "Json",
            success: function (response) {
                if (response == 'Record Already Exists') {


                    $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>" + response + "</div>")
                }
                else {
                    //$("#msg").html("<div class='alert alert-success fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-check'></i><strong>Success! </strong>" + response + "</div>")

                    //$("#TxtTradeName").val("");
                    //$("#TxtDescription").val("");

                    window.location.href = "/StudentAttendance/OpenDaysMaster";
                }
            },
            error: function (data) {


                $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error!</strong>Record not save succesfully</div>")

                console.log(data.responseText);
            }
        });

    }
});

var $checkoutForm = $("#OpenDaysForm").validate({
    // Rules for form validation
    rules: {

        InstituteID: {
            min: 1
        },


        TradeID: {
            required: true

        },
        Trade: {
            required: true

        },


        ProgramID: {
            min: 1
        },

        FromDate: {
            required: true
        },
        ToDate: {
            required: true
        }
    },

    // Messages for form validation
    messages: {

        InstituteID: {
            min: 'Please Select Institute',

        },


        ProgramID: {
            min: 'Please Select Program'
        },

        TradeID: {
            required: 'Please Select Trade'
        },
        Trade: {
            required: 'Please Select Trade'
        },
        FromDate: {
            required: 'Please Enter From Date'
        },
        ToDate: {
            required: 'Please Enter To Date'
        }

    },

    // Do not change code below
    errorPlacement: function (error, element) {
        error.insertAfter(element.parent());
    }
    //,
    //submitHandler: function (form) {
    //    //HdnTradeID

    //}
});