using CompSquadVal.Models;

namespace CompSquadVal.Interfaces.Repositories;

public interface IUserRepository{
    long newUser(User userData);
    List<UserDTO> GetAll();

    UserDTO GetUserById(int id);
    UserLoginDTO CheckLogin(string userName, string password);
}