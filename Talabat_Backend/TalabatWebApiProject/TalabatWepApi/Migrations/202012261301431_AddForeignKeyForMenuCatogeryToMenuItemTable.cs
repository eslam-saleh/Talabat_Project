namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddForeignKeyForMenuCatogeryToMenuItemTable : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.MenuItems", name: "MenuItemCatogery_Id", newName: "MenuItemCatogeryId");
            RenameIndex(table: "dbo.MenuItems", name: "IX_MenuItemCatogery_Id", newName: "IX_MenuItemCatogeryId");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.MenuItems", name: "IX_MenuItemCatogeryId", newName: "IX_MenuItemCatogery_Id");
            RenameColumn(table: "dbo.MenuItems", name: "MenuItemCatogeryId", newName: "MenuItemCatogery_Id");
        }
    }
}
