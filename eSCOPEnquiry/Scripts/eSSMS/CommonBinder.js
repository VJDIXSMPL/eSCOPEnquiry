var ddlInitialValue = -1;

//***************************** COMMON BINDER **********************//


function LoadProfession(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadProfessions", { SchoolID: 0 },
            function (ProfessionData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Profession"
                }));
                $.each($.parseJSON(ProfessionData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.ProfessionID,
                        text: itemData.Profession
                    }));
                });
                select.val(defaultval);
            });
}


function LoadSchoolWiseClassMultiple(id, sessionID, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSchoolWiseClass',
        async: false,
        data: { sessionID: sessionID, SchoolID: SchoolID },
        success: function (SchoolWiseClassData) {
            var select = $(id);
            select.empty();

            $.each($.parseJSON(SchoolWiseClassData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.ClassID,
                    text: itemData.ClassName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadAllClassesMultiple(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadClasses',
        async: false,
        data: { SchoolID: 0 },
        success: function (classData) {
            var select = $(id);
            select.empty();

            $.each($.parseJSON(classData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.ClassID,
                    text: itemData.ClassName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }

    })
}
//function LoadEmployeeGroup(id, defaultval) {
//    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
//    $.getJSON("../CommonBinder/LoadEmployeeGroup", { SchoolID: 0 },
//            function (FeeStructureData) {
//                var select = $(id);
//                select.empty();
//                select.append($('<option/>', {
//                    value: ddlInitialValue,
//                    text: "Employee Group"
//                }));
//                $.each($.parseJSON(FeeStructureData), function (index, itemData) {
//                    select.append($('<option/>', {
//                        value: itemData.EmpGroupID,
//                        text: itemData.EmpGroupName
//                    }));
//                });
//                select.val(defaultval);
//            });
//}

function LoadDesignation(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadDesignation", { SchoolID: 0 },
            function (DesignationData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Designation"
                }));
                $.each($.parseJSON(DesignationData), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.DesignationID,
                        text: itemData.Designation
                    }));
                });
                select.val(defaultval);
            });
}

function LoadDepartment(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../../CommonBinder/LoadDepartment", { SchoolID: 0 },
            function (DepartmentData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Department"
                }));
                $.each($.parseJSON(DepartmentData), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.DepartmentID,
                        text: itemData.Department
                    }));
                });
                select.val(defaultval);
            });
}

function LoadTitle(id, defaultval) {
    var SchoolID = 0;
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadTitle", { SchoolID: 0 },
            function (LoadTitleData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Title"
                }));
                $.each($.parseJSON(LoadTitleData), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.TitleID,
                        text: itemData.TitleName
                    }));
                });
                if (defaultval != 'NA') {
                    select.val(defaultval);
                }
            });
}

function LoadEthnicity(id, defaultval) {
    var SchoolID = 0;
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadEthnicity", { SchoolID: 0 },
            function (EthnicityData) {
                var select = $(id);
                select.empty();
                if (defaultval != 'NA') {
                    select.append($('<option/>', {
                        value: ddlInitialValue,
                        text: "Ethnicity"
                    }));
                }
                $.each($.parseJSON(EthnicityData), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.EthencityID,
                        text: itemData.EthencityName
                    }));
                });
                if (defaultval != 'NA') {
                    select.val(defaultval);
                }
            });
}

function LoadEmptype(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadEmptype", { SchoolID: 0 },
            function (EmptypeData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Employee Type"
                }));
                $.each($.parseJSON(EmptypeData), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.EmpTypeID,
                        text: itemData.EmpTypeName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadCategory(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadCategory", { SchoolID: 0 },
                   function (CategoryData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: ddlInitialValue,
                           text: "Category"
                       }));
                       $.each($.parseJSON(CategoryData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.CategoryID,
                               text: itemData.CategoryName
                           }));
                       });
                       select.val(defaultval);
                   });
}

function LoadNationality(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadNationality", { SchoolID: 0 },
                   function (NationalityData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: ddlInitialValue,
                           text: "Nationality"
                       }));
                       $.each($.parseJSON(NationalityData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.NationalityID,
                               text: itemData.NationalityName
                           }));
                       });
                       select.val(defaultval);
                   });
}

function LoadQualification(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadQualification", { SchoolID: 0 },
            function (QualificationData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Qualification"
                }));
                $.each($.parseJSON(QualificationData), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.QualificationID,
                        text: itemData.Qualification
                    }));
                });
                select.val(defaultval);
            });

}


function LoadCountry(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadCountry", { SchoolID: 0 },
                   function (CountryData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: ddlInitialValue,
                           text: "Country"
                       }));
                       $.each($.parseJSON(CountryData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.CountryId,
                               text: itemData.Country
                           }));
                       });
                       select.val(defaultval);
                   });
}

function LoadState(id, CountryId, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadState',
        async: false,
        data: { CountryId: CountryId },
        success: function (stateData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "State"
            }));
            $.each($.parseJSON(stateData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.StateID,
                    text: itemData.StateName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}

function LoadCity(id, StateID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadCity',
        async: false,
        data: { StateID: StateID },
        success: function (cityData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "City"
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

function LoadReligion(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadReligion", { SchoolID: 0 },
            function (ReligionData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Religion"
                }));
                $.each($.parseJSON(ReligionData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.ReligionId,
                        text: itemData.ReligionName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadBloodGroup(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadBloodGroup", { SchoolID: 0 },
            function (BloodGroupData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Blood Group"
                }));
                $.each($.parseJSON(BloodGroupData), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.BloodGroupId,
                        text: itemData.BloodGroupName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadStream(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadStream", { SchoolID: 0 },
            function (StreamData) {
                var select = $(id);
                select.empty();
                if (defaultval != 'NA') {
                    //select.append($('<option/>', {
                    //    value: ddlInitialValue,
                    //    text: "Stream"
                    //}));
                }
                $.each($.parseJSON(StreamData), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.StreamID,
                        text: itemData.StreamName
                    }));
                });
                if (defaultval != 'NA') {
                    select.val(1);
                }
            });
}

