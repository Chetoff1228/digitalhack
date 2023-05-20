try:
    from configparser import ConfigParser
except ImportError:
    from ConfigParser import ConfigParser  # ver. < 3.0

import pathlib
import psycopg2 

def read_config_file(config_path=str(pathlib.Path().absolute()) + r'\\scripts\\sql\\database.ini'):
    # instantiate
    config = ConfigParser()

    print(config_path)
    # parse existing file
    config.read(config_path)

    # read values from a section
    host = config.get('plants', 'host')
    database = config.get('plants', 'database')
    user = config.get('plants', 'user')
    password = config.get('plants', 'password')

    conn = psycopg2.connect(
        host=host,
        port=5432,
        dbname=database,
        user=user,
        password=password)
            
    return conn