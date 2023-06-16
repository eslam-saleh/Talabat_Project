namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddCommentTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Comments",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        storeRate = c.Int(),
                        deliveryRate = c.Int(),
                        Post = c.String(),
                        PostDate = c.DateTime(),
                        Restaurant_id = c.Int(),
                        User_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Restaurants", t => t.Restaurant_id)
                .ForeignKey("dbo.AspNetUsers", t => t.User_Id)
                .Index(t => t.Restaurant_id)
                .Index(t => t.User_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Comments", "User_Id", "dbo.AspNetUsers");
            DropForeignKey("dbo.Comments", "Restaurant_id", "dbo.Restaurants");
            DropIndex("dbo.Comments", new[] { "User_Id" });
            DropIndex("dbo.Comments", new[] { "Restaurant_id" });
            DropTable("dbo.Comments");
        }
    }
}
