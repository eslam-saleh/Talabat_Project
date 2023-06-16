using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TalabatWepApi.DTOS
{
    public class CouponDto
    {
        public int CouponId { get; set; }
        [Required]
        [MaxLength(50)]
        public string name { get; set; }
        [Required]
        public int? discount { get; set; }
        public int? maximumUse { get; set; }
        public int RestaurantId { get; set; }
        public bool IsDeleted { get; set; } = false;

    }
}