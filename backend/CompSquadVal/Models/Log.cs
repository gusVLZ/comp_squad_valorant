namespace CompSquadVal.Models;
using Dapper;
using Dapper.Contrib.Extensions;

[Table("Log")]
public class Log
{
    public string Text {get;set;}
}