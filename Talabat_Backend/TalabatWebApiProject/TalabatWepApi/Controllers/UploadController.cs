using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace TalabatWepApi.Controllers
{
    public class UploadController : ApiController
    {
        // GET: api/Upload
        public string Post()
        {
            string fileName = null;
            var httpReq = HttpContext.Current.Request;
            var postedFile = httpReq.Files["Image"];
            fileName = new string(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            fileName = fileName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);

            //var filePath = HttpContext.Current.Server.MapPath("~/Content/images/" + fileName);
            postedFile.SaveAs(@"E:\ITI Course\project\New folder\talabat\src\assets\talabatImg\"+fileName);
            return fileName;
        }

       
    }
}
