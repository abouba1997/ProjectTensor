from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS 
from config import Config

from flask_migrate import Migrate

from werkzeug.utils import secure_filename
import os, errno


UPLOAD_FOLDER = '/path/to/the/uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}


app = Flask(__name__)
app.config.from_object(Config)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)

db = SQLAlchemy(app)

import models

migrate = Migrate(app, db)

# Create a directory in a known location to save files to.
uploads_dir = os.path.join(app.instance_path, 'uploads')
try:
    os.makedirs(uploads_dir)
    UPLOAD_FOLDER = uploads_dir
except OSError as exc:
    if exc.errno != errno.EEXIST:
        raise
    pass

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/')
def index():
    return "Hello World! from app"


def format_category(category):
    return {
        "id": category.id,
        "name": category.name,
        "description": category.description
    }


def format_teacher(teacher):
    return {
        "id": teacher.id,
        "name": teacher.name,
        "profession": teacher.profession,
        "work": teacher.work,
        "address": teacher.address,
        "biography": teacher.biography
    }


def format_lesson(lesson):
    return {
        "id": lesson.id,
        "category_id": lesson.category_id, 
        "teacher_id": lesson.teacher_id, 
        "title" : lesson.title, 
        "description": lesson.description,
        "image": lesson.image,
        "infos": lesson.infos
    }


# API

#####  Category (Begin) #######

# Create a category 1
@app.route('/categories', methods = ['POST'])
def create_category():
    data = request.get_json();
    category = models.Category(name=data['name'], description=data['description'])
    db.session.add(category)
    db.session.commit()
    return format_category(category)


# Get all Cateogry 2
@app.route('/categories', methods = ['GET'])
def get_categories():
    categories = models.Category.query.order_by(models.Category.id.asc()).all()
    categoryList = []
    for category in categories:
        categoryList.append(format_category(category))
    return {'categories': categoryList}


# get a single category 3
@app.route('/categories/<int:id>', methods = ['GET'])
def get_category(id):
    category = models.Category.query.filter_by(id=id).one()
    return {'category': format_category(category)}


# Delete Category 4
@app.route('/categories/<int:id>', methods = ['DELETE'])
def delete_category(id):
    category = models.Category.query.filter_by(id=id).one()
    db.session.delete(category)
    db.session.commit()
    return f'Category (id: {id}) deleted'


# Update Category 5
@app.route('/categories/<id>', methods = ['PUT'])
def update_category(id):
    category = models.Category.query.filter_by(id=id)
    new_category = request.get_json();
    category.update(dict(name=new_category['name'], description=new_category['description']))
    db.session.commit()
    formatted_category = format_category(category.one())
    return {'category': formatted_category}

#####  Category (End) #######


#####  Teacher (Begin) #######

# Create a teacher 1
@app.route('/teachers', methods = ['POST'])
def create_teacher():
    data = request.get_json();
    teacher = models.Teacher(name=data['name'], profession=data['profession'], work=data['work'], address=data['address'], biography=data['biography'])
    db.session.add(teacher)
    db.session.commit()
    return format_teacher(teacher)


# Get all teacher 2
@app.route('/teachers', methods = ['GET'])
def get_teachers():
    teachers = models.Teacher.query.order_by(models.Teacher.id.asc()).all()
    teachersList = []
    for teacher in teachers:
        teachersList.append(format_teacher(teacher))
    return {'teachers': teachersList}


# Get a single teacher 3
@app.route('/teachers/<id>', methods = ['GET'])
def get_teacher(id):
    teacher = models.Teacher.query.filter_by(id=id).one()
    return {'teacher': format_teacher(teacher)}


# Delete teacher 4
@app.route('/teachers/<id>', methods = ['DELETE'])
def delete_teacher(id):
    teacher = models.Teacher.query.filter_by(id=id).one();
    db.session.delete(teacher)
    db.session.commit()
    return f'Teacher (id: {id}) deleted'


# Update teacher 5
@app.route('/teachers/<id>', methods = ['PUT'])
def update_teacher(id):
    teacher = models.Teacher.query.filter_by(id=id)
    new_teacher = request.get_json();
    teacher.update(dict(name=new_teacher['name'], profession=new_teacher['profession'], work=new_teacher['work'], address=new_teacher['address'], biography=new_teacher['biography']))
    db.session.commit()
    formatted_teacher = format_teacher(teacher.one())
    return {'category': formatted_teacher}

#####  Teacher (End) #######


#####  Lesson (Begin) #######

# Create a lesson 1
@app.route('/lessons', methods = ['POST'])
def create_lesson():
    data = request.get_json()
    lesson = models.Lesson(category_id=data['category_id'], teacher_id=data['teacher_id'], title=data['title'], description=data['description'], image=data['image'], infos=data['infos'])
    db.session.add(lesson)
    db.session.commit()
    return {'lesson': format_lesson(lesson)}


# Get all lesson 2
@app.route('/lessons', methods = ['GET'])
def get_lessons():
    lessons = models.Lesson.query.order_by(models.Lesson.id.asc()).all()
    lessonsList = []
    for lesson in lessons:
        lessonsList.append(format_lesson(lesson))
    return {'lessons': lessonsList}


# Get a single lesson 3
@app.route('/lessons/<id>', methods = ['GET'])
def get_lesson(id):
    lesson = models.Lesson.query.filter_by(id=id).one()
    return {'lesson': format_lesson(lesson)}


# Delete lesson 4
@app.route('/lessons/<id>', methods = ['DELETE'])
def delete_lesson(id):
    lesson = models.Lesson.query.filter_by(id=id).one()
    db.session.delete(lesson)
    db.session.commit()
    return f'Lesson (id: {id}) deleted'


# Update lesson 5
@app.route('/lessons/<id>', methods = ['PUT'])
def update_lesson(id):
    lesson = models.Lesson.query.filter_by(id=id)
    new_lesson = request.get_json();
    lesson.update(dict(category_id=new_lesson['category_id'], teacher_id=new_lesson['teacher_id'], title=new_lesson['title'], description=new_lesson['description'], image=new_lesson['image'], infos=new_lesson['infos']))
    db.session.commit()
    formatted_lesson = format_lesson(lesson.one())
    return {'lesson': formatted_lesson}

if __name__ == "__main__":
    app.run()