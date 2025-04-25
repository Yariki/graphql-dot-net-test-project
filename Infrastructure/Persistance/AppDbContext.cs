using System;
using System.Collections.Generic;
using GraphQlTest.Domain;
using Microsoft.EntityFrameworkCore;

namespace GraphQlTest.Infrastructure.Persistance;

public class AppDbContext : DbContext
{
    public AppDbContext()
    {
        Database.EnsureCreated();

    }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
        Database.EnsureCreated();
    }

    public DbSet<Catalog> Catalogs { get; set; }
    
    public DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        

        modelBuilder.Entity<Catalog>().HasData(
            new Catalog { Id = 1, Name = "Electronics" },
            new Catalog { Id = 2, Name = "Books" },
            new Catalog { Id = 3, Name = "Clothing" }
        );
    
        var products = new List<Product>();
        var random = new Random();
        
        // Electronics products
        for (int i = 1; i <= 40; i++)
        {
            products.Add(new Product { 
                Id = i, 
                Name = $"Electronics Product {i}",
                Price = (decimal)Math.Round(random.NextDouble() * 1000, 2),
                CatalogId = 1
            });
        }
    
        // Books products
        for (int i = 41; i <= 80; i++)
        {
            products.Add(new Product { 
                Id = i, 
                Name = $"Book {i-40}",
                Price = (decimal)Math.Round(random.NextDouble() * 100, 2),
                CatalogId = 2
            });
        }
    
        // Clothing products
        for (int i = 81; i <= 120; i++)
        {
            products.Add(new Product { 
                Id = i, 
                Name = $"Clothing Item {i-80}",
                Price = (decimal)Math.Round(random.NextDouble() * 200, 2),
                CatalogId = 3
            });
        }
    
        modelBuilder.Entity<Product>().HasData(products);
    }
} 