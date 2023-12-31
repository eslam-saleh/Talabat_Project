﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TalabatWepApi.Models
{
    public class RestaurantLocation
    {
        public int Id { get; set; }
        [Required]
        public string State { get; set; }
        [Required]
        public string Area { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public Restaurant Restaurant { get; set; }
    }
}