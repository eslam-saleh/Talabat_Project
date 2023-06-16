namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddForeignKeyForCouponToMenuItemTable : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.MenuItems", "Coupon_Id", "dbo.Coupons");
            DropIndex("dbo.MenuItems", new[] { "Coupon_Id" });
            RenameColumn(table: "dbo.MenuItems", name: "Coupon_Id", newName: "CouponId");
            AlterColumn("dbo.MenuItems", "CouponId", c => c.Int(nullable: false));
            CreateIndex("dbo.MenuItems", "CouponId");
            AddForeignKey("dbo.MenuItems", "CouponId", "dbo.Coupons", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.MenuItems", "CouponId", "dbo.Coupons");
            DropIndex("dbo.MenuItems", new[] { "CouponId" });
            AlterColumn("dbo.MenuItems", "CouponId", c => c.Int());
            RenameColumn(table: "dbo.MenuItems", name: "CouponId", newName: "Coupon_Id");
            CreateIndex("dbo.MenuItems", "Coupon_Id");
            AddForeignKey("dbo.MenuItems", "Coupon_Id", "dbo.Coupons", "Id");
        }
    }
}
