from flask import Flask, request
from flask_restful import Resource, Api
import psycopg2

import os
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parents[1]))

from sql.reading import read_config_file

from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

from flask import Flask, render_template
import psycopg2

app = Flask(__name__)

conn = read_config_file()
cursor = conn.cursor()
# Create a cursor object to execute SQL queries
# Close the cursor and connection when the app is terminated
@app.teardown_appcontext
def close_connection(exception):
    cursor.close()
    conn.close()

@app.route('/')
def index():
    # Execute an SQL query to retrieve data from a table
    cursor.execute('SELECT * FROM plants')
    data = cursor.fetchall()

    # Pass the data to the template
    return render_template('index.html', data=data)


# Define your routes and views here
@app.route('/next_page')
def next_page():
    return render_template('next_page.html')


if __name__ == '__main__':
    app.run()

