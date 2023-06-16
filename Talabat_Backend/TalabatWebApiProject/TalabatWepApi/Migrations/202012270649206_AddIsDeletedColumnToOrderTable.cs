namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddIsDeletedColumnToOrderTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Orders", "IsDeleted", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Orders", "IsDeleted");
        }
    }
}
