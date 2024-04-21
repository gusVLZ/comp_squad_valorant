namespace CompSquadVal.Controllers;

using CompSquadVal.Interfaces.Repositories;
using CompSquadVal.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

[ApiController]
[Route("[controller]")]
public class SquadController : ControllerBase
{
    private readonly ISquadRepository _squadRepository;
    public SquadController(ISquadRepository squadRepository)
    {
        _squadRepository = squadRepository;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_squadRepository.GetAll());
    }

    [HttpGet("/Squad{id}")]
    public IActionResult GetSquadByID(int id)
    {
        return Ok(_squadRepository.GetSquadById(id));
    }

    [HttpPost("/Squad")]
    public IActionResult insertSquad([FromBody] Squad squadData)
    {
        return Ok(_squadRepository.newSquad(squadData));
    }
}