import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getManufacturers } from '../redux/actionCreators/manufacturersAction'
import styles from '../styles/Home.module.css'
import {RootState} from '../redux/reducers/rootReducer'
import { login } from '../redux/actionCreators/authAction'
import { useRouter } from 'next/router'
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const Home: NextPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const userInfo = useSelector((state: RootState) => state?.auth?.userInfo)
  const manufacturers = useSelector((state: RootState) => state?.manufacturers)
  console.log(manufacturers)

  useEffect(()=>{
    if(!userInfo){
      router.push('/login')
    }
  }, [userInfo])

  useEffect(()=>{
    dispatch(getManufacturers(userInfo?.result?.token))
  }, [dispatch, userInfo])
  
  return (
    <div 
      className='position-relative vh-100'
      style={{
        backgroundColor: '#f2f2f2'
      }}  
    >
      <Navbar />
      <Sidebar />

      <main 
        className=''
        style={{
          padding: '80px 0 0 70px'
        }}
      >
        <h1 className='text-black'>Here will be the manufacturers</h1>
      </main>
    </div>
  )
}

export default Home
