using CompSquadVal.Interfaces.Repositories;
using CompSquadVal.Models;
using Dapper.Contrib.Extensions;
using Microsoft.AspNetCore.Connections;

public class SquadRepository : ISquadRepository
{
    private IDapper _dapper;
    public SquadRepository(IDapper dapper){
        _dapper = dapper;
    }

    public List<Squad> GetAll() {
        var squadList = _dapper.GetConnection().GetAll<Squad>();
        return squadList.ToList();
    }

        public Squad GetSquadById(int id)
    {
        var squad = _dapper.GetConnection().Get<Squad>(id);
        return squad;
    }

    public long newSquad(Squad squadData)
    {
        var squadID = _dapper.GetConnection().Insert<Squad>(squadData);

        return squadID;
    }
    
}