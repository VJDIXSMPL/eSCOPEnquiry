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
    }
}
