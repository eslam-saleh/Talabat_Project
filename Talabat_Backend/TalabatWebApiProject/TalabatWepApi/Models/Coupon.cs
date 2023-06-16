using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TalabatWepApi.Models
{
    public class Coupon
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string name { get; set; }
        public int? discount { get; set; }
        public int? maximumUse { get; set; }
        [ForeignKey("Restaurant")]
        public int RestaurantId { get; set; }

        public bool IsDeleted { get; set; }
        public virtual Restaurant Restaurant { get; set; }
    }
}