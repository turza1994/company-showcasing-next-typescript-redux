import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actionCreators/productAction'
import styles from '../styles/Home.module.css'
import {RootState} from '../redux/reducers/rootReducer'
import { login } from '../redux/actionCreators/authAction'

const Home: NextPage = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch()
    
  useEffect(()=>{
    dispatch(getProducts())
  }, [dispatch])

  const handleBlur = (e: any) => {
      const newUserInfo: any = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
      console.log(user);
  }

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    if(user.email && user.password){
      dispatch(login(user))
    }
  }
  
  return (
    <section className='vh-100 pt-5' style={{backgroundColor: '#508bfc'}}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
                <div className="card-body p-2 text-center">

                  <h3 className="mb-5">Sign in</h3>

                  <div className="form-outline mb-4 d-flex align-items-center lead">
                    <label className="form-label ms-auto" htmlFor="typeEmailX-2">Email:</label>
                    <input type="email" id="typeEmailX-2" className="form-control w-75 ms-auto" name="email" onBlur={handleBlur}/>
                  </div>

                  <div className="form-outline mb-4 d-flex justify-content-center align-items-center lead">
                    <label className="form-label ms-auto" htmlFor="typePasswordX-2">Password:</label>
                    <input type="password" id="typePasswordX-2" className="form-control w-75 ms-auto" name='password' onBlur={handleBlur}/>
                  </div>

                  <button className="btn btn-primary btn-lg btn-block w-50" type="submit" onClick={handleFormSubmit}>Login</button>

                  <hr className="my-4 w-50 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Home
