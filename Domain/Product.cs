using System;
using GraphQlTest.Domain.Base;

namespace GraphQlTest.Domain;

public class Product : AuditableEntity
{
    public string Name { get; set; }
    
    public string Description { get; set; }
    
    public string Image { get; set; }
    
    public int CatalogId { get; set; }
    
    public Catalog Catalog { get; set; }
    
    public decimal Price { get; set; }
    
    public int Stock { get; set; }
    
    public bool IsActive { get; set; }
}