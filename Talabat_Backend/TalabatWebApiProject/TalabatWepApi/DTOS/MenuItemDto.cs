using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TalabatWepApi.DTOS
{
    public class MenuItemDto
    {
        public int MenuItemId { get; set; }
        public string Name { get; set; }
        public string Describtion { get; set; }
        [Required]
        public decimal Price { get; set; }
        public string Image { get; set; }
        public int? CouponId { get; set; }
        [Required]
        public int MenuId { get; set; }
        [Required]
        public int MenuItemCatogeryId { get; set; }


    }
}