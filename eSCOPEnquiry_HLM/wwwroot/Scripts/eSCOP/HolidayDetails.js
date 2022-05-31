
LoadPermissionWiseInstitute("#InstituteID", $("#HdnInstituteID").val());
LoadInstituteWiseProgram("#ProgramID", $("#HdnProgramID").val(), $("#HdnInstituteID").val());
LoadTradeProgramWiseMultipleTrade("#TradeID", $('#ProgramID').val(), $('#HdnTradeID').val());
LoadHolidayMaster("#HolidayID",$("#HdnHolidayID").val())

var TradeName = "";


if ($("#HdnTradeName").val() != "") {
    TradeName = $("#HdnTradeName").val();
    $("#TradeMl").empty();
    $("#TradeMl").append("<select id='TradeID' name='Trade' class='demo form-control' multiple='multiple'></select>");
    LoadTradeProgramWiseMultipleTrade("#TradeID", $('#ProgramID').val(), $('#HdnTradeID').val());

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

$("#InstituteID").change(function () {

 

    LoadInstituteWiseProgram("#ProgramID", -1, $(this).val());
    $("#TradeMl").empty();
    $("#TradeMl").append("<select id='TradeID' name='Trade' class='demo form-control' multiple='multiple'></select>");
    LoadTradeProgramWiseMultipleTrade("#TradeID", $('#ProgramID').val(), $('#HdnTradeID').val());

    $("#TradeID").multiselect({
        includeSelectAllOption: true,
        nonSelectedText: 'Trade'
    });

});
$("#ProgramID").change(function () {

    $("#TradeMl").empty();
    $("#TradeMl").append("<select id='TradeID' name='Trade' class='demo form-control' multiple='multiple'></select>");
    LoadTradeProgramWiseMultipleTrade("#TradeID", $('#ProgramID').val(), $('#hdnTradeID').val());

    $("#TradeID").multiselect({
        includeSelectAllOption: true,
        nonSelectedText: 'Trade'
    });


});


$("#Teaching").click(function () {

    if($("#Teaching").is(":checked"))
    {
        $("#StudentTeaching").prop("checked", true);
    }
    else {
        $("#StudentTeaching").attr("checked", false);
    }
});

$("#TradeMl").on("change", "#TradeID", function () {
   
    $("#HdnTradeID").val($(this).val());
    TradeName = $("#HdnTradeID").val();
});

$("#btnSubmit").click(function () {
    
    if($("#Holidaymaster").valid())
    {
        if ($("#StudentTeaching").is(":checked") || $("#NonTeaching").is(":checked") || $("#NonTeaching").is(":checked")) {
            var InstituteID = $("#InstituteID").val();

            var ProgramID = $("#ProgramID").val();
            var RecordID = $("#HdnRecordID").val();
      
            var HolidayID = $("#HolidayID").val();
            var FromDate = "01/01/1900";
            var ToDate = "01/01/1900";
            if ($("#FromDate").val() != "") {
                FromDate = $("#FromDate").val();
            }
            if ($("#ToDate").val() != "") {
                ToDate = $("#ToDate").val();
            }
            var StudentTeaching = false;
            var Teaching = false;
            var NonTeaching = false;
            var Description = $("#TxtDesc").val();
            if ($("#StudentTeaching").is(":checked")) {
                StudentTeaching = true;
            }
            if ($("#Teaching").is(":checked")) {
                Teaching = true;
            }
            if ($("#NonTeaching").is(":checked")) {
                NonTeaching = true;
            }
            var data = {
                InstituteID: InstituteID, ProgramID: ProgramID,
                TradeName: TradeName, HolidayID: HolidayID, RecordID: RecordID
                , StudentTeaching: StudentTeaching, Teaching: Teaching, NonTeaching: NonTeaching, Description: Description
            };
            $.ajax({
                type: "Post",
                url: "/StudentAttendance/SaveHolidayDetails",
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

                        window.location.href = "/StudentAttendance/HolidayDeclaration";
                    }
                },
                error: function (data) {


                    $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error!</strong>Record not save succesfully</div>")

                    console.log(data.responseText);
                }
            });
        }
        else {

            $('#msg').html("<div class='alert alert-warning fade in'> <button class='close' data-dismiss='alert'> ×</button><i class='fa-fw fa fa-warning'></i><strong>Warning!</strong> At least One checkbox must be selected ..</div>");
            return false;
        }
    }
});

var $checkoutForm = $("#Holidaymaster").validate({
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
       HolidayID: {
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

        HolidayID: {
            min: 'Please Select Holiday'
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