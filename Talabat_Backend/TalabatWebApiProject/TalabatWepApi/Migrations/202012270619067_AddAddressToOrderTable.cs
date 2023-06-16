namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddAddressToOrderTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Orders", "State", c => c.String());
            AddColumn("dbo.Orders", "Area", c => c.String());
            AddColumn("dbo.Orders", "Street", c => c.String());
            AddColumn("dbo.Orders", "BuildingNumber", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Orders", "BuildingNumber");
            DropColumn("dbo.Orders", "Street");
            DropColumn("dbo.Orders", "Area");
            DropColumn("dbo.Orders", "State");
        }
    }
}
