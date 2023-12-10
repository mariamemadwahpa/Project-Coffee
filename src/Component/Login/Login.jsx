import React from 'react';
import css from './Login.module.css';

const Login = () => {
    return (
        <div className={css.contaner}>
            <div className={css.forms}>
                <p>Login</p>
                <div className={css.form}>
                    <label htmlFor="">Email</label><br />
                    <input className={css.input} type="text" placeholder='type your email'/>
                </div>
                <div className={css.form}>
                    <label htmlFor="">Password</label><br />
                    <input className={css.input} type="password" placeholder='type your password'/>
                </div>
                <br />
                <div>
                    <button className={css.butLogin}>Login</button>
                </div>
                <div>
                    <button className={css.butSign}>Sign</button>
                </div>
                <div className={css.OrSign}>
                    <hr /><span>Or sign us with</span><hr />
                </div>
            </div>
        </div>
    );
}

export default Login;
