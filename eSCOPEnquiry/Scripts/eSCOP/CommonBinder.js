var ddlInitialValue = -1;

//***************************** COMMON BINDER **********************//



function disableButton(id) {
    $('#' + id).attr('disabled', true);
}

//New Binder
function LoadFeedBackEvaluation(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadFeedBackEvaluation',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.EvaluationID,
                    text: InstituteData.EvaluationParameter
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}

function LoadFeedbackCriteria(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadFeedbackCriteria',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.Criteria_Id,
                    text: InstituteData.Criteria_Name
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}

function LoadAcademicDepartment(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadAcademicDepartment',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.AID,
                    text: InstituteData.AcademicDepartment
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}



function LoadSessionWiseAcademicDepartment(id, SessionID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadEnquiryBinder',
        async: false,
        data: { SessionID: SessionID, optMode: "SessionWiseAcademicDepartment" },
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.AID,
                    text: Data.AcademicDepartment
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}

function LoadAcademicDepartmentWiseProgram(id, SessionID, ProgramType, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadEnquiryBinder',
        async: false,
        data: { SessionID: SessionID, optMode: "AcademicDepartmentWiseProgram", ProgramType: ProgramType },
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.ProgramID,
                    text: Data.Program
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}

function Loadprogramlengthtype(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/Loadprogramlengthtype',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.ProgramLengthTypeID,
                    text: InstituteData.ProgramLengthType
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}

function Loadprogramnature(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/Loadprogramnature',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.ProgramNatureID,
                    text: InstituteData.ProgramNature
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}


function Loadprogramlevel(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/Loadprogramlevel',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.ProgramLevelID,
                    text: InstituteData.ProgramLevel
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}

function LoadEmployeeCourse(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadEmployeeCourse',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.CourseName,
                    text: InstituteData.CourseName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}



