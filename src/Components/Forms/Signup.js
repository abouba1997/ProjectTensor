import { useForm } from 'react-hook-form';

const Signup = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = data => console.log(data);

    return (
        <form action="" className="login__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__container">
                <div className="form__row">
                    <label htmlFor="name"><b>Ф.И.О</b></label>
                    <input className="input-text login-form__input" type="text" {...register("name", {required: true, maxLength: 20})} placeholder="Иванов Иван Иванович"/>
                    {errors.name && errors.name.type === 'required' && <span style={{color: 'red'}}>Требуется Ф.И.О</span>}
                </div>

                <div className="form__row">
                    <label htmlFor="email"><b>Email</b></label>
                    <input className="input-text login-form__input" type="email" {...register("email", {required: true})} placeholder="school@tensor.ru"/>
                    {errors.email && errors.email.type === 'required' && <span style={{color: 'red'}}>Требуется email</span>}
                </div>
                
                <div className="form__row">
                    <label htmlFor="pseudo"><b>Псевдоним</b></label>
                    <input className="input-text login-form__input" type="text" {...register("pseudo", {required: true, maxLength: 30})} placeholder="Введите псевдоним"/>
                    {errors.pseudo && errors.pseudo.type === 'required' && <span style={{color: 'red'}}>Требуется псевдоним</span>}
                </div>

                <div className="form__row">
                    <label htmlFor="password"><b>Пароль</b></label>
                    <input className="input-text login-form__input" type="password" {...register("password", {required: true, minLength: 8})} placeholder="Введите пароль"/>
                    {errors.password && errors.password.type === 'required' && <span style={{color: 'red'}}>Требуется пароль</span>}
                </div>

                <div className="form__row">
                    <label>
                        <input type="checkbox" {...register("remember", {required: true})}/> Создавая учетную запись, я соглашаюсь с политикой конфиденциальности.
                        {errors.remember && errors.remember.type === 'required' && <span style={{color: 'red'}}>Требуется согласиться с политикой конфиденциальности.</span>}
                    </label>
                    <button type="submit">Зарегистрироваться</button>
                </div>
            </div>
        </form>
    )
}

export default Signup;