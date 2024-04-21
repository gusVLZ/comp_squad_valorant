using CompSquadVal.Models;

namespace CompSquadVal.Interfaces.Repositories;

public interface IMapRepository{
    List<Map> GetAll();

    Map GetMapByID(int id);
}