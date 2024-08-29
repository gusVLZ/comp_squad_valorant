using CompSquadVal.Interfaces.Repositories;
using CompSquadVal.Models;
using Dapper;
using Dapper.Contrib.Extensions;
using Microsoft.AspNetCore.Connections;

public class UserRepository : IUserRepository
{
    private IDapper _dapper;
    public UserRepository(IDapper dapper){
        _dapper = dapper;
    }
    
    public long newUser(User userData)
    {
       var userID = _dapper.GetConnection().Insert<User>(userData);

        return userID;
    }

    public List<UserDTO> GetAll()
    {
        var userList = _dapper.GetConnection().GetAll<UserDTO>();
        return userList.ToList();
    }
    
    public UserDTO GetUserById(int id)
    {
        var user = _dapper.GetConnection().Get<UserDTO>(id);
        return user;
    }

    public UserLoginDTO CheckLogin(string userName, string password) {
        var user = _dapper.GetConnection().QueryFirst<UserLoginDTO>($"select id, username, password from user where username = '{userName}' and password = '{password}'");
        return user;
    }

    public List<UserDTO> GetUserByUsername(string username) {
        var userList = _dapper.GetConnection().Query<UserDTO>($"SELECT id, username, slug FROM user WHERE username LIKE '%{username}%'");
        return userList.ToList();
    }




    // public bool DeleteUser(id)
    // {
    //     var deleteUser = _dapper.GetConnection().Delete<User>(id);

    //     return true;
    // }
}