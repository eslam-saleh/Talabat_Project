namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddOrderForeignKeytoOrderTable : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.OrderItems", name: "Order_Id", newName: "OrderId");
            RenameIndex(table: "dbo.OrderItems", name: "IX_Order_Id", newName: "IX_OrderId");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.OrderItems", name: "IX_OrderId", newName: "IX_Order_Id");
            RenameColumn(table: "dbo.OrderItems", name: "OrderId", newName: "Order_Id");
        }
    }
}
