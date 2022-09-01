using System;
using System.Globalization;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using eSCOPEnquiry.Models;
using Microsoft.AspNetCore.Authorization;
using Newtonsoft.Json;
using System.Data;
using Amazon.S3;
using Amazon.S3.Transfer;

namespace eSCOPEnquiry.Controllers
{
    public class EnquiryController : eSCOPBaseController
    {
        CultureInfo ci = new CultureInfo("en-GB");
        private IConfiguration Configuration;
        string conCommon = String.Empty;
        Enquiry_BAL EBAL;
        Enquiry_DAL EDAL;
        public EnquiryController(IConfiguration configuration)
        {
                Configuration = configuration;
            conCommon = Configuration.GetConnectionString("DefaultConnection");
            EBAL = new Enquiry_BAL(conCommon);
            EDAL = new Enquiry_DAL(conCommon);
        }

        public ActionResult EnquiryDetails()
        {
            if (TempData["Session"] != null)
            {
                EBAL.Session = TempData["Session"].ToString();
            }
            if (TempData["Error"] != null)
            {
                EBAL.Remark = TempData["Error"].ToString();
            }
            return View(EBAL);
        }

        [HttpPost]
        public ActionResult EnquirySave(string FormCommand, IFormCollection fc, string hdStudent_Dob)
        {
            int ResultCaller = -1;
            string msgOutCaller = "";
            string SavedenqNo = "";
            EBAL.InstituteID = Convert.ToInt64(fc["InstituteID"].ToString() == "" ? "-1" : fc["InstituteID"].ToString());
            EBAL.SessionID = Convert.ToInt64(fc["SessionId"].ToString() == "" ? "-1" : fc["SessionId"].ToString());
            EBAL.ProgramID = Convert.ToInt64(fc["ProgramID"].ToString() == "" ? "-1" : fc["ProgramID"].ToString());
            EBAL.Student_Dob = Convert.ToDateTime(hdStudent_Dob, ci);
            EBAL.Student_FirstName = fc["Student_FirstName"].ToString().Split(' ')[0];
            if (fc["Student_FirstName"].ToString().Split(' ').Length > 1)
            {
                EBAL.Student_LastName = fc["Student_FirstName"].ToString().Split(' ')[1];
            }
            EBAL.MobileNo = fc["FMobileNo"].ToString();
            EBAL.AlternateMobNo = fc["AlternateMobNo"].ToString();
            EBAL.EmailID = fc["FatherEmailID"].ToString();
            EBAL.FatherName = fc["Father_FirstName"].ToString();
            EBAL.ProgramType = fc["ProgramType"].ToString();
            EBAL.optMode = "Insert";
            EBAL.EnquiryType = "2";
            EBAL.EnteredBy = "Online";
            EBAL.IpAddress = "Online";
            EBAL.McAddress = GetClientMac();
            EBAL.HostName = GetClientHost();
            EBAL.Session = fc["Session"].ToString();
            TempData["InstituteName"] = fc["hdnname"].ToString();
            TempData["MobileNo"] = fc["FMobileNo"].ToString();
            EBAL.EnqNo = "";
            EBAL.crmEnquiry(EBAL, out ResultCaller, out msgOutCaller);
            if (ResultCaller > 0)
            {
                TempData["EnqNo"] = JsonConvert.SerializeObject(msgOutCaller.Split('.')[1]);
                TempData["RegData"] = null;
                TempData["Mode"] = "Enq";
                return RedirectToAction("ThankYou");
            }
            else
            {
                TempData["Error"] = JsonConvert.SerializeObject(msgOutCaller);
                return RedirectToAction("EnquiryDetails");
            }
        }
        public JsonResult GetEnqRegistrationData(string optMode, string EnquiryNo)
        {
            DataSet ds = new DataSet();
            EBAL.optMode = optMode;
            EBAL.EnquiryNo = EnquiryNo;
            ds = EBAL.GetEnqRegistrationData(EBAL);
            var result = JsonConvert.SerializeObject(ds);
            var jsonResult = Json(result);
            return jsonResult;
        }

