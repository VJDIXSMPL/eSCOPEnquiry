using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;

namespace eSCOPEnquiry_HLM.Models
{
    public class CommonMaster_BAL
    {
        public CommonMaster_BAL()
        {
            smsText = "";
            eMailSubject = "";
            EmailText = "";
            Interval = 30;
            ClassOrderNo = 0;
        }
        public int TitleID { get; set; }
        public string TitleName { get; set; }
        public Int64 emailRecordid { get; set; }
        public string smptpserver { get; set; }
        public string userid { get; set; }
        public string password { get; set; }
        public string smsapi { get; set; }
        public string portno { get; set; }
        public bool emailsmsforHO { get; set; }
        public DataTable emailsmssetup { get; set; }
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public int EthencityID { get; set; }
        public string EthencityName { get; set; }
        public int QualificationID { get; set; }
        public string Qualification { get; set; }
        public int ProfessionID { get; set; }
        public string Profession { get; set; }
        public int DesignationID { get; set; }
        public string Designation { get; set; }
        public int EnquirySourceID { get; set; }
        public string EnquirySource { get; set; }
        public int EnquirySubSourceID { get; set; }
        public string EnquirySubSource { get; set; }
        public int IncomeGroupID { get; set; }
        public string IncomeGroup { get; set; }
        public int NationalityID { get; set; }
        public string NationalityName { get; set; }
        public string EnteredBy { get; set; }
        public Nullable<System.DateTime> EntryDate { get; set; }
        public string ModifyBy { get; set; }
        public Nullable<System.DateTime> ModifyDate { get; set; }
        public string IpAddress { get; set; }
        public string McAddress { get; set; }
        public string HostName { get; set; }
        public int PurposeID { get; set; }
        public string Purpose { get; set; }
        public int DepartmentID { get; set; }
        public string Department { get; set; }
        public int ReasonID { get; set; }
        public string Reason { get; set; }
        public string ResonType { get; set; }
        public int ReasonTypeID { get; set; }
        public int[] selectedReasonTypeID { get; set; }
        public int EmpGroupID { get; set; }
        public string EmpGroupName { get; set; }
        public int EmpSubGroupID { get; set; }
        public string EmpSubGroupName { get; set; }
        public bool SetasDefault { get; set; }
        public string optMode { get; set; }
        public bool sendSMS { get; set; }
        public bool sendEmail { get; set; }
        public string smsText { get; set; }
        public string eMailSubject { get; set; }
        public string EmailText { get; set; }
        public int StreamID { get; set; }
        public string Stream { get; set; }
        public string Country { get; set; }
        public int CountryId { get; set; }
        public string State { get; set; }
        public int StateId { get; set; }
        public string City { get; set; }
        public int CityId { get; set; }
        public int schoolid { get; set; }
        public int BoardID { get; set; }
        public string Board { get; set; }
        public string BoardCode { get; set; }
        public int ClassId { get; set; }
        public string ClassName { get; set; }
        public string ClassCode { get; set; }
        public int ClassOrderNo { get; set; }
        public string NavReceivableLedgerId { get; set; }
        public string NavForfeitLedgerId { get; set; }
        public string NavAdvanceLedgerId { get; set; }
        public bool IsInterval { get; set; }
        public string ScheduledTime { get; set; }
        public int Interval { get; set; }
        public int RecordId { get; set; }
        //end

        CommonMaster_DAL cmd = new CommonMaster_DAL();

        public List<CommonMaster_BAL> Get_EnquirySubSourceMaster(CommonMaster_BAL cbl)
        {
            List<CommonMaster_BAL> cmblist = cmd.Get_EnquirySubSourceMaster(cbl);
            return cmblist;
        }

        public void Save_Purpose(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.Save_Purpose(cmb, out msgOut, out result);
        }

        public void EnquirySubsource_CRUD(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.EnquirySubsource_CRUD(cmb, out msgOut, out result);
        }

        public void Update_Purpose(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.Update_Purpose(cmb, out msgOut, out result);
        }
        public void Delete_Purpose(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.Delete_Purpose(cmb, out msgOut, out result);
        }
        public DataTable Get_Purpose()
        {
            DataTable dt = new DataTable();
            dt = cmd.Get_Purpose();
            return dt;
        }

        public DataSet Get_templateDetails()
        {
            DataSet dt = new DataSet();
            dt = cmd.Get_templateDetails();
            return dt;
        }
        public DataTable Get_PurposeByID(CommonMaster_BAL cmb)
        {
            DataTable dt = new DataTable();
            dt = cmd.Get_PurposeByID(cmb);
            return dt;
        }
        public void Save_Reason(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.Save_Reason(cmb, out msgOut, out result);
        }
        public void Update_Reason(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.Update_Reason(cmb, out msgOut, out result);
        }
        public void Delete_Reason(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.Delete_Reason(cmb, out msgOut, out result);
        }
        public DataSet Get_Reason(CommonMaster_BAL cmb)
        {
            DataSet dt = new DataSet();
            dt = cmd.Get_Reason(cmb);
            return dt;
        }




