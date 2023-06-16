export interface IMenuItem {
    id: 1,
    name: string,
    price:number,
    discount:number,
    img: string,
    catName: string,
    describtion: string
}
// public int MenuItemId { get; set; }
//         public string Name { get; set; }
//         public string Describtion { get; set; }
//         [Required]
//         public decimal Price { get; set; }
//         public string Image { get; set; }
//         public int? CouponId { get; set; }
//         [Required]
//         public int MenuId { get; set; }
//         [Required]
//         public int MenuItemCatogeryId { get; set; }