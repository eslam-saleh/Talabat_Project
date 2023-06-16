using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TalabatWepApi.DTOS;
using TalabatWepApi.Models;

namespace TalabatWepApi.Controllers
{
    public class UsersController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        [HttpGet]
        public IEnumerable<dynamic> GetAllUser()
        {
            return db.Users.Where(u=>u.IsDeleted==false).Select(u => new { u.Id ,u.FirstName,u.LastName,u.Email});
        }
        [HttpGet]
        public dynamic GetUserById(string id)
        {
            return db.Users.Select(u => new { u.Id, u.FirstName, u.LastName, u.Email }).FirstOrDefault(u=>u.Id==id);
        }
        [HttpDelete]
        public IHttpActionResult Delete(string id)
        {
            var user = db.Users.FirstOrDefault(u => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }
            user.IsDeleted = true;
            db.SaveChanges();
            return Ok();
        }
    }
}