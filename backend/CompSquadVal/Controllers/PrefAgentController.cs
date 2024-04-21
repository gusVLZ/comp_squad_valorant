namespace CompSquadVal.Controllers;

using CompSquadVal.Interfaces.Repositories;
using CompSquadVal.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

[ApiController]
[Route("[controller]")]
public class PrefAgentController : ControllerBase
{
    private readonly IPrefAgentRepository _prefAgentRepository;
    public PrefAgentController(IPrefAgentRepository prefAgentRepository)
    {
        _prefAgentRepository = prefAgentRepository;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_prefAgentRepository.GetAll());
    }

    [HttpPost("/AgentPref")]
    public IActionResult InsertPrefList([FromBody] List<PrefAgent> prefList)
    {
        return Ok(_prefAgentRepository.InsertPrefList(prefList));
    }

    [HttpGet("/AgentPref/User/{id}")]
    public IActionResult PrefsPerUser(int id) {
        return Ok(_prefAgentRepository.PrefsPerUser(id));
    }


}