//function LoadSchool(id, defaultval) {
//    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
//    $.getJSON("../CommonBinder/LoadSchool", { SchoolID: 0 },
//            function (SchoolData) {
//                var select = $(id);
//                select.empty();
//                select.append($('<option/>', {
//                    value: ddlInitialValue,
//                    text: "School"
//                }));
//                $.each($.parseJSON(SchoolData), function (index, itemData) {
//                    select.append($('<option/>', {
//                        value: itemData.SchoolID,
//                        text: itemData.SchoolName
//                    }));
//                });
//                select.val(defaultval);
//            });

//}


function LoadCommonSchool(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadCommonSchool", { SchoolID: 0 },
            function (SchoolData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "School"
                }));
                $.each($.parseJSON(SchoolData), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.SchoolID,
                        text: itemData.SchoolName
                    }));
                });
                select.val(defaultval);

            });



}

function LoadFinePolicy(id, defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadFinePolicy", { SchoolID: 0 },
            function (ProfessionData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Select Fine Policy"
                }));
                $.each($.parseJSON(ProfessionData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.FinePolicyID,
                        text: itemData.FinePolicyName
                    }));
                });
                select.val(defaultval);
            });

}

function LoadAdmissionCategory(id, defaultval) {
    var SchoolID = 0;
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadAdmissionCategory", { SchoolID: 0 },
            function (EthnicityData) {
                var select = $(id);
                select.empty();
                if (defaultval != 'NA') {
                    select.append($('<option/>', {
                        value: ddlInitialValue,
                        text: "Admission Category"
                    }));
                }
                $.each($.parseJSON(EthnicityData), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.CategoryID,
                        text: itemData.CategoryName
                    }));
                });
                if (defaultval != 'NA') {
                    select.val(defaultval);
                }
            });
}

function LoadClasses(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadClasses", { SchoolID: 0 },
                   function (classData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: ddlInitialValue,
                           text: "Class"
                       }));
                       $.each($.parseJSON(classData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.ClassID,
                               text: itemData.ClassName
                           }));
                       });
                       select.val(defaultval);
                   });
}

function LoadSession(id, defaultval) {
    debugger;
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../../CommonBinder/LoadSession", { SchoolID: 0 },
            function (SessionData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Academic Session"
                }));
                $.each($.parseJSON(SessionData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.SessionID,
                        text: itemData.SessionName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadSection(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : "-2";
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSection',
        async: false,
        data: { SchoolID: 0 },
        success: function (sectionData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: "-2",
                text: "Section"
            }));
            select.append($('<option/>', {
                value: "-1",
                text: "Temp"
            }));
            $.each($.parseJSON(sectionData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.SectionID,
                    text: itemData.SectionName
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadSectionWithTemp(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadSection", { SchoolID: 0 },
                   function (sectionData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: "-2",
                           text: "Section"
                       }));
                       select.append($('<option/>', {
                           value: "-1",
                           text: "Temp"
                       }));
                       $.each($.parseJSON(sectionData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.SectionID,
                               text: itemData.SectionName
                           }));
                       });
                    

                       select.val(defaultval);
                   });
}
function LoadReason(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadReason", { SchoolID: 0 },
                   function (ReasonData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: ddlInitialValue,
                           text: "Reason"
                       }));
                       $.each($.parseJSON(ReasonData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.ReasonID,
                               text: itemData.Reason
                           }));
                       });
                       select.val(defaultval);
                   });
}

function LoadIncomeGroup(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadIncomeGroup", { SchoolID: 1 },
                   function (IncomeGroupData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: ddlInitialValue,
                           text: "Income Group"
                       }));
                       $.each($.parseJSON(IncomeGroupData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.IncomeGroupID,
                               text: itemData.IncomeGroup
                           }));
                       });
                       select.val(defaultval);
                   });
}

function LoadEnquiryYear(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadEnquiryYear", { SchoolID: 0 },
            function (ProfessionData) {
                var select = $(id);
                select.empty();

                $.each($.parseJSON(ProfessionData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.YearNum,
                        text: itemData.YearNum
                    }));
                });
                select.val(2015);
            });

}

function LoadEnquiryType(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : 2;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadEnquiryType',
        async: false,
        success: function (enquiryData) {
            var select = $(id);
            select.empty();
            //select.append($('<option/>', {
            //    value: -1,
            //    text: "enquiry type"
            //}));
            $.each($.parseJSON(enquiryData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.EnquiryTypeID,
                    text: itemData.EnquiryType
                }));
            });
            if (defaultval <= 0) {
                defaultval = 2;
            }
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadEnquiryTypeOptional(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadEnquiryType',
        async: false,
        success: function (enquiryData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Enquiry Type"
            }));
            $.each($.parseJSON(enquiryData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.EnquiryTypeID,
                    text: itemData.EnquiryType
                }));
            });
            if (defaultval <= 0) {
                defaultval = -1;
            }
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
function LoadAllEnquirySubSource(id, Sourceid, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadAllEnquirySubSource',
        async: false,
        data: { Sourceid: Sourceid },
        success: function (SubSourceData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Sub Source"
            }));
            $.each($.parseJSON(SubSourceData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.EnquirySubSourceID,
                    text: itemData.EnquirySubSource
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadEnquirySubSource(id, Sourceid, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadEnquirySubSource',
        async: false,
        data: { Sourceid: Sourceid },
        success: function (SubSourceData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Sub Source"
            }));
            $.each($.parseJSON(SubSourceData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.EnquirySubSourceID,
                    text: itemData.EnquirySubSource
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadEnquirySubject(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadEnquirySubject", { SchoolID: 0 },
                   function (EnquirySourceData) {
                       var select = $(id);
                       select.empty();
                       //select.append($('<option/>', {
                       //    value: ddlInitialValue,
                       //    text: "Communication Type"
                       //}));
                       $.each($.parseJSON(EnquirySourceData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.SubjectID,
                               text: itemData.Subject
                           }));
                       });
                       select.val(defaultval);
                   });
}

