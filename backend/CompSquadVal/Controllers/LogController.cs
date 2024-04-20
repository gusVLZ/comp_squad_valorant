namespace CompSquadVal.Controllers;

using CompSquadVal.Interfaces.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

[ApiController]
[Route("[controller]")]
public class LogController : ControllerBase
{
    private readonly ILogRepository _logRepository;
    public LogController(ILogRepository logRepository){
        _logRepository = logRepository;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_logRepository.SaveLog("Teste"));
    }

    [HttpGet("{text}")]
    public IActionResult GetById(string text)
    {
        return Ok(_logRepository.SaveLog(text));
    }
}