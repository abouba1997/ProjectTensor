from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy.orm import backref

db = SQLAlchemy()

class Teacher(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    profession = db.Column(db.String(100))
    work = db.Column(db.String(100))
    address = db.Column(db.String(50))
    biography = db.Column(JSON)
    lessons = db.relationship("Lesson", backref='teacher')

    
    def __init__(self, name, profession, work, address, biography):
        self.name = name
        self.profession = profession
        self.work = work
        self.address = address
        self.biography = biography


    def __repr__(self):
        return "<Teacher %r>" % self.name


class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    description = db.Column(db.String(250))
    lessons = db.relationship("Lesson", backref='category')


    def __init__(self, name, description):
        self.name = name
        self.description = description


    def __repr__(self):
        return "<Category %r>" % self.name


class Lesson(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    teacher_id = db.Column(db.Integer, db.ForeignKey('teacher.id'))

    title = db.Column(db.String(50))
    description = db.Column(db.String(250))
    image = db.Column(db.String(50))
    infos = db.Column(JSON)

    
    def __init__(self, category_id, teacher_id, title, description, image, infos):
        self.category_id = category_id
        self.teacher_id = teacher_id
        self.title = title
        self.description = description
        self.image = image
        self.infos = infos


    def __repr__(self):
        return "<Lesson %r>" % self.title