function LoadEnquiryStatus(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadEnquiryStatus", { SchoolID: 0 },
                   function (EnquirySourceData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: ddlInitialValue,
                           text: "Enquiry Status"
                       }));
                       $.each($.parseJSON(EnquirySourceData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.StatusId,
                               text: itemData.Status
                           }));
                       });
                       select.val(defaultval);
                   });
}

function LoadEnquiryWithoutCurrentStatus(id, StatusId, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadEnquiryWithoutCurrentStatus',
        async: false,
        data: { StatusId: StatusId },
        success: function (EnquiryWithoutCurrentStatus) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Sub Source"
            }));
            $.each($.parseJSON(EnquiryWithoutCurrentStatus), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.StatusId,
                    text: itemData.Status
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadEnquirySource(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadEnquirySource", { SchoolID: 0 },
                   function (EnquirySourceData) {
                       var select = $(id);
                       select.empty();
                       select.append($('<option/>', {
                           value: ddlInitialValue,
                           text: "Enquiry Source"
                       }));
                       $.each($.parseJSON(EnquirySourceData), function (index, itemData) {
                           select.append($('<option/>', {
                               value: itemData.EnquirySourceID,
                               text: itemData.EnquirySource
                           }));
                       });
                       select.val(defaultval);
                   });
}

function LoadBoard(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadBoard", { SchoolID: 0 },
            function (BoardData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Board"
                }));
                $.each($.parseJSON(BoardData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.BoardID,
                        text: itemData.Board
                    }));
                });
                select.val(defaultval);
            });
}

function LoadEmpSubGroup(id, EmpGroupID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    var EmpGroupIDint = parseInt(EmpGroupID);

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadEmpSubGroup',
        async: false,
        data: { EmpGroupID: EmpGroupIDint },
        success: function (EmpSubGroupData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Sub Group"
            }));

            $.each($.parseJSON(EmpSubGroupData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.EmpSubGroupID,
                    text: itemData.EmpSubGroupName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadEmployeeGroup(id, EmpGroupID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadEmployeeGroup',
        async: false,
        data: { SchoolID: 0 },
        success: function (FeeStructureData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Emp Group"
            }));

            $.each($.parseJSON(FeeStructureData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.EmpGroupID,
                    text: itemData.EmpGroupName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadMotherTongue(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadMotherTongue", { SchoolID: 0 },
            function (MotherTongueData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Mother Tongue"
                }));
                $.each($.parseJSON(MotherTongueData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.MotherTongueId,
                        text: itemData.MotherTongueName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadTemplate(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadTemplate", { SchoolID: 0 },
            function (TemplateData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Template"
                }));
                $.each($.parseJSON(TemplateData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.templateId,
                        text: itemData.templateName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadReasonType(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadReasonType", { SchoolID: 0 },
            function (ReasonTypeData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Reason Type"
                }));
                $.each($.parseJSON(ReasonTypeData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.ReasonTypeID,
                        text: itemData.ReasonType
                    }));
                });
                select.val(defaultval);
            });
}

//function LoadPurpose(id, defaultval) {
//    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
//    $.getJSON("../CommonBinder/LoadPurpose", { SchoolID: 0 },
//            function (PurposeData) {
//                var select = $(id);
//                select.empty();
//                select.append($('<option/>', {
//                    value: ddlInitialValue,
//                    text: "Purpose"
//                }));
//                $.each($.parseJSON(PurposeData), function (index, itemData) {

//                    select.append($('<option/>', {
//                        value: itemData.PurposeID,
//                        text: itemData.Purpose
//                    }));
//                });
//                select.val(defaultval);
//            });
//}

function LoadHeadCategory(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadHeadCategory", { SchoolID: 0 },
            function (HeadCategoryData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Head Category"
                }));
                $.each($.parseJSON(HeadCategoryData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.HeadCategoryID,
                        text: itemData.HeadCategory
                    }));
                });
                select.val(defaultval);
            });
}

//***************************** END COMMON BINDER **********************//

/////////////////////////////////////

//***************************** FILTER BINDER **********************//

function LoadHouse(id, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadHouse", { SchoolID: 0 },
            function (HouseData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "House"
                }));
                $.each($.parseJSON(HouseData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.HouseId,
                        text: itemData.HouseName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadSchoolWiseWing(id, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadSchoolWiseWing", { SchoolID: SchoolID },
            function (SchoolWiseWingData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Wing"
                }));
                $.each($.parseJSON(SchoolWiseWingData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.WingId,
                        text: itemData.WingName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadSchoolWiseClass(id, sessionID, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSchoolWiseClass',
        async: false,
        data: { sessionID: sessionID, SchoolID: SchoolID },
        success: function (SchoolWiseClassData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Class"
            }));
            $.each($.parseJSON(SchoolWiseClassData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.ClassID,
                    text: itemData.ClassName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadWingWiseClass(id, sessionID, wingID, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadWingWiseClass',
        async: false,
        data: { sessionID: sessionID, wingID: wingID, SchoolID: SchoolID },
        success: function (WingWiseClassData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Class"
            }));
            $.each($.parseJSON(WingWiseClassData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.ClassID,
                    text: itemData.ClassName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

//load typewisereason

function LoadTypeWiseReason(id, Reasontype, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadTypeWiseReason',
        async: false,
        data: { Reasontype: Reasontype },
        success: function (TypeWiseReason) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Reason"
            }));
            $.each($.parseJSON(TypeWiseReason), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.ReasonID,
                    text: itemData.Reason
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

//end
function LoadBindClassEnquiry(id, sessionID, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadBindClassEnquiry',
        async: false,
        data: { sessionID: sessionID, SchoolID: SchoolID },
        success: function (BindClassEnquiryData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Class"
            }));
            $.each($.parseJSON(BindClassEnquiryData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.ClassID,
                    text: itemData.ClassName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadBindClassRegistration(id, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadBindClassRegistration", { SchoolID: SchoolID },
            function (BindClassRegistrationData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Class"
                }));
                $.each($.parseJSON(BindClassRegistrationData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.ClassID,
                        text: itemData.ClassName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadBindClassAdmission(id, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadBindClassAdmission", { SchoolID: SchoolID },
            function (BindClassAdmissionData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Class"
                }));
                $.each($.parseJSON(BindClassAdmissionData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.ClassID,
                        text: itemData.ClassName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadBindClassAcademic(id, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadBindClassAcademic", { SchoolID: SchoolID },
            function (BindClassAcademicData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Class"
                }));
                $.each($.parseJSON(BindClassAcademicData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.ClassID,
                        text: itemData.ClassName
                    }));
                });
                select.val(defaultval);
            });
}


