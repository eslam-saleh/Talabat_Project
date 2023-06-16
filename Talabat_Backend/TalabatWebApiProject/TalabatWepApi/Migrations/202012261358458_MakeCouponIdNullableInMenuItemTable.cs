namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MakeCouponIdNullableInMenuItemTable : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.MenuItems", "CouponId", "dbo.Coupons");
            DropIndex("dbo.MenuItems", new[] { "CouponId" });
            AlterColumn("dbo.MenuItems", "CouponId", c => c.Int());
            CreateIndex("dbo.MenuItems", "CouponId");
            AddForeignKey("dbo.MenuItems", "CouponId", "dbo.Coupons", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.MenuItems", "CouponId", "dbo.Coupons");
            DropIndex("dbo.MenuItems", new[] { "CouponId" });
            AlterColumn("dbo.MenuItems", "CouponId", c => c.Int(nullable: false));
            CreateIndex("dbo.MenuItems", "CouponId");
            AddForeignKey("dbo.MenuItems", "CouponId", "dbo.Coupons", "Id", cascadeDelete: true);
        }
    }
}
