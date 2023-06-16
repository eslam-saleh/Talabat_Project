using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Cors;
using TalabatWepApi.App_Start;
using System.Web.Http;

[assembly: OwinStartup(typeof(TalabatWepApi.Startup))]

namespace TalabatWepApi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCors(CorsOptions.AllowAll);
            ConfigureAuth(app);
       
        }
    }
}
