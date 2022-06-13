using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Globalization;
using eSCOPEnquiry.Models;

namespace eSCOPEnquiry.Models
{
    public class Enquiry_DAL
    {
        CultureInfo ci = new CultureInfo("en-GB");
        string constring = String.Empty;
        public Enquiry_DAL(string conCommon)
        {
            constring = conCommon;
        }
        public void CRUD_Enquiry(Enquiry_BAL EnqBal, out int ResultCaller, out string msgOutCaller)
        {
            DataSet ds = new DataSet();
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Crm_EnquiryMaster_Online", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@ClientID", EnqBal.ClientID);
                cmd.Parameters.AddWithValue("@EnquiryID", EnqBal.EnquiryID);
                cmd.Parameters.AddWithValue("@SocietyID", EnqBal.SocietyID);
                cmd.Parameters.AddWithValue("@InstituteID", EnqBal.InstituteID);
                cmd.Parameters.AddWithValue("@SessionID", EnqBal.SessionID);
                cmd.Parameters.AddWithValue("@BranchID", EnqBal.TradeID);
                cmd.Parameters.AddWithValue("@ProgramID", EnqBal.ProgramID);
                cmd.Parameters.AddWithValue("@EnquiryNo", EnqBal.EnquiryNo);
                cmd.Parameters.AddWithValue("@StudentID", EnqBal.StudentID);
                cmd.Parameters.AddWithValue("@Student_Title", EnqBal.Student_Title);
                cmd.Parameters.AddWithValue("@Student_FirstName", EnqBal.Student_FirstName.Trim());
                cmd.Parameters.AddWithValue("@Student_MiddleName", EnqBal.Student_MiddleName);
                cmd.Parameters.AddWithValue("@Student_LastName", EnqBal.Student_LastName);
                cmd.Parameters.AddWithValue("@GenderID", EnqBal.GenderID);
                cmd.Parameters.AddWithValue("@MobileNo", EnqBal.MobileNo);
                cmd.Parameters.AddWithValue("@AlternateMobNo", EnqBal.AlternateMobNo);
                cmd.Parameters.AddWithValue("@DateOfBirth", EnqBal.Student_Dob);
                cmd.Parameters.AddWithValue("@ImageID", EnqBal.ImageID);
                cmd.Parameters.AddWithValue("@ImageName", EnqBal.ImageName);
                cmd.Parameters.AddWithValue("@ImageUrl", EnqBal.ImageUrl);
                cmd.Parameters.AddWithValue("@EmailID", EnqBal.EmailID);
                cmd.Parameters.AddWithValue("@CategoryID", EnqBal.CategoryID);
                cmd.Parameters.AddWithValue("@Caste", EnqBal.Caste);
                cmd.Parameters.AddWithValue("@ReligionID", EnqBal.ReligionID);
                cmd.Parameters.AddWithValue("@AddressID", EnqBal.AddressID);
                cmd.Parameters.AddWithValue("@FatherID", EnqBal.FatherID);
                cmd.Parameters.AddWithValue("@EnquirySourceID", EnqBal.EnquirySourceID);
                cmd.Parameters.AddWithValue("@EnquirySubSourceID", EnqBal.EnquirySubSourceID);
                cmd.Parameters.AddWithValue("@Notes", EnqBal.Notes);
                cmd.Parameters.AddWithValue("@ReferenceType", EnqBal.ReferenceType);
                cmd.Parameters.AddWithValue("@ReferenceNo", EnqBal.RefNo);
                cmd.Parameters.AddWithValue("@ReferenceName", EnqBal.RefName);
                cmd.Parameters.AddWithValue("@ReferenceMobNo", EnqBal.RefMobileNo);
                cmd.Parameters.AddWithValue("@AgencyID", EnqBal.AgencyID);
                cmd.Parameters.AddWithValue("@Father_Title", EnqBal.Father_Title);
                cmd.Parameters.AddWithValue("@Father_FirstName", EnqBal.Father_FirstName);
                cmd.Parameters.AddWithValue("@Father_MiddleName", EnqBal.Father_MiddleName);
                cmd.Parameters.AddWithValue("@Father_LastName", EnqBal.Father_LastName);
                cmd.Parameters.AddWithValue("@Father_MobileNo", EnqBal.Father_MobileNo);
                cmd.Parameters.AddWithValue("@Father_Email", EnqBal.F_Email);
                cmd.Parameters.AddWithValue("@ProfileImageName", EnqBal.ImageName);
                cmd.Parameters.AddWithValue("@ProfileImageURL", EnqBal.ImageUrl);
                cmd.Parameters.AddWithValue("@MotherID", EnqBal.MotherID);
                cmd.Parameters.AddWithValue("@Mother_Title", EnqBal.Mother_Title);
                cmd.Parameters.AddWithValue("@Mother_FirstName", EnqBal.Mother_FirstName);
                cmd.Parameters.AddWithValue("@Mother_MiddleName", EnqBal.Mother_MiddleName);
                cmd.Parameters.AddWithValue("@Mother_LastName", EnqBal.Mother_LastName);
                cmd.Parameters.AddWithValue("@Mother_MobileNo", EnqBal.Mother_MobileNo);
                cmd.Parameters.AddWithValue("@AadharCard", EnqBal.AadharNo);
                cmd.Parameters.AddWithValue("@EnteredBy", EnqBal.EnteredBy);
                cmd.Parameters.AddWithValue("@IpAddress", EnqBal.IpAddress);
                cmd.Parameters.AddWithValue("@McAddress", EnqBal.McAddress);
                cmd.Parameters.AddWithValue("@HostName", EnqBal.HostName);
                cmd.Parameters.AddWithValue("@optMode", EnqBal.optMode);
                cmd.Parameters.Add("@msgOut", SqlDbType.VarChar, 50);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                try
                {
                    con.Open();
                    int a = cmd.ExecuteNonQuery();
                    ResultCaller = Convert.ToInt32(cmd.Parameters["@Result"].Value);
                    msgOutCaller = (cmd.Parameters["@msgOut"].Value).ToString();
                }

