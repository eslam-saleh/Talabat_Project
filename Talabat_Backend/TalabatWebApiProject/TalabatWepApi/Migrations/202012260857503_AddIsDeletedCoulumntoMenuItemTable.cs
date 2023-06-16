namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddIsDeletedCoulumntoMenuItemTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.MenuItems", "ISDeleted", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.MenuItems", "ISDeleted");
        }
    }
}
