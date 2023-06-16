namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddForeignKeyForReataurantInCouponTable : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Coupons", "Restaurant_id", "dbo.Restaurants");
            DropIndex("dbo.Coupons", new[] { "Restaurant_id" });
            RenameColumn(table: "dbo.Coupons", name: "Restaurant_id", newName: "RestaurantId");
            AlterColumn("dbo.Coupons", "RestaurantId", c => c.Int(nullable: false));
            CreateIndex("dbo.Coupons", "RestaurantId");
            AddForeignKey("dbo.Coupons", "RestaurantId", "dbo.Restaurants", "id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Coupons", "RestaurantId", "dbo.Restaurants");
            DropIndex("dbo.Coupons", new[] { "RestaurantId" });
            AlterColumn("dbo.Coupons", "RestaurantId", c => c.Int());
            RenameColumn(table: "dbo.Coupons", name: "RestaurantId", newName: "Restaurant_id");
            CreateIndex("dbo.Coupons", "Restaurant_id");
            AddForeignKey("dbo.Coupons", "Restaurant_id", "dbo.Restaurants", "id");
        }
    }
}
