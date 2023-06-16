using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TalabatWepApi.Models
{
    public class MenuItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Describtion { get; set; }
        [Required]
        public decimal Price { get; set; }
        public string Image { get; set; }
        [DefaultValue("false")]
        public bool ISDeleted { get; set; }
        [ForeignKey("Coupon")]
        public int? CouponId { get; set; }
        public Coupon Coupon { get; set; }
        [Required]
        [ForeignKey("menu")]
        public int MenuId { get; set; }
        public  Menu menu { get; set; }
        [Required]
        [ForeignKey("MenuItemCatogery")]
        public int MenuItemCatogeryId { get; set; }
        public  MenuItemCatogery MenuItemCatogery { get; set; }
       
    }
}