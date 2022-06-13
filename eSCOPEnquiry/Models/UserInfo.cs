using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace eSCOPEnquiry.Models
{
    public class UserInfo
    {
        public UserInfo()
        {
            EnteredBy = "";
        }

        public string EnteredBy { get; set; }
        public DateTime EntryDate { get; set; }
        public string ModifyBy { get; set; }
        public DateTime ModifyDate { get; set; }
        public string IpAddress { get; set; }
        public string McAddress { get; set; }
        public string HostName { get; set; }
        public string optMode { get; set; }
        public string optModeShortName { get; set; }
        public string optModeFullName { get; set; }
        public int RecordToSkip  { get; set; }
       public int PageSize { get; set; }
       public string SortBy { get; set; }
       public string SortDir { get; set; }
       public string Search { get; set; }
    }
}