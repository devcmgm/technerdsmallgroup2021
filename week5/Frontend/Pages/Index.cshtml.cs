using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System.Net;
using System.IO;
using System.Text;

namespace Frontend.Pages
{
    public class IndexModel : PageModel
    {
        public static String myData = "works";
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            
            _logger = logger;
        }

        public void OnGet()
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
            myData = result;
            webresponse.Close();
        }
    }
}
