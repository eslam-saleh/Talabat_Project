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
    public class MenuItemCatogeriesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/MenuItemCatogeries
        public IEnumerable<dynamic> Get(int id)
        {
            return db.MenuItems.Include(r => r.MenuItemCatogery).Include(m=>m.menu.Restaurant).Where(m=>m.menu.Restaurant.id==id)
                .Select(r => new { r.MenuItemCatogery.Id, r.MenuItemCatogery.Name }).Distinct();
        }

        // POST: api/MenuItemCatogeries
        public IHttpActionResult Post([FromBody]MenuItemCatogery menuItemCatogery)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            db.MenuItemCatogeries.Add(menuItemCatogery);
            db.SaveChanges();
            return Created(new Uri(Request.RequestUri + $"/{menuItemCatogery.Id}"), menuItemCatogery);
        }

        // PUT: api/MenuItemCatogeries/5
        public IHttpActionResult Put(int id, [FromBody] MenuItemCatogery menuItemCatogery)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var menuCat = db.MenuItemCatogeries.FirstOrDefault(m => m.Id == id);
            if (menuCat == null)
            {
                return NotFound();
            }
            menuCat.Name = menuItemCatogery.Name;
            db.SaveChanges();
            return Ok();

        }

        // DELETE: api/MenuItemCatogeries/5
        public IHttpActionResult Delete(int id)
        {
            var menuCat = db.MenuItemCatogeries.FirstOrDefault(m => m.Id == id);
            if (menuCat == null)
            {
                return NotFound();
            }
            db.MenuItemCatogeries.Remove(menuCat);
            db.SaveChanges();
            return Ok();
        }
    }
}
