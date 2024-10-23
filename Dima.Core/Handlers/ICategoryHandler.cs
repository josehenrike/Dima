using Dima.Core.Requests.Categories;
using Dima.Core.Responses;

namespace Dima.Core.Handlers;

public interface ICategoryHandler
{
    Task<Response<Category>> CreateAsynk(CreateCategoryRequest request);
    Task<Response<Category>> UpdateAsynk(UpdateCategoryRequest request);
    Task<Response<Category>> DeleteAsynk(DeleteCategoryRequest request);
    Task<Response<Category>> GetByIdAsynk(GetCategoryByIdRequest request);
    Task<Response<List<Category>>> GetAllAsynk(GetAllCategoriesRequest request);
}