
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace eSCOPEnquiry.Models
{
    [Serializable]
    public class BindersForDropdown_BAL
    {
        private CommonValues_BAL objGetList = new CommonValues_BAL();
        private BindersForDropdown_DAL commDAL;
        System.Globalization.CultureInfo ci = new System.Globalization.CultureInfo("en-GB");

        public BindersForDropdown_BAL(string conCommon)
        {
            ParentCategoryID = -1;
            CountryID = -1;
            StateID = -1;
            CityID = -1;
            EnquirySourceID = -1;
            ProgramID = -1;
            SessionID = -1;
            SemesterID = -1;
            TradeID = -1;
            CompanyID = -1;
            ShiftID = -1;
            ReasonType = "";
            AdmissionNo = "";
            Date = Convert.ToDateTime("01/01/1900", ci).Date;
            ExpenseType = "-1";
            EmployeeNo = "";
            groupID = -1;
            SubgroupID = -1;
            DepartmentID = -1;
            DesignationID = -1;
            Employee_TypeID = -1;
            GradingPatternId = -1;
            BranchID = -1;
            SubjectId = -1;
            Value = "";
            InstituteName = "";
            TypeSearch = "";
            HeadCategory = "";
            commDAL = new BindersForDropdown_DAL(conCommon);
        }
        public long ExamType { get; set; }
        public long SubjectId { get; set; }
        public string Value { get; set; }
        public long GradingPatternId { get; set; }
        public long groupID { get; set; }
        public long SubgroupID { get; set; }
        public long DepartmentID { get; set; }
        public long DesignationID { get; set; }
        public long Employee_TypeID { get; set; }
        public string EmployeeNo { get; set; }
        public long ParentCategoryID { get; set; }
        public DateTime Date { get; set; }
        public string AdmissionNo { get; set; }
        public long CountryID { get; set; }
        public long CompanyID { get; set; }
        public long StateID { get; set; }
        public long CityID { get; set; }
        public long EnquirySourceID { get; set; }
        public int ClientID { get; set; }
        public long SocietyID { get; set; }
        public long InstituteID { get; set; }
        public string InstituteName { get; set; }
        public long ProgramID { get; set; }
        public long BranchID { get; set; }
        public long SessionID { get; set; }
        public long SemesterID { get; set; }
        public long ShiftID { get; set; }
        public string ReasonType { get; set; }
        public long TradeID { get; set; }
        public string TypeSearch { get; set; }
        public string HeadCategory { get; set; }
        public string ExpenseType { get; set; }
        public long BatchID { get; set; }

        public UserInfo UserinfoDetails = new UserInfo();

        public DataSet getBindersList(BindersForDropdown_BAL commBAL)
        {
            DataSet ds = new DataSet();
            ds = commDAL.getCommonBindersList(commBAL);
            return ds;
        }
    }
}

