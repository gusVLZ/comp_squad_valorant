using CompSquadVal.Interfaces.Repositories;
using CompSquadVal.Models;
using Dapper;
using Dapper.Contrib.Extensions;
using Microsoft.AspNetCore.Connections;

public class PrefAgentRepository : IPrefAgentRepository
{
    private IDapper _dapper;
    public PrefAgentRepository(IDapper dapper)
    {
        _dapper = dapper;
    }
    // public string SaveAgent(string text)
    // {
    //     _dapper.GetConnection().Insert<Agent>(new Agent{
    //         text
    //     });
    //     return text;
    // }

    public List<PrefAgent> GetAll()
    {
        var prefAgentList = _dapper.GetConnection().GetAll<PrefAgent>();
        return prefAgentList.ToList();
    }

    public List<PrefAgent> PrefsPerUser(int idUser) {
        var prefAgentList = _dapper.GetConnection().Query<PrefAgent>($"select * from useragentpref where idUser = '{idUser}'");
        return prefAgentList.ToList();
    }
    public Boolean InsertPrefList(List<PrefAgent> prefList)
    {
        _dapper.GetConnection().Open();
        var trans = _dapper.GetConnection().BeginTransaction();
        try
        {
            prefList.ForEach(pref =>
            {
                _dapper.GetConnection().Insert<PrefAgent>(pref, transaction: trans);
            });
            trans.Commit();
            return true;
        }
        catch (System.Exception e)
        {
            Console.WriteLine(e);
            trans.Rollback();
            return false;
        }
    }
}