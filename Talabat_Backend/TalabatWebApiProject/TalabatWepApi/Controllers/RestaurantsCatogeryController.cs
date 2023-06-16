using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using TalabatWepApi.Models;

namespace TalabatWepApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class RestaurantsCatogeryController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/RestaurantsCatogery
        public IEnumerable<RestaurantCatogery> Get()
        {
            return db.RestaurantCatogeries;
        }

        // GET: api/RestaurantsCatogery/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/RestaurantsCatogery
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/RestaurantsCatogery/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/RestaurantsCatogery/5
        public void Delete(int id)
        {
        }
    }
}
