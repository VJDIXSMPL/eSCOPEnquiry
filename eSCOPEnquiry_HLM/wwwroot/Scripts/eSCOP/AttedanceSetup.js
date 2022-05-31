
LoadPermissionWiseInstitute("#InstituteID", $("#HdnInstituteID").val());
LoadInstituteWiseProgram("#ProgramID", $("#HdnProgramID").val(), $("#HdnInstituteID").val());
LoadInstituteProgramWisetradeMultisel("#TradeID", $('#ProgramID').val(), $("#InstituteID").val(), $('#HdnTradeID').val());
LoadStdAcademicSessionWiseSession("#SessionID", $("#HdnSessionID").val(), $("#HdnInstituteID").val())
$("#TradeID").multiselect({
    includeSelectAllOption: true,
    nonSelectedText: 'Trade'
});

$("#InstituteID").change(function () {



    LoadInstituteWiseProgram("#ProgramID", -1, $(this).val());
    LoadStdAcademicSessionWiseSession("#SessionID", -1, $(this).val())
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

if ($('#AttedanceMarkingAllow').is(':checked')) {
    $('#divShow').show(300);
}
else {
    $('#divShow').hide(300);
}

    $("#AttedanceMarkingAllow").click(function () {

        if ($('#AttedanceMarkingAllow').is(':checked')) {
            $('#divShow').show(300);
        }
        else {
            $('#divShow').hide(300);
        }
    });


    $("#OneDay").click(function () {
        if ($('#OneDay').is(':checked')) {
          
            $('#RdTwiceDay').attr("checked",false);
        }
        
    });
    $("#RdTwiceDay").click(function () {
        if ($('#RdTwiceDay').is(':checked')) {
            $('#OneDay').attr("checked", false);
            
        }
       
    });

    if ($("#HdnRecordID").val() == "-1")
    {
        $('#OneDay').attr("checked", true);
        $('#RdTwiceDay').attr("checked", false);

        
    }

    $('#NoOfDay').bind('keypress', function (e) {
        if (String.fromCharCode(e.which).match(/[^0-9 ]/)) {
            e.preventDefault();

        }
    });

$("#btnSubmit").click(function () {

    if ($("#AttendanceSetup").valid()) {
        var InstituteID = $("#InstituteID").val();
        var SessionID = $("#SessionID").val();
        var ProgramID = $("#ProgramID").val();
        var RecordID = $("#HdnRecordID").val();
        var NoOfDay = "";
        if ($('#AttedanceMarkingAllow').is(':checked')) {
             NoOfDay = $("#NoOfDay").val();
        }
        var OneDay = false;
        var MarkingAllowed = false;
        if ($("#RdTwiceDay").is(":checked"))
        {
          
            OneDay = false;
        }
        else {
            OneDay = true;
        }
        if ($("#MarkingAllowed").is(":checked")) {
            MarkingAllowed = true;
        }
        var data = {
            InstituteID: InstituteID, SessionID: SessionID, ProgramID: ProgramID,
            TradeName: TradeName, NoOfDay: NoOfDay,OneDay:OneDay,MarkingAllowed:MarkingAllowed, RecordID: RecordID
        };
        $.ajax({
            type: "Post",
            url: "/StudentAttendance/SaveAttedanceSetup",
            data: { SDbal: data },
            DataType: "Json",
            success: function (response) {
                if (response == 'Record Already Exists') {


                    $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>" + response + "</div>")
                }
                else {
                    //$("#msg").html("<div class='alert alert-success fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-check'></i><strong>Success! </strong>" + response + "</div>")

                    //$("#TxtTradeName").val("");
                    //$("#TxtDescription").val("");

                    window.location.href = "/StudentAttendance/AttendanceSetupMaster";
                }
            },
            error: function (data) {


                $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error!</strong>Record not save succesfully</div>")

                console.log(data.responseText);
            }
        });
    }
});




var $checkoutForm = $("#AttendanceSetup").validate({
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
        SessionID: {
            min: 1
        },
        NoOfDay: {
            required: true

        },
    },

    // Messages for form validation
    messages: {

        InstituteID: {
            min: 'Please Select Institute',

        },
        ProgramID: {
            min: 'Please Select Program'
        },
        SessionID: {
            min: 'Please Select Session'
        },
        TradeID: {
            required: 'Please Select Trade'
        },
        Trade: {
            required: 'Please Select Trade'
        },
        NoOfDay: {
            required: 'Please Enter No. of Days'
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