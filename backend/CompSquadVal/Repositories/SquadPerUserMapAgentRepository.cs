using CompSquadVal.Interfaces.Repositories;
using CompSquadVal.Models;
using Dapper;
using Dapper.Contrib.Extensions;
using Microsoft.AspNetCore.Connections;

public class SquadPerUserMapAgentRepository : ISquadPerUserMapAgentRepository
{
    private IDapper _dapper;
    public SquadPerUserMapAgentRepository(IDapper dapper)
    {
        _dapper = dapper;
    }

    public List<SquadPerUserMapAgent> GetAll()
    {
        var mapList = _dapper.GetConnection().GetAll<SquadPerUserMapAgent>();
        return mapList.ToList();
    }

    public SquadPerUserMapAgent GetById(int id)
    {
        var map = _dapper.GetConnection().Get<SquadPerUserMapAgent>(id);

        return map;
    }

    public bool Upsert(int idSquadUser, int idMap, int idAgent){
        
        var squadUser = _dapper.GetConnection().QueryFirst<SquadPerUserMapAgent>($"SELECT * from squadperusermapagent where idSquadUser = {idSquadUser} AND idMap = {idMap}");


        if(squadUser != null){
            squadUser.idAgent = idAgent;
            _dapper.GetConnection().Update<SquadPerUserMapAgent>(squadUser);
        } else {
            var newSquadUser = new SquadPerUserMapAgent{
                idAgent = idAgent,
                idMap = idMap,
                idSquadUser = idSquadUser
            };
            _dapper.GetConnection().Insert<SquadPerUserMapAgent>(newSquadUser);
        }
        return true;

    }
}

