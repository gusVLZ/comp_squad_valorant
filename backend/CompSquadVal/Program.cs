using CompSquadVal.Models;
using Microsoft.AspNetCore.Mvc;
using CompSquadVal.Interfaces.Repositories;
using CompSquadVal.Interfaces.Utils;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.AllowAnyHeader();
                          policy.AllowAnyMethod();
                          policy.AllowAnyOrigin();
                      });
});
var connectionString = builder.Configuration.GetConnectionString("Default");

builder.Services.AddTransient<IDapper, DapperConnection>();
builder.Services.AddScoped<ILogRepository, LogRepository>();
builder.Services.AddScoped<IAgentRepository, AgentRepository>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IMapRepository, MapRepository>();
builder.Services.AddScoped<IPrefAgentRepository, PrefAgentRepository>();
builder.Services.AddScoped<ISquadRepository, SquadRepository>();
builder.Services.AddScoped<ISquadUserRepository, SquadUserRepository>();
builder.Services.AddScoped<ISquadPerUserMapAgentRepository, SquadPerUserMapAgentRepository>();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapControllers();

app.UseCors(MyAllowSpecificOrigins);

app.Run("http://0.0.0.0:5000");
