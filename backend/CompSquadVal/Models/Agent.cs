namespace CompSquadVal.Models;
using Dapper;
using Dapper.Contrib.Extensions;

[Table("agent")]
public class Agent
{
    [Key]
    public int id {get;set;}
    public string name {get;set;}
    public string role {get;set;}
}