using AutoMapper;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using TalabatWepApi.DTOS;
using TalabatWepApi.Models;

namespace TalabatWepApi.Controllers
{
    //<httpProtocol>
    //  <customHeaders>
    //    <add name = "Access-Allow-Control-Origin" value="*"/>
    //    <add name = "Access-Allow-Control-Headers" value="Content-Type"/>
    //    <add name = "Access-Allow-Control-Credentials" value="true"/>
    //    <add name = "Access-Allow-Control-Methods" value="Get,Post,Delete,Put,OPtions"/>
    //  </customHeaders>
    //</httpProtocol>
    [EnableCors(origins:"*",headers:"*",methods:"*")]
    public class RestaurantsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Restaurants
        public IEnumerable<dynamic> GetRestaurants()
        {
            return db.Restaurants.Include(r => r.User).Where(s => s.IsDeleted == false && s.IsActive == true)
                .ToList()
                .Select(r=>new { 
                    r.id,r.Name,r.ShortDescribtion,r.Describtion,r.User.Email,r.RestaurantCatogeryId,r.UserId,
                    r.Image
                });
        }
        [Authorize]
        [Route("api/RestaurantsByUser")]
        public IEnumerable<dynamic> GetRestaurantsbyUser()
        {
            var userId = User.Identity.GetUserId();
            return db.Restaurants.Where(s => s.IsDeleted == false && s.IsActive == true &&s.UserId==userId)
                .ToList()
                .Select(r => new {
                    r.id,
                    r.Name
                });
        }

        // GET: api/Restaurants/5
        public IHttpActionResult GetRestaurant(int id)
        {
            Restaurant s = db.Restaurants.Include(r => r.RestaurantCatogery).FirstOrDefault(r => r.id == id);
            if (s == null || s.IsDeleted == true || s.IsActive == false)
            {
                return NotFound();
            }

            return Ok(Mapper.Map<Restaurant, RestaurantDto>(s));
        }
        //[Authorize(Roles = "SuperAdmin")]
        // PUT: api/Restaurants/5
        public IHttpActionResult PutRestaurant(int id, RestaurantDto restaurant)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var res = db.Restaurants.FirstOrDefault(r => r.id == id);

            if (res == null)
            {
                return BadRequest();
            }
            restaurant.id = res.id;
            Mapper.Map(restaurant, res);
            db.SaveChanges();
            return Ok();


        }
       // [Authorize]
        // POST: api/Restaurants

        public IHttpActionResult PostRestaurant(RestaurantDto restaurant)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var res=Mapper.Map<RestaurantDto, Restaurant>(restaurant);

            db.Restaurants.Add(res);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = restaurant.id }, restaurant);
        }
        //[Authorize(Roles ="SuperAdmin")]
        // DELETE: api/Restaurants/5
       // [ResponseType(typeof(Restaurant))]
        public IHttpActionResult DeleteRestaurant(int id)
        {
            Restaurant restaurant = db.Restaurants.Find(id);
            if (restaurant == null)
            {
                return NotFound();
            }

            //db.Restaurants.Remove(restaurant);
            restaurant.IsDeleted = true;
            db.SaveChanges();


            return Ok(restaurant);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        //private bool RestaurantExists(int id)
        //{
        //    return db.Restaurants.Count(e => e.id == id) > 0;
        //}
        //private bool AvailableRestaurant(Restaurant s)
        //{

        //    return ;
        //}
    }
}