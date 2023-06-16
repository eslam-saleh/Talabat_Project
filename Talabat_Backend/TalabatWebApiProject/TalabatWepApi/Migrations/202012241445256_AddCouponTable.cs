namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddCouponTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Coupons",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        name = c.String(nullable: false, maxLength: 50),
                        discount = c.Int(),
                        maximumUse = c.Int(),
                        Restaurant_id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Restaurants", t => t.Restaurant_id)
                .Index(t => t.Restaurant_id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Coupons", "Restaurant_id", "dbo.Restaurants");
            DropIndex("dbo.Coupons", new[] { "Restaurant_id" });
            DropTable("dbo.Coupons");
        }
    }
}
