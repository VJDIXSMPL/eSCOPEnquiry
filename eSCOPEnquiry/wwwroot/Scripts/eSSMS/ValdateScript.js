function ConfirmSubmit() {
    $('#btnSubmitEnquiry').prop('disabled', false);
    //$('#btnSubmitEnquiry').click();
    document.getElementById('btnSubmitEnquiry').click();
}
function ConfirmSubmit2() {
    $('#btnSubmitEnquiry2').prop('disabled', false);
    //$('#btnSubmitEnquiry').click();
    debugger;
    document.getElementById('btnSubmitEnquiry2').click();
}



function ShowErrorMessage(msg) {

    $.SmartMessageBox({
        title: "Alert !",
        content: msg,
        buttons: '[Ok]',
    })

}

function Reg_validation(id) {
    var optmode = "";
    if (id == "Validatebtn") {
        optmode = "Registration"
    }
    else {
        optmode = "OfflineRegistration"
    }

    $(".add-row").click();
    $("#tempName").css('border-color', 'lightgrey');
    $("#ValidateName").hide();
    $("#tempClass").css('border-color', 'lightgrey');
    $("#ValidateClass").hide();
    $("#tempSchool").css('border-color', 'lightgrey');
    $("#ValidateSchool").hide();

    $('#btnSubmitEnquiry').prop('disabled', false);
    var ReturnValue = false;
    //    document.getElementById('btnSubmitEnquiry').click();
    //if ($('#ActionAddNewEnquiry').bootstrapValidator('validate').has('.has-error').length) {
    //    return false;
    //}
    //else {
    //alert($('#btnSubmitEnquiry').prop('disabled'));

    //$('#ActionAddNewEnquiry').bootstrapValidator('validate');
    if ($('#ActionAddNewEnquiry').bootstrapValidator('validate').has('.has-error').length) {
        ShowErrorMessage('Please check required fields input missing.');
        return false;
    }
    //alert($('#btnSubmitEnquiry').prop('disabled'));

    var res = ValidateDocument();
    //alert($('#btnSubmitEnquiry').prop('disabled'));
    if (!res) {

        ShowErrorMessage('Please check required fields input missing.');
        return false;
    }
    var ValidationObj = {
        Student_FirstName: $('#Student_FirstName').val().trim() + $('#Student_MiddleName').val().trim() + $('#Student_LastName').val().trim(),
        father: $('#father').val().trim() + $('#Father_MiddleName').val().trim() + $('#Father_LastName').val().trim(),
        StudentDob: $('#StudentDob').val(),
        FMobileNo: $('#FMobileNo').val(),
        SchoolId: $('#SchoolId').val(),
        ClassApplyingFor: $('#ClassApplyingFor').val(),
        SessionId: $('#SessionId').val(),
        optMode: "Registration",

    };
    var ServiceId = "";
    $('input[name="Intrested"]').each(function () {
      //   alert($(this).val())
        if ($(this).is(':checked') == true) {
            ServiceId += $(this).val() + ','

        }
    })
    $('#hdnServiceId').val(ServiceId)

    debugger;
    $.ajax({
        url: "/Enquiry/Reg_Validate",
        data: JSON.stringify(ValidationObj),
        type: "POST",
        async: false,
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (msg) {
            if (msg == "Confirm Registration") {
                if (optmode == "Registration") {
                    ConfirmSubmit();
                }
                else {
                    ConfirmSubmit2();
                }
            }
            else {
                $(window).scrollTop(0);
                $("#ValiError").text(msg);
                $("#DivError").show();
            }


        },
        error: function (msg) {
            $(window).scrollTop(0);
        }
    });


    return ReturnValue;
}


function ValidateDocument() {
    var isValid = true;

    //if ($("#FatherIsAlumani").prop("checked") == true) {
    //    if ($('#Txtfather10').val().trim() == "") {
    //        $(window).scrollTop(0);
    //        $('#Txtfather10').css('border-color', 'Red');
    //        $("#ValidateFather10").show();
    //        isValid = false;
    //    }
    //    else {
    //        $('#Txtfather10').css('border-color', 'lightgrey');
    //        $("#ValidateFather10").hide();
    //    }
    //}
    //if ($("#MotherIsAlumani").prop("checked") == true) {
    //    if ($('#Txtmother10').val().trim() == "") {

    //        $('#Txtmother10').css('border-color', 'Red');
    //        $("#ValidateMother10").show();
    //        $(window).scrollTop(0);
    //        isValid = false;
    //    }
    //    else {
    //        $('#Txtmother10').css('border-color', 'lightgrey');
    //        $("#ValidateMother10").hide();
    //    }
    //}
    //if ($("#CategoryID option:selected").text().trim().toUpperCase() != "NA" && $("#CategoryID option:selected").text().trim().toUpperCase() != "GENERAL" && $("#CategoryID option:selected").text().trim().toUpperCase() != "GENRAL" &&  $("#CategoryID option:selected").text().trim().toUpperCase() != "N/A"  ) {
    //    if ($('#TxtCaste').val().trim() == "") {
    //        $('#TxtCaste').css('border-color', 'Red');
    //        $("#ValidateCaste").show();
    //        $(window).scrollTop(0);
    //        isValid = false;
    //    }
    //    else {
    //        $('#TxtCaste').css('border-color', 'lightgrey');
    //        $("#ValidateCaste").hide();
    //    }
    //}
    if ($("#Emp_Ward").prop("checked") == true) {
        if ($('#Emp_Name').val().trim() == "") {

            $('#Emp_Name').css('border-color', 'Red');
            $("#ValidateEmp").show();
            $(window).scrollTop(0);
            isValid = false;
        }
        else {
            $('#Emp_Name').css('border-color', 'lightgrey');
            $("#ValidateEmp").hide();
        }
    }
    //if ($('#TxtSelfAttested').val().trim() == "") {
    //    $('#TxtSelfAttested').css('border-color', 'Red');
    //    $("#ValidateBirth").show();
    //    $(window).scrollTop(0);
    //    isValid = false;
    //}
    //else {
    //    $('#TxtSelfAttested').css('border-color', 'lightgrey');
    //    $("#ValidateBirth").hide();
    //}
    //if ($('#TxtaddressProof').val().trim() == "") {
    //    $('#TxtaddressProof').css('border-color', 'Red');
    //    $("#ValidateAddress").show();
    //    $(window).scrollTop(0);
    //    isValid = false;
    //}
    //else {
    //    $('#TxtaddressProof').css('border-color', 'lightgrey');
    //    $("#ValidateAddress").hide();
    //}
    //if ($('#TxtSign').val().trim() == "") {
    //    $('#TxtSign').css('border-color', 'Red');
    //    $("#ValidateSign").show();
    //    $(window).scrollTop(0);
    //    isValid = false;
    //}
    //else {
    //    $('#TxtSign').css('border-color', 'lightgrey');
    //    $("#ValidateSign").hide();
    //}
    //if ($('#TxtStudent').val().trim() == "") {
    //    $('#TxtStudent').css('border-color', 'Red');
    //    $("#ValidateStudPhoto").show();
    //    $(window).scrollTop(0);
    //    isValid = false;
    //}
    //else {
    //    $('#TxtStudent').css('border-color', 'lightgrey');
    //    $("#ValidateStudPhoto").hide();
    //}
    return isValid;
}




