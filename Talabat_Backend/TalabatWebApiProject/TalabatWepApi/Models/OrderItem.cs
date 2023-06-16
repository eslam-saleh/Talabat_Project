using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TalabatWepApi.Models
{
    public class OrderItem
    {
        public int Id { get; set; }
        [Required]
        [ForeignKey("Order")]
        public int OrderId { get; set; }
        public Order Order { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public decimal Price { get; set; }
        [Required]
        [ForeignKey("MenuItem")]
        public int MenuItemId { get; set; }
        public bool IsDeleted { get; set; }
        public MenuItem MenuItem { get; set; }

    }
}