using System.Linq;
using GraphQlTest.Domain;
using GraphQlTest.Infrastructure.Persistance;
using HotChocolate;
using HotChocolate.Data;
using HotChocolate.Types;

namespace GraphQlTest.GraphQL;

[ExtendObjectType("Query")]
public class CatalogQueryType
{
    
    [UsePaging]
    [UseProjection]
    [UseFiltering]
    public IQueryable<Catalog> GetCatalogs([Service] AppDbContext context)
    {
        return context.Catalogs;
    }
    
}