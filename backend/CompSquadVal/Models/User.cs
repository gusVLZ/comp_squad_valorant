namespace CompSquadVal.Models;
using Dapper;
using Dapper.Contrib.Extensions;

[Table("user")]
public class User
{
    [Key]
    public int id {get;set;}
    public string username {get;set;}
    public string nickname {get;set;}
    public string slug {get;set;}
    public string password {get;set;}
}