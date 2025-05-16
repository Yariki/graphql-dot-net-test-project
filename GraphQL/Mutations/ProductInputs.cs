namespace GraphQlTest.GraphQL.Mutations;

public class ProductInput
{
    public string Name { get; set; }
    
    public string Description { get; set; }
    
    public string Image { get; set; }
    
    public int CatalogId { get; set; }
    
    public decimal Price { get; set; }
    
    public int Stock { get; set; }
    
    public bool IsActive { get; set; }
}

public class ProductUpdateInput
{
    public int Id { get; set; }
    
    public string Name { get; set; }
    
    public string Description { get; set; }
    
    public string Image { get; set; }
    
    public int CatalogId { get; set; }
    
    public decimal Price { get; set; }
    
    public int Stock { get; set; }
    
    public bool IsActive { get; set; }
}

public class ProductDeleteInput
{
    public int Id { get; set; }
}

