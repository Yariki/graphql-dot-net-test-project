﻿using System.Linq;
using GraphQlTest.Domain;
using GraphQlTest.Infrastructure.Persistance;
using HotChocolate;
using HotChocolate.Data;
using HotChocolate.Types;
using Microsoft.AspNetCore.Localization;
using Microsoft.EntityFrameworkCore;

namespace GraphQlTest.GraphQL;

[ExtendObjectType("Query")]
public class ProductQueryType
{
    
    [UsePaging(IncludeTotalCount = true, MaxPageSize = 100, DefaultPageSize = 10)]
    [UseProjection]
    [UseFiltering]
    public IQueryable<Product> GetProducts([Service] AppDbContext context)
    {
        return context.Products;
    }

    [UseProjection]
    public Product GetProduct(int id, [Service] AppDbContext context)
    {
        if(id <= 0)
        {
            return null;
        }

        var product = context.Products
            .Include(product => product.Catalog)
            .FirstOrDefault(p => p.Id == id);
        return product;
    }
}