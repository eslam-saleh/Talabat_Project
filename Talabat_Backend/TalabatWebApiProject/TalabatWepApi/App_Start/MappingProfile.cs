

using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;
using TalabatWepApi.DTOS;
using TalabatWepApi.Models;

namespace TalabatWepApi.App_Start
{
    public  class MappingProfile:Profile
    {
        public MappingProfile()
        {
            Mapper.CreateMap<TalabatWepApi.Models.MenuItem, MenuItemDto>();
            Mapper.CreateMap<MenuItemDto, TalabatWepApi.Models.MenuItem>();
            Mapper.CreateMap<OrderDto, Order>();
            Mapper.CreateMap<Order, OrderDto>();
            Mapper.CreateMap<Coupon, CouponDto>();
            Mapper.CreateMap<CouponDto, Coupon>();
            Mapper.CreateMap<CommentDto, Comment>();
            Mapper.CreateMap<Comment, CommentDto>();
            Mapper.CreateMap<OrderItem, OrderItemDto>();
            Mapper.CreateMap<OrderItemDto, OrderItem>();
            Mapper.CreateMap<Restaurant, RestaurantDto>();
            Mapper.CreateMap<RestaurantDto, Restaurant>();
        }
       
    }
}