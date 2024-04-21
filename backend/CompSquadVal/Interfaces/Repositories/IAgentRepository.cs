using CompSquadVal.Models;

namespace CompSquadVal.Interfaces.Repositories;

public interface IAgentRepository{
    // string SaveAgent(string text);
    List<Agent> GetAll();

    Agent GetAgentById(int id);
}