function LoadBindClassSibling(id, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadBindClassSibling", { SchoolID: SchoolID },
            function (BindClassAcademicData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Class"
                }));
                $.each($.parseJSON(BindClassAcademicData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.ClassID,
                        text: itemData.ClassName
                    }));
                });
                select.val(defaultval);
            });
}
function LoadSchoolWiseSection(id, sessionID, ClassID, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSchoolWiseSection',
        async: false,
        data: { sessionID: sessionID, ClassID: ClassID, SchoolID: SchoolID },
        success: function (SchoolWiseSectionData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Section"
            }));
            $.each($.parseJSON(SchoolWiseSectionData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.SectionId,
                    text: itemData.SectionName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
function LoadSchoolWiseSectionSibling(id, sessionID, ClassID, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSchoolWiseSectionSibling',
        async: false,
        data: { sessionID: sessionID, ClassID: ClassID, SchoolID: SchoolID },
        success: function (SchoolWiseSectionData) {
            var select = $(id);
            select.empty();
            //select.append($('<option/>', {
            //    value: -1,
            //    text: "Section"
            //}
            //));
            $.each($.parseJSON(SchoolWiseSectionData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.SectionId,
                    text: itemData.SectionName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadWingWiseSection(id, wingID, sessionID, ClassID, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadWingWiseSection',
        async: false,
        data: { wingID: wingID, sessionID: sessionID, ClassID: ClassID, SchoolID: SchoolID },
        success: function (WingWiseSectionData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Section"
            }));
            $.each($.parseJSON(WingWiseSectionData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.SectionId,
                    text: itemData.SectionName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

//function LoadSchoolWiseSession(id, SchoolID, defaultval) {
//    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
//    $.getJSON("../CommonBinder/LoadSchoolWiseSession", { SchoolID: SchoolID },
//            function (SchoolWiseSessionData) {
//                var select = $(id);
//                select.empty();
//                select.append($('<option/>', {
//                    value: ddlInitialValue,
//                    text: "Academic Session"
//                }));
//                $.each($.parseJSON(SchoolWiseSessionData), function (index, itemData) {

//                    select.append($('<option/>', {
//                        value: itemData.SessionID,
//                        text: itemData.SessionName
//                    }));
//                });
//                select.val(defaultval);
//            });
//}

function LoadWingWiseSession(id, wingID, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadWingWiseSession',
        async: false,
        data: { wingID: wingID, SchoolID: SchoolID },
        success: function (WingWiseSessionData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Academic Session"
            }));
            $.each($.parseJSON(WingWiseSessionData), function (index, itemData) {
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

function LoadCurrentSessionForEnquiry(id, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadCurrentSessionForEnquiry", { SchoolID: SchoolID },
            function (CurrentSessionForEnquiryData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Academic Session"
                }));
                $.each($.parseJSON(CurrentSessionForEnquiryData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.SessionID,
                        text: itemData.SessionName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadCurrentSessionForRegistration(id, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadCurrentSessionForRegistration", { SchoolID: SchoolID },
            function (CurrentSessionForRegistrationData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Academic Session"
                }));
                $.each($.parseJSON(CurrentSessionForRegistrationData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.SessionID,
                        text: itemData.SessionName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadCurrentSessionForAdmission(id, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadCurrentSessionForAdmission", { SchoolID: SchoolID },
            function (CurrentSessionForAdmissionData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Academic Session"
                }));
                $.each($.parseJSON(CurrentSessionForAdmissionData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.SessionID,
                        text: itemData.SessionName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadCurrentSessionForAcademic(id, SchoolID, defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadCurrentSessionForAcademic", { SchoolID: SchoolID },
            function (CurrentSessionForAcademicData) {

                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Academic Session"
                }));
                $.each($.parseJSON(CurrentSessionForAcademicData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.SessionID,
                        text: itemData.SessionName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadSchoolWiseCFSession(id, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadSchoolWiseCFSession", { SchoolID: SchoolID },
            function (SchoolWiseCFSessionData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Academic Session"
                }));
                $.each($.parseJSON(SchoolWiseCFSessionData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.SessionID,
                        text: itemData.SessionName
                    }));
                });
                select.val(defaultval);
            });
}


function LoadCurrentSessionStudent(id, ClassID, SectionID, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadCurrentSessionStudent',
        async: false,
        data: { ClassID: ClassID, SectionID: SectionID, SchoolID: SchoolID },
        success: function (CurrentSessionStudentData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Student"
            }));
            $.each($.parseJSON(CurrentSessionStudentData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.StudentId,
                    text: itemData.StudentName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}



function LoadCurrentSessionStudentAdm(id, ClassID, SectionID, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadCurrentSessionStudentAdm',
        async: false,
        data: { ClassID: ClassID, SectionID: SectionID, SchoolID: SchoolID },
        success: function (CurrentSessionStudentData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Student"
            }));
            $.each($.parseJSON(CurrentSessionStudentData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.AdmissionNo,
                    text: itemData.StudentName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}



function LoadCurrentSessionStudentAdmSibling(id, ClassID, SectionID, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadCurrentSessionStudentAdmSibling',
        async: false,
        data: { ClassID: ClassID, SectionID: SectionID, SchoolID: SchoolID },
        success: function (CurrentSessionStudentData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Student"
            }));
            $.each($.parseJSON(CurrentSessionStudentData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.AdmissionNo,
                    text: itemData.StudentName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadSessionWiseStudent(id, ClassID, SectionID, sessionID, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSessionWiseStudent',
        async: false,
        data: { ClassID: ClassID, SectionID: SectionID, sessionID: sessionID, SchoolID: SchoolID },
        success: function (SessionWiseStudentData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Student"
            }));
            $.each($.parseJSON(SessionWiseStudentData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.StudentId,
                    text: itemData.StudentName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadSchoolWiseBoard(id, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadSchoolWiseBoard", { SchoolID: SchoolID },
            function (SchoolWiseBoardData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Board"
                }));
                $.each($.parseJSON(SchoolWiseBoardData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.BoardID,
                        text: itemData.Board
                    }));
                });
                select.val(defaultval);
            });
}

