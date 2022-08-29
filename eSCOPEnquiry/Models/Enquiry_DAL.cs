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
                cmd.Parameters.AddWithValue("@Session", EnqBal.Session);
                cmd.Parameters.AddWithValue("@BranchID", EnqBal.TradeID);
                cmd.Parameters.AddWithValue("@ProgramType", EnqBal.ProgramType);
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
                com.Parameters.AddWithValue("@SubSource", eqb.SubSource);
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
        public DataSet GetEnqRegistrationData(Enquiry_BAL LibBal)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("Crm_EnquiryMaster_Online", constring);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@optMode", LibBal.optMode);
                da.SelectCommand.Parameters.AddWithValue("@EnquiryNo", LibBal.EnquiryNo);
                da.SelectCommand.Parameters.Add("@msgOut", SqlDbType.VarChar, 50);
                da.SelectCommand.Parameters.Add("@Result", SqlDbType.Int);
                da.SelectCommand.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                da.SelectCommand.Parameters["@Result"].Direction = ParameterDirection.Output;
                DataSet dt = new DataSet();
                da.Fill(dt);
                return dt;

            }
        }

        public void CRUD_Registration(Enquiry_BAL RegBal, out string msgOutCaller, out int ResultCaller, out string EnquiryCallOuter, out string RegCallOuter)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {

                SqlCommand cmd = new SqlCommand("Crm_NewRegistration_Crud", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@ClientID", RegBal.ClientID);
                cmd.Parameters.AddWithValue("@SocietyID", RegBal.SocietyID);
                cmd.Parameters.AddWithValue("@InstituteID", RegBal.InstituteID);
                cmd.Parameters.AddWithValue("@SessionID", RegBal.SessionID);
                cmd.Parameters.AddWithValue("@BranchID", RegBal.BranchID);
                cmd.Parameters.AddWithValue("@ProgramID", RegBal.ProgramID);
                cmd.Parameters.AddWithValue("@EnquiryID", RegBal.EnquiryID);
                cmd.Parameters.AddWithValue("@EnquiryNo", RegBal.EnquiryNo);
                cmd.Parameters.AddWithValue("@RegID", RegBal.RegistrationID);
                cmd.Parameters.AddWithValue("@StudentID", RegBal.StudentID);
                cmd.Parameters.AddWithValue("@Student_Title", RegBal.Trainee_Title);
                cmd.Parameters.AddWithValue("@Student_FirstName", RegBal.Trainee_FirstName.Trim());
                cmd.Parameters.AddWithValue("@Student_MiddleName", RegBal.Trainee_MiddleName);
                cmd.Parameters.AddWithValue("@Student_LastName", RegBal.Trainee_LastName);
                cmd.Parameters.AddWithValue("@GenderID", RegBal.GenderID);
                cmd.Parameters.AddWithValue("@Student_MobileNo", RegBal.MobileNo);
                cmd.Parameters.AddWithValue("@AlternateMobNo", RegBal.AlternateMobNo);
                cmd.Parameters.AddWithValue("@DateOfBirth", RegBal.DateOfBirth);
                //cmd.Parameters.AddWithValue("@ImageID",RegBal.ImageID);
                //cmd.Parameters.AddWithValue("@ImageName",RegBal.ImageName);
                //cmd.Parameters.AddWithValue("@ImageUrl",RegBal.ImageUrl);
                cmd.Parameters.AddWithValue("@EmailID", RegBal.EmailID);
                cmd.Parameters.AddWithValue("@AadharCard", RegBal.AadharNo);
                cmd.Parameters.AddWithValue("@PassportNo", RegBal.PassportNo);
                cmd.Parameters.AddWithValue("@BloodGroup", RegBal.Blood);
                cmd.Parameters.AddWithValue("@CategoryID", RegBal.CategoryID);
                cmd.Parameters.AddWithValue("@SubCategoryID", RegBal.SubCategory);
                cmd.Parameters.AddWithValue("@Caste", RegBal.Caste);
                cmd.Parameters.AddWithValue("@ReligionID", RegBal.ReligionID);
                cmd.Parameters.AddWithValue("@MaritalStatus", RegBal.MartialID);
                cmd.Parameters.AddWithValue("@SCVTNo", RegBal.SCVTNo);
                cmd.Parameters.AddWithValue("@NCVTNo", RegBal.NCVTNo);
                cmd.Parameters.AddWithValue("@SpouseTitle", RegBal.Spouse_Title);
                cmd.Parameters.AddWithValue("@Spouse_FirstName", RegBal.Spouse_FirstName);
                cmd.Parameters.AddWithValue("@Spouse_MiddleName", RegBal.Spouse_MiddleName);
                cmd.Parameters.AddWithValue("@Spouse_LastName", RegBal.Spouse_LastName);
                cmd.Parameters.AddWithValue("@Spouse_MobileNo", RegBal.Spouse_MobileNo);
                cmd.Parameters.AddWithValue("@Spouse_EmailID", RegBal.Spouse_EmailID);
                cmd.Parameters.AddWithValue("@IsDisabled", RegBal.IsDisabled);
                cmd.Parameters.AddWithValue("@DisabledDescription", RegBal.Description);
                cmd.Parameters.AddWithValue("@ReferenceType", RegBal.ReferenceType);
                cmd.Parameters.AddWithValue("@ReferenceNo", RegBal.RefNo);
                cmd.Parameters.AddWithValue("@ReferenceName", RegBal.RefName);
                cmd.Parameters.AddWithValue("@ReferenceMobNo", RegBal.RefMobileNo);
                cmd.Parameters.AddWithValue("@AgencyID", RegBal.AgencyID);
                cmd.Parameters.AddWithValue("@FatherID", RegBal.FatherID);
                cmd.Parameters.AddWithValue("@Father_Title", RegBal.Father_Title);
                cmd.Parameters.AddWithValue("@Father_FirstName", RegBal.Father_FirstName);
                cmd.Parameters.AddWithValue("@Father_MiddleName", RegBal.Father_MiddleName);
                cmd.Parameters.AddWithValue("@Father_LastName", RegBal.Father_LastName);
                cmd.Parameters.AddWithValue("@Father_MobileNo", RegBal.Father_MobileNo);
                cmd.Parameters.AddWithValue("@Father_EmailID", RegBal.FatherEmailID);
                cmd.Parameters.AddWithValue("@MotherID", RegBal.MotherID);
                cmd.Parameters.AddWithValue("@Mother_Title", RegBal.Mother_Title);
                cmd.Parameters.AddWithValue("@Mother_FirstName", RegBal.Mother_FirstName);
                cmd.Parameters.AddWithValue("@Mother_MiddleName", RegBal.Mother_MiddleName);
                cmd.Parameters.AddWithValue("@Mother_LastName", RegBal.Mother_LastName);
                cmd.Parameters.AddWithValue("@Mother_MobileNo", RegBal.Mother_MobileNo);
                cmd.Parameters.AddWithValue("@Mother_EmailID", RegBal.Mother_Email);
                cmd.Parameters.AddWithValue("@GuardianID", RegBal.Guardian_Id);
                cmd.Parameters.AddWithValue("@Guardian_Title", RegBal.Guardian_Title);
                cmd.Parameters.AddWithValue("@Guardian_FirstName", RegBal.Guardian_FirstName);
                cmd.Parameters.AddWithValue("@Guardian_MiddleName", RegBal.Guardian_MiddleName);
                cmd.Parameters.AddWithValue("@Guardian_LastName", RegBal.Guardian_LastName);
                cmd.Parameters.AddWithValue("@Guardian_MobileNo", RegBal.Guardian_MobileNo);
                cmd.Parameters.AddWithValue("@Guardian_EmailID", RegBal.Guardian_EmailID);
                cmd.Parameters.AddWithValue("@Guardian_Relation", RegBal.Guardian_RelationShip);
                cmd.Parameters.AddWithValue("@CorrespondenceAddressID", RegBal.AddressID);
                cmd.Parameters.AddWithValue("@Correspondence_Address", RegBal.Address.Trim());
                cmd.Parameters.AddWithValue("@Correspondence_Country", RegBal.CountryID);
                cmd.Parameters.AddWithValue("@Correspondence_State", RegBal.StateID);
                cmd.Parameters.AddWithValue("@Correspondence_City", RegBal.CityID);
                cmd.Parameters.AddWithValue("@Correspondence_Pincode", RegBal.PinCode);
                cmd.Parameters.AddWithValue("@CorrespondenceArea", RegBal.Area);

                cmd.Parameters.AddWithValue("@PermanentAddressID", RegBal.Permanent_AddressId);

                if (RegBal.AddressCheck == "Yes")
                {
                    cmd.Parameters.AddWithValue("@Permanent_Address", RegBal.Address.Trim());
                    cmd.Parameters.AddWithValue("@Permanent_Country", RegBal.CountryID);
                    cmd.Parameters.AddWithValue("@Permanent_State", RegBal.StateID);
                    cmd.Parameters.AddWithValue("@Permanent_City", RegBal.CityID);
                    cmd.Parameters.AddWithValue("@Permanent_Pincode", RegBal.PinCode);
                    cmd.Parameters.AddWithValue("@PermanentArea", RegBal.Area);
                }
                else
                {
                    cmd.Parameters.AddWithValue("@Permanent_Address", RegBal.PermanentAddress);
                    cmd.Parameters.AddWithValue("@Permanent_Country", RegBal.Permanant_CountryID);
                    cmd.Parameters.AddWithValue("@Permanent_State", RegBal.Permanant_StateID);
                    cmd.Parameters.AddWithValue("@Permanent_City", RegBal.Permanant_CityID);
                    cmd.Parameters.AddWithValue("@Permanent_Pincode", RegBal.Permanant_PinCode);
                    cmd.Parameters.AddWithValue("@PermanentArea", RegBal.PermanantArea);
                }

                cmd.Parameters.AddWithValue("@BatchID", RegBal.BatchID);
                cmd.Parameters.AddWithValue("@FormNo", RegBal.FormNo);

                cmd.Parameters.AddWithValue("@IsLateral", RegBal.RequiredLateral);

                cmd.Parameters.AddWithValue("@StudentNameInReligiousLan", RegBal.Student_ReligionName);
                cmd.Parameters.AddWithValue("@MobileNoCode", RegBal.MobileNoCode == null ? "+91" : RegBal.MobileNoCode);
                cmd.Parameters.AddWithValue("@AlternateMobileNoCode", RegBal.AlterNateNoCode == null ? "+91" : RegBal.AlterNateNoCode);
                cmd.Parameters.AddWithValue("@NameInReligiousLangF", RegBal.Father_ReligiousName);
                cmd.Parameters.AddWithValue("@MobileNoCodeParF", RegBal.FatherMobileNoCode == null ? "+91" : RegBal.FatherMobileNoCode);
                cmd.Parameters.AddWithValue("@NameInReligiousLangM", RegBal.Mother_ReligiousName);
                cmd.Parameters.AddWithValue("@MobileNoCodeParM", RegBal.MotherMobileNoCode == null ? "+91" : RegBal.MotherMobileNoCode);
                cmd.Parameters.AddWithValue("@AddressInfoInReligiousLang", RegBal.CorAddressReligious);
                cmd.Parameters.AddWithValue("@HostelReq", RegBal.HostelReq);
                cmd.Parameters.AddWithValue("@TransportReq", RegBal.TransportReq);



                cmd.Parameters.AddWithValue("@StudentImage", RegBal.ImageName);
                cmd.Parameters.AddWithValue("@StudentImageURL", RegBal.ImageUrl);
                cmd.Parameters.AddWithValue("@StudentSign", RegBal.StudentSignName);
                cmd.Parameters.AddWithValue("@StudentSignURL", RegBal.StudentSignURL);
                cmd.Parameters.AddWithValue("@RegAmount", RegBal.Amount_Received);

                cmd.Parameters.AddWithValue("@PresentStatus", RegBal.ApplicantStatus);
                cmd.Parameters.AddWithValue("@ExamMedium", RegBal.ExamMedium);
                cmd.Parameters.AddWithValue("@ExamStatus", RegBal.ExamStatus);
                cmd.Parameters.AddWithValue("@nationality", RegBal.NationalityID);
                cmd.Parameters.AddWithValue("@BackGround", RegBal.BackGRound);

                if (RegBal.ExamTable != null)
                {
                    if (RegBal.ExamTable.Rows.Count > 0)
                    {
                        cmd.Parameters.AddWithValue("@dt", RegBal.ExamTable);
                    }
                }


                if (RegBal.DocsTable != null)
                {
                    if (RegBal.DocsTable.Rows.Count > 0)
                    {
                        cmd.Parameters.AddWithValue("@Data", RegBal.DocsTable);
                    }
                }

                cmd.Parameters.AddWithValue("@Remark", RegBal.Remarks);

                cmd.Parameters.AddWithValue("@EnteredBy", RegBal.EnteredBy);
                cmd.Parameters.AddWithValue("@IpAddress", RegBal.IpAddress);
                cmd.Parameters.AddWithValue("@McAddress", RegBal.McAddress);
                cmd.Parameters.AddWithValue("@HostName", RegBal.HostName);
                //cmd.Parameters.AddWithValue("@optMode",RegBal.optMode);
                cmd.Parameters.Add("@msgOut", SqlDbType.VarChar, 50);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters.Add("@EnquiryMsgs", SqlDbType.VarChar, 50);
                cmd.Parameters.Add("@RegMsgs", SqlDbType.VarChar, 50);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                cmd.Parameters["@EnquiryMsgs"].Direction = ParameterDirection.Output;
                cmd.Parameters["@RegMsgs"].Direction = ParameterDirection.Output;

                try
                {
                    con.Open();
                    int a = cmd.ExecuteNonQuery();
                    ResultCaller = Convert.ToInt32(cmd.Parameters["@Result"].Value);
                    msgOutCaller = (cmd.Parameters["@msgOut"].Value).ToString();
                    EnquiryCallOuter = (cmd.Parameters["@EnquiryMsgs"].Value).ToString();
                    RegCallOuter = (cmd.Parameters["@RegMsgs"].Value).ToString();


                }

                catch (Exception ex)
                {
                    msgOutCaller = ex.ToString();
                    ResultCaller = -1;
                    EnquiryCallOuter = ex.ToString();
                    RegCallOuter = ex.ToString();
                }

            }
        }
        public void UpdateCRUD_Registration(Enquiry_BAL RegBal, out string msgOutCaller, out int ResultCaller, out string EnquiryCallOuter, out string RegCallOuter)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {

                SqlCommand cmd = new SqlCommand("Crm_Registration_CrudUpdate", con);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@EnquiryID", RegBal.EnquiryID);
                cmd.Parameters.AddWithValue("@EnquiryNo", RegBal.EnquiryNo);
                cmd.Parameters.AddWithValue("@RegID", RegBal.RegistrationID);
                cmd.Parameters.AddWithValue("@StudentID", RegBal.StudentID);
                cmd.Parameters.AddWithValue("@Student_Title", RegBal.Trainee_Title);
                cmd.Parameters.AddWithValue("@Student_FirstName", RegBal.Trainee_FirstName.Trim());
                cmd.Parameters.AddWithValue("@Student_MiddleName", RegBal.Trainee_MiddleName);
                cmd.Parameters.AddWithValue("@Student_LastName", RegBal.Trainee_LastName);
                cmd.Parameters.AddWithValue("@GenderID", RegBal.GenderID);
                cmd.Parameters.AddWithValue("@Student_MobileNo", RegBal.MobileNo);
                cmd.Parameters.AddWithValue("@AlternateMobNo", RegBal.AlternateMobNo);
                cmd.Parameters.AddWithValue("@DateOfBirth", RegBal.DateOfBirth);
                cmd.Parameters.AddWithValue("@EmailID", RegBal.EmailID);
                cmd.Parameters.AddWithValue("@AadharCard", RegBal.AadharNo);
                cmd.Parameters.AddWithValue("@PassportNo", RegBal.PassportNo);
                cmd.Parameters.AddWithValue("@BloodGroup", RegBal.Blood);
                cmd.Parameters.AddWithValue("@CategoryID", RegBal.CategoryID);
                cmd.Parameters.AddWithValue("@SubCategoryID", RegBal.SubCategory);
                cmd.Parameters.AddWithValue("@Caste", RegBal.Caste);
                cmd.Parameters.AddWithValue("@ReligionID", RegBal.ReligionID);
                cmd.Parameters.AddWithValue("@MaritalStatus", RegBal.MartialID);
                cmd.Parameters.AddWithValue("@SCVTNo", RegBal.SCVTNo);
                cmd.Parameters.AddWithValue("@NCVTNo", RegBal.NCVTNo);
                cmd.Parameters.AddWithValue("@SpouseTitle", RegBal.Spouse_Title);
                cmd.Parameters.AddWithValue("@Spouse_FirstName", RegBal.Spouse_FirstName);
                cmd.Parameters.AddWithValue("@Spouse_MiddleName", RegBal.Spouse_MiddleName);
                cmd.Parameters.AddWithValue("@Spouse_LastName", RegBal.Spouse_LastName);
                cmd.Parameters.AddWithValue("@Spouse_MobileNo", RegBal.Spouse_MobileNo);
                cmd.Parameters.AddWithValue("@Spouse_EmailID", RegBal.Spouse_EmailID);
                cmd.Parameters.AddWithValue("@IsDisabled", RegBal.IsDisabled);
                cmd.Parameters.AddWithValue("@DisabledDescription", RegBal.Description);
                cmd.Parameters.AddWithValue("@ReferenceType", RegBal.ReferenceType);
                cmd.Parameters.AddWithValue("@ReferenceNo", RegBal.RefNo);
                cmd.Parameters.AddWithValue("@ReferenceName", RegBal.RefName);
                cmd.Parameters.AddWithValue("@ReferenceMobNo", RegBal.RefMobileNo);
                cmd.Parameters.AddWithValue("@AgencyID", RegBal.AgencyID);
                cmd.Parameters.AddWithValue("@FatherID", RegBal.FatherID);
                cmd.Parameters.AddWithValue("@Father_Title", RegBal.Father_Title);
                cmd.Parameters.AddWithValue("@Father_FirstName", RegBal.Father_FirstName);
                cmd.Parameters.AddWithValue("@Father_MiddleName", RegBal.Father_MiddleName);
                cmd.Parameters.AddWithValue("@Father_LastName", RegBal.Father_LastName);
                cmd.Parameters.AddWithValue("@Father_MobileNo", RegBal.Father_MobileNo);
                cmd.Parameters.AddWithValue("@Father_EmailID", RegBal.FatherEmailID);
                cmd.Parameters.AddWithValue("@MotherID", RegBal.MotherID);
                cmd.Parameters.AddWithValue("@Mother_Title", RegBal.Mother_Title);
                cmd.Parameters.AddWithValue("@Mother_FirstName", RegBal.Mother_FirstName);
                cmd.Parameters.AddWithValue("@Mother_MiddleName", RegBal.Mother_MiddleName);
                cmd.Parameters.AddWithValue("@Mother_LastName", RegBal.Mother_LastName);
                cmd.Parameters.AddWithValue("@Mother_MobileNo", RegBal.Mother_MobileNo);
                cmd.Parameters.AddWithValue("@Mother_EmailID", RegBal.Mother_Email);
                cmd.Parameters.AddWithValue("@GuardianID", RegBal.Guardian_Id);
                cmd.Parameters.AddWithValue("@Guardian_Title", RegBal.Guardian_Title);
                cmd.Parameters.AddWithValue("@Guardian_FirstName", RegBal.Guardian_FirstName);
                cmd.Parameters.AddWithValue("@Guardian_MiddleName", RegBal.Guardian_MiddleName);
                cmd.Parameters.AddWithValue("@Guardian_LastName", RegBal.Guardian_LastName);
                cmd.Parameters.AddWithValue("@Guardian_MobileNo", RegBal.Guardian_MobileNo);
                cmd.Parameters.AddWithValue("@Guardian_EmailID", RegBal.Guardian_EmailID);
                cmd.Parameters.AddWithValue("@Guardian_Relation", RegBal.Guardian_RelationShip);
                cmd.Parameters.AddWithValue("@CorrespondenceAddressID", RegBal.AddressID);
                cmd.Parameters.AddWithValue("@Correspondence_Address", RegBal.Address.Trim());
                cmd.Parameters.AddWithValue("@Correspondence_Country", RegBal.CountryID);
                cmd.Parameters.AddWithValue("@Correspondence_State", RegBal.StateID);
                cmd.Parameters.AddWithValue("@Correspondence_City", RegBal.CityID);
                cmd.Parameters.AddWithValue("@Correspondence_Pincode", RegBal.PinCode);
                cmd.Parameters.AddWithValue("@CorrespondenceArea", RegBal.Area);
                cmd.Parameters.AddWithValue("@HostelReq", RegBal.HostelReq);
                cmd.Parameters.AddWithValue("@TransportReq", RegBal.TransportReq);
                cmd.Parameters.AddWithValue("@nationality", RegBal.NationalityID);
                cmd.Parameters.AddWithValue("@BackGround", RegBal.BackGRound);
                cmd.Parameters.AddWithValue("@Remark", RegBal.Remarks);
                cmd.Parameters.AddWithValue("@EnteredBy", RegBal.EnteredBy);
                cmd.Parameters.AddWithValue("@IpAddress", RegBal.IpAddress);
                cmd.Parameters.AddWithValue("@McAddress", RegBal.McAddress);
                cmd.Parameters.AddWithValue("@HostName", RegBal.HostName);
                cmd.Parameters.AddWithValue("@NameInReligiousLangF", RegBal.Father_ReligiousName);
                cmd.Parameters.AddWithValue("@MobileNoCodeParF", RegBal.FatherMobileNoCode == null ? "+91" : RegBal.FatherMobileNoCode);
                cmd.Parameters.AddWithValue("@NameInReligiousLangM", RegBal.Mother_ReligiousName);
                cmd.Parameters.AddWithValue("@MobileNoCodeParM", RegBal.MotherMobileNoCode == null ? "+91" : RegBal.MotherMobileNoCode);
                cmd.Parameters.AddWithValue("@AddressInfoInReligiousLang", RegBal.CorAddressReligious);
                //cmd.Parameters.AddWithValue("@optMode",RegBal.optMode);
                cmd.Parameters.Add("@msgOut", SqlDbType.VarChar, 50);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters.Add("@EnquiryMsgs", SqlDbType.VarChar, 50);
                cmd.Parameters.Add("@RegMsgs", SqlDbType.VarChar, 50);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                cmd.Parameters["@EnquiryMsgs"].Direction = ParameterDirection.Output;
                cmd.Parameters["@RegMsgs"].Direction = ParameterDirection.Output;

                try
                {
                    con.Open();
                    int a = cmd.ExecuteNonQuery();
                    ResultCaller = Convert.ToInt32(cmd.Parameters["@Result"].Value);
                    msgOutCaller = (cmd.Parameters["@msgOut"].Value).ToString();
                    EnquiryCallOuter = (cmd.Parameters["@EnquiryMsgs"].Value).ToString();
                    RegCallOuter = (cmd.Parameters["@RegMsgs"].Value).ToString();


                }

                catch (Exception ex)
                {
                    msgOutCaller = ex.ToString();
                    ResultCaller = -1;
                    EnquiryCallOuter = ex.ToString();
                    RegCallOuter = ex.ToString();
                }

            }
        }


    }
}