                catch (Exception ex)
                {
                    msgOutCaller = ex.ToString();
                    ResultCaller = -1;
                }
            }
        }

        public int SaveEnquirySession(Enquiry_BAL eqb, out int ResultCaller, out string msgOutCaller)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand com = new SqlCommand("Crm_EnquiryMaster_Online", con);
                com.CommandType = CommandType.StoredProcedure;
                con.Open();
                com.Parameters.AddWithValue("@Session", eqb.Session);
                com.Parameters.AddWithValue("@Source", eqb.Source);
                com.Parameters.AddWithValue("@Code", eqb.SubSource);
                com.Parameters.AddWithValue("@optMode", eqb.optMode);
                com.Parameters.Add("@msgOut", SqlDbType.VarChar, 100);
                com.Parameters.Add("@Result", SqlDbType.Int);
                com.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                com.Parameters["@Result"].Direction = ParameterDirection.Output;
                int result = Convert.ToInt32(com.ExecuteNonQuery());
                msgOutCaller = com.Parameters["@msgOut"].Value.ToString();
                ResultCaller = Convert.ToInt32(com.Parameters["@Result"].Value);
                return result;
            }
        }

        public DataSet Reg_Validate(Enquiry_BAL bal)
        {
            int result = 0;
            string msg = string.Empty;
            DataSet theds = new DataSet();
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand com = new SqlCommand("regAddition_Validate", con);
                com.CommandType = CommandType.StoredProcedure;
                com.Parameters.AddWithValue("@Student_FirstName", bal.Student_FirstName);
                com.Parameters.AddWithValue("@Student_Dob", Convert.ToDateTime(bal.Student_Dob, ci));
                com.Parameters.AddWithValue("@Father_MobileNo", bal.FMobileNo);
                com.Parameters.AddWithValue("@optMode", bal.optMode);
                SqlDataAdapter theadapter = new SqlDataAdapter(com);
                theds = new DataSet();
                theadapter.Fill(theds);
                con.Close();
                return theds;
            }
        }
        public string sendSMS(Enquiry_BAL SmSdetail)
        {
            string msgOutCaller = "";
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("SendSMS", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@number", SmSdetail.FMobileNo);
                cmd.Parameters.AddWithValue("@schoolid", SmSdetail.SchoolId);
                cmd.Parameters.AddWithValue("@userid", SmSdetail.HostName);
                cmd.Parameters.AddWithValue("@EnqNo", SmSdetail.EnqNo);
                cmd.Parameters.AddWithValue("@RegId", SmSdetail.RegNo);
                cmd.Parameters.AddWithValue("@Mode", SmSdetail.smsMode);
                cmd.Parameters.Add("@retstatus", SqlDbType.VarChar, 250);
                cmd.Parameters["@retstatus"].Direction = ParameterDirection.Output;
                try
                {
                    con.Open();
                    int a = cmd.ExecuteNonQuery();
                    con.Close();
                }
                catch (Exception ex)
                {
                }
                msgOutCaller = "";
            }
            return msgOutCaller;
        }
    }
}
