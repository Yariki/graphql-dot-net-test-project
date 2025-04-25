using System.Linq;
using GraphQlTest.Domain;
using GraphQlTest.Infrastructure.Persistance;
using HotChocolate;
using HotChocolate.Data;
using HotChocolate.Types;

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
}