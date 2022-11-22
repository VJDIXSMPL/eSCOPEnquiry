using eSCOPEnquiry.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace eSCOPEnquiry.Controllers
{
    public class HomeController : Controller
    {
        private IConfiguration Configuration;
        string conCommon = String.Empty;
        Enquiry_BAL EBAL;
        public HomeController(IConfiguration configuration)
        {
            Configuration = configuration;
            conCommon = Configuration.GetConnectionString("DefaultConnection");
            EBAL = new Enquiry_BAL(conCommon);
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        public ActionResult LandingPage(string Source = "-1", string SubSource = "-1")
        {
            HttpContext.Session.SetString("Name", "New Enquiry");
            EBAL.Session = HttpContext.Session.Id;
            EBAL.Source = Source;
            EBAL.SubSource = SubSource;
            EBAL.optMode = "SaveEnquirySession";
            string msgOutCaller = "";
            int ResultCaller = 0;
            int result = 0;
            TempData["Session"] = HttpContext.Session.Id;
            EBAL.SaveEnquirySession(EBAL, out ResultCaller, out msgOutCaller);
            return RedirectToAction("Index");
        }

        public IActionResult HTMLTOPDF()
        {
            return View();
        }
    }
}