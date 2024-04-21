namespace CompSquadVal.Controllers;

using CompSquadVal.Interfaces.Repositories;
using CompSquadVal.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserRepository _userRepository;
    public UserController(IUserRepository userRepository){
        _userRepository = userRepository;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_userRepository.GetAll());
    }

    [HttpGet("/User/{id}")]
    public IActionResult GetById(int id)
    {
        return Ok(_userRepository.GetUserById(id));
    }

    [HttpPost("/User")]
    public IActionResult InsertUser([FromBody]User userData) {
        return Ok(_userRepository.newUser(userData));
    }

    [HttpGet("/UserLogin")]
    public IActionResult ChecKlogin(string userName, string password) {
        return Ok(_userRepository.CheckLogin(userName, password));
    }
    

}