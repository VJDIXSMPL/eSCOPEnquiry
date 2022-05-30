using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;


namespace eSCOPEnquiry_HLM.Models
{
    [Serializable]
    public class CommonValues_BAL
    {
        public CommonValues_BAL()
        {
            SchoolID = 0;
            SessionID = 0;
            ClassID = 0;
            SectionID = 0;
            StudentID = 0;
            EnqID = 0;
            RegID = 0;
            AdmissionSessionID = 0;
            AdmissionClassID = 0;
            AdmissionNo = "";
            RegistrationSessionID = 0;
            optMode = "";
        }
        public string optMode { get; set; }
        public int SchoolID { get; set; }
        public int SessionID { get; set; }
        public int ClassID { get; set; }
        public int FeeCategoryId { get; set; }
        public int StreamID { get; set; }
        public int SectionID { get; set; }
        public long StudentID { get; set; }
        public long EnqID { get; set; }
        public long RegID { get; set; }
        public int AdmissionSessionID { get; set; }
        public int AdmissionClassID { get; set; }
        public string AdmissionNo { get; set; }
        public int RegistrationSessionID { get; set; }

        public List<DataRow> getSeatForClass(CommonValues_BAL obj, string constring)
        {
            CommonValues_DAL obj1 = new CommonValues_DAL();
            DataSet ds = new DataSet();
            ds = (DataSet)obj1.getSeatForClass(obj, constring);
            return getListFromDataTable(ds.Tables[0]);
        }

        public List<DataRow> getListFromDataTable(DataTable dt)
        {
            List<DataRow> list = new List<DataRow>();
            foreach (DataRow dr in dt.Rows)
            {
                list.Add(dr);
            }
            return list;
        }

        public List<DataRow> getDashForReg(CommonValues_BAL obj, string constring)
        {
            CommonValues_DAL obj1 = new CommonValues_DAL();
            DataSet ds = new DataSet();
            ds = (DataSet)obj1.getDashForReg(obj, constring);
            return getListFromDataTable(ds.Tables[0]);
        }

        public DataSet studentDetail(CommonValues_BAL obj, string constring)
        {
            CommonValues_DAL obj1 = new CommonValues_DAL();
            DataSet ds = new DataSet();
            ds = (DataSet)obj1.getDashForReg(obj, constring);
            return ds;
        }

        public List<DataRow> getDashForAdmission(CommonValues_BAL obj, string constring)
        {
            CommonValues_DAL obj1 = new CommonValues_DAL();
            DataSet ds = new DataSet();
            ds = (DataSet)obj1.getDashForAdmission(obj, constring);
            return getListFromDataTable(ds.Tables[0]);
        }

        public List<DataRow> getEnqForAdmission(CommonValues_BAL obj, string constring)
        {
            CommonValues_DAL obj1 = new CommonValues_DAL();
            DataSet ds = new DataSet();
            ds = (DataSet)obj1.getEnqForAdmission(obj, constring);
            return getListFromDataTable(ds.Tables[0]);
        }

        internal DataSet getstudentDetail(CommonValues_BAL obj, string constring)
        {
            throw new NotImplementedException();
        }
    }
}