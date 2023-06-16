using AutoMapper;
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
    public class CouponsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Coupons
        public IEnumerable<CouponDto> Get()
        {
            return db.Coupons.Where(c => c.IsDeleted == false)
                .ToList().Select(Mapper.Map<Coupon, CouponDto>);
        }

        // GET: api/Coupons/5
        public IEnumerable<CouponDto> Get(int id)
        {
            return db.Coupons.Where(c => c.IsDeleted == false && c.RestaurantId == id)
                .ToList().Select(Mapper.Map<Coupon, CouponDto>);
        }

        // POST: api/Coupons
        public IHttpActionResult Post([FromBody]CouponDto couponDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var coupon=Mapper.Map<CouponDto, Coupon>(couponDto);
            couponDto.CouponId = coupon.Id;
            db.Coupons.Add(coupon);
            db.SaveChanges();
            return Created(new Uri(Request.RequestUri + $"/{coupon.Id}"), couponDto);
        }

        // PUT: api/Coupons/5
        public IHttpActionResult Put(int id, [FromBody]CouponDto couponDto)
        {
            var coupon = db.Coupons.FirstOrDefault(c => c.Id == id);
            if (coupon == null)
                return NotFound();
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            Mapper.Map(couponDto, coupon);
            db.SaveChanges();
            return Ok();
        }

        // DELETE: api/Coupons/5
        public IHttpActionResult Delete(int id)
        {
            var coupon = db.Coupons.FirstOrDefault(c => c.Id == id);
            if (coupon == null)
                return NotFound();
            coupon.IsDeleted = true;
            db.SaveChanges();
            return Ok();
        }
    }
}