function LoadFeeStructure(id, sessionID, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadFeeStructure',
        async: false,
        data: { sessionID: sessionID, SchoolID: SchoolID },
        success: function (FeeStructureData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Fee Structure"
            }));
            $.each($.parseJSON(FeeStructureData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.StructureID,
                    text: itemData.StructureName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadFeeStructureByType(id, sessionID, StructureType, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadFeeStructureByType',
        async: false,
        data: { sessionID: sessionID, StructureType: StructureType, SchoolID: SchoolID },
        success: function (FeeStructureByTypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Fee Structure"
            }));
            $.each($.parseJSON(FeeStructureByTypeData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.StructureID,
                    text: itemData.StructureName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadFeeStructureApproved(id, sessionID, StructureType, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadFeeStructureApproved',
        async: false,
        data: { sessionID: sessionID, StructureType: StructureType, SchoolID: SchoolID },
        success: function (FeeStructureApprovedData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Fee Structure"
            }));
            $.each($.parseJSON(FeeStructureApprovedData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.StructureID,
                    text: itemData.StructureName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadFeeHeadMaster(id, HeadCategory, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadFeeHeadMaster',
        async: false,
        data: { HeadCategory: HeadCategory },
        success: function (FeeHeadMasterData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Fee Head"
            }));
            $.each($.parseJSON(FeeHeadMasterData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.FeeHeadID,
                    text: itemData.FeeHeadName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadPolicyType(id, PolicyType, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPolicyType',
        async: false,
        data: { PolicyType: PolicyType },
        success: function (PolicyTypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Policy"
            }));
            $.each($.parseJSON(PolicyTypeData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.ConcessionPolicyID,
                    text: itemData.ConcessionPolicyName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadOtherPolicyType(id, PolicyType, sessionId, admissionCategoryID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadOtherPolicyType',
        async: false,
        data: { PolicyType: PolicyType, sessionId: sessionId, admissionCategoryID: admissionCategoryID },
        success: function (OtherPolicyTypeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Policy"
            }));
            $.each($.parseJSON(OtherPolicyTypeData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.ConcessionPolicyID,
                    text: itemData.ConcessionPolicyName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadRoute(id, SchoolID, defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadRoute", { SchoolID: SchoolID },
            function (RouteData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Route"
                }));
                $.each($.parseJSON(RouteData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.AreaID,
                        text: itemData.AreaName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadStop(id, RouteId, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadStop", { RouteId: RouteId, SchoolID: SchoolID },
            function (StopData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Pickup Point"
                }));
                $.each($.parseJSON(StopData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.StopID,
                        text: itemData.StopName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadStopDrop(id, RouteId, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadStop", { RouteId: RouteId, SchoolID: SchoolID },
            function (StopData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Drop Point"
                }));
                $.each($.parseJSON(StopData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.StopID,
                        text: itemData.StopName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadRouteWiseVehicle(id, RouteId, SchoolID, defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadRouteWiseVehicle", { RouteId: RouteId, SchoolID: SchoolID },
            function (RouteWiseVehicleData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Vehicle"
                }));
                $.each($.parseJSON(RouteWiseVehicleData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.VehicleID,
                        text: itemData.VehicleName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadGroupWiseEmployee(id, EmpGroupID, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadGroupWiseEmployee", { EmpGroupID: EmpGroupID, SchoolID: SchoolID },
            function (GroupWiseEmployeeData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Employee"
                }));
                $.each($.parseJSON(GroupWiseEmployeeData), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.EmployeeId,
                        text: itemData.Name
                    }));
                });
                select.val(defaultval);
            });
}

//function LoadGroupWiseTransportEmployee(id, EmpGroupID, SchoolID, defaultval) {
//    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
//    $.getJSON("../CommonBinder/LoadGroupWiseTransportEmployee", { EmpGroupID: EmpGroupID, SchoolID: SchoolID },
//            function (GroupWiseEmployeeData) {
//                var select = $(id);
//                select.empty();
//                select.append($('<option/>', {
//                    value: ddlInitialValue,
//                    text: "Employee"
//                }));
//                $.each($.parseJSON(GroupWiseEmployeeData), function (index, itemData) {
//                    select.append($('<option/>', {
//                        value: itemData.EmployeeId,
//                        text: itemData.Name
//                    }));
//                });
//                select.val(defaultval);
//            });
//}


function LoadGroupWiseTransportEmployee(id, EmpGroupID, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadGroupWiseTransportEmployee',
        async: false,
        data: { EmpGroupID: EmpGroupID, SchoolID: SchoolID },
        success: function (GroupWiseEmployeeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Employee"
            }));
            $.each($.parseJSON(GroupWiseEmployeeData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.EmployeeId,
                    text: itemData.Name
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadRegistrationStudent(id, ClassID, Session, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadRegistrationStudent", { ClassID: ClassID, Session: Session, SchoolID: SchoolID },
            function (RegistrationStudentData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Student"
                }));
                $.each($.parseJSON(RegistrationStudentData), function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.RegId,
                        text: itemData.StudentName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadBank(id, SchoolID, defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadBank", { SchoolID: SchoolID },
            function (BankData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Bank"
                }));
                $.each($.parseJSON(BankData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.BankID,
                        text: itemData.BankName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadSchoolWiseStream(id, sessionID, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSchoolWiseStream',
        async: false,
        data: { sessionID: sessionID, SchoolID: SchoolID },
        success: function (SchoolWiseStreamData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Select"
            }));
            $.each($.parseJSON(SchoolWiseStreamData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.StreamID,
                    text: itemData.StreamName
                }));
            });
   
            select.val(defaultval);
            
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadInstallmentDate(id, sessionID, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadInstallmentDate',
        async: false,
        data: { sessionID: sessionID, SchoolID: SchoolID },
        success: function (InstallmentDateData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Installment Date"
            }));
            $.each($.parseJSON(InstallmentDateData), function (index, itemData) {
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

function LoadAdmissionCategoryByClass(id, sessionID, classId, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadAdmissionCategoryByClass',
        async: false,
        data: { sessionID: sessionID, classId: classId, SchoolID: SchoolID },
        success: function (AdmissionCategoryByClassData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Admission Category"
            }));
            $.each($.parseJSON(AdmissionCategoryByClassData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.CategoryID,
                    text: itemData.CategoryName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadStreamByClass(id, sessionID, classId, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadStreamByClass',
        async: false,
        data: { sessionID: sessionID, classId: classId, SchoolID: SchoolID },
        success: function (StreamByClassData) {
            var select = $(id);
            select.empty();
            //select.append($('<option/>', {
            //    value: -1,
            //    text: "Stream"
            //}));
            $.each($.parseJSON(StreamByClassData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.StreamID,
                    text: itemData.StreamName
                }));
            });
            if (defaultval != 'NA') {
                select.val(1);
            }
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadSectionByClass(id, ClassID, SchoolID, defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSectionByClass',
        async: false,
        data: { ClassID: ClassID, SchoolID: SchoolID },
        success: function (SchoolWiseSectionData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Section"
            }));

            $.each($.parseJSON(SchoolWiseSectionData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.SectionId,
                    text: itemData.SectionName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}
function LoadInstallmentDateByStudent(id, sessionID, studentID, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadInstallmentDateByStudent',
        async: false,
        data: { sessionID: sessionID, SchoolID: SchoolID, studentID: studentID },
        success: function (InstallmentDateData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Installment Date"
            }));
            $.each($.parseJSON(InstallmentDateData), function (index, itemData) {
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

function LoadSchoolSessionWiseWing(id, SessionId, SchoolId, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSchoolSessionWiseWing',
        async: false,
        data: { SessionId: SessionId, SchoolId: SchoolId },
        success: function (SchoolSessionWiseWingData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Wing"
            }));
            $.each($.parseJSON(SchoolSessionWiseWingData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.WingId,
                    text: itemData.WingName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadFeeStructureSetup(id, SessionId, SchoolId, WingId, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadFeeStructureSetup',
        async: false,
        data: { SessionId: SessionId, SchoolId: SchoolId, WingId: WingId },
        success: function (FeeStructureSetupData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Fee Type"
            }));
            $.each($.parseJSON(FeeStructureSetupData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.RecordID,
                    text: itemData.FeeType
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadFeeStructureInstallment(id, FeeTypeId, SchoolId, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadFeeStructureInstallment',
        async: false,
        data: { FeeTypeId: FeeTypeId, SchoolId: SchoolId },
        success: function (FeeStructureInstallmentData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Installment Date"
            }));
            $.each($.parseJSON(FeeStructureInstallmentData), function (index, itemData) {
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

function LoadFeeInstallment(id, FeeTypeId, SchoolId, InstallmentDateId, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadFeeInstallment',
        async: false,
        data: { FeeTypeId: FeeTypeId, SchoolId: SchoolId, InstallmentDateId: InstallmentDateId },
        success: function (FeeInstallmentData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: '-1',
                text: "Months"
            }));
            $.each($.parseJSON(FeeInstallmentData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.MonthId,
                    text: itemData.Months
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadStudentBySchoolClass(id, ClassID, SchoolId, SectionID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadStudentBySchoolClass',
        async: false,
        data: { ClassID: ClassID, SectionID: SectionID, SchoolId: SchoolId },
        success: function (StudentBySchoolClassData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: '-1',
                text: "Student"
            }));
            $.each($.parseJSON(StudentBySchoolClassData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.StudentId,
                    text: itemData.StudentName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadSchoolWingWiseClass(id, WingId, SchoolId, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSchoolWingWiseClass',
        async: false,
        data: { WingId: WingId, SchoolId: SchoolId },
        success: function (SchoolWingWiseClassData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: '-1',
                text: "Class"
            }));
            $.each($.parseJSON(SchoolWingWiseClassData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.ClassID,
                    text: itemData.ClassName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadStudentBySectionWithTempRec(id, SessionID, ClassID, SchoolId, SectionID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadStudentBySectionWithTempRec',
        async: false,
        data: { SessionID: SessionID, ClassID: ClassID, SectionID: SectionID, SchoolId: SchoolId },
        success: function (StudentBySchoolClassData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: '-1',
                text: "Student"
            }));
            $.each($.parseJSON(StudentBySchoolClassData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.StudentId,
                    text: itemData.StudentName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadStudentBySectionWithTempRecForRec(id, SessionID, ClassID, SchoolId, SectionID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadStudentBySectionWithTempRecForRec',
        async: false,
        data: { SessionID: SessionID, ClassID: ClassID, SectionID: SectionID, SchoolId: SchoolId },
        success: function (StudentBySchoolClassData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: '-1',
                text: "Student"
            }));
            $.each($.parseJSON(StudentBySchoolClassData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.StudentId,
                    text: itemData.StudentName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadStudentBySectionWithTemp(id, ClassID, SchoolId, SectionID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadStudentBySectionWithTemp',
        async: false,
        data: { ClassID: ClassID, SectionID: SectionID, SchoolId: SchoolId },
        success: function (StudentBySchoolClassData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: '-1',
                text: "Student"
            }));
            $.each($.parseJSON(StudentBySchoolClassData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.StudentId,
                    text: itemData.StudentName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadStudentBySectionWithTempTransport(id, ClassID, SchoolId, SectionID, SessionID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadStudentBySectionWithTempTransport',
        async: false,
        data: { ClassID: ClassID, SectionID: SectionID, SessionId: SessionID, SchoolId: SchoolId },
        success: function (StudentBySchoolClassData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: '-1',
                text: "Student"
            }));
            $.each($.parseJSON(StudentBySchoolClassData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.StudentId,
                    text: itemData.StudentName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadSectionTemp(id, ClassID, SchoolID, SessionId, defaultval) {
    ClassID = typeof ClassID !== 'undefined' ? ClassID : -1;
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSectionTemp',
        async: false,
        data: { ClassID: ClassID, SchoolID: SchoolID, SessionId: SessionId },
        success: function (SchoolWiseSectionData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Temp"
            }));

            $.each($.parseJSON(SchoolWiseSectionData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.SectionId,
                    text: itemData.SectionName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadSectionTempwithOptional(id, ClassID, SchoolID, SessionId, defaultval) {
    ClassID = typeof ClassID !== 'undefined' ? ClassID : -1;
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSectionTemp',
        async: false,
        data: { ClassID: ClassID, SchoolID: SchoolID, SessionId: SessionId },
        success: function (SchoolWiseSectionData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -2,
                text: "Section"
            }));

            select.append($('<option/>', {
                value: -1,
                text: "Temp"
            }));

            $.each($.parseJSON(SchoolWiseSectionData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.SectionId,
                    text: itemData.SectionName
                }));
            });
            select.val(-2);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadChallanInstallmentDate(id, AdmissionNo, SchoolID, defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadChallanInstallmentDate',
        async: false,
        data: { AdmissionNo: AdmissionNo, SchoolID: SchoolID },
        success: function (ChallanInstallmentData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Installment Date"
            }));

            $.each($.parseJSON(ChallanInstallmentData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.InvoiceId,
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


function LoadInstallmentDateIN(id, AdmissionNo, SchoolID, defaultval) {

    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadInstallmentDateIN',
        async: false,
        data: { AdmissionNo: AdmissionNo, SchoolID: SchoolID },
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
//***************************** END FILTER BINDER **********************//



//function LoadSchool(id, defaultval) {
//    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
//    $.getJSON("../CommonBinder/LoadSchool", { SchoolID: 0 },
//            function (SchoolData) {
//                var select = $(id);
//                select.empty();
//                select.append($('<option/>', {
//                    value: ddlInitialValue,
//                    text: "School"
//                }));
//                $.each($.parseJSON(SchoolData), function (index, itemData) {
//                    select.append($('<option/>', {
//                        value: itemData.SchoolID,
//                        text: itemData.SchoolName
//                    }));
//                });
//                select.val(defaultval);
//            });

//}



function LoadSchool(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : '-1';


    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSchool',
        async: false,
        data: { SchoolID: id },
        success: function (SchoolData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "School"
            }));

            $.each($.parseJSON(SchoolData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.SchoolID,
                    text: itemData.SchoolName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}



function LoadSchoolWiseSession(id, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : '-1';
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSchoolWiseSession',
        async: false,
        data: { SchoolID: SchoolID },
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


function LoadSchoolWiseSessionCurr(id, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : '-1';
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSchoolWiseSessionCurr',
        async: false,
        data: { SchoolID: SchoolID },
        success: function (SchoolWiseSessionData) {
            var select = $(id);
            select.empty();


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


function LoadPurpose(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : '-1';
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPurpose',
        async: false,
        data: { SchoolID: 0 },
        success: function (PurposeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Purpose"
            }));

            $.each($.parseJSON(PurposeData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.PurposeID,
                    text: itemData.Purpose
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadSchoolWiseSessionNew(id, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : '-1';
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSchoolWiseSession',
        async: false,
        data: { SchoolID: SchoolID },
        success: function (SchoolWiseSessionData) {
            var select = $(id);
            select.empty();
            $.each($.parseJSON(SchoolWiseSessionData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.SessionID,
                    text: itemData.SessionName
                }));
            });
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}






function LoadSchoolNew(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : '-1';
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSchool',
        async: false,
        data: { SchoolID: 0 },
        success: function (SchoolData) {
            var select = $(id);
            select.empty();
            $.each($.parseJSON(SchoolData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.SchoolID,
                    text: itemData.SchoolName
                }));
            });
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}

function LoadAdmissionCategoryBySession(id, SessionId, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : '-1';
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadAdmissionCategoryBySession',
        async: false,
        data: { SessionId: SessionId, SchoolID: SchoolID },
        success: function (AdmissionCategoryBySessionData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Admission Category"
            }));
            $.each($.parseJSON(AdmissionCategoryBySessionData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.CategoryID,
                    text: itemData.CategoryName
                }));
               
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}



function LoadBoardByRegistration(id, RegId, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : '-1';
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadBoardByRegistration',
        async: false,
        data: { RegId: RegId },
        success: function (BoardByRegistration) {
            var select = $(id);
            select.empty();

            $.each($.parseJSON(BoardByRegistration), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.BoardID,
                    text: itemData.Board
                }));
            });
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}


//function LoadTCReason(id, defaultval) {
//    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
//    $.getJSON("../CommonBinder/LoadTCReason", { SchoolID: 0 },
//            function (LoadTCReasonData) {
//                var select = $(id);
//                select.empty();
//                select.append($('<option/>', {
//                    value: ddlInitialValue,
//                    text: "Reason"
//                }));
//                $.each($.parseJSON(LoadTCReasonData), function (index, itemData) {

//                    select.append($('<option/>', {
//                        value: itemData.ReasonID,
//                        text: itemData.Reason
//                    }));
//                });
//                select.val(defaultval);
//            });
//}



function LoadTCReason(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadTCReason',
        async: false,
        data: { SchoolID: 0 },
        success: function (LoadTCReasonData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: ddlInitialValue,
                text: "Reason"
            }));
            $.each($.parseJSON(LoadTCReasonData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.ReasonID,
                    text: itemData.Reason
                }));
            });
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


function LoadUploadPaymode(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadUploadPaymode',
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
function LoadDropStop(id, RouteId, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.getJSON("../CommonBinder/LoadStop", { RouteId: RouteId, SchoolID: SchoolID },
            function (StopData) {
                var select = $(id);
                select.empty();
                select.append($('<option/>', {
                    value: ddlInitialValue,
                    text: "Drop Point"
                }));
                $.each($.parseJSON(StopData), function (index, itemData) {

                    select.append($('<option/>', {
                        value: itemData.StopID,
                        text: itemData.StopName
                    }));
                });
                select.val(defaultval);
            });
}

function LoadStudentRecord(id, AdmissionNo, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadStudentRecord',
        async: false,
        data: { SchoolID: 0, AdmissionNo: AdmissionNo },
        success: function (StudentData) {


            $('#idHF').val(StudentData);

        },
        error: function () {
            return "";
        }

    });

}


function LoadAdmissionNo(StudentID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadAdmissionNo',
        async: false,
        data: { SchoolID: 0, StudentID: StudentID },
        success: function (StudentData) {

            $('#AdmissionNo').val(StudentData);

        },
        error: function () {
            return "";
        }

    });

}

