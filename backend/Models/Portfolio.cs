namespace PortfolioApi.Models;

public class Portfolio
{
    public int Id { get; set; }

    public string Type { get; set; } = "";

    public string Name { get; set; } = "";

    public string Organization { get; set; } = "";

    public string Category { get; set; } = "";

    public string Role { get; set; } = "";

    public string StartDate { get; set; } = "";

    public string EndDate { get; set; } = "";

    public string Level { get; set; } = "";

    public string Experience { get; set; } = "";

    public string Description { get; set; } = "";

    public string Technologies { get; set; } = "";

    public string Url { get; set; } = "";
}