function LoadEducationExam(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadEducationExam',
        async: false,
        data: {},
        success: function (TypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(TypeData), function (index, TypeData) {
                select.append($('<option/>', {
                    value: TypeData.ExamName,
                    text: TypeData.ExamName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}

function LoadEmployeeSalaryGroup(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadEmployeeSalaryGroup',
        async: false,
        data: {},
        success: function (TypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(TypeData), function (index, TypeData) {
                select.append($('<option/>', {
                    value: TypeData.SGroupID,
                    text: TypeData.SalaryGroup
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}


function LoadPermissionExamWiseName(id, ExamType, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionExamWiseName',
        async: false,
        data: { ExamType: ExamType },
        success: function (cityData) {
            var select = $(id);
            select.empty();
           
            $.each($.parseJSON(cityData), function (index, cityData) {
                select.append($('<option/>', {
                    value: cityData.ExamType,
                    text: cityData.EvaluationParameter
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}



function LoadProgramWisemultiSingle(id, defaultval) {
    /////////////////
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadProgramWisemultiSingle',
        async: false,
        data: {},
        success: function (cityData) {
            var select = $(id);
            select.empty();
            $.each($.parseJSON(cityData), function (index, cityData) {
                select.append($('<option/>', {
                    value: cityData.ProgramID,
                    text: cityData.Program
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadPermissionGroupTimeTableSingle(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionGroupTimeTableSingle',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.GroupID,
                    text: InstituteData.GroupName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}

function LoadPermissionGroupTimeTable(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionGroupTimeTable',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.GroupID,
                    text: InstituteData.GroupName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}


function LoadPermissionGroupWiseSubject(id, GroupID, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionGroupWiseSubject',
        async: false,
        data: { GroupID: GroupID },
        success: function (cityData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(cityData), function (index, cityData) {
                select.append($('<option/>', {
                    value: cityData.SubjectID,
                    text: cityData.SubjectName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadPermissionSubjectWiseExam(id, SubjectID,ExamType, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionSubjectWiseExam',
        async: false,
        data: { SubjectID: SubjectID, ExamType: ExamType },
        success: function (cityData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(cityData), function (index, cityData) {
                select.append($('<option/>', {
                    value: cityData.ExamType,
                    text: cityData.EvaluationParameter
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
//




function LoadProgramWisemulti(id, InstituteID,defaultval) {
    /////////////////
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadProgramWisemulti',
        async: false,
        data: { InstituteID: InstituteID},
        success: function (cityData) {
            var select = $(id);
            select.empty();
            $.each($.parseJSON(cityData), function (index, cityData) {
                select.append($('<option/>', {
                    value: cityData.ProgramID,
                    text: cityData.Program
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadBranchWisemulti(id, InstituteID, defaultval) {
    /////////////////
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadBranchWisemulti',
        async: false,
        data: { InstituteID: InstituteID },
        success: function (cityData) {
            var select = $(id);
            select.empty();
            $.each($.parseJSON(cityData), function (index, cityData) {
                select.append($('<option/>', {
                    value: cityData.BranchID,
                    text: cityData.Branch
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadSemesterWisemulti(id, InstituteID, defaultval) {
    /////////////////
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSemesterWisemulti',
        async: false,
        data: { InstituteID: InstituteID },
        success: function (cityData) {
            var select = $(id);
            select.empty();
            $.each($.parseJSON(cityData), function (index, cityData) {
                select.append($('<option/>', {
                    value: cityData.SemesterID,
                    text: cityData.Semester
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
//ItemBinder

function LoadPermissionGroupAcademicCancel(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionGroupAcademic',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.GroupID,
                    text: InstituteData.GroupName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}





function BindSemester(id, TradeID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    debugger
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/BindSemester',
        async: false,
        data: { BranchID: TradeID },
        success: function (SemesterData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(SemesterData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.SemesterID,
                    text: itemData.Semester
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}



function BindShiftNo(id, TradeID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    debugger
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/BindShiftNo',
        async: false,
        data: { BranchID: TradeID },
        success: function (SemesterData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(SemesterData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.ShiftID,
                    text: itemData.ShiftName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}
function BindAdmissinStatus(id, TradeID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    debugger
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/BindAdmissinStatus',
        async: false,
        data: { BranchID: TradeID },
        success: function (SemesterData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(SemesterData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.StatusID,
                    text: itemData.StatusName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}


function LoadSubValues(ExamsData, id, MyUL) {
    var hchild = false;
    $.each($.parseJSON(ExamsData), function (index, itemData) {

        if (itemData.MainCategory == id) {
            hchild = HasChild_Value(ExamsData, itemData.CategoryID);
            if (hchild == true) {
                //MyUL.append('<option disabled="disabled" value="' + itemData.CategoryID + '">' + itemData.Category + '</option>');

                MyUL.append('<option class="select2' + itemData.level + '"  disabled="disabled" value="' + itemData.CategoryID + '">' + itemData.Category + '</option>');
                LoadSubValues(ExamsData, itemData.CategoryID, MyUL);
            }
            else
               // MyUL.append('<option  value="' + itemData.CategoryID + '">' + itemData.Category + '</option>');

                MyUL.append('<option class="select2' + itemData.level + '" value="' + itemData.CategoryID + '">' + itemData.Category + '</option>');
        }

    });

};



function HasChild_Value(ExamsData, id) {
    var _hasChild = false;
    $.each($.parseJSON(ExamsData), function (index, itemData) {

        if (itemData.MainCategory == id)
            _hasChild = true;
    });
    return _hasChild;
}

//New Binder
function LoadPermissionFeedBackCategory(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionFeedBackCategory',
        async: false,
        data: {},
        success: function (ExamsData) {



            var MyUL = $(id);
            MyUL.empty();
            LoadSubValues(ExamsData, -1, MyUL);

            $(id).select2({
                placeholder: 'Select an option',
                width: "100%",
                templateResult: function (data) {
                    console.log(data);
                    var level = 0;
                    if (data.element !== undefined) {
                        level = (data.element.className);
                        console.log(level);
                        if (level.trim() !== '') {
                            level = (parseInt(level.match(/\d+/)[0]));
                        }
                    }
                    var $result = $('<span style="padding-left:' + (20 * level) + 'px;">' + data.text + '</span>');
                    return $result;
                }
            });
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}


function LoadPermissionGrevCategory(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionGrevCategory',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.CategoryID,
                    text: InstituteData.Category
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}
function LoadPermissionFeeCategory(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionFeeCategory',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.FeeReceiptID,
                    text: InstituteData.FeeCategory
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}

function LoadPermissionGrpSection(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionGrpSection',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.SectionID,
                    text: InstituteData.SectionName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}



function LoadPermissionAdmStatus(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionAdmStatus',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.SubId,
                    text: InstituteData.SubStatus
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}

function LoadPermissionAdmThrough(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionAdmThrough',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.AdmissionThrough,
                    text: InstituteData.AdmissionThrough
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}

function LoadPermissionnationality(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionnationality',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.NationalityID,
                    text: InstituteData.Nationality
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}


function LoadPermissionProfession(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

  

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionProfession',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.ProfessionID,
                    text: InstituteData.ProfessionName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}


function LoadPermissionQualification(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionQualification',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.QualificationID,
                    text: InstituteData.Qualification
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}


function LoadPermissionDesignation(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

   

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionDesignation',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.DesignationID,
                    text: InstituteData.Designation
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}



function LoadPermissionPublicationStatus(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionPublicationStatus',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.Id,
                    text: InstituteData.PubStatus
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}


function LoadPermissionPublicationArticle(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionPublicationArticle',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.Id,
                    text: InstituteData.Article
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}



function LoadPermissionProfiler(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionProfiler',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.ProfileID,
                    text: InstituteData.SendUsing
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}


function LoadPermissionEMpBind(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionEMpBind',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.EmployeeID,
                    text: InstituteData.EmpName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}


function LoadPermissionEmailCategory(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionEmailCategory',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.Id,
                    text: InstituteData.Category
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}

function LoadPermissionProfilerEmpWise(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionProfilerEmpWise',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.ProfileId,
                    text: InstituteData.SendUsing
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}


function LoadPermissionTimeTableEmpWise(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionTimeTableEmpWise',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.TimeTableID,
                    text: InstituteData.TimeTableName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}



function LoadPermissionWiseInstituteAcademic(id, defaultval, Required) {
    /////////////////
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionWiseInstitute',
        async: false,
        data: {},
        success: function (cityData) {
            var select = $(id);
            select.empty();
            $.each($.parseJSON(cityData), function (index, cityData) {
                select.append($('<option/>', {
                    value: cityData.InstituteID,
                    text: cityData.InstituteName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}



function LoadPermissionGroupAcademic(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionGroupAcademic',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.GroupID,
                    text: InstituteData.GroupName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}

function LoadPermissionSubjectWiseFaculty(id,SubjectId, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionSubjectWiseFaculty',
        async: false,
        data: { SubjectId: SubjectId},
        success: function (cityData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(cityData), function (index, cityData) {
                select.append($('<option/>', {
                    value: cityData.FacultyID,
                    text: cityData.StaffName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadPermissionResourceAcademic(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionResourceAcademic',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.ResourceID,
                    text: InstituteData.Resource
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}


function LoadPermissionAcademicColorCode(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionAcademicColorCode',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.ColorID,
                    text: InstituteData.ColorName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}

function LoadPermissionFeedBackGrevCategory(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionFeedBackCategory',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.CategoryID,
                    text: InstituteData.Category
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}


function LoadPermissionSubjectCategoryWise(id, CatId, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionSubjectCategoryWise',
        async: false,
        data: { CatId: CatId },
        success: function (cityData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(cityData), function (index, cityData) {
                select.append($('<option/>', {
                    value: cityData.RecordID,
                    text: cityData.Subject
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

//



function LoadItem(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("/CommonBinder/LoadItem", {},
            function (ItemData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Select"
                }));
                $.each($.parseJSON(ItemData), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.ItemID,
                        text: itemData.Name
                    }));
                });

                select.val(defaultval);

            });
}

//Employee Binder
function LoadEmployee(id, InstituteID, groupID, SubgroupID, DepartmentID, DesignationID, Employee_TypeID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : "";

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadEmployee',
        async: false,
        data: { InstituteID: InstituteID, groupID: groupID, SubgroupID: SubgroupID, DepartmentID: DepartmentID, DesignationID: DesignationID, Employee_TypeID: Employee_TypeID },

        success: function (UnitData) {
            var select = $(id);
            select.empty();

            select.append($('<option/>', {
                value: "",
                text: "Select"
            }));

            $.each($.parseJSON(UnitData), function (index, UnitData) {
                select.append($('<option/>', {
                    value: UnitData.EmpNo,
                    text: UnitData.EmployeeName
                }));
            });
            select.val(defaultval);
        },

        error: function (errorData) {
            console.log(errorData);
        }
    });
}


// Society Binder
function LoadSociety(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("/CommonBinder/LoadSociety", {},
            function (SocietyData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Select"
                }));
                $.each($.parseJSON(SocietyData), function (index, SocietyData) {
                    select.append($('<option/>', {
                        value: SocietyData.SocietyID,
                        text: SocietyData.SocietyName
                    }));
                });

                select.val(defaultval);

            });
}



function LoadClientWiseSession(id, ClientID, defaultval,Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : '-1';

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/LoadClientWiseSession',
        async: false,
        data: { ClientID: ClientID },
        success: function (SchoolWiseSessionData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));

            $.each($.parseJSON(SchoolWiseSessionData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.SessionID,
                    text: itemData.SessionName
                }));
            });
            
            select.val(defaultval);
            //select[0].selectedIndex = 0;

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}



function LoadCurrentsession(id, ClientID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : '-1';
    $.ajax({
        type: 'GET',
        url: '/CommonBinder/SessionBinderScholrshplstout',
        async: false,
        data: { ClientID: ClientID },
        success: function (SchoolWiseSessionData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Academic Session"
            }));

            $.each($.parseJSON(SchoolWiseSessionData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.SessionID,
                    text: itemData.SessionName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}



function LoadCountry(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
  
    var x = 0;
    $.ajax({
        type: 'GET',
        url: '/CommonBinder/LoadCountry',
        async: false,
        data: { },
        success: function (CountryData) {
                       var select = $(id);
                       select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                           text: "Select"
                       }));
                       $.each($.parseJSON(CountryData), function (index, itemData) {
                           if (x == 0) {
                               if (itemData.CountryName == 'India') {
                                   x = itemData.CountryID;
                               }

                           }
                           select.append($('<option/>', {
                               value: itemData.CountryID,
                               text: itemData.CountryName
                           }));
                       });
            select.val(defaultval);
            //select[0].selectedIndex = 0;
                       //select.val(x);
                    //   select.fireEvent("onchange");
        },
    error: function (errorData) {
        console.log(errorData);
        
    }
    });

}



//Expense category binder
function LoadParentCategory(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("/CommonBinder/LoadParentCategory", {},
            function (ParentCategoryData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "NA"
                }));
                $.each($.parseJSON(ParentCategoryData), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.ParentCategoryID,
                        text: itemData.ParentCategoryName
                    }));
                });
               
                    select.val(defaultval);
                
            });
}
function LoadPartyName(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("/CommonBinder/LoadPartyName", {},
            function (PartyData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Select"
                }));
                $.each($.parseJSON(PartyData), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.PartyID,
                        text: itemData.PartyName
                    }));
                });

                select.val(defaultval);

            });
}


function LoadCategoryName(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("/CommonBinder/LoadCategoryName", {},
            function (Data) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Select"
                }));
                $.each($.parseJSON(Data), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.CategoryID,
                        text: itemData.CategoryName
                    }));
                });

                select.val(defaultval);

            });
}


function LoadParentCategoryWiseExpenseCategoryMultisel(id, ParentCategoryID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadParentCategoryWiseExpenseCategoryMultisel',
        async: false,
        data: { ParentCategoryID: ParentCategoryID },
        success: function (Data) {
            var select = $(id);
            select.empty();
            //select.append($('<option/>', {
            //    value: ddlInitialValue,
            //    text: "Select"
            //}));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.ExpenseCategoryID,
                    text: Data.ExpenseCategoryName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadInstituteWisePartyName(id, InstituteID,ExpenseType, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadInstituteWisePartyName',
        async: false,
        data: { InstituteID: InstituteID, ExpenseType: ExpenseType },
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.PartyID,
                    text: Data.PartyName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadSemesterWiseShift(id, SemesterID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    SemesterID = typeof SemesterID !== 'undefined' ? SemesterID : -1;
    $.ajax({
        type: 'GET',
        url: '/CommonBinder/LoadSemesterWiseShift',
        async: false,
        data: { SemesterID: SemesterID },
        success: function (shiftdata) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(shiftdata), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.shiftID,
                    text: itemData.ShiftName
                }));
            });
            select.val(defaultval);
            return true;
        },
        error: function (errorData) {
            console.log(errorData);
            return false;
        }
    });
}


function  LoadState(id, CountryID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    
    debugger;
    $.ajax({
        type: 'GET',
        url: '/CommonBinder/LoadState',
        async: false,
        data: { CountryID: CountryID },
        success: function (stateData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(stateData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.StateID,
                    text: itemData.StateName
                }));
            });
            //select[0].selectedIndex = 0;
            select.val(defaultval);
            //return true;
        },
        error: function (errorData) {
            console.log(errorData);
            return false;
        }
    });
}

function LoadBatchWiseStruture(id, BatchID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    BatchID = typeof BatchID !== 'undefined' ? BatchID : -1;
    $.ajax({
        type: 'GET',
        url: '/CommonBinder/LoadBtatchWiseStruture',
        async: false,
        data: { BatchID: BatchID },
        success: function (strutureData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(strutureData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.FeeStructureID,
                    text: itemData.StructureName
                }));
            });
            select.val(defaultval);
            return true;
        },
        error: function (errorData) {
            console.log(errorData);
            return false;
        }
    });
}

function LoadCity(id, StateID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;


    $.ajax({
        type: 'GET',
        url: '/CommonBinder/LoadCity',
        async: false,
        data: { StateID: StateID },
        success: function (cityData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(cityData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.CityID,
                    text: itemData.CityName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadEnquirySource(id, defaultval,Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.getJSON("/CommonBinder/LoadEnquirySource", {},
                   function (EnquirySourceData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: defval,
                           text: "Select"
                       }));
                       $.each($.parseJSON(EnquirySourceData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.EnquirySourceID,
                               text: itemData.EnquirySourceName
                           }));
                       });
                       //select[0].selectedIndex = 0;
                       select.val(defaultval);
                   });
}

function LoadTitle(id, defaultval,Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.getJSON("/CommonBinder/LoadTitle", {},
            function (LoadTitleData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: defval,
                    text: "Select"
                }));
                $.each($.parseJSON(LoadTitleData), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.TitleID,
                        text: itemData.Title
                    }));
                });
                //if (defaultval != 'NA') {
                    select.val(defaultval);
                //}
            });
}
function LoadGender(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
   


    $.getJSON("/CommonBinder/LoadGender", {},
            function (LoadGenderData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Select"
                }));
                $.each($.parseJSON(LoadGenderData), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.GenderID,
                        text: itemData.Gender
                    }));
                });
                
                    select.val(defaultval);
               
            });
}




function LoadQualificationMaster(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("/CommonBinder/LoadQualificationMaster", {},
            function (LoadGenderData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Select"
                }));
                $.each($.parseJSON(LoadGenderData), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.QualificationID,
                        text: itemData.Qualification
                    }));
                });
                if (defaultval != 'NA') {
                    select.val(defaultval);
                }
            });
}

//************//


function LoadStdAcademicSessionWiseSession(id, defaultval ) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
   
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadStdAcademicSessionWiseSession',
        async: false,
        data: { },
        success: function (Data) {
            var select = $(id);
            select.empty();
            //select.append($('<option/>', {
            //    value: ddlInitialValue,
            //    text: "Select"
            //}));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.SessionID,
                    text: Data.SessionName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}

function LoadInstituteWiseProgram(id, InstituteID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

   
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadInstituteWiseProgram',
        async: false,
        data: { InstituteID: InstituteID },
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.Programid,
                    text: Data.Program
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}
function LoadInstitute(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/BinderInstitute", {},
    function (InstituteData) {
        var select = $(id);
        select.empty();
        select.append($('<option/>', {
            value: ddlInitialValue,
            text: "Select"
        }));
        $.each($.parseJSON(InstituteData), function (index, itemData) {
            select.append($('<option/>', {
                value: itemData.InstituteID,
                text: itemData.InstituteName
            }));
        });
        select.val(defaultval);
    });
}

function LoadRegStatus(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadRegStatus", {},
                   function (RegStatus) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: ddlInitialValue,
                           text: "Select"
                       }));
                       $.each($.parseJSON(RegStatus), function (index, RegStatus) {
                           select.append($('<option/>', {
                               value: RegStatus.StatusID,
                               text: RegStatus.StatusName
                           }));
                       });
                       select.val(defaultval);
                   });

}



function LoadInstituteSimple(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("/CommonBinder/BinderInstitute", {},
                   function (InstituteData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: ddlInitialValue,
                           text: "Select"
                       }));
                       $.each($.parseJSON(InstituteData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.InstituteID,
                               text: itemData.InstituteName
                           }));
                       });
                       select.val(defaultval);
                   });
}


