using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Configuration;
using System.Web;
using System.Data.SqlClient;
using System.Xml;
using System.Collections;
using System.IO;
using System.Globalization;
using System.Collections.Specialized;
using System.Data.OleDb;
using Amazon;

namespace eSCOPEnquiry.Models
{
    public class settingsCon
    {

        private static settingsCon settingsSingleton;

        public static settingsCon Instance
        {
            get
            {
                if ((settingsSingleton == null))
                {
                    settingsSingleton = new settingsCon();
                }
                return settingsSingleton;
            }
        }

        private string _UserId;


        private string _AWSProfileName, _AWSAccessKey, _AWSSecretKey, _BucketName;


        public string BucketName
        {
            get
            {
                return _BucketName;
            }
            set
            {
                _BucketName = value;
            }
        }


        public string AWSSecretKey
        {
            get
            {
                return _AWSSecretKey;
            }
            set
            {
                _AWSSecretKey = value;
            }
        }



        public string AWSAccessKey
        {
            get
            {
                return _AWSAccessKey;
            }
            set
            {
                _AWSAccessKey = value;
            }
        }
        public string AWSProfileName
        {
            get
            {
                return _AWSProfileName;
            }
            set
            {
                _AWSProfileName = value;
            }
        }

        public RegionEndpoint bucketRegion = Amazon.RegionEndpoint.APSouth1;  //USWest2;  

        public settingsCon()
        {
            StringDictionary dic = new StringDictionary();
            if (dic["AWSProfileName"] != null)
            {
                AWSProfileName = dic["AWSProfileName"].ToString();
            }
            if (dic["AWSAccessKey"] != null)
            {
                AWSAccessKey = dic["AWSAccessKey"].ToString();
            }
            if (dic["AWSSecretKey"] != null)
            {
                AWSSecretKey = dic["AWSSecretKey"].ToString();
            }
            if (dic["BucketName"] != null)
            {
                BucketName = dic["BucketName"].ToString();
            }
        }

        //public StringDictionary LoadSettings()
        //{
        //    OleDbConnection AccCn;
        //    OleDbDataReader dr = null;
        //    OleDbCommand cmd;
        //    StringDictionary dic = new StringDictionary();
        //    string str = HttpContext.Current.Server.MapPath("~\\App_Data\\SetDb.mdb");
        //    AccCn = new OleDbConnection(("Provider=Microsoft.Jet.OLEDB.4.0;Jet OLEDB:Database Password=smpl99;" + (" data source=" + str)));
        //    cmd = new OleDbCommand("Select * from DataCollection", AccCn);
        //    try
        //    {
        //        AccCn.Open();
        //        dr = cmd.ExecuteReader();
        //    }
        //    catch (Exception ex)
        //    {
        //        throw ex.InnerException;
        //    }
        //    if (dr.HasRows)
        //    {
        //        while (dr.Read())
        //        {
        //            dic.Add(dr[0].ToString(), dr[1].ToString());
        //        }
        //    }
        //    dr.Close();
        //    AccCn.Close();
        //    return dic;
        //}
    }
}
