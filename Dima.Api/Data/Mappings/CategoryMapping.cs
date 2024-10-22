using Dima.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Dima.Api.Data.Mappings;

public class CategoryMapping : IEntityTypeConfiguration<Category>
{
	public void Configure(EntityTypeBuilder<Category> builder)
	{
		builder.ToTable("Category");

		builder.Haskey(x => x.Id);

		builder.Property(x => x.Title)
			.IsRequired(true)
			.HasColumnType("NVARCHAR")
			.HasMaxLength(80);
		builder.Property(x => x.Description)
            .IsRequired(false)
            .HasColumnType("NVARCHAR")
            .HasMaxLength(255);
        builder.Property(x => x.UserId)
            .IsRequired(true)
            .HasColumnType("VARCHAR")
            .HasMaxLength(160);

    }
}
