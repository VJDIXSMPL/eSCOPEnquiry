using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Globalization;
using Microsoft.Extensions.FileProviders;

namespace eSCOPEnquiry
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";


        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            MyAllowSpecificOrigins = Configuration.GetSection("AppSettings").GetSection("CrossOrigin").Value.ToString();

            System.Threading.Thread.CurrentThread.CurrentCulture = new CultureInfo("en-US");
            System.Threading.Thread.CurrentThread.CurrentUICulture = new CultureInfo("en-US");
            services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  builder =>
                                  {
                                      builder.WithOrigins(MyAllowSpecificOrigins.Split(','))
                                      .AllowAnyMethod()
                                      .AllowAnyHeader();
                                  });
            });
            services.AddMvc(options => options.EnableEndpointRouting = false);
            services.AddControllersWithViews();
            services.AddRazorPages().AddRazorRuntimeCompilation();
            services.AddSession(options => {
                options.IdleTimeout = TimeSpan.FromMinutes(60);
            });
            services.AddSingleton<IFileProvider>(
            new PhysicalFileProvider(
                Path.Combine(Directory.GetCurrentDirectory(), "wwwroot")));
            //services.addauthentication(options =>
            //{
            //    options.defaultscheme = cookieauthenticationdefaults.authenticationscheme;
            //    options.defaultchallengescheme = cookieauthenticationdefaults.authenticationscheme;
            //}).addcookie(options =>
            //{
            //    options.cookie.name = "escopcore";
            //});
            services.AddAuthentication("eSCOPEnquiry").AddCookie(options =>
            {
                options.Cookie.Name = "eSCOPEnquiry";
            });

            //services.AddDbContext<ApplicationDbContext>(options =>
            //{
            //     !! Note:

            //     If you switch database providers, you might be required to re-create the migrations
            //     as they are not always compatible between database systems

            //     The easiest option for development outside a container is to use SQLite
            //     options.UseSqlite(Configuration.GetConnectionString("SqliteConnection"));
            //     Or use this for PostgreSQL:
            //    options.UseNpgsql(Configuration.GetConnectionString("LocalDbConnection"));

            //     Use this to connect to a MySQL server:
            //     options.UseMySQL(Configuration.GetConnectionString("MysqlConnection"));
            //     Or use this for SQL Server (if running on Windows):
            //    options.UseSqlServer(Configuration.GetConnectionString("LocalDbConnection1"));
            //});
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            MyAllowSpecificOrigins = Configuration.GetSection("AppSettings").GetSection("CrossOrigin").Value.ToString();
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();
            app.UseCors(
                options => options.WithOrigins(MyAllowSpecificOrigins.Split(',')).AllowAnyMethod()
                );
            app.UseMvc();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
