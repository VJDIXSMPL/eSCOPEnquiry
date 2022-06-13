using eSCOPEnquiry.Models;
using System;
using System.Net;
using System.Collections.Generic;
using System.Data;
using System.Globalization;
using System.Linq;
using System.Threading;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace eSCOPEnquiry.Controllers
{
    public class eSCOPBaseController : Controller
    {
        // Methods
        //protected override IAsyncResult BeginExecuteCore(AsyncCallback callback, object state)
        //{
        //    string name = null;
        //    HttpCookie cookie = base.Request.Cookies["_culture"];
        //    if (cookie != null)
        //    {
        //        name = cookie.Value;
        //    }
        //    else
        //    {
        //        name = ((base.Request.UserLanguages != null) && (base.Request.UserLanguages.Length != 0)) ? base.Request.UserLanguages[0] : null;
        //    }
        //    name = CultureHelper.GetImplementedCulture(name);
        //    Thread.CurrentThread.CurrentCulture = new CultureInfo(name);
        //    Thread.CurrentThread.CurrentUICulture = Thread.CurrentThread.CurrentCulture;
        //    return base.BeginExecuteCore(callback, state);
        //}

        public string GetClientHost() =>
            HttpContext.Connection.RemoteIpAddress.ToString();//base.Request.UserHostName;

        public string GetClientIpAddress() =>
            HttpContext.Connection.RemoteIpAddress.ToString();//base.Request.UserHostAddress;

        public string GetClientMac() =>
            HttpContext.Connection.RemoteIpAddress.ToString();//base.Request.UserHostName;

        //public int GetSchoolID()
        //{
        //    int num = -1;
        //    try
        //    {
        //        num = Convert.ToInt32(System.Configuration.ConfigurationManager.AppSettings["MySchoolID"].ToString());
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //    return num;
        //}
        //public string GetHost()
        //{
        //    string id = "-1";
        //    try
        //    {
        //        id = System.Configuration.ConfigurationManager.AppSettings["HostType"].ToString();
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //    return id;
        //}
        
        //public string SchoolName(int SchoolId)

        //{
        //        string _schoolname = "Pearson Group";
        //        SchoolSetup_DAL obj = new SchoolSetup_DAL();
        //        SchoolSetup_BAL sbl = new SchoolSetup_BAL();
        //        sbl.SchoolId = SchoolId;
        //        DataTable dt = new DataTable();
        //        dt = obj.GetSchoolName(sbl);
        //        if (dt != null && dt.Rows.Count > 0)
        //        {
        //            _schoolname = dt.Rows[0]["SchoolName"].ToString();
        //        }
        //        return _schoolname;
        //}
        //public string SchoolAddress()
        //{
        //    string _schooladd = "Pearson Group";
        //        SchoolSetup_DAL obj = new SchoolSetup_DAL();
        //        SchoolSetup_BAL sbl = new SchoolSetup_BAL();
        //        sbl.SchoolId = GetSchoolID();
        //        DataTable dt = new DataTable();
        //        dt = obj.GetSchoolName(sbl);
        //        if (dt != null && dt.Rows.Count > 0)
        //        {
        //            _schooladd = dt.Rows[0]["SchoolAddress1"].ToString();
        //        }
        //        return _schooladd;
        //}
    }
}