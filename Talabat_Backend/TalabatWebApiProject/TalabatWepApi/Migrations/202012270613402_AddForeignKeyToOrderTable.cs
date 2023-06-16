namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddForeignKeyToOrderTable : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Orders", "OrderStatus_Id", "dbo.OrderStatus");
            DropForeignKey("dbo.Orders", "Restaurant_id", "dbo.Restaurants");
            DropIndex("dbo.Orders", new[] { "OrderStatus_Id" });
            DropIndex("dbo.Orders", new[] { "Restaurant_id" });
            RenameColumn(table: "dbo.Orders", name: "OrderStatus_Id", newName: "OrderStatusId");
            RenameColumn(table: "dbo.Orders", name: "Restaurant_id", newName: "RestaurantId");
            RenameColumn(table: "dbo.Orders", name: "User_Id", newName: "UserId");
            RenameIndex(table: "dbo.Orders", name: "IX_User_Id", newName: "IX_UserId");
            AlterColumn("dbo.Orders", "OrderStatusId", c => c.Int(nullable: false));
            AlterColumn("dbo.Orders", "RestaurantId", c => c.Int(nullable: false));
            CreateIndex("dbo.Orders", "OrderStatusId");
            CreateIndex("dbo.Orders", "RestaurantId");
            AddForeignKey("dbo.Orders", "OrderStatusId", "dbo.OrderStatus", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Orders", "RestaurantId", "dbo.Restaurants", "id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Orders", "RestaurantId", "dbo.Restaurants");
            DropForeignKey("dbo.Orders", "OrderStatusId", "dbo.OrderStatus");
            DropIndex("dbo.Orders", new[] { "RestaurantId" });
            DropIndex("dbo.Orders", new[] { "OrderStatusId" });
            AlterColumn("dbo.Orders", "RestaurantId", c => c.Int());
            AlterColumn("dbo.Orders", "OrderStatusId", c => c.Int());
            RenameIndex(table: "dbo.Orders", name: "IX_UserId", newName: "IX_User_Id");
            RenameColumn(table: "dbo.Orders", name: "UserId", newName: "User_Id");
            RenameColumn(table: "dbo.Orders", name: "RestaurantId", newName: "Restaurant_id");
            RenameColumn(table: "dbo.Orders", name: "OrderStatusId", newName: "OrderStatus_Id");
            CreateIndex("dbo.Orders", "Restaurant_id");
            CreateIndex("dbo.Orders", "OrderStatus_Id");
            AddForeignKey("dbo.Orders", "Restaurant_id", "dbo.Restaurants", "id");
            AddForeignKey("dbo.Orders", "OrderStatus_Id", "dbo.OrderStatus", "Id");
        }
    }
}
