namespace CompSquadVal.Controllers;

using CompSquadVal.Interfaces.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

[ApiController]
[Route("[controller]")]
public class MapController : ControllerBase
{
    private readonly IMapRepository _mapRepository;
    public MapController(IMapRepository mapRepository){
        _mapRepository = mapRepository;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_mapRepository.GetAll());
    }

    [HttpGet("/Map{id}")] 
    public IActionResult GetMapByID(int id)
    {
        return Ok(_mapRepository.GetMapByID(id));
    }
}