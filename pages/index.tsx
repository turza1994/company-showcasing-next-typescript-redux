import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actionCreators/productAction'
import styles from '../styles/Home.module.css'
import {RootState} from '../redux/reducers/rootReducer'
import { login } from '../redux/actionCreators/authAction'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const userInfo = useSelector((state: RootState) => state?.auth?.userInfo)
  console.log(`auth thik asey ${userInfo}`);

  useEffect(()=>{
    if(!userInfo){
      router.push('/Login')
    }
  }, [userInfo])

  useEffect(()=>{
    dispatch(getProducts())
  }, [dispatch])
  
  return (
    <section className='vh-100 pt-5' style={{backgroundColor: '#01896a'}}>
      <h1>Hello World</h1>    
    </section>
  )
}

export default Home
