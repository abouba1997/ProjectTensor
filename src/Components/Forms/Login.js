import { useForm } from 'react-hook-form';

const Login = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = data => console.log(data);

    return(
        <form action="" className="login__form" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="form_0" value="form_0"/>
            <div className="form__container">
                <div className="form__row">
                    <label htmlFor="username"><b>Логин</b></label>
                    <input type="text" {...register("username", {required: true, maxLength: 20})} placeholder="Enter Username"/>
                    {errors.username && errors.username.type === 'required' && <span style={{color: 'red'}}>Требуется логин</span>}
                </div>
            
                <div className="form__row">
                    <label htmlFor="password"><b>Пароль</b></label>
                    <input type="password" {...register("password", {required: true, minLength: 8})} placeholder="Password"/>
                    {errors.password && errors.password.type === 'required' && <span style={{color: 'red'}}>Требуется пароль</span>}
                </div>
                
                <div className="form__row">
                    <button>Вход</button>
                    <label>
                        <input type="checkbox" name="remember" {...register("remember")}/> Запомни меня
                    </label>
                </div>
            </div>
            <div className="form__footer-container">
                <div className="password">Или <a href="/#">Забыли пароль?</a></div>
            </div>
        </form>
    )
}

export default Login;