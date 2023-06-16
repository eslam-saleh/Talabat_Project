using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TalabatWepApi.Models
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public string PhoneNumber { get; set; }

        public decimal Price { get; set; }
        public bool? IsPaid { get; set; }
        [ForeignKey("OrderStatus")]
        public int OrderStatusId { get; set; }
        public virtual OrderStatus OrderStatus { get; set; }
        [ForeignKey("Restaurant")]
        public int RestaurantId { get; set; }
        public virtual Restaurant Restaurant { get; set; }
        [ForeignKey("User")]
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
        public string State { get; set; }
        public string Area { get; set; }
        public string Street { get; set; }
        public string BuildingNumber { get; set; }
        public bool IsDeleted { get; set; }
    }
}