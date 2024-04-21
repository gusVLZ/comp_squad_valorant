namespace CompSquadVal.Controllers;

using CompSquadVal.Interfaces.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

[ApiController]
[Route("[controller]")]
public class SquadPerUserMapAgentController : ControllerBase
{
    private readonly ISquadPerUserMapAgentRepository _SquadPerUserMapAgentRepository;
    public SquadPerUserMapAgentController(ISquadPerUserMapAgentRepository squadPerUserMapAgentRepository)
    {
        _SquadPerUserMapAgentRepository = squadPerUserMapAgentRepository;
    }

    [HttpGet("/SquadPerUserAgentMap")]
    public IActionResult GetAll()
    {
        return Ok(_SquadPerUserMapAgentRepository.GetAll());
    }

    [HttpGet("/SquadPerUserAgentMap/{id}")]
    public IActionResult GetByID(int id)
    {
        return Ok(_SquadPerUserMapAgentRepository.GetById(id));
    }

    [HttpPost("/UpsertSquadPerUser")]
    public IActionResult Upsert(int idSquadUser, int idMap, int idAgent) {
        return Ok(_SquadPerUserMapAgentRepository.Upsert(idSquadUser,  idMap, idAgent));
    }
}