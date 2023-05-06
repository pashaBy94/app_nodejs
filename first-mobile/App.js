import { Field, Formik, useFormik } from 'formik';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import './App.css';
import * as yup from'yup';
import st from './components/form.module.css'
import ExampleFormikForm from './components/time';
//---------------------------------------------------------------------------
  const schema = yup.object({
    pass: yup.string().required(),
    pass1: yup.string().required(),
  });


function LoginForm(){
  const formik = useFormik({
    initialValues:{
      login:'',
      password:'',
      isRemember: false,
    },
    validate(val){
      const errors = {};
      if(!val.login){
        console.log('No login');
        errors.login = 'No login';
      }
      if(!val.password){
        console.log('No password');
        errors.password = 'No password';
      }
      if(val.login.length > 15){
        console.log('Login max 15 symbol');
        errors.login = 'Login max 15 symbol';
      }
      if(val.password.length > 15){
        console.log('Password max 15 symbol');
        errors.password = 'Password max 15 symbol';
      }
      return errors
    },
    onSubmit(val){
      console.log(val);
      console.log(formik);
    }
  });
  return(
        <form onSubmit={formik.handleSubmit} className={st.form__login}>
      <h3 className={st.form__login_title}>You must log in</h3>
      <div className={st.wrap__input_form}>
      <input 
        type='text'  
        id='login'
        name='login' 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        value={formik.values.login}
        placeholder='Login'
        className={(formik.touched.login && formik.errors.login)?`${st.input__form} ${st.input__error}`:st.input__form}
        />
        {formik.touched.login && formik.errors.login && <div className={st.modal__login}>{formik.errors.login}</div>}
      </div>
      <div className={st.wrap__input_form}>
      <input 
        type='password' 
        id='password' 
        name='password' 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        value={formik.values.password}
        placeholder='Password'
        className={(formik.touched.password && formik.errors.password)?`${st.input__error} ${st.input__form}`:st.input__form}
      />
      {formik.touched.password && formik.errors.password && <div className={st.modal__password}>{formik.errors.password}</div>}
      </div>
      <div>
      <label htmlFor='remember'>remember my</label>
      <input 
        type='checkbox' 
        id='remember' 
        name='isRemember' 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} 
        checked={formik.values.isRemember}
        className={st.form__checkbox}
        />
      </div>
      <button type='submit' className={st.form__btn}>Press</button>
    </form>  
  )
}

function App() {
  return (
    <div className={st.wrap__form}>
      <LoginForm />
    </div>
  )
}


export default App;
