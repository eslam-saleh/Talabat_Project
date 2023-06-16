using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TalabatWepApi.DTOS
{
    public class CommentDto
    {
        public int CommentId { get; set; }
        public int? storeRate { get; set; }
        public int? deliveryRate { get; set; }
        [Required]
        public string Post { get; set; }
        public DateTime? PostDate { get; set; } = DateTime.Now;
        public int RestaurantId { get; set; }
        public string UserId { get; set; }
        public bool IsDelete { get; set; }
    }
}