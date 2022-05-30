using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Globalization;
using eSCOPEnquiry_HLM.Models;

namespace eSCOPEnquiry_HLM.Models
{
    [Serializable]
    public class BindersForDropdown_DAL
    {
        CultureInfo ci = new CultureInfo("en-GB");
        private IConfiguration Configuration;
        string conCommon = String.Empty;
        public BindersForDropdown_DAL()
        {

        }
        public BindersForDropdown_DAL(IConfiguration configuration)
        {
            Configuration = configuration;
            conCommon = Configuration.GetConnectionString("DefaultConnection");
        }

        public DataSet getCommonBindersListForSemester(BindersForDropdown_BAL BDLBAL)
        {
            using (SqlConnection con = new SqlConnection(conCommon))
            {
                SqlDataAdapter da = new SqlDataAdapter("CMSP_BinderWithFilter_2", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@OptMode", BDLBAL.UserinfoDetails.optMode);
                da.SelectCommand.Parameters.AddWithValue("@BranchId", BDLBAL.BranchID);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }

        public DataSet getCommonBindersListForShiftNo(BindersForDropdown_BAL BDLBAL)
        {
            using (SqlConnection con = new SqlConnection(conCommon))
            {
                SqlDataAdapter da = new SqlDataAdapter("CMSP_BinderWithFilter_2", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@OptMode", BDLBAL.UserinfoDetails.optMode);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }
        public DataSet getCommonBindersListForAdmissinStatus(BindersForDropdown_BAL BDLBAL)
        {
            using (SqlConnection con = new SqlConnection(conCommon))
            {
                SqlDataAdapter da = new SqlDataAdapter("CMSP_BinderWithFilter_2", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@OptMode", BDLBAL.UserinfoDetails.optMode);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }
        public DataSet getUser_Inrole(BindersForDropdown_BAL BDLBAL)
        {
            using (SqlConnection con = new SqlConnection(conCommon))
            {
                SqlDataAdapter da = new SqlDataAdapter("GetFeeUsers_collectionReport", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@Institute", BDLBAL.InstituteID);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }

        public DataSet getCommonBindersList(BindersForDropdown_BAL BDLBAL)
        {
            using (SqlConnection con = new SqlConnection(conCommon))
            {
                SqlDataAdapter da = new SqlDataAdapter("CMSP_BinderWithFilter", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@groupID", BDLBAL.groupID);
                da.SelectCommand.Parameters.AddWithValue("@SubgroupID", BDLBAL.SubgroupID);
                da.SelectCommand.Parameters.AddWithValue("@DepartmentID", BDLBAL.DepartmentID);
                da.SelectCommand.Parameters.AddWithValue("@DesignationID", BDLBAL.DesignationID);
                da.SelectCommand.Parameters.AddWithValue("@Employee_TypeID", BDLBAL.Employee_TypeID);
                da.SelectCommand.Parameters.AddWithValue("@ParentCategoryID", BDLBAL.ParentCategoryID);
                da.SelectCommand.Parameters.AddWithValue("@ExpenseType", BDLBAL.ExpenseType);
                da.SelectCommand.Parameters.AddWithValue("@EmpNo", BDLBAL.EmployeeNo);
                da.SelectCommand.Parameters.AddWithValue("@ClientID", BDLBAL.ClientID);
                da.SelectCommand.Parameters.AddWithValue("@CountryID", BDLBAL.CountryID);
                da.SelectCommand.Parameters.AddWithValue("@CompanyID", BDLBAL.CompanyID);
                da.SelectCommand.Parameters.AddWithValue("@StateID", BDLBAL.StateID);
                da.SelectCommand.Parameters.AddWithValue("@CityID", BDLBAL.CityID);
                da.SelectCommand.Parameters.AddWithValue("@Date", Convert.ToDateTime(BDLBAL.Date, ci).Date);
                da.SelectCommand.Parameters.AddWithValue("@EnquirySourceID", BDLBAL.EnquirySourceID);
                da.SelectCommand.Parameters.AddWithValue("@ProgramID", BDLBAL.ProgramID);
                da.SelectCommand.Parameters.AddWithValue("@InstituteID", BDLBAL.InstituteID);
                da.SelectCommand.Parameters.AddWithValue("@InstituteName", BDLBAL.InstituteName);
                da.SelectCommand.Parameters.AddWithValue("@SemesterID", BDLBAL.SemesterID);
                da.SelectCommand.Parameters.AddWithValue("@SessionID", BDLBAL.SessionID);
                da.SelectCommand.Parameters.AddWithValue("@TradeID", BDLBAL.TradeID);
                da.SelectCommand.Parameters.AddWithValue("@ShiftID", BDLBAL.ShiftID);
                da.SelectCommand.Parameters.AddWithValue("@BatchID", BDLBAL.BatchID);
                da.SelectCommand.Parameters.AddWithValue("@Headcategory", BDLBAL.HeadCategory);
                da.SelectCommand.Parameters.AddWithValue("@ReasonType", BDLBAL.ReasonType);
                da.SelectCommand.Parameters.AddWithValue("@AdmissionNo", BDLBAL.AdmissionNo);
                da.SelectCommand.Parameters.AddWithValue("@TypeSearch", BDLBAL.TypeSearch);
                da.SelectCommand.Parameters.AddWithValue("@EnteredBy", BDLBAL.UserinfoDetails.EnteredBy);
                da.SelectCommand.Parameters.AddWithValue("@optMode", BDLBAL.UserinfoDetails.optMode);
                da.SelectCommand.Parameters.AddWithValue("@GradePatternID", BDLBAL.GradingPatternId);
                da.SelectCommand.Parameters.AddWithValue("@BranchID", BDLBAL.BranchID);
                da.SelectCommand.Parameters.AddWithValue("@SubjectID", BDLBAL.SubjectId);
                da.SelectCommand.Parameters.AddWithValue("@CategoryID", BDLBAL.ParentCategoryID);
                da.SelectCommand.Parameters.AddWithValue("@ExamType", BDLBAL.ExamType);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }

        public DataSet getMainCategoryBindersList(BindersForDropdown_BAL BDLBAL)
        {
            using (SqlConnection con = new SqlConnection(conCommon))
            {
                SqlDataAdapter da = new SqlDataAdapter("CMSP_BinderWithFilter", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@OptMode", BDLBAL.UserinfoDetails.optMode);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }

        public DataSet getinventoryList(BindersForDropdown_BAL BDLBAL)
        {
            using (SqlConnection con = new SqlConnection(conCommon))
            {
                SqlDataAdapter da = new SqlDataAdapter("CMSP_BinderWithFilter_2", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@OptMode", BDLBAL.UserinfoDetails.optMode);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }

        public DataSet getinventorystudent(BindersForDropdown_BAL BDLBAL)
        {
            using (SqlConnection con = new SqlConnection(conCommon))
            {
                SqlDataAdapter da = new SqlDataAdapter("CMSP_BinderWithFilter_2", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@OptMode", BDLBAL.UserinfoDetails.optMode);
                da.SelectCommand.Parameters.AddWithValue("@ProgramID", BDLBAL.ProgramID);
                da.SelectCommand.Parameters.AddWithValue("@InstituteID", BDLBAL.InstituteID);
                da.SelectCommand.Parameters.AddWithValue("@BatchID", BDLBAL.BatchID);
                da.SelectCommand.Parameters.AddWithValue("@InstituteName", BDLBAL.InstituteName);
                da.SelectCommand.Parameters.AddWithValue("@SemesterID", BDLBAL.SemesterID);
                da.SelectCommand.Parameters.AddWithValue("@SessionID", BDLBAL.SessionID);
                da.SelectCommand.Parameters.AddWithValue("@TradeID", BDLBAL.TradeID);
                da.SelectCommand.Parameters.AddWithValue("@EnteredBy", BDLBAL.UserinfoDetails.EnteredBy);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }
        public DataSet GetSchemeList(BindersForDropdown_BAL BDLBAL)
        {
            using (SqlConnection con = new SqlConnection(conCommon))
            {
                SqlDataAdapter da = new SqlDataAdapter("CMSP_BinderWithFilter", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@ReasonType", BDLBAL.ReasonType);
                da.SelectCommand.Parameters.AddWithValue("@CityID", BDLBAL.CityID);
                da.SelectCommand.Parameters.AddWithValue("@optMode", BDLBAL.UserinfoDetails.optMode);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }
    }
}