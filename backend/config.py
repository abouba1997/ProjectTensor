
DATABASE_URI = 'postgresql://postgres:root@localhost/realpython'

class Config:
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = DATABASE_URI
    SQLALCHEMY_TRACK_MODIFICATIONS = False