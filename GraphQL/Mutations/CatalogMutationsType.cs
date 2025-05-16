using GraphQlTest.Domain;
using GraphQlTest.Infrastructure.Persistance;
using HotChocolate;
using HotChocolate.Types;
using System.Threading.Tasks;
using System.Threading;
using Microsoft.EntityFrameworkCore;
using System;

namespace GraphQlTest.GraphQL.Mutations
{

    [ExtendObjectType("Mutation")]
    public class CatalogMutationsType
    {
        public async Task<Catalog> AddCatalogAsync(CatalogInput input,
            [Service] AppDbContext dbContext,
            CancellationToken cancellationToken)
        {
            ArgumentNullException.ThrowIfNull(input);

            var maxId = await dbContext.Catalogs.MaxAsync(c => c.Id, cancellationToken) ;

            maxId = maxId == 0 ? 0 : maxId + 1;

            var catalog = new Catalog()
            {
                Id = maxId,
                Name = input.Name,
                Description = input.Description,
                Image = input.Image
            };
            dbContext.Catalogs.Add(catalog);
            await dbContext.SaveChangesAsync(cancellationToken);

            return catalog;
        }

        public async Task<bool> DeleteCatalogAsync(CatalogDeleteInput? input,
            [Service] AppDbContext dbContext,
            CancellationToken cancellationToken)
        {
            
            if(input == null)
            {
                throw new ArgumentNullException(nameof(input));
            }

            var catalog = await dbContext.Catalogs.FindAsync(new object[] { input.Id }, cancellationToken);
            if (catalog != null)
            {
                dbContext.Catalogs.Remove(catalog);
                await dbContext.SaveChangesAsync(cancellationToken);
                return true;
            }
            return false;
        }

    }
}
