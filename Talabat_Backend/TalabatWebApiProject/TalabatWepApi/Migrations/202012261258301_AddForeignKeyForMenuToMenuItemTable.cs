namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddForeignKeyForMenuToMenuItemTable : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.MenuItems", name: "menu_Id", newName: "MenuId");
            RenameIndex(table: "dbo.MenuItems", name: "IX_menu_Id", newName: "IX_MenuId");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.MenuItems", name: "IX_MenuId", newName: "IX_menu_Id");
            RenameColumn(table: "dbo.MenuItems", name: "MenuId", newName: "menu_Id");
        }
    }
}
