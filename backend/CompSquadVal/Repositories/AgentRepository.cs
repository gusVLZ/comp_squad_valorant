using CompSquadVal.Interfaces.Repositories;
using CompSquadVal.Models;
using Dapper.Contrib.Extensions;
using Microsoft.AspNetCore.Connections;

public class AgentRepository : IAgentRepository
{
    private IDapper _dapper;
    public AgentRepository(IDapper dapper){
        _dapper = dapper;
    }
    // public string SaveAgent(string text)
    // {
    //     _dapper.GetConnection().Insert<Agent>(new Agent{
    //         text
    //     });
    //     return text;
    // }

    public List<Agent> GetAll() {
        var agentList = _dapper.GetConnection().GetAll<Agent>();
        return agentList.ToList();
    }

        public Agent GetAgentById(int id)
    {
        var agent = _dapper.GetConnection().Get<Agent>(id);
        return agent;
    }
    
}