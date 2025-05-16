using System;
using System.Threading;
using System.Threading.Tasks;
using GraphQlTest.Domain;
using GraphQlTest.Infrastructure.Persistance;
using HotChocolate;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;

namespace GraphQlTest.GraphQL.Mutations;

[ExtendObjectType("Mutation")]
public class ProductMutationsType
{
    public async Task<Product> AddProductAsync(ProductInput input,
        [Service] AppDbContext context,
        CancellationToken cancellationToken)
    {
        ArgumentNullException.ThrowIfNull(input);

        var maxId = await context.Products.MaxAsync(p => p.Id, cancellationToken);
        maxId = maxId == 0 ? 0 : maxId + 1;

        var product = new Product()
        {
            Id = maxId,
            Name = input.Name,
            Description = input.Description,
            Image = input.Image,
            CatalogId = input.CatalogId,
            Price = input.Price,
            Stock = input.Stock,
            IsActive = input.IsActive
        };
        context.Products.Add(product);
        await context.SaveChangesAsync(cancellationToken);

        return product;
    }
    
    public async Task<Product> UpdateProductAsync(ProductUpdateInput input,
        [Service] AppDbContext context,
        CancellationToken cancellationToken)
    {
        ArgumentNullException.ThrowIfNull(input);
        
        var product = await context.Products.FindAsync(new object[] { input.Id }, cancellationToken);
        if (product == null)
        {
            throw new ArgumentException(nameof(product));;
        }
        product.Name = input.Name;
        product.Description = input.Description;
        product.Image = input.Image;
        product.CatalogId = input.CatalogId;
        product.Price = input.Price;
        product.Stock = input.Stock;
        product.IsActive = input.IsActive;
        
        context.Products.Update(product);
        await context.SaveChangesAsync(cancellationToken);

        return product;
    }

    public async Task<Product> DeleteProductAsync(ProductDeleteInput input,
        [Service] AppDbContext context,
        CancellationToken cancellationToken)
    {
        ArgumentNullException.ThrowIfNull(input);
        
        var product = await context.Products.FindAsync(new object[] { input.Id }, cancellationToken);
        if (product == null)
        {
            throw new ArgumentException(nameof(product));;
        }
        context.Products.Remove(product);
        await context.SaveChangesAsync(cancellationToken);

        return product;
    }
    
}