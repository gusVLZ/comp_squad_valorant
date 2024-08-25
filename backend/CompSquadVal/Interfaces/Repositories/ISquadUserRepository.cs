using CompSquadVal.Models;

namespace CompSquadVal.Interfaces.Repositories;

public interface ISquadUserRepository{

    List<SquadUser> GetSquadByUserID(int idUser);
    List<SquadUser> GetSquadMembers(int idSquad);

    Boolean InsertSquadUserList(List<SquadUser> squadUserList);

    Boolean acceptInvite(int idSquadUser, int accepted);
}