namespace CompSquadVal.Controllers;

using CompSquadVal.Interfaces.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

[ApiController]
[Route("[controller]")]
public class AgentController : ControllerBase
{
    private readonly IAgentRepository _agentRepository;
    public AgentController(IAgentRepository agentRepository)
    {
        _agentRepository = agentRepository;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_agentRepository.GetAll());
    }

    [HttpGet("/Agent{id}")]
    public IActionResult GetAgentByID(int id)
    {
        return Ok(_agentRepository.GetAgentById(id));
    }
}