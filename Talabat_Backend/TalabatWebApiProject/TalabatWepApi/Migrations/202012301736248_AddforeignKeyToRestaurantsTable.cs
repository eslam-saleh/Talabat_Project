namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddforeignKeyToRestaurantsTable : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Restaurants", name: "RestaurantCatogery_Id", newName: "RestaurantCatogeryId");
            RenameColumn(table: "dbo.Restaurants", name: "User_Id", newName: "UserId");
            RenameIndex(table: "dbo.Restaurants", name: "IX_RestaurantCatogery_Id", newName: "IX_RestaurantCatogeryId");
            RenameIndex(table: "dbo.Restaurants", name: "IX_User_Id", newName: "IX_UserId");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Restaurants", name: "IX_UserId", newName: "IX_User_Id");
            RenameIndex(table: "dbo.Restaurants", name: "IX_RestaurantCatogeryId", newName: "IX_RestaurantCatogery_Id");
            RenameColumn(table: "dbo.Restaurants", name: "UserId", newName: "User_Id");
            RenameColumn(table: "dbo.Restaurants", name: "RestaurantCatogeryId", newName: "RestaurantCatogery_Id");
        }
    }
}
