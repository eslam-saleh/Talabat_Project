using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TalabatWepApi.Models
{
    public class Restaurant
    {
        public int id { get; set; }
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
        [Required]
        [MaxLength(150)]
        public string ShortDescribtion { get; set; }
        public string Describtion { get; set; }
        public string Image { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
        [Required]
        public int RestaurantCatogeryId { get; set; }
        public RestaurantCatogery RestaurantCatogery { get; set; }
        [Required]
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }

    }
}