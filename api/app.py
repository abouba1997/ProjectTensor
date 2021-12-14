from flask import Flask, request
from flask_migrate import Migrate
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:root@localhost/tensorproject'
db.init_app(app)
migrate = Migrate(app, db)
CORS(app)


@app.route("/")
def index():
    return f"The configured secret key is."


@app.route('/<name>')
def hello_name(name):
    return "Hello {}!".format(name)


if __name__ == '__main__':
    app.run()