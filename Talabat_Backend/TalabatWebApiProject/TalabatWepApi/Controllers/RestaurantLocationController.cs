using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TalabatWepApi.Models;
using System.Data.Entity;

namespace TalabatWepApi.Controllers
{
    public class RestaurantLocationController : ApiController
    {
        // GET: api/RestaurantLocation
        private ApplicationDbContext db = new ApplicationDbContext();
        public IEnumerable<dynamic> Get()
        {
            return db.RestaurantLocations.Include(l=>l.Restaurant).Select(l=>new { l.State,l.Area,l.Restaurant.id});
        }
        [Route("api/RestaurantLocation/state")]
        public IEnumerable<dynamic> GetState()
        {
            return db.RestaurantLocations.Select(l => l.State).Distinct();
        }

        // GET: api/RestaurantLocation/5
        [Route("api/RestaurantLocation/area/{id}")]
        public IEnumerable<string> GetArea(string id)
        {
            return db.RestaurantLocations.Where(l=>l.State==id).Select(l => l.Area).Distinct();
        }

        // POST: api/RestaurantLocation
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/RestaurantLocation/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/RestaurantLocation/5
        public void Delete(int id)
        {
        }
    }
}
