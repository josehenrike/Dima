var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

app.MapPost(
    "/v1/transactions",
    static (Request request, Handler handler) => handler.Handle(request))

.WithName("Transactions: Create")
.WithSummary("Cria uma nova transação")
.Produces<Response>();

app.Run();

public class Request
{
    public string Title { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public int Type { get; set; }
    public decimal Amount { get; set; }
    public long CategoryId { get; set; }
    public string UserId { get; set; } = string.Empty;
}

public class Response
{
    public long Id { get; set; }
    public string Title { get; set; } = string.Empty;
}

public class Handler
{
    public Response Handle(Request request)
    {
        return new Response
        {
            Id = 4,
            Title = request.Title
        };
    }
}