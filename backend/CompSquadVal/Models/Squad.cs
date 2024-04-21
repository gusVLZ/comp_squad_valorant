namespace CompSquadVal.Models;
using Dapper;
using Dapper.Contrib.Extensions;

[Table("squad")]
public class Squad
{
    [Key]
    public int id {get;set;}
    public string name {get;set;}
    public int active {get;set;}
    public DateTime createDate {get;set;}
}