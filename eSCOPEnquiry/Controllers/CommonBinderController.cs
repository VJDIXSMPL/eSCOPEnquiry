using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using eSCOPEnquiry.Models;
using System.Data;
using Newtonsoft.Json;
using System.Data.SqlClient;
using System.Configuration;
using System.Collections;
using System.Globalization;

namespace eSCOPEnquiry.Controllers
{
    public class MyChartData
    {
        public string label { get; set; }
        public int value { get; set; }
        public string color { get; set; }
        public string hightlight { get; set; }
    }

    public class CommonBinderController : eSCOPBaseController
    {
        private IConfiguration Configuration;
        string conCommon = String.Empty;
        BindersForDropdown_BAL Dllbind;
        public CommonBinderController(IConfiguration configuration)
        {
            Configuration = configuration;
            conCommon = Configuration.GetConnectionString("DefaultConnection");
            Dllbind = new BindersForDropdown_BAL(conCommon); 
        }   

        DataTable dt = new DataTable();
        CultureInfo ci = new CultureInfo("en-GB");

        [HttpGet]
        public JsonResult BinderInstitute()
        {
            try
            {
                Dllbind.UserinfoDetails.optMode = "InstituteWiseOnline";
                dt = Dllbind.getBindersList(Dllbind).Tables[0];
                var SchoolWiseSessionData = JsonConvert.SerializeObject(dt);
                return Json(SchoolWiseSessionData);
            }
            catch (Exception ex)
            {
                return Json(JsonConvert.SerializeObject(ex));
            }
        }

        [HttpGet]

        public JsonResult LoadPermissionWiseInstitute()
        {
            Dllbind.UserinfoDetails.optMode = "LoadOnlineFeeInstitute";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var stateData = JsonConvert.SerializeObject(dt);
            return Json(stateData);
        }

        [HttpGet]
        public JsonResult LoadStdAcademicSessionWiseSession(long InstituteID)
        {
            try
            {
                Dllbind.UserinfoDetails.optMode = "StdAcademicSessionOnline";
                Dllbind.InstituteID = InstituteID;
                dt = Dllbind.getBindersList(Dllbind).Tables[0];
                var stateData = JsonConvert.SerializeObject(dt);
                return Json(stateData);
            }
            catch (Exception ex)
            {
                return Json(JsonConvert.SerializeObject(ex));
            }
        }
        
        [HttpGet]
        public JsonResult LoadInstituteWiseProgram(long InstituteID)
        {
             Dllbind.UserinfoDetails.optMode = "InstituteWiseProgram";
                Dllbind.InstituteID = InstituteID;
                dt = Dllbind.getBindersList(Dllbind).Tables[0];
                var stateData = JsonConvert.SerializeObject(dt);
                return Json(stateData);
        }
        public JsonResult LoadInstituteProgramWiseBranch(long ProgramID, long InstituteID)
        {
            Dllbind.UserinfoDetails.optMode = "LoadProgramWiseBranch";
            Dllbind.InstituteID = InstituteID;
            Dllbind.ProgramID = ProgramID;
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var BranchData = JsonConvert.SerializeObject(dt);
            return Json(BranchData);
        }
        
        [HttpGet]
        public JsonResult LoadEnquiryBinder(long SessionID = -1, long InstituteID = -1, long ProgramType = -1, long ProgramID = -1, string optMode = "")
        {
            try
            {
                Dllbind.UserinfoDetails.optMode = optMode;
                Dllbind.SessionID = SessionID;
                Dllbind.InstituteID = InstituteID;
                Dllbind.ProgramType = ProgramType;
                Dllbind.ProgramID = ProgramID;
                dt = Dllbind.LoadEnquiryBinder(Dllbind).Tables[0];
                var stateData = JsonConvert.SerializeObject(dt);
                return Json(stateData);
            }
            catch (Exception ex)
            {
                return Json(JsonConvert.SerializeObject(ex));
            }
        }
       [HttpGet]
        public JsonResult LoadBatch()
        {
            Dllbind.UserinfoDetails.optMode = "Batch";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var BatchData = JsonConvert.SerializeObject(dt);
            return Json(BatchData);
        }
        [HttpGet]
        public JsonResult LoadTitle()
        {
            Dllbind.UserinfoDetails.optMode = "Title";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var TitleData = JsonConvert.SerializeObject(dt);
            return Json(TitleData);
        }
        [HttpGet]
        public JsonResult LoadGender()
        {
            Dllbind.UserinfoDetails.optMode = "Gender_ForEnqReg";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var GenderData = JsonConvert.SerializeObject(dt);
            return Json(GenderData);
        }
        [HttpGet]
        public JsonResult LoadBlood()
        {

            Dllbind.UserinfoDetails.optMode = "Blood";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var BloodData = JsonConvert.SerializeObject(dt);
            return Json(BloodData);
        }
        [HttpGet]
        public JsonResult LoadMaritalStatus()
        {

            Dllbind.UserinfoDetails.optMode = "MaritalStatusEnqReg";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var MaritalStatusData = JsonConvert.SerializeObject(dt);
            return Json(MaritalStatusData);
        }
        [HttpGet]
        public JsonResult LoadCountry()
        {
            Dllbind.UserinfoDetails.optMode = "Country";
            Dllbind.ClientID = 1;
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var CountryData = JsonConvert.SerializeObject(dt);
            return Json(CountryData);
        }
        public JsonResult LoadState(long CountryID = -1)
        {
            Dllbind.CountryID = CountryID;
            Dllbind.UserinfoDetails.optMode = "State";
            Dllbind.ClientID = 1;
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var stateData = JsonConvert.SerializeObject(dt);
            return Json(stateData);
        }
        [HttpGet]
        public JsonResult LoadCity(long StateID = -1)
        {
            Dllbind.StateID = StateID;
            Dllbind.ClientID = 1;
            Dllbind.UserinfoDetails.optMode = "City";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var cityData = JsonConvert.SerializeObject(dt);
            return Json(cityData);
        }
        [HttpGet]
        public JsonResult LoadDistrict(long StateID = -1)
        {
            Dllbind.StateID = StateID;
            Dllbind.ClientID =1;
            Dllbind.UserinfoDetails.optMode = "District";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var cityData = JsonConvert.SerializeObject(dt);
            return Json(cityData);
        }

        [HttpGet]
        public JsonResult LoadRelation()
        {
            Dllbind.UserinfoDetails.optMode = "Relation";
            Dllbind.ClientID = 1;
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var RelationData = JsonConvert.SerializeObject(dt);
            return Json(RelationData);
        }
        [HttpGet]
        public JsonResult LoadCategory()
        {
            Dllbind.UserinfoDetails.optMode = "CategoryForEnqReg";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var SchoolWiseSessionData = JsonConvert.SerializeObject(dt);
            return Json(SchoolWiseSessionData);
        }
        [HttpGet]
        public JsonResult LoadReligion()
        {
            Dllbind.UserinfoDetails.optMode = "ReligionForEnqReg";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var SchoolWiseSessionData = JsonConvert.SerializeObject(dt);
            return Json(SchoolWiseSessionData);
        }
        [HttpGet]
        public JsonResult LoadAgency()
        {
            Dllbind.UserinfoDetails.optMode = "LoadAgency";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var stateData = JsonConvert.SerializeObject(dt);
            return Json(stateData);
        }
        [HttpGet]
        public JsonResult LoadPermissionnationality()
        {

            Dllbind.UserinfoDetails.optMode = "Nationality";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var stateData = JsonConvert.SerializeObject(dt);
            return Json(stateData);
        }
    }
}