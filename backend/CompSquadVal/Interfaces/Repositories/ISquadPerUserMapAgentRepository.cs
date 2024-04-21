using CompSquadVal.Models;

namespace CompSquadVal.Interfaces.Repositories;

public interface ISquadPerUserMapAgentRepository{
    // string SaveAgent(string text);
    List<SquadPerUserMapAgent> GetAll();

    SquadPerUserMapAgent GetById(int id);
    bool Upsert(int idSquadUser, int idMap, int idAgent);
}