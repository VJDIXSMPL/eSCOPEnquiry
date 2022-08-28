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

        public IActionResult RegistrationMaster()
        {
            return View();
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
        public ActionResult RegistrationMaster(string FormCommand, FormCollection fc)
        {
           
            int Result = 0;
            string msgOut = string.Empty;
            string EnquiryOut = string.Empty;
            string RegOut = string.Empty;
            if (FormCommand == "SaveRegistration")
            {
                //New Customization
                //string fName = "";
                //var s3Client = new AmazonS3Client(settingsCon.Instance.AWSAccessKey, settingsCon.Instance.AWSSecretKey, settingsCon.Instance.bucketRegion);

                //DataTable dt = new DataTable();
                //dt.Columns.Add("DocTypeName");
                //dt.Columns.Add("DocURL");
                //int j = 0;
                //if (files != null)
                //{
                //    foreach (HttpPostedFileBase file in files)
                //    {
                //        if (file != null)
                //        {
                //            if (file != null && file.ContentLength > 0)
                //            {

                //                var originalDirectory = new DirectoryInfo(string.Format("{0}StudentDocsUpload\\" + Session.SessionID + "", Server.MapPath(@"\")));
                //                string pathString = System.IO.Path.Combine(originalDirectory.ToString(), "imagepath");
                //                bool isExists = System.IO.Directory.Exists(pathString);
                //                if (!isExists)
                //                    System.IO.Directory.CreateDirectory(pathString);
                //                var path = string.Format("{0}\\{1}", pathString, file.FileName);
                //                file.SaveAs(path);
                //                //////////////////////////////
                //                FileInfo file1 = new FileInfo(path);
                //                var fileTransferUtility = new TransferUtility(s3Client);
                //                try
                //                {
                //                    if (file1.Length > 0)
                //                    {
                //                        var filePath = file1.FullName;// Path.Combine(Server.MapPath("~/Files"), Path.GetFileName(file.Name));
                //                        var fileTransferUtilityRequest = new TransferUtilityUploadRequest
                //                        {
                //                            BucketName = settingsCon.Instance.BucketName,
                //                            FilePath = filePath,
                //                            StorageClass = S3StorageClass.StandardInfrequentAccess,
                //                            PartSize = 6291456, // 6 MB.  
                //                            Key = "StudentDocsUpload/" + Session.SessionID + "/" + file.FileName,
                //                            CannedACL = S3CannedACL.PublicRead
                //                        };
                //                        fileTransferUtilityRequest.Metadata.Add("param1", "Value1");
                //                        fileTransferUtilityRequest.Metadata.Add("param2", "Value2");
                //                        fileTransferUtility.Upload(fileTransferUtilityRequest);
                //                        fileTransferUtility.Dispose();
                //                        file1.Delete();
                //                        DataRow dr1 = dt.NewRow();
                //                        dr1[0] = fc["filetype_" + j.ToString()].ToString();
                //                        dr1[1] = "https://s3.ap-south-1.amazonaws.com/" + settingsCon.Instance.BucketName + "/" + "StudentDocsUpload/" + Session.SessionID + "/" + file.FileName;

                //                        dt.Rows.Add(dr1);
                //                        j++;

                //                    }

                //                }
                //                catch (AmazonS3Exception amazonS3Exception)
                //                {
                //                    if (amazonS3Exception.ErrorCode != null &&
                //                        (amazonS3Exception.ErrorCode.Equals("InvalidAccessKeyId") || amazonS3Exception.ErrorCode.Equals("InvalidSecurity")))
                //                    {
                //                        ViewBag.Message = "Check the provided AWS Credentials.";
                //                    }
                //                    else
                //                    {
                //                        ViewBag.Message = "Error occurred: " + amazonS3Exception.Message;
                //                    }
                //                }
                //            }
                //        }
                //    }


                //}

                //EBAL.DocsTable = dt;

                //if (filepic != null)
                //{
                //    //Save file content goes here
                //    fName = filepic.FileName;
                //    if (filepic != null && filepic.ContentLength > 0)
                //    {

                //        var originalDirectory = new DirectoryInfo(string.Format("{0}StudentPhoto\\" + Session.SessionID + "", Server.MapPath(@"\")));
                //        string pathString = System.IO.Path.Combine(originalDirectory.ToString(), "imagepath");
                //        var fileName1 = Path.GetFileName(filepic.FileName);
                //        bool isExists = System.IO.Directory.Exists(pathString);
                //        if (!isExists)
                //            System.IO.Directory.CreateDirectory(pathString);
                //        var path = string.Format("{0}\\{1}", pathString, filepic.FileName);
                //        filepic.SaveAs(path);

                //        FileInfo file1 = new FileInfo(path);
                //        var fileTransferUtility = new TransferUtility(s3Client);
                //        try
                //        {
                //            if (file1.Length > 0)
                //            {
                //                var filePath = file1.FullName;// Path.Combine(Server.MapPath("~/Files"), Path.GetFileName(file.Name));
                //                var fileTransferUtilityRequest = new TransferUtilityUploadRequest
                //                {
                //                    BucketName = settingsCon.Instance.BucketName,
                //                    FilePath = filePath,
                //                    StorageClass = S3StorageClass.StandardInfrequentAccess,
                //                    PartSize = 6291456, // 6 MB.  
                //                    Key = "StudentPhoto/" + Session.SessionID + "/" + filepic.FileName,
                //                    CannedACL = S3CannedACL.PublicRead
                //                };
                //                fileTransferUtilityRequest.Metadata.Add("param1", "Value1");
                //                fileTransferUtilityRequest.Metadata.Add("param2", "Value2");
                //                fileTransferUtility.Upload(fileTransferUtilityRequest);
                //                fileTransferUtility.Dispose();
                //                file1.Delete();
                //                EBAL.ImageName = filepic.FileName;
                //                EBAL.ImageUrl = "https://s3.ap-south-1.amazonaws.com/" + settingsCon.Instance.BucketName + "/" + "StudentPhoto/" + Session.SessionID + "/" + filepic.FileName;
                //            }
                //        }
                //        catch (Exception ex)
                //        {
                //        }
                //    }
                //}
                //else
                //{
                //    EBAL.ImageName = "";
                //    EBAL.ImageUrl = "";
                //}
                //if (filesig != null)
                //{
                //    //Save file content goes here
                //    fName = filesig.FileName;
                //    if (filesig != null && filepic.ContentLength > 0)
                //    {

                //        var originalDirectory = new DirectoryInfo(string.Format("{0}StudentPhoto\\" + Session.SessionID + "", Server.MapPath(@"\")));
                //        string pathString = System.IO.Path.Combine(originalDirectory.ToString(), "imagepath");
                //        var fileName1 = Path.GetFileName(filesig.FileName);
                //        bool isExists = System.IO.Directory.Exists(pathString);
                //        if (!isExists)
                //            System.IO.Directory.CreateDirectory(pathString);
                //        var path = string.Format("{0}\\{1}", pathString, filesig.FileName);
                //        filesig.SaveAs(path);

                //        FileInfo file1 = new FileInfo(path);
                //        var fileTransferUtility = new TransferUtility(s3Client);
                //        try
                //        {
                //            if (file1.Length > 0)
                //            {
                //                var filePath = file1.FullName;// Path.Combine(Server.MapPath("~/Files"), Path.GetFileName(file.Name));
                //                var fileTransferUtilityRequest = new TransferUtilityUploadRequest
                //                {
                //                    BucketName = settingsCon.Instance.BucketName,
                //                    FilePath = filePath,
                //                    StorageClass = S3StorageClass.StandardInfrequentAccess,
                //                    PartSize = 6291456, // 6 MB.  
                //                    Key = "StudentPhoto/" + Session.SessionID + "/" + filesig.FileName,
                //                    CannedACL = S3CannedACL.PublicRead
                //                };
                //                fileTransferUtilityRequest.Metadata.Add("param1", "Value1");
                //                fileTransferUtilityRequest.Metadata.Add("param2", "Value2");
                //                fileTransferUtility.Upload(fileTransferUtilityRequest);
                //                fileTransferUtility.Dispose();
                //                file1.Delete();
                //                EBAL.StudentSignName = filesig.FileName;
                //                EBAL.StudentSignURL = "https://s3.ap-south-1.amazonaws.com/" + settingsCon.Instance.BucketName + "/" + "StudentPhoto/" + Session.SessionID + "/" + filesig.FileName;
                //            }
                //        }
                //        catch (Exception ex)
                //        {
                //        }
                //    }
                //}
                //else
                //{
                    EBAL.StudentSignName = "";
                    EBAL.StudentSignURL = "";
                //}

                if (fc["hdneid"].ToString() != null)
                {
                    DataTable tempdt = new DataTable();
                    tempdt.Columns.Add("ExamID");
                    tempdt.Columns.Add("ExamBoard");
                    tempdt.Columns.Add("ExamRoll");
                    tempdt.Columns.Add("ExamYear");
                    tempdt.Columns.Add("ExamTMarks");
                    tempdt.Columns.Add("ExamOMarks");
                    tempdt.Columns.Add("ExamAge");

                    string[] ExamID = fc["hdneid"].ToString().Split(',');
                    string[] ExamBoard = fc["hdnboard"].ToString().Split(',');
                    string[] ExamRoll = fc["hdnroll"].ToString().Split(',');
                    string[] ExamYear = fc["hdnyear"].ToString().Split(',');
                    string[] ExamTMarks = fc["hdntmarks"].ToString().Split(',');
                    string[] ExamOMarks = fc["hdnomarks"].ToString().Split(',');
                    string[] ExamAge = fc["hdnage"].ToString().Split(',');

                    for (int i = 0; i < ExamID.Length; i++)
                    {
                        if (ExamID[i] != "")
                        {
                            DataRow dr = tempdt.NewRow();
                            dr["ExamID"] = ExamID[i];
                            dr["ExamBoard"] = ExamBoard[i];
                            dr["ExamRoll"] = ExamRoll[i];
                            dr["ExamYear"] = ExamYear[i];
                            dr["ExamTMarks"] = ExamTMarks[i];
                            dr["ExamOMarks"] = ExamOMarks[i];
                            dr["ExamAge"] = ExamAge[i];
                            tempdt.Rows.Add(dr);
                        }
                    }
                    EBAL.ExamTable = tempdt;
                }

                //

                if (fc["hdEditReg"] != "-1")
                {
                    EBAL.RegistrationID = Convert.ToInt64(fc["hdEditReg"].ToString());
                    EBAL.EnquiryID = Convert.ToInt64(fc["hdEnquiryID"].ToString());
                    EBAL.Permanent_AddressId = Convert.ToInt64(fc["hdnPerAdsressID"].ToString());
                    EBAL.AddressID = Convert.ToInt64(fc["hdAddressID"].ToString());
                    EBAL.FatherID = Convert.ToInt64(fc["hdFatherID"].ToString());
                    EBAL.StudentID = Convert.ToInt64(fc["hdStudentID"].ToString());
                    EBAL.MotherID = Convert.ToInt64(fc["hdMotherID"].ToString());
                    EBAL.Guardian_Id = Convert.ToInt64(fc["hdGuardianID"].ToString());
                    //EBAL.SpouseID = Convert.ToInt64(fc["hdSpouseID"].ToString());
                    EBAL.InstituteID = Convert.ToInt64(fc["hdInstituteID"].ToString());


                    //if (EBAL.Description=
                }
                else if (fc["hdEnquiryID"] != "-1")
                {
                    EBAL.EnquiryID = Convert.ToInt64(fc["hdEnquiryID"].ToString());
                    EBAL.FatherID = Convert.ToInt64(fc["hdFatherID"].ToString());
                    EBAL.MotherID = Convert.ToInt64(fc["hdMotherID"].ToString());
                    EBAL.StudentID = Convert.ToInt64(fc["hdStudentID"].ToString());
                    EBAL.AddressID = Convert.ToInt64(fc["hdAddressID"].ToString());
                }
                
                //TryUpdateModel(EBAL);
                EBAL.DateOfBirth = Convert.ToDateTime(fc["DateOfBirth"].ToString(), ci);
                EBAL.RequiredLateral = Convert.ToBoolean(fc["chkislateral"].ToString());
                EBAL.ApplicantStatus = fc["ddlappli"].ToString();
                if (fc["ddlexammedium"].ToString() == "Other")
                {
                    EBAL.ExamMedium = fc["txtmedium"].ToString();
                }
                else
                {
                    EBAL.ExamMedium = fc["ddlexammedium"].ToString();
                }
                if (fc["hdnaddchck"].ToString() == "")
                {
                    EBAL.AddressCheck = "Yes";
                }
                else
                {
                    EBAL.AddressCheck = "No";
                }
                EBAL.ExamStatus = fc["ddlexamstaus"].ToString();
                EBAL.BackGRound = fc["ddlback"].ToString();
                EBAL.Amount_Received = fc["lblamt"].ToString();

                //EBAL.EnteredBy = CurrentUser.UserName;
                EBAL.IpAddress = "Online";
                EBAL.McAddress = GetClientMac();
                EBAL.HostName = GetClientHost();

                EBAL.Registration_CRUD(EBAL, out msgOut, out Result, out EnquiryOut, out RegOut);


                if (Result > 0)
                {
                    TempData["Successmsg"] = msgOut;
                    TempData["Enquiry"] = null;
                    EBAL.EnquiryID = Convert.ToInt64(EnquiryOut);
                    EBAL.RegistrationID = Convert.ToInt64(RegOut);
                    //TempData["TraineeProfile"] = lBal;
                    return RedirectToAction("RegistrationManagement");
                    // return Redirect("/StudentProfile/TraineeProfileReg");
                }


                else
                {
                    TempData["Error"] = 1;
                    TempData["ErrorMsg"] = msgOut;

                    TempData["val"] = EBAL;
                    return RedirectToAction("RegistrationMaster");
                }
            }

            if (FormCommand == "SaveRegistrationUpdate")
            {




                if (fc["hdEditReg"] != "-1")
                {
                    EBAL.RegistrationID = Convert.ToInt64(fc["hdEditReg"].ToString());
                    EBAL.EnquiryID = Convert.ToInt64(fc["hdEnquiryID"].ToString());
                    EBAL.Permanent_AddressId = Convert.ToInt64(fc["hdnPerAdsressID"].ToString());
                    EBAL.AddressID = Convert.ToInt64(fc["hdAddressID"].ToString());
                    EBAL.FatherID = Convert.ToInt64(fc["hdFatherID"].ToString());
                    EBAL.StudentID = Convert.ToInt64(fc["hdStudentID"].ToString());
                    EBAL.MotherID = Convert.ToInt64(fc["hdMotherID"].ToString());
                    EBAL.Guardian_Id = Convert.ToInt64(fc["hdGuardianID"].ToString());
                    EBAL.SpouseID = Convert.ToInt64(fc["hdSpouseID"].ToString());
                    EBAL.InstituteID = Convert.ToInt64(fc["hdInstituteID"].ToString());


                    //if (EBAL.Description=
                }
                else if (fc["hdEnquiryID"] != "-1")
                {
                    EBAL.EnquiryID = Convert.ToInt64(fc["hdEnquiryID"].ToString());
                    EBAL.FatherID = Convert.ToInt64(fc["hdFatherID"].ToString());
                    EBAL.MotherID = Convert.ToInt64(fc["hdMotherID"].ToString());
                    EBAL.StudentID = Convert.ToInt64(fc["hdStudentID"].ToString());
                    EBAL.AddressID = Convert.ToInt64(fc["hdAddressID"].ToString());

                }
                EBAL.optMode = "UpdateReg";

                //TryUpdateModel(EBAL);
                EBAL.DateOfBirth = Convert.ToDateTime(fc["DateOfBirth"].ToString(), ci);
                EBAL.RequiredLateral = Convert.ToBoolean(fc["chkislateral"].ToString());
                EBAL.BackGRound = fc["ddlback"].ToString();
               // EBAL.ClientID = CurrentUser.ClientID;
                //EBAL.EnteredBy = CurrentUser.UserName;
                EBAL.IpAddress = "Online";
                EBAL.McAddress = GetClientMac();
                EBAL.HostName = GetClientHost();

                EBAL.Registration_CRUDUpdate(EBAL, out msgOut, out Result, out EnquiryOut, out RegOut);


                if (Result > 0)
                {
                    TempData["Successmsg"] = msgOut;
                    TempData["Enquiry"] = null;
                    EBAL.EnquiryID = Convert.ToInt64(EnquiryOut);
                    EBAL.RegistrationID = Convert.ToInt64(RegOut);
                    //TempData["TraineeProfile"] = lBal;
                    return RedirectToAction("RegistrationManagement");
                    // return Redirect("/StudentProfile/TraineeProfileReg");
                }


                else
                {
                    TempData["Error"] = 1;
                    TempData["ErrorMsg"] = msgOut;

                    TempData["val"] = EBAL;
                    return RedirectToAction("RegistrationMaster");
                }
            }
            return RedirectToAction("RegistrationMaster");
        }

    }
}
