using Microsoft.EntityFrameworkCore;
using PIzzaAPI.Models;
using PIzzaAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(opts =>
opts.AddPolicy("MyCors", options => options
                                        .AllowAnyOrigin()
                                        .AllowAnyMethod()
                                        .AllowAnyHeader())
); ;



builder.Services.AddDbContext<PizzaContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("pizzaCon")));
builder.Services.AddScoped<IRepo<int, Pizza>, PizzaRepo>();
builder.Services.AddScoped<PizzaService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();
app.UseCors("MyCors");
app.MapControllers();

app.Run();
