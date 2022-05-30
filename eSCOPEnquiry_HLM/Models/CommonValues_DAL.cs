
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;
using System.Linq;
using System.Web;

namespace eSCOPEnquiry_HLM.Models
{
    [Serializable]
    public class CommonValues_DAL
    {
        CultureInfo ci = new CultureInfo("en-GB");
        CommonValues_BAL commBAL = new CommonValues_BAL();
        
        public DataSet getSeatForClass(CommonValues_BAL commBAL, string constring)
        {
            SqlConnection con = new SqlConnection(constring);
            SqlDataAdapter da = new SqlDataAdapter("Get_CommonValues", con);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            da.SelectCommand.Parameters.AddWithValue("@SchoolID", commBAL.SchoolID);
            da.SelectCommand.Parameters.AddWithValue("@AdmissionSessionId", commBAL.AdmissionSessionID);
            da.SelectCommand.Parameters.AddWithValue("@AdmissionClassId", commBAL.AdmissionClassID);
            da.SelectCommand.Parameters.AddWithValue("@ClassID", commBAL.ClassID);
            da.SelectCommand.Parameters.AddWithValue("@SectionID", commBAL.SectionID);
            da.SelectCommand.Parameters.AddWithValue("@studentID", commBAL.StudentID);
            da.SelectCommand.Parameters.AddWithValue("@sessionID", commBAL.SessionID);
            da.SelectCommand.Parameters.AddWithValue("@EnqId", commBAL.EnqID);
            da.SelectCommand.Parameters.AddWithValue("@RegID", commBAL.RegID);
            da.SelectCommand.Parameters.AddWithValue("@admNo", commBAL.AdmissionNo);
            da.SelectCommand.Parameters.AddWithValue("@optMode", commBAL.optMode);
            DataSet ds = new DataSet();
            return ds;
        }

      
        public DataSet getDashForReg(CommonValues_BAL commBAL, string constring)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("Get_CommonValues", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@SchoolID", commBAL.SchoolID);
                da.SelectCommand.Parameters.AddWithValue("@AdmissionSessionId", commBAL.AdmissionSessionID);
                da.SelectCommand.Parameters.AddWithValue("@AdmissionClassId", commBAL.AdmissionClassID);
                da.SelectCommand.Parameters.AddWithValue("@ClassID", commBAL.ClassID);
                da.SelectCommand.Parameters.AddWithValue("@FeeCategoryId", commBAL.FeeCategoryId);               
                da.SelectCommand.Parameters.AddWithValue("@StreamID", commBAL.StreamID);                
                da.SelectCommand.Parameters.AddWithValue("@SectionID", commBAL.SectionID);
                da.SelectCommand.Parameters.AddWithValue("@studentID", commBAL.StudentID);
                da.SelectCommand.Parameters.AddWithValue("@sessionID", commBAL.SessionID);
                da.SelectCommand.Parameters.AddWithValue("@EnqId", commBAL.EnqID);
                da.SelectCommand.Parameters.AddWithValue("@RegID", commBAL.RegID);
                da.SelectCommand.Parameters.AddWithValue("@admNo", commBAL.AdmissionNo);
                da.SelectCommand.Parameters.AddWithValue("@optMode", commBAL.optMode);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }

        public DataSet getDashForAdmission(CommonValues_BAL commBAL, string constring)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("Get_CommonValues", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@SchoolID", commBAL.SchoolID);
                da.SelectCommand.Parameters.AddWithValue("@AdmissionSessionId", commBAL.AdmissionSessionID);
                da.SelectCommand.Parameters.AddWithValue("@AdmissionClassId", commBAL.AdmissionClassID);
                da.SelectCommand.Parameters.AddWithValue("@ClassID", commBAL.ClassID);
                da.SelectCommand.Parameters.AddWithValue("@SectionID", commBAL.SectionID);
                da.SelectCommand.Parameters.AddWithValue("@studentID", commBAL.StudentID);
                da.SelectCommand.Parameters.AddWithValue("@sessionID", commBAL.SessionID);
                da.SelectCommand.Parameters.AddWithValue("@EnqId", commBAL.EnqID);
                da.SelectCommand.Parameters.AddWithValue("@RegID", commBAL.RegID);
                da.SelectCommand.Parameters.AddWithValue("@admNo", commBAL.AdmissionNo);
                da.SelectCommand.Parameters.AddWithValue("@optMode", commBAL.optMode);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }

        public DataSet getEnqForAdmission(CommonValues_BAL commBAL, string constring)
        {
            using (SqlConnection con = new SqlConnection(constring))
            {
                SqlDataAdapter da = new SqlDataAdapter("Get_CommonValues", con);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@SchoolID", commBAL.SchoolID);
                da.SelectCommand.Parameters.AddWithValue("@AdmissionSessionId", commBAL.AdmissionSessionID);
                da.SelectCommand.Parameters.AddWithValue("@AdmissionClassId", commBAL.AdmissionClassID);
                da.SelectCommand.Parameters.AddWithValue("@ClassID", commBAL.ClassID);
                da.SelectCommand.Parameters.AddWithValue("@SectionID", commBAL.SectionID);
                da.SelectCommand.Parameters.AddWithValue("@studentID", commBAL.StudentID);
                da.SelectCommand.Parameters.AddWithValue("@sessionID", commBAL.SessionID);
                da.SelectCommand.Parameters.AddWithValue("@EnqId", commBAL.EnqID);
                da.SelectCommand.Parameters.AddWithValue("@RegID", commBAL.RegID);
                da.SelectCommand.Parameters.AddWithValue("@admNo", commBAL.AdmissionNo);
                da.SelectCommand.Parameters.AddWithValue("@optMode", commBAL.optMode);
                DataSet ds = new DataSet();
                da.Fill(ds);
                return ds;
            }
        }
    }
}