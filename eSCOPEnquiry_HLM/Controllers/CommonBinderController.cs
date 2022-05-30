using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using eSCOPEnquiry_HLM.Models;
using System.Data;
using Newtonsoft.Json;
using System.Data.SqlClient;
using System.Configuration;
using System.Collections;
using System.Globalization;

namespace eSCOPEnquiry_HLM.Controllers
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
        CommonMaster_BAL objbind = new CommonMaster_BAL();
        BindersForDropdown_BAL Dllbind = new BindersForDropdown_BAL();

        DataTable dt = new DataTable();
        CultureInfo ci = new CultureInfo("en-GB");
        public IActionResult StudentSearchForIDGEnerate(string term)
        {
            // Get Tags from database
            Dllbind.UserinfoDetails.optMode = "StudentSearchForID";
            Dllbind.ReasonType = term;

            dt = Dllbind.GetSchemeList(Dllbind).Tables[0];
            List<String> tags = new List<String>();
            // Classic version :-)
            for (int a = 0; a < dt.Rows.Count; a++)
            {
                tags.Add(dt.Rows[a][0].ToString());
            }
            return this.Json(tags, new Newtonsoft.Json.JsonSerializerSettings());
        }


        [HttpGet]
        public JsonResult BinderInstitute()
        {
            Dllbind.UserinfoDetails.optMode = "InstituteWiseOnline";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var SchoolWiseSessionData = JsonConvert.SerializeObject(dt);
            return Json(SchoolWiseSessionData, new Newtonsoft.Json.JsonSerializerSettings());
        }



        public IActionResult SchemeSearch(string term)
        {
            // Get Tags from database
            Dllbind.UserinfoDetails.optMode = "SchemeLikeSearch";
            Dllbind.ReasonType = term;

            dt = Dllbind.GetSchemeList(Dllbind).Tables[0];



            List<String> tags = new List<String>();

            // Classic version :-)
            for (int a = 0; a < dt.Rows.Count; a++)
            {
                tags.Add(dt.Rows[a][0].ToString());
            }


            return this.Json(tags,new Newtonsoft.Json.JsonSerializerSettings());

        }

        [HttpGet]

        public JsonResult LoadPermissionWiseInstitute()
        {
            
            Dllbind.UserinfoDetails.optMode = "InstituteWise";
            
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var Session = JsonConvert.SerializeObject(dt);
            return Json(Session, new Newtonsoft.Json.JsonSerializerSettings());
        }

        public JsonResult LoadStdAcademicSessionWiseSession(long InstituteID)
        {
           
            Dllbind.UserinfoDetails.optMode = "StdAcademicSession";
           

            Dllbind.InstituteID = InstituteID;
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var stateData = JsonConvert.SerializeObject(dt);
            return Json(stateData, new Newtonsoft.Json.JsonSerializerSettings());
        }

        [HttpGet]
        //[OutputCache(Duration = 86400, VaryByParam = "InstituteID")]
        public JsonResult LoadInstituteWiseProgram(long InstituteID)
        {
           
            Dllbind.UserinfoDetails.optMode = "InstituteWiseProgram";
           

            Dllbind.InstituteID = InstituteID;
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var stateData = JsonConvert.SerializeObject(dt);
            return Json(stateData, new Newtonsoft.Json.JsonSerializerSettings());
        }
        public JsonResult LoadInstituteProgramWiseBranch(long ProgramID, long InstituteID)
        {

            Dllbind.UserinfoDetails.optMode = "LoadProgramWiseBranch";
            Dllbind.InstituteID = InstituteID;
            Dllbind.ProgramID = ProgramID;

            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var BranchData = JsonConvert.SerializeObject(dt);
            return Json(BranchData, new Newtonsoft.Json.JsonSerializerSettings());
        }

        [HttpGet]
       
        public JsonResult LoadGender()
        {

         
            Dllbind.UserinfoDetails.optMode = "Gender";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var GenderData = JsonConvert.SerializeObject(dt);
            return Json(GenderData, new Newtonsoft.Json.JsonSerializerSettings());
        }

        [HttpGet]
       
        public JsonResult LoadBlood()
        {

            Dllbind.UserinfoDetails.optMode = "Blood";
            
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var BloodData = JsonConvert.SerializeObject(dt);
            return Json(BloodData, new Newtonsoft.Json.JsonSerializerSettings());
        }

        [HttpGet]
     
        public JsonResult LoadCategory()
        {

           
            Dllbind.UserinfoDetails.optMode = "Category";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var SchoolWiseSessionData = JsonConvert.SerializeObject(dt);
            return Json(SchoolWiseSessionData, new Newtonsoft.Json.JsonSerializerSettings());
        }

        [HttpGet]
      
        public JsonResult LoadReligion()
        {

          
            Dllbind.UserinfoDetails.optMode = "Religion";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var SchoolWiseSessionData = JsonConvert.SerializeObject(dt);
            return Json(SchoolWiseSessionData, new Newtonsoft.Json.JsonSerializerSettings());
        }
        [HttpGet]
     
        public JsonResult LoadNationality()
        {

            Dllbind.UserinfoDetails.optMode = "Nationality";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var SchoolWiseSessionData = JsonConvert.SerializeObject(dt);
            return Json(SchoolWiseSessionData, new Newtonsoft.Json.JsonSerializerSettings());
        }
        [HttpGet]
        public JsonResult LoadPermissionProfession()
        {

            Dllbind.UserinfoDetails.optMode = "Profession";
            
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var stateData = JsonConvert.SerializeObject(dt);
            return Json(stateData, new Newtonsoft.Json.JsonSerializerSettings());
        }


        [HttpGet]
        public JsonResult LoadPermissionQualification()
        {

            Dllbind.UserinfoDetails.optMode = "Qualification";
            
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var stateData = JsonConvert.SerializeObject(dt);
            return Json(stateData, new Newtonsoft.Json.JsonSerializerSettings());
        }

        [HttpGet]
        public JsonResult LoadPermissionDesignation()
        {

            Dllbind.UserinfoDetails.optMode = "Designation";
           
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var stateData = JsonConvert.SerializeObject(dt);
            return Json(stateData, new Newtonsoft.Json.JsonSerializerSettings());
        }


        [HttpGet]
    
        public JsonResult LoadMaritalStatus()
        {

            Dllbind.UserinfoDetails.optMode = "MaritalStatus";
         
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var MaritalStatusData = JsonConvert.SerializeObject(dt);
            return Json(MaritalStatusData, new Newtonsoft.Json.JsonSerializerSettings());
        }

        [HttpGet]
    
        public JsonResult LoadCountry()
        {
            
            Dllbind.UserinfoDetails.optMode = "Country";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var CountryData = JsonConvert.SerializeObject(dt);
            return Json(CountryData, new Newtonsoft.Json.JsonSerializerSettings());
        }

        [HttpGet]    
        public JsonResult LoadState(long CountryID = -1)
        {
           
            Dllbind.CountryID = CountryID;
            Dllbind.UserinfoDetails.optMode = "State";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var stateData = JsonConvert.SerializeObject(dt);
            return Json(stateData, new Newtonsoft.Json.JsonSerializerSettings());
        }
        [HttpGet]
     
        public JsonResult LoadCity(long StateID = -1)
        {
           
            Dllbind.StateID = StateID;
            Dllbind.UserinfoDetails.optMode = "City";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var cityData = JsonConvert.SerializeObject(dt);
            return Json(cityData, new Newtonsoft.Json.JsonSerializerSettings());
        }

        public string LoadEmployeeListChk(string CityID, string Search)
        {
            string CityIDQuery = HttpContext.Request.Query["CityID"];
            if (CityIDQuery != null)
            {
                CityID = CityIDQuery.ToString();
            }
            string SearchQuery = HttpContext.Request.Query["Search"];
            if (SearchQuery != null)
            {
                Search = SearchQuery.ToString();
            }
            Dllbind.UserinfoDetails.optMode = "ArearLikeSearch";
            Dllbind.ReasonType = Search;
            Dllbind.CityID = Convert.ToInt64(CityID);
            dt = Dllbind.GetSchemeList(Dllbind).Tables[0];
            //List<HRManagement_BAL> tags = new List<HRManagement_BAL>();
            //for (int a = 0; a < dt.Rows.Count; a++)
            //{
            //    tags.Add(new HRManagement_BAL { RecordID = Convert.ToInt64(dt.Rows[a][0].ToString()), Value = dt.Rows[a][1].ToString() });
            //}
            //return JsonConvert.SerializeObject(tags);
            List<BindersForDropdown_BAL> tags = new List<BindersForDropdown_BAL>();

            // Classic version :-)
            for (int a = 0; a < dt.Rows.Count; a++)
            {
                tags.Add( new BindersForDropdown_BAL { Value = dt.Rows[a][0].ToString() });
            }
            return JsonConvert.SerializeObject(tags);
        }
    }
}