function LoadSessionWiseStudentWithAdm(id, ClassID, SectionID, sessionID, SchoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSessionWiseStudentWithAdm',
        async: false,
        data: { ClassID: ClassID, SectionID: SectionID, sessionID: sessionID, SchoolID: SchoolID },
        success: function (SessionWiseStudentData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Student"
            }));
            $.each($.parseJSON(SessionWiseStudentData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.StudentId,
                    text: itemData.StudentName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}



function disableButton(id) {
    $('#' + id).attr('disabled', true);
}

//function autoCompleteByStudent(id) {
//    $('#tags').autocomplete(
//       {
//           source: '@Url.Action("TagSearch", "Home")'
//       });
//}

function LoadPromotionClass(id, ClassID, sessionID, schoolID, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadPromotionClass',
        async: false,
        data: { ClassID: ClassID, sessionID: sessionID, SchoolID: schoolID },
        success: function (PromotionClassData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Class To"
            }));
            $.each($.parseJSON(PromotionClassData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.ClassID,
                    text: itemData.ClassName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


function LoadSchoolMultiple(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : '-1';

    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadSchool',
        async: false,
        data: { SchoolID: id },
        success: function (SchoolData) {
            var select = $(id);
            //console.log(SchoolData);
            $.each($.parseJSON(SchoolData), function (index, itemData) {
                select.append(new Option(itemData.SchoolName, itemData.SchoolID));

            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }
    });

}


//*******************Export To Excel*********************************************//

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
        var blobURL = tableToExcel(export_data, filename);
        $('#btnExport').attr('download', filename + '.xls')
        $('#btnExport').attr('href', blobURL);
    }
    //return (sa);

    //////////**********Account *************************

    
}



