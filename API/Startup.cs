using Application.ElasticSearch;
using Application.JobsApi;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                 {
                     policy.AllowAnyHeader()
                     .AllowAnyMethod()
                     .WithOrigins("http://localhost:3000")
                     .AllowCredentials()
                     .WithOrigins("http://localhost:5000");

                 });
            });
            services.AddTransient<IJobBatchProcess, JobBatchProcess>();

            services.AddMediatR(typeof(SearchJob.Handler).Assembly);
            services.AddMediatR(typeof(SingleJob.Handler).Assembly);
            services.AddMediatR(typeof(IndexBulkJobs.Handler).Assembly);
            services.AddControllers();
            services.Configure<Application.API>(Configuration.GetSection("API"));

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();


                app.UseDefaultFiles();
                app.UseStaticFiles();
                // app.UseHttpsRedirection();

                app.UseRouting();

                app.UseAuthorization();
                app.UseCors("CorsPolicy");
                app.UseEndpoints(endpoints =>
                {
                    endpoints.MapControllers();
                    endpoints.MapFallbackToController("Index", "Fallback");
                });
            }
        }
    }
}
