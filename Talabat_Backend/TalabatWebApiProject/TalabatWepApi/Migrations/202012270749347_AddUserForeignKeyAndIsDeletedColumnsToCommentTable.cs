namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddUserForeignKeyAndIsDeletedColumnsToCommentTable : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Comments", name: "User_Id", newName: "UserId");
            RenameIndex(table: "dbo.Comments", name: "IX_User_Id", newName: "IX_UserId");
            AddColumn("dbo.Comments", "IsDelete", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Comments", "IsDelete");
            RenameIndex(table: "dbo.Comments", name: "IX_UserId", newName: "IX_User_Id");
            RenameColumn(table: "dbo.Comments", name: "UserId", newName: "User_Id");
        }
    }
}
