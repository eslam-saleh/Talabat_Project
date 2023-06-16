using AutoMapper;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TalabatWepApi.DTOS;
using TalabatWepApi.Models;

namespace TalabatWepApi.Controllers
{
    public class OrderItemsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/OrderItems
        public IEnumerable<dynamic> Get()
        {
            return db.OrderItems
                .Include(order=>order.MenuItem.Name)
                .Where(order => order.IsDeleted == false)
                .Select
                (o=>
                    new
                    {
                        o.Id,
                        o.Quantity,
                        o.Price,
                        ItemName=o.MenuItem.Name,
                    }
                );
        }

        // GET: api/OrderItems/5
        public IEnumerable<dynamic> Get(int id)
        {
            //var userId = User.Identity.GetUserId();
            return db.OrderItems.Where(o => o.IsDeleted == false && o.OrderId == id)
                .Include(o=>o.MenuItem.Name)
                .Select
                (o =>
                    new
                    {
                        o.Id,
                        o.Quantity,
                        o.Price,
                        ItemName = o.MenuItem.Name,
                        RestaurantName = o.Order.Restaurant.Name
                    }
                );
        }

        // POST: api/OrderItems
        public IHttpActionResult Post([FromBody]List<OrderItemDto> orderItemDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(); 
            }
            foreach (var item in orderItemDto)
            {
                var orderItem = Mapper.Map<OrderItemDto, OrderItem>(item);
                db.OrderItems.Add(orderItem);
                //item.OrderItemId = orderItem.Id;
                db.SaveChanges();
            }
            return Ok();

        }

        // PUT: api/OrderItems/5
        public IHttpActionResult Put(int id, [FromBody]OrderItemDto orderItemDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var orderItem = db.OrderItems.FirstOrDefault(o => o.Id == id);
            if (orderItem == null)
            {
                return NotFound();
            }
            Mapper.Map(orderItemDto, orderItem);
            db.SaveChanges();
            return Ok();
        }

        // DELETE: api/OrderItems/5
        public IHttpActionResult Delete(int id)
        {
            var orderItem = db.OrderItems.FirstOrDefault(o => o.Id == id);
            if (orderItem == null)
            {
                return NotFound();
            }
            orderItem.IsDeleted = true;
            db.SaveChanges();
            return Ok();
        }
    }
}
