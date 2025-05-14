using GraphQlTest.Domain;
using GraphQlTest.Infrastructure.Persistance;
using HotChocolate;
using System.Threading;
using System.Threading.Tasks;

namespace GraphQlTest.GraphQL.Mutations
{
    public class CatalogInput
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public string Image { get; set; }
    }

    public class CatalogUpdateInput
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
    }

    public class CatalogDeleteInput
    {
        public int Id { get; set; }
    }
}
