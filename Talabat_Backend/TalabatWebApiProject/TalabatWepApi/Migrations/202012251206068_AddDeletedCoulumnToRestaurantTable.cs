namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddDeletedCoulumnToRestaurantTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Restaurants", "IsDeleted", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Restaurants", "IsDeleted");
        }
    }
}
