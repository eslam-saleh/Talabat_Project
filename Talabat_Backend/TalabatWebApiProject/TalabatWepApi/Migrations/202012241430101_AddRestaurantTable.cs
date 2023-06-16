namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddRestaurantTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Restaurants",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                        ShortDescribtion = c.String(nullable: false, maxLength: 150),
                        Describtion = c.String(),
                        Image = c.String(),
                        isActive = c.Boolean(nullable: false),
                        RestaurantCatogery_Id = c.Int(nullable: false),
                        User_Id = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => t.id)
                .ForeignKey("dbo.RestaurantCatogeries", t => t.RestaurantCatogery_Id, cascadeDelete: true)
                .ForeignKey("dbo.AspNetUsers", t => t.User_Id, cascadeDelete: true)
                .Index(t => t.RestaurantCatogery_Id)
                .Index(t => t.User_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Restaurants", "User_Id", "dbo.AspNetUsers");
            DropForeignKey("dbo.Restaurants", "RestaurantCatogery_Id", "dbo.RestaurantCatogeries");
            DropIndex("dbo.Restaurants", new[] { "User_Id" });
            DropIndex("dbo.Restaurants", new[] { "RestaurantCatogery_Id" });
            DropTable("dbo.Restaurants");
        }
    }
}
