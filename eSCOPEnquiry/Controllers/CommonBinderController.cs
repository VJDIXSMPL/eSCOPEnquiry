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
        public JsonResult LoadStdAcademicSessionWiseSession(long InstituteID)
        {
            try
            {
                Dllbind.UserinfoDetails.optMode = "StdAcademicSession";
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
            try
            {
                Dllbind.UserinfoDetails.optMode = "InstituteWiseProgram";
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
    }
}