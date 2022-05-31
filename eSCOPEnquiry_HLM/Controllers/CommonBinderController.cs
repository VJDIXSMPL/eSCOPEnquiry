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

        [HttpGet]
        public JsonResult BinderInstitute()
        {
            Dllbind.UserinfoDetails.optMode = "InstituteWiseOnline";
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var SchoolWiseSessionData = JsonConvert.SerializeObject(dt);
            return Json(SchoolWiseSessionData, new Newtonsoft.Json.JsonSerializerSettings());
        }

        [HttpGet]
        public JsonResult LoadStdAcademicSessionWiseSession(long InstituteID)
        {
            Dllbind.UserinfoDetails.optMode = "StdAcademicSession";
            Dllbind.InstituteID = InstituteID;
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var stateData = JsonConvert.SerializeObject(dt);
            return Json(stateData, new Newtonsoft.Json.JsonSerializerSettings());
        }

        [HttpGet]
        public JsonResult LoadInstituteWiseProgram(long InstituteID)
        {
            Dllbind.UserinfoDetails.optMode = "InstituteWiseProgram";
            Dllbind.InstituteID = InstituteID;
            dt = Dllbind.getBindersList(Dllbind).Tables[0];
            var stateData = JsonConvert.SerializeObject(dt);
            return Json(stateData, new Newtonsoft.Json.JsonSerializerSettings());
        }
    }
}