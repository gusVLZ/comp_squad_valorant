namespace CompSquadVal.Models;
using Dapper;
using Dapper.Contrib.Extensions;

[Table("SquadPerUserMapAgent")]
public class SquadPerUserMapAgent
{
    [Key]
    public int id {get;set;}
    public int idMap {get;set;}
    public int idAgent {get;set;}
    public int idSquadUser {get;set;}
}