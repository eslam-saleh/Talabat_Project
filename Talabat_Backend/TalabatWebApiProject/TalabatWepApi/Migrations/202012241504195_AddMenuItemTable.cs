namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddMenuItemTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.MenuItems",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Describtion = c.String(),
                        Price = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Image = c.String(),
                        Coupon_Id = c.Int(),
                        menu_Id = c.Int(nullable: false),
                        MenuItemCatogery_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Coupons", t => t.Coupon_Id)
                .ForeignKey("dbo.Menus", t => t.menu_Id, cascadeDelete: true)
                .ForeignKey("dbo.MenuItemCatogeries", t => t.MenuItemCatogery_Id, cascadeDelete: true)
                .Index(t => t.Coupon_Id)
                .Index(t => t.menu_Id)
                .Index(t => t.MenuItemCatogery_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.MenuItems", "MenuItemCatogery_Id", "dbo.MenuItemCatogeries");
            DropForeignKey("dbo.MenuItems", "menu_Id", "dbo.Menus");
            DropForeignKey("dbo.MenuItems", "Coupon_Id", "dbo.Coupons");
            DropIndex("dbo.MenuItems", new[] { "MenuItemCatogery_Id" });
            DropIndex("dbo.MenuItems", new[] { "menu_Id" });
            DropIndex("dbo.MenuItems", new[] { "Coupon_Id" });
            DropTable("dbo.MenuItems");
        }
    }
}
