namespace CompSquadVal.Controllers;

using CompSquadVal.Interfaces.Repositories;
using CompSquadVal.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

[ApiController]
[Route("[controller]")]
public class SquadUserController : ControllerBase
{
    private readonly ISquadUserRepository _squadUserRepository;
    public SquadUserController(ISquadUserRepository squadUserRepository)
    {
        _squadUserRepository = squadUserRepository;
    }


    [HttpGet("/SquadUser/User/{id}")]
    public IActionResult PrefsPerUser(int id) {
        return Ok(_squadUserRepository.GetSquadByUserID(id));
    }

    [HttpGet("/SquadUser/Squad/Members/{id}")]
    public IActionResult SquadMembers(int id) {
        return Ok(_squadUserRepository.GetSquadMembers(id));
    }

    [HttpPost("/SquadUser")]
    public IActionResult InsertSquadUserList([FromBody] List<SquadUser> squadUserList)
    {
        return Ok(_squadUserRepository.InsertSquadUserList(squadUserList));
    }

    [HttpPut("/SquadInvite")]
    public IActionResult AcceptedInvite([FromQuery] int idSquadUser, int accepted)
    {
        return Ok(_squadUserRepository.acceptInvite(idSquadUser, accepted));
    }


}