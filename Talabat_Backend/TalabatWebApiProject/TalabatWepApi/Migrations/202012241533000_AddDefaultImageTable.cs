namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddDefaultImageTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.DefaultImages",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Url = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.DefaultImages");
        }
    }
}