//function LoadCategory(id, defaultval,Required) {
//    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;


//    defval = "";

//    check = typeof defaultval !== 'undefined' ? Required : 0

//    if (check == 0) {
//        defval = "-1";

//    }
//    else {
//        defval = "";
//    }
    
//    $.ajax({
//        type: 'GET',
//        url: '/CommonBinder/BinderCategory',
//        async: false,
//        data: {},
//        success: function (CategoryData) {
//            var select = $(id);
//            select.empty();
//            select.append($('<option/>', {
//                value: defval,
//                text: "Select"
//            }));
//            $.each($.parseJSON(CategoryData), function (index, CategoryData) {
//                select.append($('<option/>', {
//                    value: CategoryData.CategoryID,
//                    text: CategoryData.Category
//                }));
//            });
//            select.val(defaultval);

//        },
//        error: function (errorData) {
//            console.log(errorData);
//        }
//    });

//}


//neha
function LoaditemState(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/LoaditemState',
        async: false,
        data: {},
        success: function (LoaditemState) {
            var select = $(id);
            select.empty();

            select.append($('<option/>', {
                value: LoaditemState,
                text: "Select"
            }));
            $.each($.parseJSON(LoaditemState), function (index, LoaditemState) {
                select.append($('<option/>', {
                    value: LoaditemState.MType_Id,
                    text: LoaditemState.MType_Name
                }));
            });
            //select.val(ddlInitialValue);
            select[0].selectedIndex = 0;

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadinventoryCatagory(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : '-1';

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/LoadinventoryCatagory',
        async: false,
        data: {},
        success: function (LoadinventoryCatagory) {
            var select = $(id);
            select.empty();

            select.append($('<option/>', {
                value: defaultval,
                text: "Select"
            }));
            $.each($.parseJSON(LoadinventoryCatagory), function (index, LoadinventoryCatagory) {
                select.append($('<option/>', {
                    value: LoadinventoryCatagory.Catagory_Id,
                    text: LoadinventoryCatagory.Catagory_Name
                })); 
            });
            //select.val(ddlInitialValue);
            select[0].selectedIndex = 0;

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadinventorySubCatagory(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : "-1";

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/LoadinventorySubCatagory',
        async: false,
        data: {},
        success: function (LoadinventorySubCatagory) {
            var select = $(id);
            select.empty();

            select.append($('<option/>', {
                value: defaultval,
                text: "Select"
            }));
            $.each($.parseJSON(LoadinventorySubCatagory), function (index, LoadinventorySubCatagory) {
                select.append($('<option/>', {
                    value: LoadinventorySubCatagory.id,
                    text: LoadinventorySubCatagory.Sub_Catagory
                }));
            });
            //select.val(ddlInitialValue);
            select[0].selectedIndex = 0;

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
function LoadinventoryUnit(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : "-1";

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/LoadinventoryUnit',
        async: false,
        data: {},
        success: function (LoadinventoryUnit) {
            var select = $(id);
            select.empty();

            select.append($('<option/>', {
                value: defaultval,
                text: "Select"
            }));
            $.each($.parseJSON(LoadinventoryUnit), function (index, LoadinventoryUnit) {
                select.append($('<option/>', {
                    value: LoadinventoryUnit.Unit_id,
                    text: LoadinventoryUnit.Unit_Name
                }));
            });
            //select.val(ddlInitialValue);
            select[0].selectedIndex = 0;

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
function LoadinventoryAttribute (id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/LoadinventoryAttribute',
        async: false,
        data: {},
        success: function (LoadinventoryAttribute) {
            var select = $(id);
            select.empty();

            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(LoadinventoryAttribute), function (index, LoadinventoryAttribute) {
                select.append($('<option/>', {
                    value: LoadinventoryAttribute.Attribute_Id,
                    text: LoadinventoryAttribute.Material_Attribute
                }));
            });
            //select.val(ddlInitialValue);
            select[0].selectedIndex = 0;

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
function LoadUnitType(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/LoadUnitType',
        async: false,
        data: {},
        success: function (LoadinventoryUType) {
            var select = $(id);
            select.empty();

            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(LoadinventoryUType), function (index, LoadinventoryUType) {
                select.append($('<option/>', {
                    value: LoadinventoryUType.UType_Id,
                    text: LoadinventoryUType.UType_Name
                }));
            });
            //select.val(ddlInitialValue);
            select[0].selectedIndex = 0;

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
//

//Neha 14Oct2020
function Loadinventoryitem(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : '-1';

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/Loadinventoryitem',
        async: false,
        data: {},
        success: function (Loaditem) {
            var select = $(id);
            select.empty();

            select.append($('<option/>', {
                value: defaultval,
                text: "Select"
            }));
            $.each($.parseJSON(Loaditem), function (index, Loaditem) {
                select.append($('<option/>', {
                    value: Loaditem.Material_Id,
                    text: Loaditem.Material_Name
                }));
            });
            //select.val(ddlInitialValue);
            select[0].selectedIndex = 0;

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadStore(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : '-1';

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/LoadStore',
        async: false,
        data: {},
        success: function (LoadStore) {
            var select = $(id);
            select.empty();

            select.append($('<option/>', {
                value: defaultval,
                text: "Select"
            }));
            $.each($.parseJSON(LoadStore), function (index, LoadStore) {
                select.append($('<option/>', {
                    value: LoadStore.StoreID,
                    text: LoadStore.StoreName
                }));
            });
            //select.val(ddlInitialValue);
            select[0].selectedIndex = 0;

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

//Neha 27oct 
function LoadInvetryStudent(id, InstituteID, BatchID, TradeID, ProgramID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : '-1';

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/LoadInvetryStudent',
        async: false,
        data: { InstituteID: InstituteID, BatchID: BatchID, TradeID: TradeID, ProgramID: ProgramID },
        success: function (LoadInvetryStudent) {
            var select = $(id);
            select.empty();

            select.append($('<option/>', {
                value: defaultval,
                text: "Select"
            }));
            $.each($.parseJSON(LoadInvetryStudent), function (index, LoadInvetryStudent) {
                select.append($('<option/>', {
                    value: LoadInvetryStudent.StudentId,
                    text: LoadInvetryStudent.StudentName
                }));
            });
            //select.val(ddlInitialValue);
            select[0].selectedIndex = 0;

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadTrade(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/BinderTrade',
        async: false,
        data: {},
        success: function (LoadTradeData) {
            var select = $(id);
            select.empty();
           
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(LoadTradeData), function (index, LoadTradeData) {
                select.append($('<option/>', {
                    value: LoadTradeData.TradeID,
                    text: LoadTradeData.TradeName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

//function LoadProgram(id, defaultval,Required) {
//    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

//    defval = "";
//    check = typeof defaultval !== 'undefined' ? Required : 0

//    if (check == 0) {
//        defval = "-1";
//    }
//    else {
//        defval = "";
//    }

//    $.ajax({
//        type: 'GET',
//        url: '/CommonBinder/BinderProgram',
//        async: false,
//        data: {},
//        success: function (LoadProgramData) {
//            var select = $(id);
//            select.empty();
//            select.append($('<option/>', {
//                value: defval,
//                text: "Select"
//            }));
//            $.each($.parseJSON(LoadProgramData), function (index, LoadProgramData) {
//                select.append($('<option/>', {
//                    value: LoadProgramData.ProgramID,
//                    text: LoadProgramData.Program
//                }));
//            });
//            select[0].selectedIndex = 0;
//            //select.val(defaultval);

//        },
//        error: function (errorData) {
//            console.log(errorData);
//        }
//    });

//}

function LoadDocument(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/BinderDocument',
        async: false,
        data: {},
        success: function (LoadDocumentData) {
            var select = $(id);
            select.empty();
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(LoadDocumentData), function (index, LoadDocumentData) {
                select.append($('<option/>', {
                    value: LoadDocumentData.DocumentID,
                    text: LoadDocumentData.DocumentName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}




function LoadAffiliation(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/Affiliation',
        async: false,
        data: {},
        success: function (LoadAffiliation) {
            var select = $(id);
            select.empty();
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(LoadAffiliation), function (index, LoadAffiliation) {
                select.append($('<option/>', {
                    value: LoadAffiliation.AffiliationID,
                    text: LoadAffiliation.AffiliationName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadInstituteType(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/InstituteType',
        async: false,
        data: {},
        success: function (LoadInstituteType) {
            var select = $(id);
            select.empty();
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(LoadInstituteType), function (index, LoadInstituteType) {
                select.append($('<option/>', {
                    value: LoadInstituteType.TypeID,
                    text: LoadInstituteType.TypeName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

///
function LoadTradeMultiple(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadTradeMultiple',
        async: false,
        data: {},
        success: function (cityData) {
            var select = $(id);
            select.empty();
            $.each($.parseJSON(cityData), function (index, cityData) {
                select.append($('<option/>', {
                    value: cityData.TradeID,
                    text: cityData.TradeName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
function LoadCategory(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
  
    $.getJSON("/CommonBinder/LoadCategory", {},
                   function (CategoryData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: ddlInitialValue,
                           text: "Select"
                       }));
                       $.each($.parseJSON(CategoryData), function (index, CategoryData) {
                           select.append($('<option/>', {
                               value: CategoryData.CategoryID,
                               text: CategoryData.Category
                           }));
                       });
                       select.val(defaultval);
                   });
}

function LoadCategoryMultipal(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadCategory',
        async: false,
        data: {},
        success: function (LoadCategory) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(LoadCategory), function (index, LoadCategory) {
                select.append($('<option/>', {
                    value: LoadCategory.CategoryID,
                    text: LoadCategory.Category
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}



function LoadInstituteMultipal(id, defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/BinderInstitute',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.InstituteID,
                    text: InstituteData.InstituteName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadReligion(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
   
    $.getJSON("/CommonBinder/LoadReligion", {},
                   function (ReligionData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: ddlInitialValue,
                           text: "Select"
                       }));
                       $.each($.parseJSON(ReligionData), function (index, ReligionData) {
                           select.append($('<option/>', {
                               value: ReligionData.ReligionID,
                               text: ReligionData.Religion
                           }));
                       });
                       select.val(defaultval);
                   });
}
function LoadAgency(id, defaultval,Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.getJSON("../CommonBinder/LoadAgency", {},
                   function (AgencyData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: defval,
                           text: "Select"
                       }));
                       $.each($.parseJSON(AgencyData), function (index, AgencyData) {
                           select.append($('<option/>', {
                               value: AgencyData.AgencyID,
                               text: AgencyData.AgencyName
                           }));
                       });
                       select.val(defaultval);
                   });
}
function LoadEnquirySubSourceID(id, EnquirySourceID, defaultval,Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;


    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'Get',
        url: '/CommonBinder/LoadEnquirySubSourceID',
        async: false,
        data: { EnquirySourceID: EnquirySourceID },
        success: function (EnquirySubSourceData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(EnquirySubSourceData), function (index, EnquirySubSourceData) {
                select.append($('<option/>', {
                    value: EnquirySubSourceData.EnquirySubSourceID,
                    text: EnquirySubSourceData.EnquirySubSourceName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}
function LoadProgram(id, defaultval,Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.getJSON("../CommonBinder/BinderProgram", {},
                   function (AgencyData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: defval,
                           text: "Select"
                       }));
                       $.each($.parseJSON(AgencyData), function (index, AgencyData) {
                           select.append($('<option/>', {
                               value: AgencyData.ProgramID,
                               text: AgencyData.Program
                           }));
                       });
                       select.val(defaultval);
                   });
}








function LoadAcademicSessionWiseSession(id, defaultval,InstituteID) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadAcademicSessionWiseSession',
        async: false,
        data: { InstituteID: InstituteID },
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.SessionID,
                    text: Data.SessionName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}

function LoadInstituteWiseProgramCopyDoc(id, defaultval, InstituteID, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadInstituteWiseProgramCopyDoc',
        async: false,
        data: { InstituteID: InstituteID },
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.Programid,
                    text: Data.Program
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}




function LoadTradeProgramWiseMultiple(id, ProgramID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadTradeProgramWise',
        async: false,
        data: { ProgramID: ProgramID },
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.TradeID,
                    text: Data.TradeName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadTradeProgramWiseMultipleTrade(id, ProgramID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadTradeProgramWise',
        async: false,
        data: { ProgramID: ProgramID },
        success: function (Data) {
            var select = $(id);
            select.empty();
            //select.append($('<option/>', {
            //    value: ddlInitialValue,
            //    text: "Select"
            //}));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.TradeID,
                    text: Data.TradeName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
function LoadTradeProgramWiseTrade(id, ProgramID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadTradeProgramWise',
        async: false,
        data: { ProgramID: ProgramID },
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.TradeID,
                    text: Data.TradeName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
function LoadSeatWiseTradeMultiple(id, ProgramID,InstituteID,SessionID, defaultval) {
    //defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    //$.ajax({
    //    type: 'GET',
    //    url: '../CommonBinder/LoadSeatWiseTradeMultiple',
    //    async: false,
    //    data: { ProgramID: ProgramID, InstituteID: InstituteID, SessionID: SessionID },
    //    success: function (Data) {
    //        var select = $(id);
    //        select.empty();
    //        select.append($('<option/>', {
    //            value: ddlInitialValue,
    //            text: "Select"
    //        }));
    //        $.each($.parseJSON(Data), function (index, Data) {
    //            select.append($('<option/>', {
    //                value: Data.TradeID,
    //                text: Data.TradeName
    //            }));
    //        });
    //        select.val(defaultval);

    //    },
    //    error: function (errorData) {
    //        console.log(errorData);
    //    }
    //});


    /////////////////
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSeatWiseTradeMultiple',
        async: false,
        data: { ProgramID: ProgramID, InstituteID: InstituteID, SessionID: SessionID },
        success: function (cityData) {
            var select = $(id);
            select.empty();
            $.each($.parseJSON(cityData), function (index, cityData) {
                select.append($('<option/>', {
                    value: cityData.TradeID,
                    text: cityData.TradeName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
function LoadSeatWiseTrade(id, ProgramID, InstituteID, SessionID, defaultval) {
    //defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

  

 
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSeatWiseTradeMultiple',
        async: false,
        data: { ProgramID: ProgramID, InstituteID: InstituteID, SessionID: SessionID },
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.TradeID,
                    text: Data.TradeName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
function LoadInstituteTradeProgramWiseMultiple(id, ProgramID, InstituteID, defaultval) {
    
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadInstituteTradeProgramWise',
        async: false,
        data: { ProgramID: ProgramID, InstituteID: InstituteID },
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.TradeID,
                    text: Data.TradeName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
function LoadTradeProgramSingleSelection(id, ProgramID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadTradeProgramWise',
        async: false,
        data: { ProgramID: ProgramID },
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.TradeID,
                    text: Data.TradeName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

//function LoadEnquiryStatus(id, defaultval,Required) {
//    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

//    defval = "";

//    check = typeof defaultval !== 'undefined' ? Required : 0

//    if (check == 0) {
//        defval = "-1";
//    }
//    else {
//        defval = "";
//    }

//    $.getJSON("../CommonBinder/LoadEnquiryStatus", {},
//                   function (AgencyData) {
//                       var select = $(id);
//                       select.empty();
//                       select.append($('<option/>', {
//                           value: defval,
//                           text: "Select"
//                       }));
//                       $.each($.parseJSON(AgencyData), function (index, AgencyData) {
//                           select.append($('<option/>', {
//                               value: AgencyData.StatusID,
//                               text: AgencyData.StatusName
//                           }));
//                       });
//                       select.val(defaultval);
//                   });
//}

function LoadAssignedStaff(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadAssignedStaff", {},
                   function (AgencyData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: ddlInitialValue,
                           text: "Select"
                       }));
                       $.each($.parseJSON(AgencyData), function (index, AgencyData) {
                           select.append($('<option/>', {
                               value: AgencyData.AssignedTo,
                               text: AgencyData.AssignedTo
                           }));
                       });
                       select.val(defaultval);
                   });
}
function LoadBatch(id, defaultval,Required) {
    
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.getJSON("/CommonBinder/LoadBatch", {},
                   function (BatchData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: defval,
                           text: "Select"
                       }));
                       $.each($.parseJSON(BatchData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.BatchID,
                               text: itemData.BatchName
                           }));
                       });
                       select.val(defaultval);
                   });
}

function LoadBatchForExam(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }



    $.getJSON("/CommonBinder/LoadBatch", {},
        function (BatchData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(BatchData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.BatchID,
                    text: itemData.BatchName
                }));
            });
            select.val(defaultval);
        });
}

function LoadExamType(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }



    $.getJSON("/CommonBinder/LoadExamType", {},
        function (ExamTypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(ExamTypeData), function (index, ExamTypeData) {
                select.append($('<option/>', {
                    value: ExamTypeData.RecordID,
                    text: ExamTypeData.ExamTypeName
                }));
            });
            select.val(defaultval);
        });
}



function LoadBlood(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

   
    $.getJSON("/CommonBinder/LoadBlood", {},
                   function (BloodData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: ddlInitialValue,
                           text: "Select"
                       }));
                       $.each($.parseJSON(BloodData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.BloodGroup,
                               text: itemData.BloodGroup
                           }));
                       });
                      select.val(defaultval);
                   });
}
function LoadMaritalStatus(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
   
    $.getJSON("/CommonBinder/LoadMaritalStatus", {},
                   function (MaritalStatusData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: ddlInitialValue,
                           text: "Select"
                       }));
                       $.each($.parseJSON(MaritalStatusData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.MartialID,
                               text: itemData.Status
                           }));
                       });
                       select.val(defaultval);
                   });
}
function LoadRelation(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.getJSON("/CommonBinder/LoadRelation", {},
                   function (RelationData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: defval,
                           text: "Select"
                       }));
                       $.each($.parseJSON(RelationData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.RelationID,
                               text: itemData.Relation
                           }));
                       });
                       select.val(defaultval);
                   });
}


function LoadCommunicationType(id, defaultval,Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.getJSON("/CommonBinder/LoadCommunicationType", {},
                   function (BatchData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: defval,
                           text: "Select"
                       }));
                       $.each($.parseJSON(BatchData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.CommunicationTypeID,
                               text: itemData.CommunicationType
                           }));
                       });
                       select.val(defaultval);
                   });
}



function LoadEnquiryStatus(id, defaultval,Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.getJSON("/CommonBinder/EnquiryStatus", {},
                   function (BatchData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: defval,
                           text: "Select"
                       }));
                       $.each($.parseJSON(BatchData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.StatusID,
                               text: itemData.StatusName
                           }));
                       });
                       select.val(defaultval);
                   });
}

function LoadSessionBinderWithCurrentSession(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : 1;
    var x = 0;
    $.ajax({
        type: 'GET',
        url: '/CommonBinder/LoadSessionBinderWithCurrentSession',
        async: false,
        data: {},
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, itemData) {
                if (x == 0) {

                    x = itemData.SessionID;

                }
                select.append($('<option/>', {
                    value: itemData.SessionID,
                    text: itemData.SessionName
                }));
            });
            select.val(x);
            //select.fireEvent("onchange");
        },
        error: function (errorData) {
            console.log(errorData);

        }
    });
}



 


function LoadPermissionWiseInstitute(id, defaultval, Required) {
    
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionWiseInstitute',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.InstituteID,
                    text: InstituteData.InstituteName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

   
}

function LoadPrecedingSemester(id, defaultval, SemesterID, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";
    check = typeof Required !== 'undefined' ? Required : 0;
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPrecedingSemester',
        async: false,
        data: { SemesterID: SemesterID },
        success:function (SemesterData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: defval,
                           text: "Select"
                       }));
                       $.each($.parseJSON(SemesterData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.SemesterID,
                               text: itemData.Semester
                           }));
                       });
                       select[0].selectedIndex = 0;
                       //select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
                   });
    
}
function LoadPrecedingSession(id, defaultval, SessionID,Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPrecedingSession',
        async: false,
        data: { SessionID: SessionID },
        success:function (SessionData) {
                       var select = $(id);
                       select.empty();
            select.append($('<option/>', {
                value: defval,
                           text: "Select"
                       }));
                       $.each($.parseJSON(SessionData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.SessionID,
                               text: itemData.SessionName
                           }));
                       });
            select[0].selectedIndex = 0;
                       //select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
                   });
}


