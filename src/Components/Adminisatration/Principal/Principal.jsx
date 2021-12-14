import './Principal.css'
import IMG_WECLOME from '../../img/group.png'

import { Form, Button, h1 } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const TeacherForm = () => {
    return(
        <>
        <h1>Adding a new teacher</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </>
    )
}

const Principal = () => {
    const handleClick = (e) => {
        if(e.target.textContent === "Add a teacher") {
            console.log("Teacher adding")
        }else if(e.target.textContent === "Add a lesson") {
            console.log("Lesson adding")
        }else if(e.target.textContent === "Add a category") {
            console.log("Category adding")
        }
    }

    return (
        <div className="admin__principal">
            <header>
                <p className="courses__title">Welcome to admin page</p>
            </header>
            <section className="admin__section">
                <div className='admin__welcome-img'>
                    <img src={IMG_WECLOME} alt='Welcome to Amdin IMG'/>
                    <TeacherForm />
                </div>
                <div className='admin__buttons'>
                    <button className='admin__button' onClick={(e) => handleClick(e)}>Add a teacher</button>
                    <button className='admin__button' onClick={(e) => handleClick(e)}>Add a lesson</button>
                    <button className='admin__button' onClick={(e) => handleClick(e)}>Add a category</button>
                </div>
            </section>
        </div>
    )
}

export default Principal;