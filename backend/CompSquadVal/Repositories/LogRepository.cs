using CompSquadVal.Interfaces.Repositories;
using CompSquadVal.Models;
using Dapper.Contrib.Extensions;
using Microsoft.AspNetCore.Connections;

public class LogRepository : ILogRepository
{
    private IDapper _dapper;
    public LogRepository(IDapper dapper){
        _dapper = dapper;
    }
    public string SaveLog(string text)
    {
        _dapper.GetConnection().Insert<Log>(new Log{
            Text=text
        });
        return text;
    }
}