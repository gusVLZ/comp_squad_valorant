using CompSquadVal.Models;

namespace CompSquadVal.Interfaces.Repositories;

public interface IPrefAgentRepository{
    // string SaveAgent(string text);
    List<PrefAgent> GetAll();

    Boolean InsertPrefList(List<PrefAgent> prefList);

    List<PrefAgent> PrefsPerUser(int idUser);
}