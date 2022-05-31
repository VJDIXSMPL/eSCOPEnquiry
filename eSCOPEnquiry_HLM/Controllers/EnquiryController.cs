using System;
using System.Globalization;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using eSCOPEnquiry_HLM.Models;
using Microsoft.AspNetCore.Authorization;
using Newtonsoft.Json;

namespace eSCOPEnquiry_HLM.Controllers
{
    public class EnquiryController : eSCOPBaseController
    {
        CultureInfo ci = new CultureInfo("en-GB");

        public ActionResult EnquiryDetails()
        {
            Enquiry_BAL b = new Enquiry_BAL();
            if (TempData["Error"] != null)
            {
                b.Remark = TempData["Error"].ToString();
            }
            return View(b);
        }

        [HttpPost]
        public ActionResult EnquirySave(string FormCommand, IFormCollection fc, string hdStudent_Dob)
        {
            int ResultCaller = -1;
            string msgOutCaller = "";
            string SavedenqNo = "";
            Enquiry_BAL EBAL = new Enquiry_BAL();
            TempData["Enq"] = EBAL;
            //Session["Enq"] = EBAL;
            EBAL.InstituteID = Convert.ToInt64(fc["InstituteID"].ToString() == "" ? "-1" : fc["InstituteID"].ToString());
            EBAL.SessionID = Convert.ToInt64(fc["SessionId"].ToString() == "" ? "-1" : fc["SessionId"].ToString());
            EBAL.ProgramID = Convert.ToInt64(fc["ProgramID"].ToString() == "" ? "-1" : fc["ProgramID"].ToString());
            EBAL.Student_Dob = Convert.ToDateTime(hdStudent_Dob, ci);
            EBAL.Student_FirstName = fc["Student_FirstName"].ToString().Split(' ')[0];
            EBAL.Student_LastName = fc["Student_FirstName"].ToString().Split(' ')[1];
            EBAL.MobileNo = fc["FMobileNo"].ToString();
            EBAL.EmailID = fc["FatherEmailID"].ToString();
            EBAL.FatherName = fc["Father_FirstName"].ToString();
            EBAL.optMode = "Insert";
            EBAL.EnquiryType = "2";
            EBAL.EnteredBy = "Online";
            EBAL.IpAddress = GetClientIpAddress();
            EBAL.McAddress = GetClientMac();
            EBAL.HostName = GetClientHost();
            TempData["InstituteName"] = fc["hdnname"].ToString();
            TempData["MobileNo"] = fc["FMobileNo"].ToString();
            EBAL.EnqNo = "";
            EBAL.crmEnquiry(EBAL, out ResultCaller, out msgOutCaller);
            if (ResultCaller > 0)
            {
                TempData["EnqNo"] = msgOutCaller.Split('.')[1]; ;
                TempData["RegData"] = null;
                TempData["Mode"] = "Enq";
                return RedirectToAction("ThankYou");
            }
            else
            {
                TempData["Error"] = msgOutCaller;
                return RedirectToAction("BasicDetails");
            }
        }


        [AllowAnonymous]
        public string EnquirySaveAPI(long InstituteID = -1, long SessionId = -1, long ProgramID = -1, string hdStudent_Dob = "01/01/1900",
            string Student_FirstName = "", string Student_LastName = "", string FMobileNo = "", string FatherEmailID = "", string Father_FirstName = "",
            string hdnname = "")
        {
            HttpContext.Session.SetString("Name", "New Enquiry");
            int ResultCaller = -1;
            string msgOutCaller = "";
            string SavedenqNo = "";
            Enquiry_BAL EBAL = new Enquiry_BAL();
            TempData["Enq"] = EBAL;
            EBAL.InstituteID = InstituteID;
            EBAL.SessionID = SessionId;
            EBAL.ProgramID = ProgramID;
            EBAL.Student_Dob = Convert.ToDateTime(hdStudent_Dob, ci);
            EBAL.Student_FirstName = Student_FirstName;
            EBAL.Student_LastName = Student_LastName;
            EBAL.MobileNo = FMobileNo;
            EBAL.EmailID = FatherEmailID;
            EBAL.FatherName = Father_FirstName;
            EBAL.optMode = "Insert";
            EBAL.EnquiryType = "2";
            EBAL.EnteredBy = "Website";
            EBAL.IpAddress = "Website";
            EBAL.McAddress = "Website";
            EBAL.HostName = "Website";
            TempData["InstituteName"] = hdnname;
            TempData["MobileNo"] = FMobileNo;
            EBAL.EnqNo = "";
            EBAL.Session = HttpContext.Session.Id;
            EBAL.crmEnquiry(EBAL, out ResultCaller, out msgOutCaller);
            if (ResultCaller > 0)
            {
                TempData["EnqNo"] = msgOutCaller.Split('.')[1]; ;
                TempData["RegData"] = null;
                TempData["Mode"] = "Enq";
                string data = JsonConvert.SerializeObject(new { ResultCaller, msgOutCaller });
                return data;
            }
            else
            {
                TempData["Error"] = msgOutCaller;
                string data = JsonConvert.SerializeObject(new { ResultCaller, msgOutCaller });
                return data;
            }

        }
    }
}
