using CompSquadVal.Interfaces.Repositories;
using CompSquadVal.Models;
using Dapper;
using Dapper.Contrib.Extensions;
using Microsoft.AspNetCore.Connections;

public class SquadUserRepository : ISquadUserRepository
{
    private IDapper _dapper;
    public SquadUserRepository(IDapper dapper)
    {
        _dapper = dapper;
    }

    public List<SquadUser> GetSquadByUserID(int idUser)
    {
        var squadUserList = _dapper.GetConnection().Query<SquadUser>($"SELECT u.*, s.name FROM squaduser u LEFT JOIN squad s ON u.idSquad = s.id WHERE u.idUsuario = {idUser} AND s.active = 1");
        return squadUserList.ToList();
    }
    
    public Boolean InsertSquadUserList(List<SquadUser> squadUserList)
    {
        _dapper.GetConnection().Open();
        var trans = _dapper.GetConnection().BeginTransaction();
        try
        {
            squadUserList.ForEach(pref =>
            {
                _dapper.GetConnection().Insert<SquadUser>(pref, transaction: trans);
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

    public bool acceptInvite(int idSquadUser, int accepted)
    {
        _dapper.GetConnection().Execute($"update squaduser set accepted = {accepted} where id = '{idSquadUser}'");

        return true;
    }
}