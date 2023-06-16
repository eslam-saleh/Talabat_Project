namespace TalabatWepApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddIsDeletedColumnToCouponTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Coupons", "IsDeleted", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Coupons", "IsDeleted");
        }
    }
}
