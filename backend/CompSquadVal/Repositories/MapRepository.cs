using CompSquadVal.Interfaces.Repositories;
using CompSquadVal.Models;
using Dapper.Contrib.Extensions;
using Microsoft.AspNetCore.Connections;

public class MapRepository : IMapRepository
{
    private IDapper _dapper;
    public MapRepository(IDapper dapper)
    {
        _dapper = dapper;
    }

    public List<Map> GetAll()
    {
        var mapList = _dapper.GetConnection().GetAll<Map>();
        return mapList.ToList();
    }

    public Map GetMapByID(int id)
    {
        var map = _dapper.GetConnection().Get<Map>(id);

        return map;
    }
}