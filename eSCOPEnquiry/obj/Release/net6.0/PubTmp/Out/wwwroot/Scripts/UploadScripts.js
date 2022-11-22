$(function () {

    $("#FldSelfAttested").change(function () {
        var data = new FormData();
        var files = $("#FldSelfAttested").get(0).files;
        image = files[0].name;
        $("#TxtSelfAttested").val(files[0].name);
        var ext = $('#FldSelfAttested').val().split('.').pop().toLowerCase();
        if ($.inArray(ext, ['png', 'jpg', 'jpeg','pdf']) == -1) {
            ShowErrorMessage('invalid extension!');
            $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>invalid extension!</div>")

            //alert('invalid extension!');
            $("#TxtSelfAttested").val("");
            return false;
        }
        else {

            if (files[0].size > 1048576) {
                ShowErrorMessage('Files Size not supported!');

                $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>File size is larger than 1MB!</div>")

                $("#TxtSelfAttested").val("");
                return false;
            }
            else {

                //if (files.length > 0) {
                //    data.append("DocFile", files[0]);
                //    $.ajax({
                //        url: "/DocumentMaster/UploadFile",
                //        type: "POST",
                //        processData: false,
                //        contentType: false,
                //        data: data,
                //        success: function (response) {
                //            //code after success



                //        },
                //        error: function (er) {
                //            alert(er);
                //        }

                //    });
                //}

            }

        }
    });

    $("#FldaddressProof").change(function () {
        var data = new FormData();
        var files = $("#FldaddressProof").get(0).files;
        image = files[0].name;
        $("#TxtaddressProof").val(files[0].name);
        var ext = $('#FldaddressProof').val().split('.').pop().toLowerCase();
        if ($.inArray(ext, ['png', 'jpg', 'jpeg', 'pdf']) == -1) {
            ShowErrorMessage('invalid extension!');
            $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>invalid extension!</div>")

            //alert('invalid extension!');
            $("#TxtaddressProof").val("");
            return false;
        }
        else {

            if (files[0].size > 1048576) {
                ShowErrorMessage('Files Size not supported!');
                $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>File size is larger than 1MB!</div>")

                $("#TxtaddressProof").val("");
                return false;
            }
            else {

                //if (files.length > 0) {
                //    data.append("DocFile", files[0]);
                //    $.ajax({
                //        url: "/DocumentMaster/UploadFile",
                //        type: "POST",
                //        processData: false,
                //        contentType: false,
                //        data: data,
                //        success: function (response) {
                //            //code after success



                //        },
                //        error: function (er) {
                //            alert(er);
                //        }

                //    });
                //}

            }

        }
    });
    $("#FlStudentAdhaar").change(function () {
        var data = new FormData();
        var files = $("#FlStudentAdhaar").get(0).files;
        image = files[0].name;
        $("#TxtStudentAdhaar").val(files[0].name);
        var ext = $('#FlStudentAdhaar').val().split('.').pop().toLowerCase();
        if ($.inArray(ext, ['png', 'jpg', 'jpeg', 'pdf']) == -1) {
            ShowErrorMessage('invalid extension!');
            $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>invalid extension!</div>")

            //alert('invalid extension!');
            $("#TxtStudentAdhaar").val("");
            return false;
        }
        else {

            if (files[0].size > 1048576) {
                ShowErrorMessage('Files Size not supported!');
                $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>File size is larger than 1MB!</div>")

                $("#TxtStudentAdhaar").val("");
                return false;
            }
            else {

                //if (files.length > 0) {
                //    data.append("DocFile", files[0]);
                //    $.ajax({
                //        url: "/DocumentMaster/UploadFile",
                //        type: "POST",
                //        processData: false,
                //        contentType: false,
                //        data: data,
                //        success: function (response) {
                //            //code after success



                //        },
                //        error: function (er) {
                //            alert(er);
                //        }

                //    });
                //}

            }

        }
    });

    $("#FlmotherAdhaar").change(function () {
        var data = new FormData();
        var files = $("#FlmotherAdhaar").get(0).files;
        image = files[0].name;
        $("#TxtmotherAdhaar").val(files[0].name);
        var ext = $('#FlmotherAdhaar').val().split('.').pop().toLowerCase();
        if ($.inArray(ext, ['png', 'jpg', 'jpeg', 'pdf']) == -1) {
            ShowErrorMessage('invalid extension!');
            $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>invalid extension!</div>")

            //alert('invalid extension!');
            $("#TxtmotherAdhaar").val("");
            return false;
        }
        else {

            if (files[0].size > 1048576) {
                ShowErrorMessage('Files Size not supported!');
                $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>File size is larger than 1MB!</div>")

                $("#TxtmotherAdhaar").val("");
                return false;
            }
            else {

                //if (files.length > 0) {
                //    data.append("DocFile", files[0]);
                //    $.ajax({
                //        url: "/DocumentMaster/UploadFile",
                //        type: "POST",
                //        processData: false,
                //        contentType: false,
                //        data: data,
                //        success: function (response) {
                //            //code after success



                //        },
                //        error: function (er) {
                //            alert(er);
                //        }

                //    });
                //}

            }

        }
    });
    $("#FlfatherAdhaar").change(function () {
        var data = new FormData();
        var files = $("#FlfatherAdhaar").get(0).files;
        image = files[0].name;
        $("#TxtfatherAdhaar").val(files[0].name);
        var ext = $('#FlfatherAdhaar').val().split('.').pop().toLowerCase();
        if ($.inArray(ext, ['png', 'jpg', 'jpeg', 'pdf']) == -1) {
            ShowErrorMessage('invalid extension!');
            $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>invalid extension!</div>")

            //alert('invalid extension!');
            $("#TxtfatherAdhaar").val("");
            return false;
        }
        else {

            if (files[0].size > 1048576) {
                ShowErrorMessage('Files Size not supported!');
                $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>File size is larger than 1MB!</div>")

                $("#TxtfatherAdhaar").val("");
                return false;
            }
            else {

                //if (files.length > 0) {
                //    data.append("DocFile", files[0]);
                //    $.ajax({
                //        url: "/DocumentMaster/UploadFile",
                //        type: "POST",
                //        processData: false,
                //        contentType: false,
                //        data: data,
                //        success: function (response) {
                //            //code after success



                //        },
                //        error: function (er) {
                //            alert(er);
                //        }

                //    });
                //}

            }

        }
    });
    $("#FldSign").change(function () {
        var data = new FormData();
        var files = $("#FldSign").get(0).files;
        image = files[0].name;
        $("#TxtSign").val(files[0].name);
        var ext = $('#FldSign').val().split('.').pop().toLowerCase();
        if ($.inArray(ext, ['png', 'jpg', 'jpeg', 'pdf']) == -1) {
            ShowErrorMessage('invalid extension!');
            $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>invalid extension!</div>")

            //alert('invalid extension!');
            $("#TxtSign").val("");
            return false;
        }
        else {

            if (files[0].size > 1048576) {
                ShowErrorMessage('Files Size not supported!');
                $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>File size is larger than 1MB!</div>")

                $("#TxtSign").val("");
                return false;
            }
            else {

                //if (files.length > 0) {
                //    data.append("DocFile", files[0]);
                //    $.ajax({
                //        url: "/DocumentMaster/UploadFile",
                //        type: "POST",
                //        processData: false,
                //        contentType: false,
                //        data: data,
                //        success: function (response) {
                //            //code after success



                //        },
                //        error: function (er) {
                //            alert(er);
                //        }

                //    });
                //}

            }

        }
    });
    $("#Fldmother10").change(function () {
        var data = new FormData();
        var files = $("#Fldmother10").get(0).files;
        image = files[0].name;
        $("#Txtmother10").val(files[0].name);
        var ext = $('#Fldmother10').val().split('.').pop().toLowerCase();
        if ($.inArray(ext, ['png', 'jpg', 'jpeg', 'pdf']) == -1) {
            ShowErrorMessage('invalid extension!');
            $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>invalid extension!</div>")

            //alert('invalid extension!');
            $("#Txtmother10").val("");
            return false;
        }
        else {

            if (files[0].size > 1048576) {
                ShowErrorMessage('Files Size not supported!');
                $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>File size is larger than 1MB!</div>")

                $("#Txtmother10").val("");
                return false;
            }
            else {

                //if (files.length > 0) {
                //    data.append("DocFile", files[0]);
                //    $.ajax({
                //        url: "/DocumentMaster/UploadFile",
                //        type: "POST",
                //        processData: false,
                //        contentType: false,
                //        data: data,
                //        success: function (response) {
                //            //code after success



                //        },
                //        error: function (er) {
                //            alert(er);
                //        }

                //    });
                //}

            }

        }
    });
    $("#FldCaste").change(function () {
        var data = new FormData();
        var files = $("#FldCaste").get(0).files;
        image = files[0].name;
        $("#TxtCaste").val(files[0].name);
        var ext = $('#FldCaste').val().split('.').pop().toLowerCase();
        if ($.inArray(ext, ['png', 'jpg', 'jpeg', 'pdf']) == -1) {
            ShowErrorMessage('invalid extension!');
            $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>invalid extension!</div>")

            //alert('invalid extension!');
            $("#TxtCaste").val("");
            return false;
        }
        else {

            if (files[0].size > 1048576) {
                ShowErrorMessage('Files Size not supported!');
                $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>File size is larger than 1MB!</div>")

                $("#TxtCaste").val("");
                return false;
            }
            else {

                //if (files.length > 0) {
                //    data.append("DocFile", files[0]);
                //    $.ajax({
                //        url: "/DocumentMaster/UploadFile",
                //        type: "POST",
                //        processData: false,
                //        contentType: false,
                //        data: data,
                //        success: function (response) {
                //            //code after success



                //        },
                //        error: function (er) {
                //            alert(er);
                //        }

                //    });
                //}

            }

        }
    });
    $("#Fldfather10").change(function () {
        var data = new FormData();
        var files = $("#Fldfather10").get(0).files;
        image = files[0].name;
        $("#Txtfather10").val(files[0].name);
        var ext = $('#Fldfather10').val().split('.').pop().toLowerCase();
        if ($.inArray(ext, ['png', 'jpg', 'jpeg', 'pdf']) == -1) {
            ShowErrorMessage('invalid extension!');
            $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>invalid extension!</div>")

            //alert('invalid extension!');
            $("#Txtfather10").val("");
            return false;
        }
        else {

            if (files[0].size > 1048576) {
                ShowErrorMessage('Files Size not supported!');
                $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>File size is larger than 1MB!</div>")

                $("#Txtfather10").val("");
                return false;
            }
            else {

                //if (files.length > 0) {
                //    data.append("DocFile", files[0]);
                //    $.ajax({
                //        url: "/DocumentMaster/UploadFile",
                //        type: "POST",
                //        processData: false,
                //        contentType: false,
                //        data: data,
                //        success: function (response) {
                //            //code after success



                //        },
                //        error: function (er) {
                //            alert(er);
                //        }

                //    });
                //}

            }

        }
    });



    $("#FldStudent").change(function () {
        var data = new FormData();
        var files = $("#FldStudent").get(0).files;
        image = files[0].name;
        $("#TxtStudent").val(files[0].name);
        var ext = $('#FldStudent').val().split('.').pop().toLowerCase();
        if ($.inArray(ext, ['png', 'jpg', 'jpeg']) == -1) {
            ShowErrorMessage('invalid extension!');
            $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>invalid extension!</div>")

            //alert('invalid extension!');
            $("#TxtStudent").val("");
            return false;
        }
        else {

            if (files[0].size > 1048576) {
                ShowErrorMessage('Files Size not supported!');
                $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>File size is larger than 1MB!</div>")

                $("#TxtStudent").val("");
                return false;
            }
            else {

                //if (files.length > 0) {
                //    data.append("DocFile", files[0]);
                //    $.ajax({
                //        url: "/DocumentMaster/UploadFile",
                //        type: "POST",
                //        processData: false,
                //        contentType: false,
                //        data: data,
                //        success: function (response) {
                //            //code after success



                //        },
                //        error: function (er) {
                //            alert(er);
                //        }

                //    });
                //}

            }

        }
    });


    $("#FldFather").change(function () {
        var data = new FormData();
        var files = $("#FldFather").get(0).files;
        image = files[0].name;
        $("#TxtFather").val(files[0].name);
        var ext = $('#FldFather').val().split('.').pop().toLowerCase();
        if ($.inArray(ext, ['png', 'jpg', 'jpeg']) == -1) {
            ShowErrorMessage('invalid extension!');
            $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>invalid extension!</div>")

            //alert('invalid extension!');
            $("#TxtFather").val("");
            return false;
        }
        else {

            if (files[0].size > 1048576) {
                ShowErrorMessage('Files Size not supported!');
                $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>File size is larger than 1MB!</div>")

                $("#TxtFather").val("");
                return false;
            }
            else {



            }

        }
    });


    $("#FldMother").change(function () {
        var data = new FormData();
        var files = $("#FldMother").get(0).files;
        image = files[0].name;
        $("#TxtMother").val(files[0].name);
        var ext = $('#FldMother').val().split('.').pop().toLowerCase();
        if ($.inArray(ext, ['png', 'jpg', 'jpeg']) == -1) {
            ShowErrorMessage('invalid extension!');
            $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>invalid extension!</div>")

            //alert('invalid extension!');
            $("#TxtMother").val("");
            return false;
        }
        else {

            if (files[0].size > 1048576) {
                ShowErrorMessage('Files Size not supported!');
                $("#msg").html("<div class='alert alert-danger fade in'><button class='close' data-dismiss='alert'> × </button><i class='fa-fw fa fa-times'></i><strong>Error! </strong>File size is larger than 1MB!</div>")

                $("#TxtMother").val("");
                return false;
            }
            else {



            }

        }
    });
});
