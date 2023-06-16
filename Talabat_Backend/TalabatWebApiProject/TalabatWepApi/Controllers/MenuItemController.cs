using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TalabatWepApi.Models;
using System.Data.Entity;
using TalabatWepApi.DTOS;

using TalabatWepApi.App_Start;
using AutoMapper;

namespace TalabatWepApi.Controllers
{
    public class MenuItemController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        // GET: api/MenuItem
        public IQueryable<dynamic> Get(int id)
        {
            //var res = db.Restaurants.FirstOrDefault(r => r.IsActive == true && r.IsDeleted == false);
            var menu = db.Menus.FirstOrDefault(m => m.Restaurant.id == id);
            if(menu!=null)
                return db.MenuItems
                    .Include(m=>m.Coupon.discount)
                    .Include(m=>m.MenuItemCatogery.Name)
                    .Where(m => m.menu.Id == menu.Id &&m.ISDeleted==false)
                    .Select(m=>new {Id=m.Id,Name=m.Name,
                        Price=m.Price,Discount = m.Coupon.discount,
                        Img=m.Image,CatName=m.MenuItemCatogery.Name,
                        Describtion=m.Describtion
                    });
            return null;

           //return new { }; 
        }

        // POST: api/MenuItem
        public IHttpActionResult Post([FromBody]MenuItemDto menuItemDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var menuItem= Mapper.Map<MenuItemDto, MenuItem>(menuItemDto);
            db.MenuItems.Add(menuItem);
            db.SaveChanges();
            return Created(new Uri(Request.RequestUri+$"/{menuItem.Id}"),menuItem);
        }

        // PUT: api/MenuItem/5
        public IHttpActionResult Put(int id, [FromBody]MenuItemDto menuItemDto)
        {
            if (!ModelState.IsValid)
                return BadRequest();
            var oldMenuItem = db.MenuItems.FirstOrDefault(m => m.Id == id);
            if (oldMenuItem == null)
            {
                return NotFound();
            }
            Mapper.Map(menuItemDto, oldMenuItem);

            db.SaveChanges();
            return Ok();

        }

        // DELETE: api/MenuItem/5
        public IHttpActionResult Delete(int id)
        {
            var menuItem=db.MenuItems.FirstOrDefault(m => m.Id == id);
            if (menuItem == null)
            {
                return NotFound();
            }
            else
            {
                menuItem.ISDeleted = true;
                db.SaveChanges();
            }
            return Ok();
        }
    }
}
