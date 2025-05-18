using System.Linq;
using GraphQlTest.Domain;
using GraphQlTest.Infrastructure.Persistance;
using HotChocolate;
using HotChocolate.Data;
using HotChocolate.Types;
using Microsoft.AspNetCore.Localization;

namespace GraphQlTest.GraphQL;

[ExtendObjectType("Query")]
public class ProductQueryType
{
    
    [UsePaging]
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

        var product = context.Products.FirstOrDefault(p => p.Id == id);
        return product;
    }
}