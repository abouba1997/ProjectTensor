from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config

from flask_migrate import Migrate


app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)

import models

migrate = Migrate(app, db)

@app.route('/')
def index():
    return "Hello World! from app"




if __name__ == "__main__":
    app.run()