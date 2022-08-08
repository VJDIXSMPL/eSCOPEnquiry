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
    //[Serializable]
    public class Enquiry_BAL : PreviousSchoolDetails_BAL
    {
        CultureInfo ci = new CultureInfo("en-GB");

        Enquiry_DAL EDAL;

        public string[] cell;
        public Enquiry_BAL(string conCommon)
        {
            EDAL = new Enquiry_DAL(conCommon);
            CultureInfo provider = new CultureInfo("en-GB");
            this.HasSibling = false;
            this.SiblingID = -1L;
            this.ClassApplyingFor = -1;
            NationalityID = 1;
            this.Student_Nationality = -1;
            this.Father_Profession = -1;
            this.Father_Qualification = -1;
            this.Mother_Profession = -1;
            this.Mother_Qualification = -1;
            this.Mother_Profession = -1;
            this.Mother_Qualification = -1;
            this.Guardian_Profession = -1;
            this.Guardian_Qualification = -1;
            this.ChangedStatus = -1;
            this.AdmittedYear = -1;
            base.PrevoiusClass = -1;
            this.Correspondence_Country = -1;
            this.Correspondence_City = -1;
            this.Correspondence_State = -1;
            this.EnquirySubsourceid = -1;
            this.Enquiry_Source = -1;
            this.SessionId = 2019;
            base.Board = -1;
            this.Assign_to = "";
            this.Remark = "";
            this.ModifyDate = Convert.ToDateTime(DateTime.Now, provider).Date;
            this.ifSearched = 0;
            this.SessionTransfer = -1;
            this.SchoolTransfer = -1;
            this.Status = -1;
            this.UserFrom = "-1";
            this.UserTo = "-1";
            this.fromDate = Convert.ToDateTime("01/01/1900");
            this.toDate = Convert.ToDateTime("01/01/1900");
            this.Student_Dob = new DateTime?(DateTime.Now);
            StudentDob = "01/01/1900";
            this.Current_Class = -1;
            this.OTPSent = false;
            ClassID = "-1";
            SessionId = -1;
            StreamId = -1;
            InstituteID = -1;
            CorCountryID = -1;
            CorStateID = -1;
            CorCityID = -1;
            CorArea = "";
            Area = "";
            Remark = "";
            CountryID = -1;
            StateID = -1;
            CityID = -1;
            AnnualRupees = "-1";
            Mother_AnnualRupees = "-1";
            Occupation = "-1";
            Mother_Occuption = "-1";
            FolderID = -1;
            phone_no = "-1";
            AdmissionID = -1;
            ClientID = 1;
            SocietyID = -1;
            InstituteID = -1;
            SessionID = -1;
            Student_Title = -1;
            Student_FirstName = "";
            Student_MiddleName = "";
            Student_LastName = "";
            BranchID = -1;
            Student_ReligionName = "";
            GenderID = -1;
            MobileNo = "";
            AlternateMobNo = "";
            DateOfBirth = Convert.ToDateTime("01/01/1900", ci);
            FromDate = Convert.ToDateTime("01/01/1900", ci);
            ToDate = Convert.ToDateTime("01/01/1900", ci);
            CommunicationDate = Convert.ToDateTime("01/01/1900", ci);
            EnqDate1 = Convert.ToDateTime("01/01/1900", ci);
            EmailID = "";
            CategoryID = -1;
            Caste = "";
            ReligionID = -1;
            AddressID = -1;
            FatherID = -1;
            EnquirySourceID = -1;
            EnquirySubSourceID = -1;
            Notes = "";
            ImageID = "";
            ImageName = "";
            ImageUrl = "";
            Father_Title = -1;
            Mother_Title = -1;
            CountryID = -1;
            StateID = -1;
            CityID = -1;
            Father_FirstName = "";
            Address = "";
            Father_MiddleName = "";
            Father_LastName = "";
            Father_MobileNo = "";
            Father_ReligiousName = "";
            MotherID = -1;
            Mother_FirstName = "";
            Mother_MiddleName = "";
            Mother_LastName = "";
            Mother_MobileNo = "";
            Mother_ReligiousName = "";
            PinCode = "";
            AgencyID = -1;
            RefMobileNo = "";
            RefName = "";
            RefNo = "";
            TradeID = "-1";
            ReferenceType = "";
            EnquiryNo = "";
            InstituteName = "";
            pageSize = 10;
            SortBy = "";
            SortDir = "ASC";
            Search = "";
            AssignedStatus = "";
            AssignedID = -1;
            CommunicationTypeID = -1;
            CommunicationType = "";
            CommunicationID = -1;
            CommunicationText = "";
            SMSText = "";
            NextCommunication = false;
            Remark = "";
            NextCommunicationType = "";
            StatusID = -1;
            StatusText = "";
            EnquiryID = -1;
            Area = "";
            FileID = -1;
            MyEnquiry = "";
            Mode = "";
            BatchID = -1;
            SemesterID = -1;
            OperatorType = "";
            BulkUploadID = -1;
            BranchID = -1;
            RequiredLateral = false;
            MobileNoCode = "";
            AlterNateNoCode = "";
            FatherMobileNoCode = "";
            MotherMobileNoCode = "";
            AadharNo = "";
            F_Email = "";
            HosReq = "";
            TransReq = "";
        }

        public string HosReq { get; set; }
        public string TransReq { get; set; }
        public string F_Email { get; set; }
        public string AadharNo { get; set; }
        public string MobileNoCode { get; set; }
        public string AlterNateNoCode { get; set; }
        public string FatherMobileNoCode { get; set; }
        public string MotherMobileNoCode { get; set; }
        public string AddressReligious { get; set; }
        public string ReligiousLanguage { get; set; }
        public long BranchID { get; set; }
        public string Branch { get; set; }
        public bool RequiredLateral { get; set; }
        public DateTime EnqDate1 { get; set; }
        public long BulkUploadID { get; set; }
        public string Mode { get; set; }
        public string MyCommunication { get; set; }
        public long ClientID { get; set; }
        public string MyEnquiry { get; set; }
        public long FileID { get; set; }
        public long SocietyID { get; set; }
        public int ChkoverDueCommunication { get; set; }
        public int PendingCommunication { get; set; }
        public long InstituteID { get; set; }
        public long EnquiryID { get; set; }
        public long StatusID { get; set; }
        public string StatusText { get; set; }
        public string AssignedBy { get; set; }
        public long ComnicationDataCount { get; set; }
        public DataTable Dt = new DataTable();
        public string EnquiryNo { get; set; }
        public string TradeID { get; set; }
        public long SessionID { get; set; }
        public long Student_Title { get; set; }
        public string Student_FirstName { get; set; }
        public string Student_MiddleName { get; set; }
        public string Student_LastName { get; set; }
        public string Student_ReligionName { get; set; }
        public long GenderID { get; set; }
        public string MobileNo { get; set; }
        public string AlternateMobNo { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string EmailID { get; set; }
        public long CategoryID { get; set; }
        public string Caste { get; set; }
        public long ReligionID { get; set; }
        public long AddressID { get; set; }
        public long FatherID { get; set; }
        public long EnquirySourceID { get; set; }
        public long EnquirySubSourceID { get; set; }
        public string Notes { get; set; }
        public string optMode { get; set; }
        public string Session { get; set; }
        public string Source { get; set; }
        public string SubSource { get; set; }
        public string EnteredBy { get; set; }
        public string IpAddress { get; set; }
        public string McAddress { get; set; }
        public string HostName { get; set; }
        public long Father_Title { get; set; }
        public long MotherID { get; set; }
        public long Mother_Title { get; set; }
        public string Mother_FirstName { get; set; }
        public string Mother_MiddleName { get; set; }
        public string Mother_LastName { get; set; }
        public string Mother_ReligiousName { get; set; }
        public string Mother_MobileNo { get; set; }
        public long CountryID { get; set; }
        public long StateID { get; set; }
        public long CityID { get; set; }
        public string Father_FirstName { get; set; }
        public string Father_MiddleName { get; set; }
        public string Father_LastName { get; set; }
        public string Father_ReligiousName { get; set; }
        public string Address { get; set; }
        public string Father_MobileNo { get; set; }
        public string PinCode { get; set; }
        public string ImageID { get; set; }
        public string ImageName { get; set; }
        public string ImageUrl { get; set; }
        public long RegistrationID { get; set; }
        public long AgencyID { get; set; }
        public string RefMobileNo { get; set; }
        public string RefName { get; set; }
        public string RefNo { get; set; }
        public string ReferenceType { get; set; }
        public string InstituteName { get; set; }
        public long StudentID { get; set; }
        public string FileTitle { get; set; }
        public string ProgramType { get; set; }
        public long ProgramID { get; set; }
        public string UserID { get; set; }
        public int EnquiryStatusID { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public string AssignedTo { get; set; }
        public long AssignedID { get; set; }
        public string AssignedStatus { get; set; }
        public string Program { get; set; }
        public string TradeName { get; set; }
        public string SessionName { get; set; }
        public string EnquiryDate { get; set; }
        public string EnquiryNotes { get; set; }
        public string EnquiryStatus { get; set; }
        public string EnquirySourceName { get; set; }
        public string EnquirySubSourceName { get; set; }
        public int startRecordNo { get; set; }
        public int pageSize { get; set; }
        public string SortBy { get; set; }
        public string SortDir { get; set; }
        public string Search { get; set; }
        public string EnquiryType { get; set; }
        public long RecordNo { get; set; }
        public long RowNumber { get; set; }
        public int NoOfPages { get; set; }
        public string Area { get; set; }
        public int CommunicationTypeID { get; set; }
        public string NextCommunicationType { get; set; }
        public int NxtCommunicationTypeID { get; set; }
        public string CommunicationType { get; set; }
        public long CommunicationID { get; set; }
        public string CommunicationText { get; set; }
        public bool NextCommunication { get; set; }
        public bool SendSMS { get; set; }
        public string SMSText { get; set; }
        public string Remark { get; set; }
        public string nextCommunicationDt { get; set; }
        public DateTime CommunicationDate { get; set; }
        public string CommunicationTime { get; set; }
        public string ComCmp { get; set; }
        public string NoOFComm { get; set; }
        public int chkadmin { get; set; }
        public long BatchID { get; set; }
        public long SemesterID { get; set; }
        public string OperatorType { get; set; }
        public string AdmissionNo { get; set; }
        public string Name { get; set; }
        public string FatherName { get; set; }
        public long AdmissionID { get; set; }
        public string CurrentSemester { get; set; }
        public string FeeStatus { get; set; }
        public int NationalityID { get; set; }
        public bool OTPSent { get; set; }
        public string Action { get; set; }
        public int AdmittedYear { get; set; }
        public int ApprovedRecords { get; set; }
        public string Assign_to { get; set; }
        public long Bulkuploadid { get; set; }
        public string C1 { get; set; }
        public string C2 { get; set; }
        public string C3 { get; set; }
        public string C4 { get; set; }
        public string C5 { get; set; }
        public int? ChangedStatus { get; set; }
        public int? City { get; set; }
        public int? ClassApplyingFor { get; set; }
        public string ClassName { get; set; }
        public bool ComputeratHome { get; set; }
        public string ConsentUserID { get; set; }
        public string Correspondence_Address { get; set; }
        public long? Correspondence_AddressId { get; set; }
        public string Correspondence_Area { get; set; }
        public int Correspondence_City { get; set; }
        public int Correspondence_Country { get; set; }
        public string Correspondence_Phone { get; set; }
        public string Correspondence_Pincode { get; set; }
        public int Correspondence_State { get; set; }
        public int? Country { get; set; }
        public int? Current_Class { get; set; }
        public string Current_School { get; set; }
        public string CurrentStatus { get; set; }
        public DataTable dtPrevSchool { get; set; }
        public int DuplicateRecords { get; set; }
        public long EnqId { get; set; }
        public string EnqNo { get; set; }
        public string EnqType { get; set; }
        public DataTable Enquiry { get; set; }
        public string Enquiry_Additional { get; set; }
        public int Enquiry_Source { get; set; }
        public long EnquiryCommunicationId { get; set; }
        public string EnquiryFor { get; set; }
        public string EnquirySource { get; set; }
        public int EnquirySubsourceid { get; set; }
        public DateTime? EntryDate { get; set; }
        public string ExcelFiLeName { get; set; }
        public int FamilyIncomeGroup { get; set; }
        public string father { get; set; }
        public decimal Father_AnnualIncome { get; set; }
        public string Father_Email { get; set; }
        public char Father_Gender { get; set; }
        public long Father_Id { get; set; }
        public string FAdhaarNo { get; set; }
        public string ADhaarCardNo { get; set; }
        public string ClassID { get; set; }
        public string PlaySchoolDescription { get; set; }
        public string ClassPassed { get; set; }
        public string YearPassing { get; set; }
        public bool MedicalHistory { get; set; }
        public string MedicalDescription { get; set; }
        public bool CheckStateReason { get; set; }
        public string StateReasonDescription { get; set; }
        public string FMobileNo { get; set; }
        public string OfficePhoneNo { get; set; }
        public string Qualification { get; set; }
        public string Occupation { get; set; }
        public string OfficeAddress { get; set; }
        public string AnnualRupees { get; set; }
        public string FatherEmailID { get; set; }
        public string Father_CertificatePath { get; set; }
        public string Mother_CertificatePath { get; set; }
        public string CastePath { get; set; }
        public string StuAdharPath { get; set; }
        public string FatherAdharPath { get; set; }
        public string MotherAdharPath { get; set; }
        public string BirthcertificatePath { get; set; }
        public string Father_CertificateFile { get; set; }
        public string Mother_CertificateFile { get; set; }
        public string CasteFile { get; set; }
        public string StuAdharFile { get; set; }
        public string FatherAdharFile { get; set; }
        public string MotherAdharFile { get; set; }
        public string SignatureFile { get; set; }
        public string SignaturePath { get; set; }
        public string MotherSignatureFile { get; set; }
        public string PathMotherSignatureFile { get; set; }
        public string BirthcertificateFile { get; set; }
        public bool TransportBit { get; set; }
        public int Father_Nationality { get; set; }
        public string Father_OfficeAddress { get; set; }
        public string Father_OfficeOrganizationName { get; set; }
        public bool Father_OptSMS { get; set; }
        public int Father_Profession { get; set; }
        public int Father_Qualification { get; set; }
        public string fName { get; set; }
        public DateTime fromDate { get; set; }
        public string gender { get; set; }
        public string Guardian { get; set; }
        public decimal Guardian_AnnualIncome { get; set; }
        public string Guardian_Email { get; set; }
        public string Guardian_FirstName { get; set; }
        public long? Guardian_Id { get; set; }
        public string Guardian_LastName { get; set; }
        public string Guardian_MiddleName { get; set; }
        public string Guardian_OfficeOrganizationName { get; set; }
        public int Guardian_Profession { get; set; }
        public int Guardian_Qualification { get; set; }
        public int Guardian_RelationShip { get; set; }
        public bool HasSibling { get; set; }
        public int ifSearched { get; set; }
        public bool InternetateHome { get; set; }
        public int IsApproved { get; set; }
        public bool isNext { get; set; }
        public int MasterRecords { get; set; }
        public string ModifyBy { get; set; }
        public DateTime ModifyDate { get; set; }
        public string mother { get; set; }
        public decimal Mother_AnnualIncome { get; set; }
        public bool MotherIsAlumani { get; set; }
        public string Mother_YearofPassing { get; set; }
        public bool FatherIsAlumani { get; set; }
        public string Father_YearofPassing { get; set; }
        public string Mother_Email { get; set; }
        public char Mother_Gender { get; set; }
        public long Mother_Id { get; set; }
        public string MAdhaarCardNo { get; set; }
        public string Mother_PhoneNo { get; set; }
        public string Mother_Occuption { get; set; }
        public string Mother_AnnualRupees { get; set; }
        public string Heath_BloodGroup { get; set; }
        public string Heath_Accident { get; set; }
        public bool Tran_Yes { get; set; }
        public bool Trans_No { get; set; }
        public bool Hos_Yes { get; set; }
        public bool Hos_No { get; set; }
        public string Trans_Des { get; set; }
        public string CorAddress { get; set; }
        public long CorCountryID { get; set; }
        public long CorStateID { get; set; }
        public long CorCityID { get; set; }
        public string CorArea { get; set; }
        public string CorPincode { get; set; }
        public string CorContactNo { get; set; }
        public string PermanentAddress { get; set; }
        public string PresentPincode { get; set; }
        public string PramanentPhone { get; set; }
        public string Alumini_FirstName { get; set; }
        public string Alumini_Branch { get; set; }
        public string Alumini_Year { get; set; }
        public string Staff_FirstName { get; set; }
        public string Staff_MiddleName { get; set; }
        public string Staff_LastName { get; set; }
        public string Staff_Des { get; set; }
        public int Mother_Nationality { get; set; }
        public string Mother_OfficeAddress { get; set; }
        public string Mother_OfficeOrganizationName { get; set; }
        public bool Mother_OptSMS { get; set; }
        public int Mother_Profession { get; set; }
        public int Mother_Qualification { get; set; }
        public string mPerson_MobileNo { get; set; }
        public string MyOtp { get; set; }
        public string name { get; set; }
        public DateTime NextCommunicationDate { get; set; }
        public TimeSpan NextCommunicationTime { get; set; }
        public string CaptureAt { get; set; }
        public long Permanent_AddressId { get; set; }
        public string Person_MobileNo { get; set; }
        public string Person_Profession { get; set; }
        public string Pincode { get; set; }
        public int Purpose { get; set; }
        public string Ref1_FirstName { get; set; }
        public string Ref1_LastName { get; set; }
        public string Ref1_MiddleName { get; set; }
        public string Ref1_MobileNo { get; set; }
        public string Ref2_FirstName { get; set; }
        public string Ref2_LastName { get; set; }
        public string Ref2_MiddleName { get; set; }
        public string Ref2_MobileNo { get; set; }
        public int Reg { get; set; }
        public int SchoolId { get; set; }
        public string SchoolIds { get; set; }
        public string SchoolName { get; set; }
        public int SchoolTransfer { get; set; }
        public int SessionId { get; set; }
        public int SessionTransfer { get; set; }
        public string SiblingAdmno { get; set; }
        public string SiblingGrade { get; set; }
        public long SiblingID { get; set; }
        public string SiblingName { get; set; }
        public string SiblingRollNo { get; set; }
        public int? State { get; set; }
        public int? Status { get; set; }
        public string statusApprove { get; set; }
        public char StatusBulk { get; set; }
        public string StatusDescription { get; set; }
        public int? Student_Category { get; set; }
        public DateTime? Student_Dob { get; set; }
        public string StudentDob { get; set; }
        public string Student_Email { get; set; }
        public int? Student_Nationality { get; set; }
        public int SubjectId { get; set; }
        public int SyncRecords { get; set; }
        public string Title { get; set; }
        public DateTime toDate { get; set; }
        public string totalRecord { get; set; }
        public long Totalrows { get; set; }
        public string UserFrom { get; set; }
        public string UserTo { get; set; }
        public int ValidateRecords { get; set; }
        public string Distance { get; set; }
        public long FolderID { get; set; }
        public string FileSelfAttested { get; set; }
        public string PathSelfAttested { get; set; }
        public string FileAddressProof { get; set; }
        public string PathAddressProof { get; set; }
        public string FileStudent { get; set; }
        public string PathStudent { get; set; }
        public string FileFather { get; set; }
        public string PathFather { get; set; }
        public string FileMother { get; set; }
        public string PathMother { get; set; }
        public string phone_no { get; set; }
        public bool Joint_Family { get; set; }
        public bool physically_challenged { get; set; }
        public string Guardian_Home { get; set; }
        public string DistanceFromSchool { get; set; }
        public string modeoftansport { get; set; }
        public string Father_Designation { get; set; }
        public string Mother_designation { get; set; }
        public string LastSchool_Type { get; set; }
        public string mothermonthly_income { get; set; }
        public string fathermonthly_income { get; set; }
        public string fatherofficename { get; set; }
        public string motherofficename { get; set; }
        public string Admission_Detail { get; set; }
        public string Mother_Tongue { get; set; }
        public bool Single_Parent { get; set; }
        public bool Special_Attention { get; set; }
        public bool Emp_Ward { get; set; }
        public string Emp_Id { get; set; }
        public string Emp_Name { get; set; }
        public string Guardian_MobileNo { get; set; }
        public string schoolgoingchild_details { get; set; }
        public string studenthobbies { get; set; }
        public string FatherAlumniYear { get; set; }
        public string MotherAlumniYear { get; set; }
        public string TotalChildren { get; set; }
        public string schoolMedium { get; set; }
        public string mother_FullName { get; set; }
        public string father_FullName { get; set; }
        public Boolean Req_dayBoarding { get; set; }
        public Boolean Req_Midmeal { get; set; }
        public string RegNo { get; set; }
        public string SchoolAdd { get; set; }
        public string smsMode { get; set; }
        public int StreamId { get; set; }
        public string ServiceId { get; set; }
        public string StudentType { get; set; }
        public void crmEnquiry(Enquiry_BAL eqb, out int ResultCaller, out string msgOutCaller)
        {
            EDAL.CRUD_Enquiry(eqb, out ResultCaller, out msgOutCaller);
        }
        public int SaveEnquirySession(Enquiry_BAL obj, out int ResultCaller, out string msgOutCaller)
        {
            return EDAL.SaveEnquirySession(obj, out ResultCaller, out msgOutCaller);
        }
    }
}