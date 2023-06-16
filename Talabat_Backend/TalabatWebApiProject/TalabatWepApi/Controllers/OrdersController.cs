using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TalabatWepApi.DTOS;
using TalabatWepApi.Models;
using Microsoft.AspNet.Identity;
using System.Web.ModelBinding;

namespace TalabatWepApi.Controllers
{
    public class OrdersController : ApiController
    {
        // GET: api/Orders
        private ApplicationDbContext db = new ApplicationDbContext();
        public IEnumerable<OrderDto> Get()
        {
            return db.Orders.Where(order=>order.IsDeleted==false)
                .ToList().Select(Mapper.Map<Order, OrderDto>); 
        }

        // GET: api/Orders/5
        public OrderDto Get(int id)
        {
            var userId = User.Identity.GetUserId();
            return db.Orders
                .Select(Mapper.Map<Order, OrderDto>).FirstOrDefault(order => order.Id == id && order.IsDeleted == false);
        }
    

        // POST: api/Orders
        public IHttpActionResult Post([FromBody]OrderDto orderDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var userId = User.Identity.GetUserId();
            orderDto.UserId = userId;
            var order=Mapper.Map<OrderDto, Order>(orderDto);
            db.Orders.Add(order);
            db.SaveChanges();
            orderDto.Id = order.Id;
            return Created(new Uri(Request.RequestUri + $"/{order.Id}"), orderDto);
        }

        // PUT: api/Orders/5
        public IHttpActionResult Put(int id, [FromBody]OrderDto orderDto)
        {
            var order = db.Orders.FirstOrDefault(o => o.Id == id);
            if (order == null)
            {
                return NotFound();
            }
            orderDto.Id = order.Id;
            Mapper.Map(orderDto, order);
            db.SaveChanges();
            return Ok();
        }

        // DELETE: api/Orders/5
        public IHttpActionResult Delete(int id)
        {
            var order = db.Orders.FirstOrDefault(o => o.Id == id);
            if (order == null)
            {
                return NotFound();
            }
            order.IsDeleted = true;
            db.SaveChanges();
            return Ok();
        }
    }
}
