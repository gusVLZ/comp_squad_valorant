namespace CompSquadVal.Models;
using Dapper;
using Dapper.Contrib.Extensions;

[Table("squaduser")]
public class SquadUser
{
    [Key]
    public int id {get;set;}
    public int idSquad {get;set;}
    public int idUsuario {get;set;}
    public int? accepted {get;set;}

    
    public string name {get;set;}
}