namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddOrderTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Orders",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CreationDate = c.DateTime(nullable: false),
                        Price = c.Decimal(nullable: false, precision: 18, scale: 2),
                        IsPaid = c.Boolean(),
                        OrderStatus_Id = c.Int(),
                        Restaurant_id = c.Int(),
                        User_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.OrderStatus", t => t.OrderStatus_Id)
                .ForeignKey("dbo.Restaurants", t => t.Restaurant_id)
                .ForeignKey("dbo.AspNetUsers", t => t.User_Id)
                .Index(t => t.OrderStatus_Id)
                .Index(t => t.Restaurant_id)
                .Index(t => t.User_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Orders", "User_Id", "dbo.AspNetUsers");
            DropForeignKey("dbo.Orders", "Restaurant_id", "dbo.Restaurants");
            DropForeignKey("dbo.Orders", "OrderStatus_Id", "dbo.OrderStatus");
            DropIndex("dbo.Orders", new[] { "User_Id" });
            DropIndex("dbo.Orders", new[] { "Restaurant_id" });
            DropIndex("dbo.Orders", new[] { "OrderStatus_Id" });
            DropTable("dbo.Orders");
        }
    }
}
