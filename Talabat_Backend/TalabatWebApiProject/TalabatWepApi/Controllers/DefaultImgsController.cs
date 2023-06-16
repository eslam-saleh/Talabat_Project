using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TalabatWepApi.Models;

namespace TalabatWepApi.Controllers
{
    public class DefaultImgsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/DefaultImgs
        public IEnumerable<DefaultImage> Get()
        {
            return db.DefaultImages.ToList();
        }

        // POST: api/DefaultImgs
        public void Post([FromBody]DefaultImage defaultImage)
        {
            db.DefaultImages.Add(defaultImage);
            db.SaveChanges();
        }
    }
}
