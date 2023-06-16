namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddRestaurantLocationTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.RestaurantLocations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        State = c.String(nullable: false),
                        Area = c.String(nullable: false),
                        Street = c.String(nullable: false),
                        Restaurant_id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Restaurants", t => t.Restaurant_id, cascadeDelete: true)
                .Index(t => t.Restaurant_id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.RestaurantLocations", "Restaurant_id", "dbo.Restaurants");
            DropIndex("dbo.RestaurantLocations", new[] { "Restaurant_id" });
            DropTable("dbo.RestaurantLocations");
        }
    }
}
