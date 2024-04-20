namespace CompSquadVal.Interfaces.Utils;
using MySql.Data.MySqlClient;

public class DapperConnection : IDapper
{
    private readonly IConfiguration _config;
    private readonly MySqlConnection _conn;
    public DapperConnection(IConfiguration config){
        _config = config;
        _conn = new MySqlConnection(_config.GetConnectionString("Default"));
    }
    public MySqlConnection GetConnection()
    {
        return _conn;
    }
}