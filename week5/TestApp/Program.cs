using System;
using System.Net;
using System.IO;
using System.Text;

namespace TestApp
{
    class Program
    {
        static void Main(string[] args)
        {
           testBackend();
        }

        static void testBackend() {
            string url = "https://localhost:7775/MyApi";
            ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };

            HttpWebRequest webrequest = (HttpWebRequest)WebRequest.Create(url);
            webrequest.Method = "GET";
            webrequest.ContentType = "application/json";
            HttpWebResponse webresponse = (HttpWebResponse)webrequest.GetResponse();
            Encoding enc = System.Text.Encoding.GetEncoding("utf-8");
            StreamReader responseStream = new StreamReader(webresponse.GetResponseStream(), enc);
            string result = string.Empty;
            result = responseStream.ReadToEnd();
            Console.Out.WriteLine(result);
            webresponse.Close();
        }
    }
}
