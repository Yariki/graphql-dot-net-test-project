namespace GraphQlTest.Domain.Base;

public class BaseEntity<T> where T : notnull
{
    public T Id { get; set; }
}