function LoadVendor(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadVendor',
        async: false,
        data: { SchoolID: 0 },
        success: function (LoadRecPaymodeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: '',
                text: "Select"
            }));
            $.each($.parseJSON(LoadRecPaymodeData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.No_,
                    text: itemData.No_
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}



function LoadGLAccount(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadGLAccount',
        async: false,
        data: { SchoolID: 0 },
        success: function (LoadRecPaymodeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: '',
                text: "Select"
            }));
            $.each($.parseJSON(LoadRecPaymodeData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.No_,
                    text: itemData.No_
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}



function LoadNavBankAccount(id, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadNavBankAccount',
        async: false,
        data: { SchoolID: 0 },
        success: function (LoadRecPaymodeData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: '',
                text: "Select"
            }));
            $.each($.parseJSON(LoadRecPaymodeData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.No_,
                    text: itemData.No_
                }));
            });
            select.val(defaultval);
        },
        error: function (errorData) {
            console.log(errorData);
        }
    });
}

function LoadClassesStreamWise(id, schoolid ,streamvalue, sessionid, defaultval) {
    defaultval = typeof defaultval !== 'undefined' ? defaultval : -1;
    $.ajax({
        type: 'GET',
        url: '../CommonBinder/LoadClassesStreamWise',
        async: false,
        data: { schoolid:schoolid, streamid: streamvalue, sessionid: sessionid },
        success: function (classData) {
            var select = $(id);
            select.empty();
            select.append($('<option/>', {
                value: -1,
                text: "Class"
            }));
            $.each($.parseJSON(classData), function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.ClassID,
                    text: itemData.ClassName
                }));
            });
            select.val(defaultval);

        },
        error: function (errorData) {
            console.log(errorData);
        }

    })
}