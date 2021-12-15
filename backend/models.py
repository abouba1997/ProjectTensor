from app import db
from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy.orm import backref
from datetime import datetime


class Teacher(db.Model):
    __tablename__ = 'teacher'
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
        return f"<Teacher: id = {self.id},  name = {self.name}>"


class Category(db.Model):
    __tablename__ = 'category'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    description = db.Column(db.String(250))
    lessons = db.relationship("Lesson", backref='category')


    def __init__(self, name, description):
        self.name = name
        self.description = description


    def __repr__(self):
        return f"<Category: id = {self.id}, name={self.name}>"


class Lesson(db.Model):
    __tablename__ = 'lesson'
    id = db.Column(db.Integer, primary_key=True)

    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    teacher_id = db.Column(db.Integer, db.ForeignKey('teacher.id'))

    title = db.Column(db.String(50))
    description = db.Column(db.String(250))
    image = db.Column(db.String(250))
    infos = db.Column(JSON)

    
    def __init__(self, category_id, teacher_id, title, description, image, infos):
        self.category_id = category_id
        self.teacher_id = teacher_id
        self.title = title
        self.description = description
        self.image = image
        self.infos = infos


    def __repr__(self):
        return f"<Lesson: id = {self.id}, title = {self.title}>"

