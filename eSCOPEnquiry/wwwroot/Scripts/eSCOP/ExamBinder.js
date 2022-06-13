

var ddlInitialValue = -1;


function LoadExamDocumentType(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '/ExamBinder/LoadDocumentType',
        async: false,
        data: {},
        success: function (DocumentType) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));

            $.each($.parseJSON(DocumentType), function (index, DocumentType) {
                select.append($('<option/>', {
                    value: DocumentType.DocumentID,
                    text: DocumentType.DocumentName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadIssuedMarksheet(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '/ExamBinder/LoadIssuedMarksheet',
        async: false,
        data: {},
        success: function (DocumentType) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));

            $.each($.parseJSON(DocumentType), function (index, DocumentType) {
                select.append($('<option/>', {
                    value: DocumentType.EnteredBy,
                    text: DocumentType.EnteredBy
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
function LoadUploadMarksheet(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '/ExamBinder/LoadUploadMarksheet',
        async: false,
        data: {},
        success: function (DocumentType) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));

            $.each($.parseJSON(DocumentType), function (index, DocumentType) {
                select.append($('<option/>', {
                    value: DocumentType.EnteredBy,
                    text: DocumentType.EnteredBy
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
/////////Time Table Binder
function LoadTimeTableName(id, InstituteID,defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '/ExamBinder/LoadTimeTableName',
        async: false,
        data: { InstituteID: InstituteID },
        success: function (DocumentType) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));

            $.each($.parseJSON(DocumentType), function (index, DocumentType) {
                select.append($('<option/>', {
                    value: DocumentType.SetupID,
                    text: DocumentType.SetupName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
function LoadPeriod(id, instituteID ,defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '/ExamBinder/LoadPeriod',
        async: false,
        data: { instituteID: instituteID },
        success: function (DocumentType) {
            var select = $(id);
            select.empty();
            //select.append($('<option/>', {
            //    value: ddlInitialValue,
            //    text: "Select"
            //}));

            $.each($.parseJSON(DocumentType), function (index, DocumentType) {
                select.append($('<option/>', {
                    value: DocumentType.PeriodID,
                    text: DocumentType.PeriodName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadSubject(id, InstituteID, ProgramID, TradeID, SemesterID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '/ExamBinder/LoadSubject',
        async: false,
        data: { InstituteID: InstituteID, ProgramID: ProgramID, TradeID: TradeID, SemesterID: SemesterID },
        success: function (DocumentType) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));

            $.each($.parseJSON(DocumentType), function (index, DocumentType) {
                select.append($('<option/>', {
                    value: DocumentType.SubjectID,
                    text: DocumentType.SubjectName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}

function LoadFaculty(id, SubjectID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '/ExamBinder/LoadFaculty',
        async: false,
        data: { SubjectID: SubjectID },
        success: function (DocumentType) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));

            $.each($.parseJSON(DocumentType), function (index, DocumentType) {
                select.append($('<option/>', {
                    value: DocumentType.TeacherID,
                    text: DocumentType.EmpName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
function LoadResource(id,InstituteID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '/ExamBinder/LoadResource',
        async: false,
        data: { InstituteID: InstituteID },
        success: function (DocumentType) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));

            $.each($.parseJSON(DocumentType), function (index, DocumentType) {
                select.append($('<option/>', {
                    value: DocumentType.ResourceID,
                    text: DocumentType.RoomNo
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
function LoadEmployee(id, InstituteID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '/ExamBinder/LoadEmployee',
        async: false,
        data: { InstituteID: InstituteID },
        success: function (DocumentType) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));

            $.each($.parseJSON(DocumentType), function (index, DocumentType) {
                select.append($('<option/>', {
                    value: DocumentType.EmpNo,
                    text: DocumentType.EmpName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


//function LoadEmployee(id, InstituteID, defaultval) {
//    defaultval = typeof defaultval !== 'undefined' ? defaultval : "-1";

//    $.ajax({
//        type: 'GET',
//        url: '../ExamBinder/LoadEmployee',
//        async: false,
//        data: { InstituteID: InstituteID},
//        success: function (UnitData) {
//            var select = $(id);
//            select.empty();
//            select.append($('<option/>', {
//                value: "",
//                text: "Select"
//            }));

//            $.each($.parseJSON(UnitData), function (index, UnitData) {
//                select.append($('<option/>', {
//                    value: UnitData.AdmissionNo,
//                    text: UnitData.StudentName
//                }));
//            });
//            select.val(defaultval);
//        },

//        error: function (errorData) {
//            console.log(errorData);
//        }
//    });
//}

