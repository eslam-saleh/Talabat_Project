using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TalabatWepApi.DTOS
{
    public class OrderDto
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; } = DateTime.Now;
        public string PhoneNumber { get; set; }
        public decimal Price { get; set; }
        public bool? IsPaid { get; set; }
        [Required]
        public int OrderStatusId { get; set; } = 1;
        [Required]
        public int RestaurantId { get; set; }
        public string UserId { get; set; }
        [Required]
        public string State { get; set; }
        [Required]
        public string Area { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public string BuildingNumber { get; set; }
        public bool IsDeleted { get; set; } = false;

    }
}