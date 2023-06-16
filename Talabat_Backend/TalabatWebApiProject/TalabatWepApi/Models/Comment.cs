using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TalabatWepApi.Models
{
    public class Comment
    {
        public int Id { get; set; }    
        public int? storeRate { get; set; }
        public int? deliveryRate { get; set; }
        public string Post { get; set; }
        public DateTime? PostDate { get; set; }
        [ForeignKey("Restaurant")]
        public int RestaurantId { get; set; }
        public  Restaurant Restaurant { get; set; }
        [ForeignKey("User")]
        public string UserId { get; set; }
        public bool IsDelete { get; set; }
        public ApplicationUser User { get; set; }
    }
}