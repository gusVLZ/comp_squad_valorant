using MySql.Data.MySqlClient;

public interface IDapper{
    MySqlConnection GetConnection();
}