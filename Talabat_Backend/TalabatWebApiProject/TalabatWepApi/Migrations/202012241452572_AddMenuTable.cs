namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddMenuTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Menus",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                        Restaurant_id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Restaurants", t => t.Restaurant_id)
                .Index(t => t.Restaurant_id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Menus", "Restaurant_id", "dbo.Restaurants");
            DropIndex("dbo.Menus", new[] { "Restaurant_id" });
            DropTable("dbo.Menus");
        }
    }
}
