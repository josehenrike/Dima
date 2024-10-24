using Dima.Api.Common.Api;
using Dima.Core;
using Dima.Core.Handlers;
using Dima.Core.Models;
using Dima.Core.Requests.Categories;
using Dima.Core.Responses;
using Microsoft.AspNetCore.Mvc;

namespace DIma.Api.Endpoints.Categories;

public class GetAllCategoriesEndpoint : IEndpoint
{
    public static void Map(IEndpointRouteBuilder app)
     => app.MapGet("/", HandleAsync)
         .WithName("Categories: Get All")
         .WithSummary("Recupera todas as categorias")
         .WithDescription("Recupera todas as categorias")
         .WithOrder(5)
         .Produces<PagedResponse<List<Category>?>>();

    private static async Task<IResult> HandleAsync(ICategoryHandler handler,
        [FromQuery] int pagenumber = Configuration.DefaultPageNumber,
        [FromQuery] int pagesize = Configuration.DefaultPageSize)
    {
        var request = new GetAllCategoriesRequest
        {
            UserId = "test@techshop.com",
            PageNumber = pagenumber,
            PageSize = pagesize
        };

        var result = await handler.GetAllAsync(request);

        return result.IsSuccess
            ? TypedResults.Ok(result)
            : TypedResults.BadRequest(result);
    }
}