function LoadActivityType(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("/CommonBinder/LoadActivityType", {},
                   function (ActivityTypeData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: ddlInitialValue,
                           text: "Select"
                       }));
                       $.each($.parseJSON(ActivityTypeData), function (index, ActivityTypeData) {
                           select.append($('<option/>', {
                               value: ActivityTypeData.ActivityTypeID,
                               text: ActivityTypeData.ActivityType
                           }));
                       });
                       select.val(defaultval);
                   });
}


function LoadInstituteMultipal(id, defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/BinderInstitute',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.InstituteID,
                    text: InstituteData.InstituteName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}




function LoadGroupMulti(id, defaultval,Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }



    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadEmployeeGroup',
        async: false,
        data: {},
        success: function (SubGroupData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));


            $.each($.parseJSON(SubGroupData), function (index, SubGroupData) {
                select.append($('<option/>', {
                    value: SubGroupData.EmployeeGroupID,
                    text: SubGroupData.EmployeeGroup
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadSubGroupMulti(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadEmployeeSubGroup',
        async: false,
        data: {},
        success: function (TypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(TypeData), function (index, TypeData) {
                select.append($('<option/>', {
                    value: TypeData.EmployeeSubGroupID,
                    text: TypeData.EmployeeSubGroupName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

    
}


function LoadDesignation(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadDesignation',
        async: false,
        data: {},
        success: function (TypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(TypeData), function (index, TypeData) {
                select.append($('<option/>', {
                    value: TypeData.DesignationID,
                    text: TypeData.Designation
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}

function LoadDesignationSingle(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
   




    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadDesignation',
        async: false,
        data: {},
        success: function (TypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(TypeData), function (index, TypeData) {
                select.append($('<option/>', {
                    value: TypeData.DesignationID,
                    text: TypeData.Designation
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}



function LoadGroup(id, defaultval,Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.getJSON("/CommonBinder/LoadEmployeeGroup", {},
                   function (BatchData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: defval,
                           text: "Select"
                       }));
                       $.each($.parseJSON(BatchData), function (index, BatchData) {
                           select.append($('<option/>', {
                               value: BatchData.EmployeeGroupID,
                               text: BatchData.EmployeeGroup
                           }));
                       });
                       //select[0].selectedIndex = 0;
                       select.val(defaultval);
                       //select[0].selectedIndex = 0;
                   });
   
}


function LoadSubGroup(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadEmployeeSubGroup',
        async: false,
        data: {},
        success: function (TypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(TypeData), function (index, TypeData) {
                select.append($('<option/>', {
                    value: TypeData.EmployeeSubGroupID,
                    text: TypeData.EmployeeSubGroupName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}


function LoadStaffTraineeDocument(id, defaultval,optionMode) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/BinderStaffTraineeDocument',
        async: false,
        data: { optionMode: optionMode },
        success: function (LoadDocumentData) {
            var select = $(id);
            select.empty();
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(LoadDocumentData), function (index, LoadDocumentData) {
                select.append($('<option/>', {
                    value: LoadDocumentData.DocumentID,
                    text: LoadDocumentData.DocumentName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}



function LoadEmployeeType(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadEmployeeType',
        async: false,
        data: {},
        success: function (TypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(TypeData), function (index, TypeData) {
                select.append($('<option/>', {
                    value: TypeData.EmployeeTypeID,
                    text: TypeData.EmployeeTypeName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}
function LoadDepartment(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadDepartment',
        async: false,
        data: {},
        success: function (TypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(TypeData), function (index, TypeData) {
                select.append($('<option/>', {
                    value: TypeData.DepartmentID,
                    text: TypeData.Department
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}

function LoadNationality(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
   
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadNationality',
        async: false,
        data: {},
        success: function (TypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(TypeData), function (index, TypeData) {
                select.append($('<option/>', {
                    value: TypeData.NationalityID,
                    text: TypeData.Nationality
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}


function LoadCourse(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadCourse',
        async: false,
        data: {},
        success: function (TypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(TypeData), function (index, TypeData) {
                select.append($('<option/>', {
                    value: TypeData.EmpCourseTypeID,
                    text: TypeData.EmpCourseTypeName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}

function LoadEducation(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadEducation',
        async: false,
        data: {},
        success: function (TypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(TypeData), function (index, TypeData) {
                select.append($('<option/>', {
                    value: TypeData.EmpEducationTypeID,
                    text: TypeData.EmpEducationTypeName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}

function LoadShift(id, defaultval, InstituteID, SessionID, ProgramID, TradeID) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadShift',
        async: false,
        data: { InstituteID: InstituteID, SessionID: SessionID, ProgramID: ProgramID, TradeID: TradeID },
        success: function (ShiftData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(ShiftData), function (index, ShiftData) {
                select.append($('<option/>', {
                    value: ShiftData.ShiftID,
                    text: ShiftData.ShiftName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}

function LoadEmployeeStatus(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadEmployeeStatus',
        async: false,
        data: {},
        success: function (TypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(TypeData), function (index, TypeData) {
                select.append($('<option/>', {
                    value: TypeData.EmployeeStatusID,
                    text: TypeData.EmployeeStatusName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}



function LoadEmployeeStatus(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadEmployeeStatus',
        async: false,
        data: {},
        success: function (TypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(TypeData), function (index, TypeData) {
                select.append($('<option/>', {
                    value: TypeData.EmployeeStatusID,
                    text: TypeData.EmployeeStatusName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}



function LoadUnit(id, defaultval, InstituteID, SessionID, ProgramID, TradeID,ShiftID) {
    var ddlIntunit = '';
    defaultval = typeof defaultval !== 'undefined' ? defaultval : " ";
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadUnit',
        async: false,
        data: { InstituteID: InstituteID, SessionID: SessionID, ProgramID: ProgramID, TradeID: TradeID, ShiftID: ShiftID },
        success: function (UnitData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlIntunit,
                text: "Select"
            }));
            $.each($.parseJSON(UnitData), function (index, UnitData) {
                select.append($('<option/>', {
                    value: UnitData.Data,
                    text: UnitData.Data
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}
function LoadAdmSemester(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadAdmSemester',
        async: false,
        data: { },
        success: function (UnitData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(UnitData), function (index, UnitData) {
                select.append($('<option/>', {
                    value: UnitData.SemesterID,
                    text: UnitData.Semester
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}



function LoadInstituteMultipalPermissionWise(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPermissionWiseInstitute',
        async: false,
        data: {},
        success: function (InstituteData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(InstituteData), function (index, InstituteData) {
                select.append($('<option/>', {
                    value: InstituteData.InstituteID,
                    text: InstituteData.InstituteName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}



function LoadAcademicSessionWiseSessionMulti(id, defaultval, InstituteID) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadAcademicSessionWiseSessionmulti',
        async: false,
        data: { InstituteID: InstituteID },
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.SessionID,
                    text: Data.SessionName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}
function LoadInstituteWiseProgramMulti(id, defaultval, InstituteID) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadInstituteWiseProgrammulti',
        async: false,
        data: { InstituteID: InstituteID },
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.Programid,
                    text: Data.Program
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}

function LoadSelectUser(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSelectUser',
        async: false,
        data: {},
        success: function (TypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: "",
                text: "Select"
            }));
            $.each($.parseJSON(TypeData), function (index, TypeData) {
                select.append($('<option/>', {
                    value: TypeData.UserName,
                    text: TypeData.UserNameID
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}
function LoadAdmStatus(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadAdmStatus',
        async: false,
        data: {},
        success: function (TypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(TypeData), function (index, TypeData) {
                select.append($('<option/>', {
                    value: TypeData.StatusID,
                    text: TypeData.StatusName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}

function LoadFeecategory(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadFeecategory',
        async: false,
        data: {},
        success: function (TypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(TypeData), function (index, TypeData) {
                select.append($('<option/>', {
                    value: TypeData.FeeReceiptID,
                    text: TypeData.FeeCategory
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}
function LoadTradeWiseSemester(id, TradeID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadTradeWiseSemester',
        async: false,
        data: { TradeID: TradeID },
        success: function (SemesterData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(SemesterData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.SemesterID,
                    text: itemData.Semester
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}
function LoadScholarshipMaster(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadScholarshipMaster',
        async: false,
        data: {  },
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.ScholarshipDetailID,
                    text: Data.ScholarshipSourceName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}


function LoadSchSession(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSchSession',
        async: false,
        data: {},
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.SessionID,
                    text: Data.SessionName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}



function LoadAdmSemesterMulti(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadAdmSemester',
        async: false,
        data: {},
        success: function (UnitData) {
            var select = $(id);
            select.empty();
         
            $.each($.parseJSON(UnitData), function (index, UnitData) {
                select.append($('<option/>', {
                    value: UnitData.SemesterID,
                    text: UnitData.Semester
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}


function LoadAdmissionFieldUpdate(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadAdmissionFieldUpdate',
        async: false,
        data: {},
        success: function (UnitData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(UnitData), function (index, UnitData) {
                select.append($('<option/>', {
                    value: UnitData.FieldID,
                    text: UnitData.FieldName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}
function LoadAdmShift(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadAdmShift',
        async: false,
        data: {},
        success: function (UnitData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));

            $.each($.parseJSON(UnitData), function (index, UnitData) {
                select.append($('<option/>', {
                    value: UnitData.ShiftID,
                    text: UnitData.ShiftName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}
function LoadAdmUnit(id, defaultval) {
    var ddlIntunit = '';
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadAdmUnit',
        async: false,
        data: {},
        success: function (UnitData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlIntunit,
                text: "Select"
            }));

            $.each($.parseJSON(UnitData), function (index, UnitData) {
                select.append($('<option/>', {
                    value: UnitData.UnitID,
                    text: UnitData.UnitID
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}

//Feee
function LoadHeadCategory(id,defaultval,Required) {
   
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadHeadCategory',
        async: false,
        data: { },
        success: function (HeadCategoryData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));

            $.each($.parseJSON(HeadCategoryData), function (index, HeadCategoryData) {
                select.append($('<option/>', {
                    value: HeadCategoryData.HeadCategoryID,
                    text: HeadCategoryData.HeadCategory
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}
function LoadStructureType(id, defaultval) {
    debugger;
    defaultval = typeof defaultval !== 'undefined' ? defaultval : '';
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadStructureType',
        async: false,
        data: {},
        success: function (HeadCategoryData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: '',
                text: "Select"
            }));

            $.each($.parseJSON(HeadCategoryData), function (index, HeadCategoryData) {
                select.append($('<option/>', {
                    //value: HeadCategoryData.FeeStructureType,
                    //text: HeadCategoryData.FeeStructureTypeName

                    value: HeadCategoryData.HeadCategoryID,
                    text: HeadCategoryData.HeadCategory
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}
function LoadFeeHead(id,HeadCategory, defaultval,Required) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadFeeHead',
        async: false,
        data: { HeadCategory: HeadCategory },
        success: function (HeadCategoryData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));

            $.each($.parseJSON(HeadCategoryData), function (index, HeadCategoryData) {
                select.append($('<option/>', {
                    value: HeadCategoryData.FeeHeadID,
                    text: HeadCategoryData.FeeHeadName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}
function LoadStudentWithAdm(id, InstituteID,BatchID, SessionID, ProgramID, TradeID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadStudentWithAdm',
        async: false,
        data: { InstituteID: InstituteID, BatchID: BatchID, SessionID: SessionID, ProgramID: ProgramID, TradeID: TradeID },
        success: function (SessionWiseStudentData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Student"
            }));
            $.each($.parseJSON(SessionWiseStudentData), function (index, SessionWiseStudentData) {
                select.append($('<option/>', {
                    value: SessionWiseStudentData.StudentId,
                    text: SessionWiseStudentData.StudentName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}



function LoadFeeStructureMaster(id, defaultval,Required) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0
    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadFeeStructureMaster',
        async: false,
        data: {},
        success: function (FeeStructureMaster) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));

            $.each($.parseJSON(FeeStructureMaster), function (index, FeeStructureMaster) {
                select.append($('<option/>', {
                    value: FeeStructureMaster.FeeStructureID,
                    text: FeeStructureMaster.StructureName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}
function LoadReason(id, defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadReason',
        async: false,
        data: {},
        success: function (FeeStructureMaster) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));

            $.each($.parseJSON(FeeStructureMaster), function (index, FeeStructureMaster) {
                select.append($('<option/>', {
                    value: FeeStructureMaster.ReasonID,
                    text: FeeStructureMaster.Reason
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}

function LoadReasonCategoryWise(id, defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadReasonCategoryWise',
        async: false,
        data: {},
        success: function (FeeStructureMaster) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
 
            $.each($.parseJSON(FeeStructureMaster), function (index, FeeStructureMaster) {
                select.append($('<option/>', {
                    value: FeeStructureMaster.ReasonID,
                    text: FeeStructureMaster.Reason
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}

 

function LoadPolicyMaster(id,InstituteID,defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPolicyMaster',
        async: false,
        data: { InstituteID: InstituteID },
        success: function (FeeStructureMaster) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));

            $.each($.parseJSON(FeeStructureMaster), function (index, FeeStructureMaster) {
                select.append($('<option/>', {
                    value: FeeStructureMaster.ConcessionID,
                    text: FeeStructureMaster.PolicyName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}


function LoadReasonCategoryMaster(id, defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadReasonCategoryMaster',
        async: false,
        data: {},
        success: function (FeeStructureMaster) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: "",
                text: "Select"
            }));

            $.each($.parseJSON(FeeStructureMaster), function (index, FeeStructureMaster) {
                select.append($('<option/>', {
                    value: FeeStructureMaster.ReasonCategoryID,
                    text: FeeStructureMaster.CategoryName
                }));
            });
            //select[0].selectedIndex = 0;
            //select.val(defaultval);
        },

        error: function (errorData) {
            console.log(errorData);
        }
    });
}
function LoadInstallmentDateIN(id, AdmissionNo,defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadInstallmentDateIN',
        async: false,
        data: { AdmissionNo: AdmissionNo },
        success: function (ChallanInstallmentData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Installment Date"
            }));

            $.each($.parseJSON(ChallanInstallmentData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.InstallmentDateId,
                    text: itemData.InstallmentDate
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadOptionalHead(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadOptionalHead',
        async: false,
        data: {},
        success: function (TypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(TypeData), function (index, TypeData) {
                select.append($('<option/>', {
                    value: TypeData.FeeHeadID,
                    text: TypeData.FeeHeadName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}


function LoadSemShift(id, defaultval, TradeID) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSemShift',
        async: false,
        data: { TradeID: TradeID },
        success: function (UnitData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));

            $.each($.parseJSON(UnitData), function (index, UnitData) {
                select.append($('<option/>', {
                    value: UnitData.ShiftID,
                    text: UnitData.ShiftName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}
function LoadSemUnit(id, defaultval, InstituteID, ProgramID, TradeID, ShiftID) {
    var ddlIntunit = '-1';
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSemUnit',
        async: false,
        data: { InstituteID: InstituteID, ProgramID: ProgramID, TradeID: TradeID, ShiftID: ShiftID },
        success: function (UnitData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlIntunit,
                text: "Select"
            }));

            $.each($.parseJSON(UnitData), function (index, UnitData) {
                select.append($('<option/>', {
                    value: UnitData.UnitID,
                    text: UnitData.UnitID
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}
function LoadRecPaymode(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadRecPaymode',
        async: false,
        data: { },
        success: function (LoadRecPaymodeData) {
            var select = $(id);
            select.empty();
            //select.append($('<option/>', {
            //    value: ddlInitialValue,
            //    text: "Payment Mode"
            //}));
            $.each($.parseJSON(LoadRecPaymodeData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.value,
                    text: itemData.name
                }));
            });

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}



function LoadWeekofmapping(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadWeekofmapping',
        async: false,
        data: {},
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.WeekOffID,
                    text: Data.WeekOffName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}
function LoadStructureName(id, defaultval, InstituteID, BatchID) {
    debugger;
    defaultval = typeof defaultval !== 'undefined' ? defaultval : '';
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadStructureName',
        async: false,
        data: { InstituteID: InstituteID ,BatchID:BatchID},
        success: function (HeadCategoryData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Select"
            }));
            $.each($.parseJSON(HeadCategoryData), function (index, HeadCategoryData) {
                select.append($('<option/>', {
                    //value: HeadCategoryData.FeeStructureType,
                    //text: HeadCategoryData.FeeStructureTypeName

                    value: HeadCategoryData.FeeStructureID,
                    text: HeadCategoryData.StructureName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}


function LoadHolidayMaster(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("/CommonBinder/LoadHolidayMaster", {},
            function (LoadTitleData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Select"
                }));
                $.each($.parseJSON(LoadTitleData), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.HolidayID,
                        text: itemData.HolidayName
                    }));
                });
                if (defaultval != 'NA') {
                    select.val(defaultval);
                }
            });
}




function LoadUserMapping(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadUserMapping',
        async: false,
        data: {},
        success: function (TypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: "",
                text: "Select"
            }));
            $.each($.parseJSON(TypeData), function (index, TypeData) {
                select.append($('<option/>', {
                    value: TypeData.UserName,
                    text: TypeData.UserNameID
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });


}



function LoadRecPaymode(id, defaultval) {


    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadRecPaymode',
        async: false,
        data: { SchoolID: 0 },
        success: function (LoadRecPaymodeData) {
            var select = $(id);
            select.empty();
            //select.append($('<option/>', {
            //    value: ddlInitialValue,
            //    text: "Payment Mode"
            //}));
            $.each($.parseJSON(LoadRecPaymodeData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.value,
                    text: itemData.name
                }));
            });

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}


function LoadDateWiseSession(id, Date, defaultval, InstituteID) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadDateWiseSession',
        async: false,
        data: { Date: Date, InstituteID: InstituteID },
        success: function (Data) {
            var select = $(id);
           
            select.val("-1");
            $.each($.parseJSON(Data), function (index, Data) {
                select.val(Data.SessionID);
               
            });


        },
        error: function (errorData) {
            console.log(errorData);
        }
            });
}
function LoadStudent(id, InstituteID, BatchID, TradeID, ProgramID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : "-1";
            
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadStudent',
        async: false,
        data: { InstituteID: InstituteID, BatchID: BatchID, TradeID: TradeID, ProgramID: ProgramID },
        success: function (UnitData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: "-1",
                text: "Select"
            }));

            $.each($.parseJSON(UnitData), function (index, UnitData) {
                select.append($('<option/>', {
                    value: UnitData.AdmissionNo,
                    text: UnitData.StudentName
                }));
            });
            select.val(defaultval);
        },
        
        error: function (errorData) {
            console.log(errorData);
        }
    });
}


function LoadReasonFee(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadReasonFee',
        async: false,
        data: { },
        success: function (UnitData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));

            $.each($.parseJSON(UnitData), function (index, UnitData) {
                select.append($('<option/>', {
                    value: UnitData.ReasonID,
                    text: UnitData.Reason
                }));
            });
            select.val(defaultval);
        },

        error: function (errorData) {
            console.log(errorData);
        }
    });
}

function LoadBatchSessionWise(id, SessionID, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadBatchSessionWise',
        async: false,
        data: { SessionID: SessionID },
        success: function (UnitData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));

            $.each($.parseJSON(UnitData), function (index, UnitData) {
                select.append($('<option/>', {
                    value: UnitData.BatchID,
                    text: UnitData.BatchName
                }));
            });
            select.val(defaultval);
        },

        error: function (errorData) {
            console.log(errorData);
        }
    });
}
function LoadBatchWisetrade(id, ProgramID, InstituteID, SessionID, defaultval) {  
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadBatchWisetrade',
        async: false,
        data: { ProgramID: ProgramID, InstituteID: InstituteID, SessionID: SessionID },
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.TradeID,
                    text: Data.TradeName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
function LoadUploadPaymode(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadUploadPaymode',
        async: false,
        data: {},
        success: function (LoadRecPaymodeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(LoadRecPaymodeData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.value,
                    text: itemData.name
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}

//function LoadBank(id,  defaultval) {

//    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
//    $.getJSON("../CommonBinder/LoadBank", {  },
//            function (BankData) {
//                var select = $(id);
//                select.empty();
//                select.append($('<option/>', {
//                    value: ddlInitialValue,
//                    text: "Bank"
//                }));
//                $.each($.parseJSON(BankData), function (index, itemData) {

//                    select.append($('<option/>', {
//                        value: itemData.BankID,
//                        text: itemData.BankName
//                    }));
//                });
//                select.val(defaultval);
//    });
//}

function LoadBank(id, defaultval,InstituteID) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadBank',
        async: false,
        data: { InstituteID: InstituteID },
        success: function (BankData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(BankData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.BankID,
                    text: itemData.BankName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}

function LoadLeave(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadLeave", { },
                   function (LeaveData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: ddlInitialValue,
                           text: "Leave"
                       }));
                       $.each($.parseJSON(LeaveData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.leaveID,
                               text: itemData.leave
                           }));
                       });
                       select.val(defaultval);
                   });
}


function LoadInstituteProgramWisetrade(id, ProgramID, InstituteID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadInstituteProgramWisetrade',
        async: false,
        data: { ProgramID: ProgramID, InstituteID: InstituteID },
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.TradeID,
                    text: Data.TradeName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadInstituteProgramWisetradeMultisel(id, ProgramID, InstituteID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadInstituteProgramWisetrade',
        async: false,
        data: { ProgramID: ProgramID, InstituteID: InstituteID },
        success: function (Data) {
            var select = $(id);
            select.empty();
            //select.append($('<option/>', {
            //    value: ddlInitialValue,
            //    text: "Select"
            //}));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.TradeID,
                    text: Data.TradeName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}



function LoadFine(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadFine", { SchoolID: 0 },
                   function (LeaveData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: ddlInitialValue,
                           text: "Select"
                       }));
                       $.each($.parseJSON(LeaveData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.FinePolicyID,
                               text: itemData.FinePolicyName
                           }));
                       });
                       select.val(defaultval);
                   });
}

function LoadFeecategoryTradeWise(id,ProgramID,TradeID ,defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadFeecategoryTradeWise',
        async: false,
        data: { ProgramID: ProgramID, TradeID: TradeID },
        success: function (TypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(TypeData), function (index, TypeData) {
                select.append($('<option/>', {
                    value: TypeData.FeeCategoryID,
                    text: TypeData.FeeCategory
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}

function LoadSMSGoupMaster(id, InstituteID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadSMSGoupMaster", { InstituteID: InstituteID },
                   function (LeaveData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: ddlInitialValue,
                           text: "Select"
                       }));
                       $.each($.parseJSON(LeaveData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.RecordID,
                               text: itemData.SMSGroupMaster
                           }));
                       });
                       select.val(defaultval);
                   });
}
function LoadPaymodeforcollectionReport(id, defaultval) {


    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadRecPaymodeforcollectionReport',
        async: false,
        data: { SchoolID: 0 },
        success: function (LoadRecPaymodeData) {
            var select = $(id);
           // select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Payment Mode"
            }));
            $.each($.parseJSON(LoadRecPaymodeData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.value,
                    text: itemData.name
                }));
            });

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}

function LoadFeeUsersforcollectionReport(id, defaultval) {


    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadFeeUsersforcollectionReport',
        async: false,
        data: { Intstitute: defaultval  },
        success: function (LoadUser_Inrole) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select User"
            }));
            $.each($.parseJSON(LoadUser_Inrole), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.UserName,
                    text: itemData.UserFullName
                }));
            });

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}


function LoadResourceTypeMaster(id, defaultval) {


    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadResourceTypeMaster',
        async: false,
        data: { SchoolID: 0 },
        success: function (LoadRecPaymodeData) {
            var select = $(id);
            // select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(LoadRecPaymodeData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.ResourceID,
                    text: itemData.ResourceName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}


function LoadCompanyMasterProfile(id, defaultval) {


    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadCompanyMasterProfile',
        async: false,
        data: { SchoolID: 0 },
        success: function (LoadRecPaymodeData) {
            var select = $(id);
             select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(LoadRecPaymodeData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.CompanyID,
                    text: itemData.CompanyName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}
function LoadCompanyMasterProfileDetail(id,CompanyID, defaultval) {


    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadCompanyMasterProfileDetail',
        async: false,
        data: { CompanyID: CompanyID },
        success: function (LoadRecPaymodeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(LoadRecPaymodeData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.RecordID,
                    text: itemData.ConatctName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}

function LoadVistingDate(id,CompanyID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : "";

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadVistingDate',
        async: false,
        data: { CompanyID: CompanyID },
        success: function (UnitData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: "",
                text: "NA"
            }));

            $.each($.parseJSON(UnitData), function (index, UnitData) {
                select.append($('<option/>', {
                    value: UnitData.VistingDate,
                    text: UnitData.VistingDate
                }));
            });
            select.val(defaultval);
        },

        error: function (errorData) {
            console.log(errorData);
        }
    });
}



function LoadJobLocation(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : "";

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadJobLocation',
        async: false,
        data: {},
        success: function (UnitData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: "-1",
                text: "-Select-"
            }));

            $.each($.parseJSON(UnitData), function (index, UnitData) {
                select.append($('<option/>', {
                    value: UnitData.JobLocation,
                    text: UnitData.JobLocation
                }));
            });
            select.val(defaultval);
        },

        error: function (errorData) {
            console.log(errorData);
        }
    });
}

function LoadbindDesignation(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : "";

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadbindDesignation',
        async: false,
        data: {},
        success: function (UnitData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: "-1",
                text: "-Select-"
            }));

            $.each($.parseJSON(UnitData), function (index, UnitData) {
                select.append($('<option/>', {
                    value: UnitData.Designation,
                    text: UnitData.Designation
                }));
            });
            select.val(defaultval);
        },

        error: function (errorData) {
            console.log(errorData);
        }
    });
}


function LoadUserBinder(id, InstituteID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : "";

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadUserBinder',
        async: false,
        data: { InstituteID: InstituteID },
        success: function (UnitData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: "-1",
                text: "-Select-"
            }));

            $.each($.parseJSON(UnitData), function (index, UnitData) {
                select.append($('<option/>', {
                    value: UnitData.Email,
                    text: UnitData.Email
                }));
            });
            select.val(defaultval);
        },

        error: function (errorData) {
            console.log(errorData);
        }
    });
}

//Dynamic Table Bind by JSON
function CreateTablebyJsonData(cdata, d, FirstColumn, tableid) {
    debugger;
    console.log(cdata);
    var data = JSON.parse(cdata);

    var firstColumn = 0;
    if (FirstColumn > 0) {
        firstColumn = FirstColumn;
    }

    var r = '';
    if (data.length > 0) {

        $("" + d + "").empty();

        var html = "";
        var colHeader = Object.keys(data[0]);

        html = "<table border=1 id=\"" + tableid + "\" class=\"table table-striped table-bordered table-hover dataTable no-footer\" width=\"100%\" role=\"grid\" aria-describedby=\"datatable_tabletools_info\" style=\"width: 100%;\">";
        for (var i = firstColumn; i < colHeader.length; i++)
            html += "<td ><b>" + colHeader[i] + "</b></td>";
        html += "</tr>";
        for (var i = firstColumn; i < data.length; i++) {
            html += "<tr>";
            for (var j = 0; j < colHeader.length; j++)
                html += "<td>" + data[i][colHeader[j]] + "</td>";
            html += "</tr>";
        }
        html += "</table>";

        //html += "<p><b>Overall Marks : " + dst.Tables[1].Rows[0][0].ToString() + "</b></p>";
    }
    else {



        html = "<p><center>Data not available.</center></p>";
    }

    $("" + d + "").append(html);
}

//////LoadPaymentModeAdvance
///Added By:Ritika kashyap
//Added Date:09_04_2018
function LoadPaymentModeAdvance(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPaymentModeAdvance',
        async: false,
        data: {},
        success: function (LoadRecPaymodeData) {
            var select = $(id);
            select.empty();
            //select.append($('<option/>', {
            //    value: ddlInitialValue,
            //    text: "Payment Mode"
            //}));
            $.each($.parseJSON(LoadRecPaymodeData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.value,
                    text: itemData.name
                }));
            });

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}



function LoadBatchMul(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadBatch',
        async: false,
        data: {},
        success: function (cityData) {
            var select = $(id);
            select.empty();
            $.each($.parseJSON(cityData), function (index, cityData) {
                select.append($('<option/>', {
                    value: cityData.BatchID,
                    text: cityData.BatchName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}






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

function fnExportHTML(tableNames, headerbdColor, filename, pristr, poststr) {
    
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
        console.log(export_data);
        var blobURL = tableToExcel(export_data, filename);
        $('#btnExport').attr('download', filename + '.xls')
        $('#btnExport').attr('href', blobURL);
    }
    //return (sa);

    //////////**********Account *************************


}
// End 




//Add New Function By SULTAN  $.getJSON("/CommonBinder/BinderInstitute", {},
         //LoadAffiliationScheme
function LoadAffiliationScheme(id, defaultval,Required) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.getJSON("/CommonBinder/LoadAffiliationScheme", {},

        function (LoadAffiliationdata) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(LoadAffiliationdata), function (index, itemData) {

                select.append($('<option/>', {
                    value: itemData.AffiliationId,
                    text: itemData.Affiliation

                }));


            });
            select.val(defaultval); 
            //select[0].selectedIndex = 0;
            //if (defaultval != '-1') {
            //    select.val(defaultval);
            //}
            //else {
            //    select[0].selectedIndex = 1;
            //}
        });

}
function LoadAffiliationScheme1(id, defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("/CommonBinder/LoadAffiliationScheme", {},

        function (LoadAffiliationdata) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                text: "Select"
            }));
            $.each($.parseJSON(LoadAffiliationdata), function (index, itemData) {

                select.append($('<option/>', {
                    value: itemData.AffiliationId,
                    text: itemData.Affiliation
                    
                }));


            });
            select[0].selectedIndex = 0;
            //if (defaultval != '-1') {
            //    select.val(defaultval);
            //}
            //else {
            //    select[0].selectedIndex = 1;
            //}
        });

}


function LoadBaseScheme(id, defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("/CommonBinder/LoadBaseScheme", {},

        function (LoadBaseSchemeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text : "Select"

            }));

            $.each($.parseJSON(LoadBaseSchemeData), function (index, itemData) {

                select.append($('<option/>', {
                    value: itemData.SchemeId,
                    text: itemData.SchemeName


                }));


            });
            if (defaultval != 'NA')
            {
                select.val(defaultval);
            }

        });


}


function LoadBranch(id, defaultval, Required) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

        $.ajax({
        type: 'GET',
            url: '/CommonBinder/BinderBranch',
        async: false,
        data: {},
        success: function (LoadBranchData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(LoadBranchData), function (index, LoadBranchData) {
                select.append($('<option/>', {
                    value: LoadBranchData.BranchID,
                    text: LoadBranchData.Branch
                }));
            });
            //select[0].selectedIndex = 0;
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });





}


function LoadProgramWiseBranchCopyDoc(id, ProgramID, InstituteID, defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadInstituteProgramWiseBranchCopyDoc',
        async: false,
        data: { ProgramID: ProgramID, InstituteID: InstituteID },
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.BranchID,
                    text: Data.Branch
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}




function LoadProgramWiseBranch(id, ProgramID, InstituteID, defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : '-1';

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadInstituteProgramWiseBranch',
        async: false,
        data: { ProgramID: ProgramID, InstituteID: InstituteID },
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.BranchID,
                    text: Data.Branch
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadProgramWiseBranchReg(id, ProgramID, InstituteID, SessionID, defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoeadSeatWiseBranchMultiple',
        async: false,
        data: { ProgramID: ProgramID, InstituteID: InstituteID, SessionID: SessionID },
        success: function (Data) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Select"
            }));
            $.each($.parseJSON(Data), function (index, Data) {
                select.append($('<option/>', {
                    value: Data.BranchID,
                    text: Data.Branch
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadSeatWiseBranchMultiple(id, ProgramID, InstituteID, SessionID, defaultval) {
    /////////////////
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoeadSeatWiseBranchMultiple',
        async: false,
        data: { ProgramID: ProgramID, InstituteID: InstituteID, SessionID: SessionID },
        success: function (cityData) {
            var select = $(id);
            select.empty();
            $.each($.parseJSON(cityData), function (index, cityData) {
                select.append($('<option/>', {
                    value: cityData.BranchID,
                    text: cityData.Branch
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}








function LoadLateralSemester(id, ProgramID, InstituteID, SessionID, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }



    $.ajax({

        type: 'GET',
        url: '../CommonBinder/LoadLateralSemester',
        async: false,
        data: { ProgramID: ProgramID, InstituteID: InstituteID, SessionID: SessionID },
        success: function (SemData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(SemData), function (index, SemData) {
                select.append($('<option/>', {
                    value: SemData.SemesterID,
                    text: SemData.Semester

                }));
            });
            select.val(defaultval);
        },
        error: function (errordata) {
            console.log(errordata);
        }
    });


}


    function LoadElectricSubject(id, defaultval, Required) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/BinderElectricSubject',
        async: false,
        data: {},
        success: function (ElectricSubjectData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(ElectricSubjectData), function (index, ElectricSubjectData) {
                select.append($('<option/>', {
                    value: ElectricSubjectData.ElectiveID,
                    text: ElectricSubjectData.ElectiveGroup
                }));
            });
            //select[0].selectedIndex = 0;
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });





}


function LoadGradePattern(id, defaultval, Required) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/BinderGradePattern',
        async: false,
        data: {},
        success: function (GradePatternData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(GradePatternData), function (index, GradePatternData) {
                select.append($('<option/>', {
                    value: GradePatternData.GradingPatternID,
                    text: GradePatternData.GradingPatternName
                }));
            });
            //select[0].selectedIndex = 0;
            //select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });





}



function LoadSubject(id, defaultval, Required) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/BinderSubject',
        async: false,
        data: {},
        success: function (SubjectData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(SubjectData), function (index, SubjectData) {
                select.append($('<option/>', {
                    value: SubjectData.SubjectID,
                    text: SubjectData.SubjectName
                }));
            });
            //select[0].selectedIndex = 0;
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });





}


function LoadEvaluationPattern(id, defaultval, Required) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/BinderEvaluationPattern',
        async: false,
        data: {},
        success: function (EvaluationPatternData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(EvaluationPatternData), function (index, EvaluationPatternData) {
                select.append($('<option/>', {
                    value: EvaluationPatternData.GradingPatternID,
                    text: EvaluationPatternData.GradingPatternName
                }));
            });
            //select[0].selectedIndex = 0;
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });





}


function LoadSemester(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.ajax({

        type: 'GET',
        url: '../CommonBinder/LoadSchemeSemester',
        async: false,
        data: { },
        success: function (SemesterData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(SemesterData), function (index, SemesterData) {
                select.append($('<option/>', {
                    value: SemesterData.SemesterID,
                    text: SemesterData.Semester

                }));
            });
            select.val(defaultval);
        },
        error: function (errordata) {
            console.log(errordata);
        }
    });


}


function LoadProgramScheme(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }
    $.ajax({

        type: 'GET',
        url: '../CommonBinder/LoadProgramScheme',
        async: false,
        data: {},
        success: function (ProgramSchemeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(ProgramSchemeData), function (index, ProgramSchemeData) {
                select.append($('<option/>', {
                    value: ProgramSchemeData.ProgramID,
                    text: ProgramSchemeData.Program

                }));
            });
            select.val(defaultval);
        },
        error: function (errordata) {
            console.log(errordata);
        }
    });


}


function LoadElectricSubjectforScheme(id, defaultval, Required) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/BinderElectricSubjectForScheme',
        async: false,
        data: {},
        success: function (ElectricSubjectSchemeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(ElectricSubjectSchemeData), function (index, ElectricSubjectSchemeData) {
                select.append($('<option/>', {
                    value: ElectricSubjectSchemeData.ElectiveID,
                    text: ElectricSubjectSchemeData.ElectiveGroup
                }));
            });
            //select[0].selectedIndex = 0;
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });





}



function LoadGradePatternName(id, GradeID, Required) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1
    GradeID = typeof GradeID !== 'undefined' ? GradeID : -1;
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/LoadGradePatternName',
        async: false,
        data: { GradeID: GradeID },
        success: function (GradePatternNameData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(GradePatternNameData), function (index, GradePatternNameData) {
                select.append($('<option/>', {
                    value: GradePatternNameData.GradingPatternDetailID,
                    text: GradePatternNameData.GradeName
                }));
            });
            //select[0].selectedIndex = 0;
            //select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });





}


function LoadVEaluationParameter(id, defaultval, Required) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/BinderEvaluationParamter',
        async: false,
        data: {},
        success: function (EvaluationParameterData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(EvaluationParameterData), function (index, EvaluationParameterData) {
                select.append($('<option/>', {
                    value: EvaluationParameterData.EvaluationID,
                    text: EvaluationParameterData.EvaluationParameter
                }));
            });
            //select[0].selectedIndex = 0;
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });





}




function LoadSchemeMapping(id, ProgramID, BranchID, defaultval, Required) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1
    ProgramID = typeof ProgramID !== 'undefined' ? ProgramID : -1;
    BranchID = typeof BranchID !== 'undefined' ? BranchID : -1;
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/LoadSchemeMapping',
        async: false,
        data: { ProgramID: ProgramID, BranchID: BranchID },
        success: function (SchemeMappingData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(SchemeMappingData), function (index, SchemeMappingData) {
                select.append($('<option/>', {
                    value: SchemeMappingData.SchemeID,
                    text: SchemeMappingData.SchemeName
                }));
            });
            
           select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });





}



function LoadBranchMultipleForDocument(id, ProgramID, InstituteID, defaultval) {
    /////////////////
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '/CommonBinder/LoadBranchMultipleForDocument',
        async: false,
        data: { ProgramID: ProgramID, InstituteID: InstituteID },
        success: function (DocumentBranchData) {
            var select = $(id);
            select.empty();
            $.each($.parseJSON(DocumentBranchData), function (index, DocumentBranchData) {
                select.append($('<option/>', {
                    value: DocumentBranchData.BranchID,
                    text: DocumentBranchData.Branch
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

//Binder For MIS
function LoadSessionForMIS(id, ClientID, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : '-1';

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/LoadSessionForMIS',
        async: false,
        data: { ClientID: ClientID },
        success: function (SessionData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));

            $.each($.parseJSON(SessionData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.SessionID,
                    text: itemData.SessionName
                }));
            });

            select.val(defaultval);
            //select[0].selectedIndex = 0;

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}



//
function LoadCurrency(id, defaultval, Required) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/BinderCurrency',
        async: false,
        data: {},
        success: function (CurrencyData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(CurrencyData), function (index, CurrencyData) {
                select.append($('<option/>', {
                    value: CurrencyData.CurrencyID,
                    text: CurrencyData.Currency
                }));
            });
            //select[0].selectedIndex = 0;
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });





}



function LoadReligionLanguage(id, defaultval, Required) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1
    defval = "";

    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '/CommonBinder/BinderReligionlanguage',
        async: false,
        data: {},
        success: function (ReligionlanguageData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(ReligionlanguageData), function (index, ReligionlanguageData) {
                select.append($('<option/>', {
                    value: ReligionlanguageData.ReligiouslanguageID,
                    text: ReligionlanguageData.Religiouslanguage
                }));
            });
            //select[0].selectedIndex = 0;
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });





}



function LoadHoliday(id, defaultval, Required) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    defval = "";
    check = typeof defaultval !== 'undefined' ? Required : 0

    if (check == 0) {
        defval = "-1";
    }
    else {
        defval = "";
    }

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadHoliday',
        async: false,
        data: {},
        success: function (HolidayData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: defval,
                text: "Select"
            }));
            $.each($.parseJSON(HolidayData), function (index, HolidayData) {
                select.append($('<option/>', {
                    value: HolidayData.HolidayID,
                    text: HolidayData.Holiday
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}



//function LoadSemesterWiseShift(id, SemesterID, defaultval) {
//    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
//    SemesterID = typeof SemesterID !== 'undefined' ? SemesterID : -1;
//    $.ajax({
//        type: 'GET',
//        url: '/CommonBinder/LoadSemesterWiseShift',
//        async: false,
//        data: { SemesterID: SemesterID },
//        success: function (shiftdata) {
//            var select = $(id);
//            select.empty();
//            select.append($('<option/>', {
//                value: ddlInitialValue,
//                text: "Select"
//            }));
//            $.each($.parseJSON(shiftdata), function (index, itemData) {
//                select.append($('<option/>', {
//                    value: itemData.shiftID,
//                    text: itemData.ShiftName
//                }));
//            });
//            select.val(defaultval);
//            return true;
//        },
//        error: function (errorData) {
//            console.log(errorData);
//            return false;
//        }
//    });
//}