namespace CompSquadVal.Models;
using Dapper;
using Dapper.Contrib.Extensions;

[Table("maps")]
public class Map
{
    [Key]
    public int id {get;set;}
    public string map {get;set;}
}