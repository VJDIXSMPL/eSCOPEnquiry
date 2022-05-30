using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace eSCOPEnquiry_HLM.Models
{
     [Serializable]
    public class PreviousSchoolDetails_BAL
    {
        public  PreviousSchoolDetails_BAL()
        {
            PrevoiusSchool = "";
        }
        public string PrevoiusSchool { get; set; }
        public int PrevoiusClass { get; set; }
        public string Place { get; set; }
        public string ReasonForLeaving { get; set; }
        public int YearofLeaving { get; set; }
        public int Board { get; set; }
    }
}