        public void Save_Department(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.Save_Department(cmb, out msgOut, out result);
        }
        public void Update_Department(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.Update_Department(cmb, out msgOut, out result);
        }
        public void Delete_Department(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.Delete_Department(cmb, out msgOut, out result);
        }
        public DataTable Get_Department()
        {
            DataTable dt = new DataTable();
            dt = cmd.Get_Department();
            return dt;
        }


        public void cmspEmpSubGroupMaster_Crud(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.cmspEmpSubGroupMaster_Crud(cmb, out msgOut, out result);
        }


        public DataSet cmspEmpSubGroupMaster_Select(CommonMaster_BAL cbl)
        {
            DataSet ds = cmd.cmspEmpSubGroupMaster_Select(cbl);
            return ds;
        }
        public void cmspStream_Crud(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.cmspStream_Crud(cmb, out msgOut, out result);
        }


        public DataTable cmspStreamMaster_Select(CommonMaster_BAL cbl)
        {
            DataTable dt = cmd.cmspStreamMaster_Select(cbl);
            return dt;
        }

        public void cmspCountry_Crud(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.cmspCountry_Crud(cmb, out msgOut, out result);
        }


        public DataTable cmspCountry_Select(CommonMaster_BAL cbl)
        {
            DataTable dt = cmd.cmspCountry_Select(cbl);
            return dt;
        }

        public void cmspState_Crud(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.cmspState_Crud(cmb, out msgOut, out result);
        }


        public DataTable cmspState_Select(CommonMaster_BAL cbl)
        {
            DataTable dt = cmd.cmspState_Select(cbl);
            return dt;
        }

        public void cmspCity_Crud(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.cmspCity_Crud(cmb, out msgOut, out result);
        }


        public DataTable cmspCity_Select(CommonMaster_BAL cbl)
        {
            DataTable dt = cmd.cmspCity_Select(cbl);
            return dt;
        }
        public void cmspCategory_Crud(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.cmspCategory_Crud(cmb, out msgOut, out result);
        }


        public DataSet Get_Category(CommonMaster_BAL cbl)
        {
            DataSet ds = cmd.Get_Category(cbl);
            return ds;
        }

        public void cmspTitle_Crud(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.cmspTitle_Crud(cmb, out msgOut, out result);
        }


        public DataSet cmspTitle_Select(CommonMaster_BAL cbl)
        {
            DataSet ds = cmd.cmspTitle_Select(cbl);
            return ds;
        }

        public void cmspEthencity_Crud(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.cmspEthencity_Crud(cmb, out msgOut, out result);
        }


        public DataSet cmspEthencity_Select(CommonMaster_BAL cbl)
        {
            DataSet ds = cmd.cmspEthencity_Select(cbl);
            return ds;
        }

        public void cmspSetup_MailSms_Crud(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.cmspSetup_MailSms_Crud(cmb, out msgOut, out result);
        }

        public DataSet cmspSetup_MailSms_Select(CommonMaster_BAL cbl)
        {
            DataSet ds = cmd.cmspSetup_MailSms_Select(cbl);
            return ds;
        }

        public DataSet cmspBoard_Select(CommonMaster_BAL cbl)
        {
            DataSet ds = cmd.cmspBoard_Select(cbl);
            return ds;
        }

        public void cmspBoard_Crud(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.cmspBoard_Crud(cmb, out msgOut, out result);
        }

        public DataSet cmspClass_Select(CommonMaster_BAL cbl)
        {
            DataSet ds = cmd.cmspClass_Select(cbl);
            return ds;
        }

        public void cmspClass_Crud(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.cmspClass_Crud(cmb, out msgOut, out result);
        }


        public DataSet cmspAdmissionCategory_Select(CommonMaster_BAL cbl)
        {
            DataSet ds = cmd.cmspAdmissionCategory_Select(cbl);
            return ds;
        }

        public void cmspAdmissionCategory_Crud(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.cmspAdmissionCategory_Crud(cmb, out msgOut, out result);
        }


        public DataSet cmspSyncSetup_Select(CommonMaster_BAL cbl)
        {
            DataSet ds = cmd.cmspSyncSetup_Select(cbl);
            return ds;
        }

        public void cmspSyncSetup_Crud(CommonMaster_BAL cmb, out int result, out string msgOut)
        {
            cmd.cmspSyncSetup_Crud(cmb, out msgOut, out result);
        }
        public DataTable GetIntrestedServices(CommonMaster_BAL CMBAL)
        {
            return cmd.GetIntrestedServices(CMBAL);
        }
        public DataTable SchoolWiseAddress(CommonMaster_BAL CMBAL)
        {
            return cmd.SchoolWiseAddress(CMBAL);
        }

    }
}