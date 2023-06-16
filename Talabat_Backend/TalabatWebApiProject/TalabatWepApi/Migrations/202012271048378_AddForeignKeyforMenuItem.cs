namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddForeignKeyforMenuItem : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.OrderItems", name: "MenuItem_Id", newName: "MenuItemId");
            RenameIndex(table: "dbo.OrderItems", name: "IX_MenuItem_Id", newName: "IX_MenuItemId");
            AddColumn("dbo.OrderItems", "IsDeleted", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.OrderItems", "IsDeleted");
            RenameIndex(table: "dbo.OrderItems", name: "IX_MenuItemId", newName: "IX_MenuItem_Id");
            RenameColumn(table: "dbo.OrderItems", name: "MenuItemId", newName: "MenuItem_Id");
        }
    }
}
