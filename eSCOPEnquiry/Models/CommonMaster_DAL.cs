using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;

namespace eSCOPEnquiry.Models
{
    public class CommonMaster_DAL
    {
        private IConfiguration Configuration;
        string constring = String.Empty;
        public CommonMaster_DAL()
        {

        }
        public CommonMaster_DAL(IConfiguration configuration)
        {
            Configuration = configuration;
            constring = Configuration.GetConnectionString("DefaultConnection");
        }

        public List<CommonMaster_BAL> Get_Nationality()
        {
            List<CommonMaster_BAL> cmblist = new List<CommonMaster_BAL>();
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("Get_Nationality", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                DataSet ds = new DataSet();
                da.Fill(ds);
                if (ds.Tables.Count > 0)
                {
                    for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                    {
                        CommonMaster_BAL cbl = new CommonMaster_BAL();
                        cbl.NationalityID = Convert.ToInt32(ds.Tables[0].Rows[i]["NationalityID"] is DBNull ? -1 : ds.Tables[0].Rows[i]["NationalityID"]);
                        cbl.NationalityName = Convert.ToString(ds.Tables[0].Rows[i]["NationalityName"] is DBNull ? "N/A" : ds.Tables[0].Rows[i]["NationalityName"]);
                        cmblist.Add(cbl);
                    }
                }
                return cmblist;
            }
        }
        public List<CommonMaster_BAL> Get_Profession()
        {
            List<CommonMaster_BAL> cmblist = new List<CommonMaster_BAL>();
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("Get_Profession", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                DataSet ds = new DataSet();
                da.Fill(ds);
                if (ds.Tables.Count > 0)
                {
                    for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                    {
                        CommonMaster_BAL cbl = new CommonMaster_BAL();
                        cbl.ProfessionID = Convert.ToInt32(ds.Tables[0].Rows[i]["ProfessionID"] is DBNull ? -1 : ds.Tables[0].Rows[i]["ProfessionID"]);
                        cbl.Profession = Convert.ToString(ds.Tables[0].Rows[i]["Profession"] is DBNull ? "N/A" : ds.Tables[0].Rows[i]["Profession"]);
                        cmblist.Add(cbl);
                    }
                }
                return cmblist;
            }
        }
        public List<CommonMaster_BAL> Get_Designation()
        {
            List<CommonMaster_BAL> cmblist = new List<CommonMaster_BAL>();
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("Get_Designation", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                DataSet ds = new DataSet();
                da.Fill(ds);
                if (ds.Tables.Count > 0)
                {
                    for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                    {
                        CommonMaster_BAL cbl = new CommonMaster_BAL();
                        cbl.DesignationID = Convert.ToInt32(ds.Tables[0].Rows[i]["DesignationID"] is DBNull ? -1 : ds.Tables[0].Rows[i]["DesignationID"]);
                        cbl.Designation = Convert.ToString(ds.Tables[0].Rows[i]["Designation"] is DBNull ? "N/A" : ds.Tables[0].Rows[i]["Designation"]);
                        cmblist.Add(cbl);
                    }
                }
                return cmblist;
            }
        }
        public List<CommonMaster_BAL> Get_Qualification()
        {
            List<CommonMaster_BAL> cmblist = new List<CommonMaster_BAL>();
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("Get_Qualification", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                DataSet ds = new DataSet();
                da.Fill(ds);
                if (ds.Tables.Count > 0)
                {
                    for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                    {
                        CommonMaster_BAL cbl = new CommonMaster_BAL();
                        cbl.QualificationID = Convert.ToInt32(ds.Tables[0].Rows[i]["QualificationID"] is DBNull ? -1 : ds.Tables[0].Rows[i]["QualificationID"]);
                        cbl.Qualification = Convert.ToString(ds.Tables[0].Rows[i]["Qualification"] is DBNull ? "N/A" : ds.Tables[0].Rows[i]["Qualification"]);
                        cmblist.Add(cbl);
                    }
                }
                return cmblist;
            }
        }
        public List<CommonMaster_BAL> Get_IncomeGroup()
        {
            List<CommonMaster_BAL> cmblist = new List<CommonMaster_BAL>();
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("Get_IncomeGroup", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                DataSet ds = new DataSet();
                da.Fill(ds);
                if (ds.Tables.Count > 0)
                {
                    for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                    {
                        CommonMaster_BAL cbl = new CommonMaster_BAL();
                        cbl.IncomeGroupID = Convert.ToInt32(ds.Tables[0].Rows[i]["IncomeGroupID"] is DBNull ? -1 : ds.Tables[0].Rows[i]["IncomeGroupID"]);
                        cbl.IncomeGroup = Convert.ToString(ds.Tables[0].Rows[i]["IncomeGroup"] is DBNull ? "N/A" : ds.Tables[0].Rows[i]["IncomeGroup"]);
                        cmblist.Add(cbl);
                    }
                }
                return cmblist;
            }
        }
        public List<CommonMaster_BAL> Get_EnquirySource()
        {
            List<CommonMaster_BAL> cmblist = new List<CommonMaster_BAL>();
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("Get_EnquirySource", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                DataSet ds = new DataSet();
                da.Fill(ds);
                if (ds.Tables.Count > 0)
                {
                    for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                    {
                        CommonMaster_BAL cbl = new CommonMaster_BAL();
                        cbl.EnquirySourceID = Convert.ToInt32(ds.Tables[0].Rows[i]["EnquirySourceID"] is DBNull ? -1 : ds.Tables[0].Rows[i]["EnquirySourceID"]);
                        cbl.EnquirySource = Convert.ToString(ds.Tables[0].Rows[i]["EnquirySource"] is DBNull ? "N/A" : ds.Tables[0].Rows[i]["EnquirySource"]);
                        cmblist.Add(cbl);
                    }
                }
                return cmblist;
            }
        }
        public int Update_Qualification(string qualification, string modifyBy, Nullable<System.DateTime> modifyDate, string ipAddress, string mcAddress, string hostName, int qualificationID)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Update_Qualification", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@QualificationID", qualificationID);
                cmd.Parameters.AddWithValue("@Qualification", qualification.Trim());
                cmd.Parameters.AddWithValue("@IpAddress ", ipAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress ", mcAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", hostName.Trim());
                cmd.Parameters.AddWithValue("@ModifyBy", modifyBy.Trim());
                cmd.Parameters.AddWithValue("@ModifyDate", modifyDate);
                con.Open();
                int a = cmd.ExecuteNonQuery();
                return a;
            }
        }
        public int Update_Profession(string profession, string modifyBy, Nullable<System.DateTime> modifyDate, string ipAddress, string mcAddress, string hostName, int professionID)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Update_Profession", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@ProfessionID", professionID);
                cmd.Parameters.AddWithValue("@Profession", profession.Trim());
                cmd.Parameters.AddWithValue("@IpAddress ", ipAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress ", mcAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", hostName.Trim());
                cmd.Parameters.AddWithValue("@ModifyBy", modifyBy.Trim());
                cmd.Parameters.AddWithValue("@ModifyDate", modifyDate);
                con.Open();
                int a = cmd.ExecuteNonQuery();
                return a;
            }
        }

        public int Update_Designation(string designation, string modifyBy, Nullable<System.DateTime> modifyDate, string ipAddress, string mcAddress, string hostName, int designationID)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Update_Designation", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@DesignationID", designationID);
                cmd.Parameters.AddWithValue("@Designation", designation.Trim());
                cmd.Parameters.AddWithValue("@IpAddress ", ipAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress ", mcAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", hostName.Trim());
                cmd.Parameters.AddWithValue("@ModifyBy", modifyBy.Trim());
                cmd.Parameters.AddWithValue("@ModifyDate", modifyDate);
                con.Open();
                int a = cmd.ExecuteNonQuery();
                return a;
            }
        }


        public int Update_EnquirySource(string enquirySource, Nullable<bool> setasDefault, string modifyBy, Nullable<System.DateTime> modifyDate, string ipAddress, string mcAddress, string hostName, int enquirySourceID)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Update_EnquirySource", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@EnquirySourceID", enquirySourceID);
                cmd.Parameters.AddWithValue("@EnquirySource", enquirySource.Trim());
                cmd.Parameters.AddWithValue("@IpAddress ", ipAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress ", mcAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", hostName.Trim());
                cmd.Parameters.AddWithValue("@ModifyBy", modifyBy.Trim());
                cmd.Parameters.AddWithValue("@ModifyDate", modifyDate);
                cmd.Parameters.AddWithValue("@SetasDefault", setasDefault);
                con.Open();
                int a = cmd.ExecuteNonQuery();
                return a;
            }
        }

        public int Update_IncomeGroupMaster(string incomeGroup, Nullable<bool> setasDefault, string modifyBy, Nullable<System.DateTime> modifyDate, string ipAddress, string mcAddress, string hostName, int incomeGroupID)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Update_IncomeGroupMaster", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@IncomeGroupID", incomeGroupID);
                cmd.Parameters.AddWithValue("@IncomeGroup", incomeGroup.Trim());
                cmd.Parameters.AddWithValue("@IpAddress ", ipAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress ", mcAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", hostName.Trim());
                cmd.Parameters.AddWithValue("@ModifyBy", modifyBy.Trim());
                cmd.Parameters.AddWithValue("@ModifyDate", modifyDate);
                cmd.Parameters.AddWithValue("@SetasDefault", setasDefault);
                con.Open();
                int a = cmd.ExecuteNonQuery();
                return a;
            }
        }


        public int Update_NationalityMaster(string nationalityName, string modifyBy, Nullable<System.DateTime> modifyDate, string ipAddress, string mcAddress, string hostName, int nationalityID)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Update_NationalityMaster", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@NationalityID", nationalityID);
                cmd.Parameters.AddWithValue("@NationalityName", nationalityName.Trim());
                cmd.Parameters.AddWithValue("@IpAddress ", ipAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress ", mcAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", hostName.Trim());
                cmd.Parameters.AddWithValue("@ModifyBy", modifyBy.Trim());
                cmd.Parameters.AddWithValue("@ModifyDate", modifyDate);
                con.Open();
                int a = cmd.ExecuteNonQuery();
                return a;
            }
        }

        public int Save_NationalityMaster(string nationalityName, string enteredBy, Nullable<System.DateTime> entryDate, string modifyBy, Nullable<System.DateTime> modifyDate, string ipAddress, string mcAddress, string hostName, out int nationalityID)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Save_NationalityMaster", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@NationalityName", nationalityName.Trim());
                cmd.Parameters.AddWithValue("@IpAddress ", ipAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress ", mcAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", hostName.Trim());
                cmd.Parameters.AddWithValue("@ModifyBy", modifyBy.Trim());
                cmd.Parameters.AddWithValue("@ModifyDate", modifyDate);
                cmd.Parameters.AddWithValue("@EnteredBy", enteredBy.Trim());
                cmd.Parameters.AddWithValue("@EntryDate", entryDate);
                cmd.Parameters.Add("@NationalityID", SqlDbType.Int);
                cmd.Parameters["@NationalityID"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                nationalityID = Convert.ToInt32(cmd.Parameters["@NationalityID"].Value);
                return nationalityID;
            }
        }

        public int Save_Qualification(out int qualificationID, string qualification, string enteredBy, Nullable<System.DateTime> entryDate, string modifyBy, Nullable<System.DateTime> modifyDate, string ipAddress, string mcAddress, string hostName)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Save_Qualification", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Qualification", qualification.Trim());
                cmd.Parameters.AddWithValue("@IpAddress ", ipAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress ", mcAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", hostName.Trim());
                cmd.Parameters.AddWithValue("@ModifyBy", modifyBy.Trim());
                cmd.Parameters.AddWithValue("@ModifyDate", modifyDate);
                cmd.Parameters.AddWithValue("@EnteredBy", enteredBy.Trim());
                cmd.Parameters.AddWithValue("@EntryDate", entryDate);
                cmd.Parameters.Add("@QualificationID", SqlDbType.Int);
                cmd.Parameters["@QualificationID"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                qualificationID = Convert.ToInt32(cmd.Parameters["@QualificationID"].Value);
                return qualificationID;
            }
        }

        public int Save_Profession(out int professionID, string profession, string enteredBy, Nullable<System.DateTime> entryDate, string modifyBy, Nullable<System.DateTime> modifyDate, string ipAddress, string mcAddress, string hostName)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Save_Profession", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Profession", profession.Trim());
                cmd.Parameters.AddWithValue("@IpAddress ", ipAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress ", mcAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", hostName.Trim());
                cmd.Parameters.AddWithValue("@ModifyBy", modifyBy.Trim());
                cmd.Parameters.AddWithValue("@ModifyDate", modifyDate);
                cmd.Parameters.AddWithValue("@EnteredBy", enteredBy.Trim());
                cmd.Parameters.AddWithValue("@EntryDate", entryDate);
                cmd.Parameters.Add("@ProfessionID", SqlDbType.Int);
                cmd.Parameters["@ProfessionID"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                professionID = Convert.ToInt32(cmd.Parameters["@ProfessionID"].Value);
                return professionID;
            }
        }

        public int Save_Designation(out int designationID, string designation, string enteredBy, Nullable<System.DateTime> entryDate, string modifyBy, Nullable<System.DateTime> modifyDate, string ipAddress, string mcAddress, string hostName)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Save_Designation", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Designation", designation.Trim());
                cmd.Parameters.AddWithValue("@IpAddress ", ipAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress ", mcAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", hostName.Trim());
                cmd.Parameters.AddWithValue("@ModifyBy", modifyBy.Trim());
                cmd.Parameters.AddWithValue("@ModifyDate", modifyDate);
                cmd.Parameters.AddWithValue("@EnteredBy", enteredBy.Trim());
                cmd.Parameters.AddWithValue("@EntryDate", entryDate);
                cmd.Parameters.Add("@DesignationID", SqlDbType.Int);
                cmd.Parameters["@DesignationID"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                designationID = Convert.ToInt32(cmd.Parameters["@DesignationID"].Value);
                return designationID;
            }
        }

        public int Save_EnquirySource(out int enquirySourceID, string enquirySource, Nullable<bool> setasDefault, string enteredBy, Nullable<System.DateTime> entryDate, string modifyBy, Nullable<System.DateTime> modifyDate, string ipAddress, string mcAddress, string hostName)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Save_EnquirySource", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@EnquirySource", enquirySource.Trim());
                cmd.Parameters.AddWithValue("@IpAddress ", ipAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress ", mcAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", hostName.Trim());
                cmd.Parameters.AddWithValue("@ModifyBy", modifyBy.Trim());
                cmd.Parameters.AddWithValue("@ModifyDate", modifyDate);
                cmd.Parameters.AddWithValue("@EnteredBy", enteredBy.Trim());
                cmd.Parameters.AddWithValue("@EntryDate", entryDate);
                cmd.Parameters.AddWithValue("@SetasDefault", setasDefault);
                cmd.Parameters.Add("@EnquirySourceID", SqlDbType.Int);
                cmd.Parameters["@EnquirySourceID"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                enquirySourceID = Convert.ToInt32(cmd.Parameters["@EnquirySourceID"].Value);
                return enquirySourceID;
            }
        }

        public int Save_IncomeGroupMaster(out int incomeGroupID, string incomeGroup, Nullable<bool> setasDefault, string enteredBy, Nullable<System.DateTime> entryDate, string modifyBy, Nullable<System.DateTime> modifyDate, string ipAddress, string mcAddress, string hostName)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Save_IncomeGroupMaster", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@IncomeGroup", incomeGroup.Trim());
                cmd.Parameters.AddWithValue("@IpAddress ", ipAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress ", mcAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", hostName.Trim());
                cmd.Parameters.AddWithValue("@ModifyBy", modifyBy.Trim());
                cmd.Parameters.AddWithValue("@ModifyDate", modifyDate);
                cmd.Parameters.AddWithValue("@EnteredBy", enteredBy.Trim());
                cmd.Parameters.AddWithValue("@EntryDate", entryDate);
                cmd.Parameters.AddWithValue("@SetasDefault", setasDefault);
                cmd.Parameters.Add("@IncomeGroupID", SqlDbType.Int);
                cmd.Parameters["@IncomeGroupID"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                incomeGroupID = Convert.ToInt32(cmd.Parameters["@IncomeGroupID"].Value);
                return incomeGroupID;
            }
        }

        public void Delete_Qualification(Nullable<int> qualificationID, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Delete_Qualification", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@QualificationID", qualificationID);
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public void Delete_Profession(Nullable<int> professionID, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Delete_Profession", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@ProfessionID", professionID);
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }


        public void Delete_Designation(Nullable<int> DesignationID, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Delete_Designation", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@DesignationID", DesignationID);
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public void Delete_EnquirySource(Nullable<int> EnquirySourceID, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Delete_EnquirySource", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@EnquirySourceID", EnquirySourceID);
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public void Delete_IncomeGroup(Nullable<int> IncomeGroupID, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Delete_IncomeGroup", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@IncomeGroupID", IncomeGroupID);
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public void Delete_NationalityMaster(Nullable<int> NationalityID, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Delete_NationalityMaster", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@NationalityID", NationalityID);
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public void Save_Purpose(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Save_Purpose", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@PurposeID", obj.PurposeID);
                cmd.Parameters.AddWithValue("@Purpose", obj.Purpose.Trim());

                cmd.Parameters.AddWithValue("@sendSMS", obj.sendSMS);
                cmd.Parameters.AddWithValue("@sendEmail", obj.sendEmail);
                cmd.Parameters.AddWithValue("@smsText", obj.smsText.Trim());
                cmd.Parameters.AddWithValue("@eMailSubject", obj.eMailSubject.Trim());
                cmd.Parameters.AddWithValue("@EmailText", obj.EmailText.Trim());

                cmd.Parameters.AddWithValue("@EnteredBy", obj.EnteredBy.Trim());
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", obj.HostName.Trim());
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }
        public void Update_Purpose(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Update_Purpose", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@PurposeID", obj.PurposeID);
                cmd.Parameters.AddWithValue("@Purpose", obj.Purpose.Trim());
                cmd.Parameters.AddWithValue("@sendSMS", obj.sendSMS);
                cmd.Parameters.AddWithValue("@sendEmail", obj.sendEmail);
                cmd.Parameters.AddWithValue("@smsText", obj.smsText.Trim());
                cmd.Parameters.AddWithValue("@eMailSubject", obj.eMailSubject.Trim());
                cmd.Parameters.AddWithValue("@EmailText", obj.EmailText.Trim());
                cmd.Parameters.AddWithValue("@ModifyBy", obj.ModifyBy.Trim());
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", obj.HostName.Trim());
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public void Delete_Purpose(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Delete_Purpose", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@PurposeID", obj.PurposeID);
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }
        public DataTable Get_Purpose()
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("Get_Purpose", con);               
                DataTable dt = new DataTable();
                da.Fill(dt);
                return dt;
            }
        }

        public DataSet Get_templateDetails()
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("Get_Template", con);
                DataSet dt = new DataSet();
                da.Fill(dt);
                return dt;
            }
        }

        public DataTable Get_PurposeByID(CommonMaster_BAL obj)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("Get_PurposeByID", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@purposeID",obj.PurposeID);
                DataTable dt = new DataTable();
                da.Fill(dt);
                return dt;
            }
        }
        public void Save_Reason(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("cmspReason_Crud", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@ReasonID", obj.ReasonID);
                cmd.Parameters.AddWithValue("@Reason", obj.Reason.Trim());
                cmd.Parameters.AddWithValue("@ReasonType", obj.ResonType.Trim());
                cmd.Parameters.AddWithValue("@EnteredBy", obj.EnteredBy);
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress);
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress);
                cmd.Parameters.AddWithValue("@HostName", obj.HostName);
                cmd.Parameters.AddWithValue("@optMode", obj.optMode);
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public void Update_Reason(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Update_Reason", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@ReasonID", obj.ReasonID);
                cmd.Parameters.AddWithValue("@Reason", obj.Reason.Trim());
                cmd.Parameters.AddWithValue("@ModifyBy", obj.ModifyBy.Trim());
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", obj.HostName.Trim());
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public void Delete_Reason(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Delete_Reason", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@ReasonID", obj.ReasonID);
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }
        public DataSet Get_Reason(CommonMaster_BAL obj)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("cmspReason_Select", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@optMode", obj.optMode);
                da.SelectCommand.Parameters.AddWithValue("@ReasonID", obj.ReasonID);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }

        public void Save_Department(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Save_Department", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@DepartmentID", obj.DepartmentID);
                cmd.Parameters.AddWithValue("@Department", obj.Department.Trim());
                cmd.Parameters.AddWithValue("@EnteredBy", obj.EnteredBy.Trim());
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", obj.HostName.Trim());
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public void Update_Department(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Update_Department", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@DepartmentID", obj.DepartmentID);
                cmd.Parameters.AddWithValue("@Department", obj.Department.Trim());
                cmd.Parameters.AddWithValue("@ModifyBy", obj.ModifyBy.Trim());
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", obj.HostName.Trim());
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public void Delete_Department(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("Delete_Department", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@DepartmentID", obj.DepartmentID);
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }
        public DataTable Get_Department()
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("Get_Department", con);
                DataTable dt = new DataTable();
                da.Fill(dt);
                return dt;
            }
        }

        public void EnquirySubsource_CRUD(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("EnquirySubsource_CRUD", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@EnquirySourceID", obj.EnquirySourceID);
                cmd.Parameters.AddWithValue("@EnquirySubSourceID", obj.EnquirySubSourceID);
                cmd.Parameters.AddWithValue("@EnquirySubSource", obj.EnquirySubSource.Trim());
                cmd.Parameters.AddWithValue("@EnteredBy", obj.EnteredBy.Trim());
                cmd.Parameters.AddWithValue("@ModifyBy", obj.EnteredBy.Trim());
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", obj.HostName.Trim());
                cmd.Parameters.AddWithValue("@optMode", obj.optMode.Trim());
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public List<CommonMaster_BAL> Get_EnquirySubSourceMaster(CommonMaster_BAL cbls)
        {
            List<CommonMaster_BAL> cmblist = new List<CommonMaster_BAL>();
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("Get_EnquirySubSourceMaster", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@EnquirySourceID", cbls.EnquirySourceID);
                da.SelectCommand.Parameters.AddWithValue("@EnquirySubSourceID", cbls.EnquirySubSourceID);
                DataSet ds = new DataSet();
                da.Fill(ds);
                if (ds.Tables.Count > 0)
                {
                    for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                    {
                        CommonMaster_BAL cbl = new CommonMaster_BAL();
                        cbl.EnquirySourceID = Convert.ToInt32(ds.Tables[0].Rows[i]["EnquirySourceID"] is DBNull ? -1 : ds.Tables[0].Rows[i]["EnquirySourceID"]);
                        cbl.EnquirySubSourceID = Convert.ToInt32(ds.Tables[0].Rows[i]["EnquirySubSourceID"] is DBNull ? -1 : ds.Tables[0].Rows[i]["EnquirySubSourceID"]);
                        cbl.EnquirySource = Convert.ToString(ds.Tables[0].Rows[i]["EnquirySource"] is DBNull ? "N/A" : ds.Tables[0].Rows[i]["EnquirySource"]);
                        cbl.EnquirySubSource = Convert.ToString(ds.Tables[0].Rows[i]["EnquirySubSource"] is DBNull ? "N/A" : ds.Tables[0].Rows[i]["EnquirySubSource"]);
                        cmblist.Add(cbl);
                    }
                }
                return cmblist;
            }
        }

        public void cmspEmpSubGroupMaster_Crud(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("cmspEmpSubGroupMaster_Crud", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@EmpGroupID", obj.EmpGroupID);
                cmd.Parameters.AddWithValue("@EmpSubGroupID", obj.EmpSubGroupID);
                cmd.Parameters.AddWithValue("@EmpSubGroupName", obj.EmpSubGroupName.Trim());
                cmd.Parameters.AddWithValue("@EnteredBy", obj.EnteredBy.Trim());
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", obj.HostName.Trim());
                cmd.Parameters.AddWithValue("@optMode", obj.optMode.Trim());
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public DataSet cmspEmpSubGroupMaster_Select(CommonMaster_BAL cbls)
        {
            List<CommonMaster_BAL> cmblist = new List<CommonMaster_BAL>();
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("cmspEmpSubGroupMaster_Select", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@optMode", cbls.optMode);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }

        public void cmspStream_Crud(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("cmspStream_Crud", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@StreamID", obj.StreamID);
                cmd.Parameters.AddWithValue("@StreamName", obj.Stream.Trim());
                cmd.Parameters.AddWithValue("@EnteredBy", obj.EnteredBy.Trim());
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", obj.HostName.Trim());
                cmd.Parameters.AddWithValue("@optMode", obj.optMode.Trim());
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public DataTable cmspStreamMaster_Select(CommonMaster_BAL cbls)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("cmspStream_Select", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@StreamID", cbls.StreamID);
                da.SelectCommand.Parameters.AddWithValue("@optMode", cbls.optMode);
                DataTable dt = new DataTable();
                da.Fill(dt);
                return dt;
            }
        }

        public void cmspCountry_Crud(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("cmspCountry_Crud", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@CountryId", obj.CountryId);
                cmd.Parameters.AddWithValue("@CountryName", obj.Country.Trim());
                cmd.Parameters.AddWithValue("@EnteredBy", obj.EnteredBy.Trim());
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", obj.HostName.Trim());
                cmd.Parameters.AddWithValue("@optMode", obj.optMode);
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public DataTable cmspCountry_Select(CommonMaster_BAL cbls)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("cmspCountry_Select", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@CountryId", cbls.CountryId);
                da.SelectCommand.Parameters.AddWithValue("@optMode", cbls.optMode);
                DataTable dt = new DataTable();
                da.Fill(dt);
                return dt;
            }
        }

        public void cmspState_Crud(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("cmspState_Crud", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@CountryId", obj.CountryId);
                cmd.Parameters.AddWithValue("@StateId", obj.StateId);
                cmd.Parameters.AddWithValue("@StateName", obj.State.Trim());
                cmd.Parameters.AddWithValue("@EnteredBy", obj.EnteredBy.Trim());
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", obj.HostName.Trim());
                cmd.Parameters.AddWithValue("@optMode", obj.optMode.Trim());
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public DataTable cmspState_Select(CommonMaster_BAL cbls)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("cmspState_Select", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@CountryId", cbls.CountryId);
                da.SelectCommand.Parameters.AddWithValue("@StateID", cbls.StateId);
                da.SelectCommand.Parameters.AddWithValue("@optMode", cbls.optMode);
                DataTable dt = new DataTable();
                da.Fill(dt);
                return dt;
            }
        }

        public void cmspCity_Crud(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("cmspCity_Crud", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@StateId", obj.StateId);
                cmd.Parameters.AddWithValue("@CityId", obj.CityId);
                cmd.Parameters.AddWithValue("@CityName", obj.City.Trim());
                cmd.Parameters.AddWithValue("@EnteredBy", obj.EnteredBy.Trim());
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", obj.HostName.Trim());
                cmd.Parameters.AddWithValue("@optMode", obj.optMode.Trim());
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public DataTable cmspCity_Select(CommonMaster_BAL cbls)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("cmspCity_Select", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@StateID", cbls.StateId);
                da.SelectCommand.Parameters.AddWithValue("@CityID", cbls.CityId);
                da.SelectCommand.Parameters.AddWithValue("@optMode", cbls.optMode);
                DataTable dt = new DataTable();
                da.Fill(dt);
                return dt;
            }
        }

        public DataSet Get_Category(CommonMaster_BAL cbls)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("Get_Category", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@optMode", cbls.optMode);
                da.SelectCommand.Parameters.AddWithValue("@CategoryID", cbls.CategoryID);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }

        public DataSet cmspEthencity_Select(CommonMaster_BAL cbls)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("cmspEthencity_Select", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@optMode", cbls.optMode);
                da.SelectCommand.Parameters.AddWithValue("@EthencityID", cbls.EthencityID);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }

        public DataSet cmspTitle_Select(CommonMaster_BAL cbls)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("cmspTitle_Select", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@optMode", cbls.optMode);
                da.SelectCommand.Parameters.AddWithValue("@TitleID", cbls.TitleID);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }

        public void cmspCategory_Crud(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("cmspCategory_Crud", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@CategoryID", obj.CategoryID);
                cmd.Parameters.AddWithValue("@CategoryName", obj.CategoryName.Trim());
                cmd.Parameters.AddWithValue("@EnteredBy", obj.EnteredBy.Trim());
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", obj.HostName.Trim());
                cmd.Parameters.AddWithValue("@optMode", obj.optMode);
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }


        public void cmspTitle_Crud(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("cmspTitle_Crud", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@TitleID", obj.TitleID);
                cmd.Parameters.AddWithValue("@TitleName", obj.TitleName.Trim());
                cmd.Parameters.AddWithValue("@EnteredBy", obj.EnteredBy.Trim());
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", obj.HostName.Trim());
                cmd.Parameters.AddWithValue("@optMode", obj.optMode);
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public void cmspEthencity_Crud(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("cmspEthencity_Crud", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@EthencityID", obj.EthencityID);
                cmd.Parameters.AddWithValue("@EthencityName", obj.EthencityName.Trim());
                cmd.Parameters.AddWithValue("@EnteredBy", obj.EnteredBy.Trim());
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", obj.HostName.Trim());
                cmd.Parameters.AddWithValue("@optMode", obj.optMode.Trim());
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public void cmspSetup_MailSms_Crud(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("simsspEmailSmsSetup_Crud", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@SchoolID", obj.schoolid);
                cmd.Parameters.AddWithValue("@RecordID", obj.emailRecordid);
                cmd.Parameters.AddWithValue("@emailsmstable", obj.emailsmssetup);
                cmd.Parameters.AddWithValue("@ForHO", obj.emailsmsforHO);
                cmd.Parameters.AddWithValue("@SMSAPI", obj.smsapi == null ? null : obj.smsapi.Trim());
                cmd.Parameters.AddWithValue("@EnteredBy", obj.EnteredBy.Trim());
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", obj.HostName.Trim());
                cmd.Parameters.AddWithValue("@optMode", obj.optMode.Trim());
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }
        public DataSet cmspSetup_MailSms_Select(CommonMaster_BAL cbls)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("simsspEmailSmsSetup_Select", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@optMode", cbls.optMode);
                da.SelectCommand.Parameters.AddWithValue("@SchoolID",cbls.schoolid);
                da.SelectCommand.Parameters.AddWithValue("@RecordID", cbls.emailRecordid);
                da.SelectCommand.Parameters.AddWithValue("@ForHO", cbls.emailsmsforHO);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }

        public void cmspBoard_Crud(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("cmspBoard_Crud", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@BoardID", obj.BoardID);
                cmd.Parameters.AddWithValue("@Board",  obj.Board.Trim());
                cmd.Parameters.AddWithValue("@BoardCode ",obj.BoardCode.Trim());
                cmd.Parameters.AddWithValue("@EnteredBy", obj.EnteredBy.Trim());
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", obj.HostName.Trim());
                cmd.Parameters.AddWithValue("@optMode", obj.optMode.Trim());
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }
        public DataSet cmspBoard_Select(CommonMaster_BAL cbls)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("cmspBoard_Select", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@optMode", cbls.optMode);
                da.SelectCommand.Parameters.AddWithValue("@BoardID", cbls.BoardID);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }

        public void cmspClass_Crud(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("cmspClass_Crud", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@ClassID", obj.ClassId);
                cmd.Parameters.AddWithValue("@Class", obj.ClassName.Trim());
                cmd.Parameters.AddWithValue("@ClassCode", obj.ClassCode.Trim());
                cmd.Parameters.AddWithValue("@OrderNo ", obj.ClassOrderNo);
                cmd.Parameters.AddWithValue("@EnteredBy", obj.EnteredBy.Trim());
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", obj.HostName.Trim());
                cmd.Parameters.AddWithValue("@optMode", obj.optMode.Trim());
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public DataSet cmspClass_Select(CommonMaster_BAL cbls)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("cmspClass_Select", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@optMode", cbls.optMode);
                da.SelectCommand.Parameters.AddWithValue("@ClassID", cbls.ClassId);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }

        public void cmspAdmissionCategory_Crud(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("cmspAdmissionCategory_Crud", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@CategoryID", obj.CategoryID);
                cmd.Parameters.AddWithValue("@CategoryName", obj.CategoryName.Trim());
                cmd.Parameters.AddWithValue("@NavReceivableLedgerId ", obj.NavReceivableLedgerId.Trim());
                cmd.Parameters.AddWithValue("@NavForfeitLedgerId ", obj.NavForfeitLedgerId.Trim());
                cmd.Parameters.AddWithValue("@NavAdvanceLedgerId", obj.NavAdvanceLedgerId.Trim());
                cmd.Parameters.AddWithValue("@EnteredBy", obj.EnteredBy.Trim());
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", obj.HostName.Trim());
                cmd.Parameters.AddWithValue("@optMode", obj.optMode.Trim());
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }

        public DataSet cmspAdmissionCategory_Select(CommonMaster_BAL cbls)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("cmspAdmissionCategory_Select", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@optMode", cbls.optMode);
                da.SelectCommand.Parameters.AddWithValue("@CategoryID", cbls.CategoryID);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }

        public DataSet cmspSyncSetup_Select(CommonMaster_BAL cbls)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("cmspSyncSetup_Select", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@optMode", cbls.optMode);
                da.SelectCommand.Parameters.AddWithValue("@RecordID", cbls.RecordId);
                da.SelectCommand.Parameters.AddWithValue("@SchoolID", cbls.schoolid);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }

        public void cmspSyncSetup_Crud(CommonMaster_BAL obj, out string msgOut, out int result)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlCommand cmd = new SqlCommand("cmspSyncSetup_Crud", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@SchoolID", obj.schoolid);
                cmd.Parameters.AddWithValue("@IsInterval", obj.IsInterval);
                cmd.Parameters.AddWithValue("@ScheduledTime", obj.ScheduledTime);
                cmd.Parameters.AddWithValue("@Interval", obj.Interval);
                cmd.Parameters.AddWithValue("@RecordID", obj.RecordId);
                cmd.Parameters.AddWithValue("@EnteredBy", obj.EnteredBy.Trim());
                cmd.Parameters.AddWithValue("@IpAddress", obj.IpAddress.Trim());
                cmd.Parameters.AddWithValue("@McAddress", obj.McAddress.Trim());
                cmd.Parameters.AddWithValue("@HostName", obj.HostName.Trim());
                cmd.Parameters.AddWithValue("@optMode", obj.optMode.Trim());
                cmd.Parameters.Add("@msgOut", SqlDbType.NVarChar, 200);
                cmd.Parameters.Add("@Result", SqlDbType.Int);
                cmd.Parameters["@msgOut"].Direction = ParameterDirection.Output;
                cmd.Parameters["@Result"].Direction = ParameterDirection.Output;
                con.Open();
                int a = cmd.ExecuteNonQuery();
                msgOut = cmd.Parameters["@msgOut"].Value.ToString();
                result = Convert.ToInt32(cmd.Parameters["@Result"].Value);
            }
        }
        public DataTable GetIntrestedServices(CommonMaster_BAL CMBal)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("sp_GetCommonServices", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@optMode", CMBal.optMode);
                da.SelectCommand.Parameters.AddWithValue("@SchoolId", CMBal.schoolid);
                DataTable dt = new DataTable();
                da.Fill(dt);
                return dt;
            }
        }
        public DataTable SchoolWiseAddress(CommonMaster_BAL CMBal)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("cmspCommonBinder_Select", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@optMode", CMBal.optMode);
                da.SelectCommand.Parameters.AddWithValue("@SchoolId", CMBal.schoolid);
                DataTable dt = new DataTable();
                da.Fill(dt);
                return dt;
            }
        }

    }
}