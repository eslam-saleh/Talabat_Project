using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TalabatWepApi.DTOS
{
    public class OrderItemDto
    {
        public int OrderItemId { get; set; }
        [Required]
        public int  OrderId { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public decimal Price { get; set; }
        [Required]
        public int MenuItemId { get; set; }
        public bool IsDeleted { get; set; }
    }
}