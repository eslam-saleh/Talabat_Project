namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddRestaurantForeignKeyToCommentTable : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Comments", "Restaurant_id", "dbo.Restaurants");
            DropIndex("dbo.Comments", new[] { "Restaurant_id" });
            RenameColumn(table: "dbo.Comments", name: "Restaurant_id", newName: "RestaurantId");
            AlterColumn("dbo.Comments", "RestaurantId", c => c.Int(nullable: false));
            CreateIndex("dbo.Comments", "RestaurantId");
            AddForeignKey("dbo.Comments", "RestaurantId", "dbo.Restaurants", "id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Comments", "RestaurantId", "dbo.Restaurants");
            DropIndex("dbo.Comments", new[] { "RestaurantId" });
            AlterColumn("dbo.Comments", "RestaurantId", c => c.Int());
            RenameColumn(table: "dbo.Comments", name: "RestaurantId", newName: "Restaurant_id");
            CreateIndex("dbo.Comments", "Restaurant_id");
            AddForeignKey("dbo.Comments", "Restaurant_id", "dbo.Restaurants", "id");
        }
    }
}
