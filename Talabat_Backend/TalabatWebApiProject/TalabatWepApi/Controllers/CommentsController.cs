using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TalabatWepApi.Models;
using System.Data.Entity;
using AutoMapper;
using TalabatWepApi.DTOS;
using Microsoft.AspNet.Identity;

namespace TalabatWepApi.Controllers
{
    public class CommentsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Comments
        public IEnumerable<dynamic> Get()
        {
            return db.Comments.Include(c => c.User.UserName).Where(c => c.IsDelete == false)
                .Select(c =>
                new
                {
                    c.Id,
                    c.Post,
                    c.PostDate,
                    c.storeRate,
                    c.User.UserName,
                    c.deliveryRate
                });
        }

        // GET: api/Comments/5
        public IEnumerable<dynamic> Get(int id)
        {
            return db.Comments.Include(c => c.User.UserName).Include(c=>c.Restaurant)
                .Where(c => c.IsDelete == false && c.RestaurantId == id)
                 .Select(c =>
                 new
                 {
                     c.Id,
                     c.Post,
                     c.PostDate,
                     c.storeRate,
                     c.User.UserName,
                     c.deliveryRate
                 });
        }

        // POST: api/Comments
        public IHttpActionResult Post([FromBody]CommentDto commentDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var userId = User.Identity.GetUserId();
            commentDto.UserId = userId;
            var comment=Mapper.Map<CommentDto, Comment>(commentDto);
            commentDto.CommentId = comment.Id;
            db.Comments.Add(comment);
            return Created(new Uri(Request.RequestUri + $"/{comment.Id}"), commentDto);
        }

        // PUT: api/Comments/5
        public IHttpActionResult Put(int id, [FromBody] CommentDto commentDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var comment = db.Comments.FirstOrDefault(c => c.Id == id);
            if (comment == null)
            {
                return NotFound();
            }
            Mapper.Map(commentDto, comment);
            db.SaveChanges();
            return Ok();
        }

        // DELETE: api/Comments/5
        public IHttpActionResult Delete(int id)
        {
            var comment = db.Comments.FirstOrDefault(c => c.Id == id);
            if (comment == null)
            {
                return NotFound();
            }
            comment.IsDelete = true;
            return Ok();
        }
        [Route("api/canmakecomment/{id:int}")]
        public bool CanMakeComment(int id)
        {
            var userId = User.Identity.GetUserId();
            int countOrders = db.Orders.Count(Order => Order.UserId == userId);
            int countComments = db.Comments.Count(c => c.UserId == userId && c.RestaurantId == id);
            if(countOrders>0&&countComments==0)
                return true;
            return false;
        }
    }
}
