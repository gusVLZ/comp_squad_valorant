namespace CompSquadVal.Models;
using Dapper;
using Dapper.Contrib.Extensions;

[Table("prefagent")]
public class PrefAgent
{
    [Key]
    public int id {get;set;}
    public int idUser {get;set;}
    public int idAgent {get;set;}
    public int nuPref {get;set;}    
}