        [AllowAnonymous]
        public string EnquirySaveAPI(long InstituteID = -1, long SessionId = -1, long ProgramID = -1, string hdStudent_Dob = "01/01/1900",
            string Student_FirstName = "", string Student_LastName = "", string FMobileNo = "", string FatherEmailID = "", string Father_FirstName = "",
            string hdnname = "", string AlternateMobNo = "", string ProgramType = "-1")
        {
            int ResultCaller = -1;
            string msgOutCaller = "";
            string SavedenqNo = "";
            EBAL.InstituteID = InstituteID;
            EBAL.SessionID = SessionId;
            EBAL.ProgramID = ProgramID;
            EBAL.ProgramType = ProgramType;
            EBAL.Student_Dob = Convert.ToDateTime(hdStudent_Dob, ci);
            EBAL.Student_FirstName = Student_FirstName;
            EBAL.Student_LastName = Student_LastName;
            EBAL.MobileNo = FMobileNo;
            EBAL.AlternateMobNo = AlternateMobNo;
            EBAL.EmailID = FatherEmailID;
            EBAL.FatherName = Father_FirstName;
            EBAL.optMode = "Insert";
            EBAL.EnquiryType = "2";
            EBAL.EnteredBy = "Website";
            EBAL.IpAddress = "Website";
            EBAL.McAddress = "Website";
            EBAL.HostName = "Website";
            //TempData["InstituteName"] = hdnname;
            //TempData["MobileNo"] = FMobileNo;
            EBAL.EnqNo = "";
            EBAL.Session = "";//HttpContext.Session.Id;
            EBAL.crmEnquiry(EBAL, out ResultCaller, out msgOutCaller);
            if (ResultCaller > 0)
            {
                TempData["EnqNo"] = msgOutCaller.Split('.')[1];
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

        public JsonResult Reg_Validate(string Student_FirstName, string StudentDob, string FMobileNo, string optMode)
        {
            DataSet ds = new DataSet();
            EBAL.Student_FirstName = Student_FirstName.Split(' ')[0];
            EBAL.Student_Dob = Convert.ToDateTime(StudentDob, ci);
            EBAL.FMobileNo = FMobileNo;
            EBAL.optMode = optMode;
            try
            {
                ds = EDAL.Reg_Validate(EBAL);
            }
            catch (Exception ex)
            {
                return Json(JsonConvert.SerializeObject(ex));
            }
            return Json(JsonConvert.SerializeObject(ds));
        }

        public IActionResult ThankYou()
        {
            return View();
        }

        public IActionResult Rachna()
        {
            TempData["InstituteName"] = "";
            TempData["EnqNo"] = "ENQ-06/2022/00644";
            TempData["RegData"] = null;
            TempData["Mode"] = "Enq";
            return RedirectToAction("ThankYou");
        }

        public IActionResult RegistrationMaster(string EnquiryNo = "-1")
        {
            if (EnquiryNo != "-1")
            {
                TempData["EnqNo"] = EnquiryNo;
                return View();
            }
            else
            {
                return Redirect("../Home/Index");
            }
        }

        public IActionResult PrintForm()
        {
            return View();
        }

        public IActionResult UploadFile()
        {
            return View();
        }

        [HttpPost("FileUpload")]
        public async Task<IActionResult> Index(List<IFormFile> files)
        {
            long size = files.Sum(f => f.Length);
            var filePaths = new List<string>();
            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {
                    // full path to file in temp location
                    var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", formFile.FileName); //we are using Temp file name just for the example. Add your own file path.
                    filePaths.Add(filePath);
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await formFile.CopyToAsync(stream);
                    }
                    //public RegionEndpoint bucketRegion = Amazon.RegionEndpoint.APSouth1;
                    //https://s3.ap-south-1.amazonaws.com/prudence.schooloncloud.com/
                    var s3Client = new AmazonS3Client("", "", Amazon.RegionEndpoint.APSouth1);
                    var fileTransferUtility = new TransferUtility(s3Client);
                    try
                    {
                        var fileTransferUtilityRequest = new TransferUtilityUploadRequest
                        {
                            BucketName = "",
                            FilePath = filePath,
                            StorageClass = S3StorageClass.StandardInfrequentAccess,
                            PartSize = 6291456, // 6 MB.  
                            Key = "Temp/TestUpload/" + formFile.FileName,
                            CannedACL = S3CannedACL.PublicRead
                        };
                        fileTransferUtilityRequest.Metadata.Add("param1", "Value1");
                        fileTransferUtilityRequest.Metadata.Add("param2", "Value2");
                        fileTransferUtility.Upload(fileTransferUtilityRequest);
                        fileTransferUtility.Dispose();
                    }
                    catch (AmazonS3Exception amazonS3Exception)
                    {
                    }
                }
            }
            return Ok(new { count = files.Count, size, filePaths });
        }

        [HttpPost]
        public ActionResult SaveEnquiryRegistration(string FormCommand, IFormCollection fc, Enquiry_BAL EBAL)
        {
            int Result = 0;
            string msgOut = string.Empty;
            string EnquiryOut = string.Empty;
            string RegOut = string.Empty;

            if (FormCommand == "SaveRegistration")
            {
                EBAL.McAddress = GetClientMac();
                EBAL.IpAddress = GetClientIpAddress();
                EBAL.HostName = GetClientHost();
                EBAL.optMode = "Insert";
                EBAL.EnqNo = fc["hdEnquiryID"].ToString();

                EDAL.Save_EnquiryRegistration(EBAL, out msgOut, out Result);
                if (Result == 1)
                {
                    TempData["Successmsg"] = msgOut;
                    TempData["RegNo"] = msgOut.Split('_')[1].ToString();
                    TempData["RegData"] = msgOut.Split('_')[2].ToString();
                    TempData["EnqNo"] = null;
                    TempData["SchoolId"] = fc["InstituteID"].ToString();
                }
                else
                {
                    TempData["Errormsg"] = msgOut;
                }
            }

            if (FormCommand.EndsWith("SubmitEnquiry2"))
            {
                TempData["Mode"] = "Offline";
                return RedirectToAction("ThankYou");
            }
            else
            {

                return RedirectToAction("ProceedPayment");
            }

        }

        public IActionResult ProceedPayment()
        {

            return View();
        }


    }


}
