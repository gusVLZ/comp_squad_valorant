namespace CompSquadVal.Models;
using Dapper;
using Dapper.Contrib.Extensions;

[Table("user")]
public class UserLoginDTO
{
    [Key]
    public string id { get; set; }
    public string username {get;set;}
    public string password {get;set;}
    
}