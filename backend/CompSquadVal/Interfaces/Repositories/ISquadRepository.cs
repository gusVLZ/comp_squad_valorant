using CompSquadVal.Models;

namespace CompSquadVal.Interfaces.Repositories;

public interface ISquadRepository{
    // string SaveSquad(string text);
    List<Squad> GetAll();

    Squad GetSquadById(int id);

    long newSquad(Squad squadData);
}