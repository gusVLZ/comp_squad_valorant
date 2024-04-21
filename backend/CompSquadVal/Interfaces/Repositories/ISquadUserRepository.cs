using CompSquadVal.Models;

namespace CompSquadVal.Interfaces.Repositories;

public interface ISquadUserRepository{

    List<SquadUser> GetSquadByUserID(int idUser);

    Boolean InsertSquadUserList(List<SquadUser> squadUserList);

    Boolean acceptInvite(int idSquadUser, int accepted);
}