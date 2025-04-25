using System;
using GraphQlTest.Domain.Base;

namespace GraphQlTest.Domain;

public class Catalog : AuditableEntity
{
    public string Name { get; set; }
    
    public string Description { get; set; }
    
    public string Image { get; set; }
    
}