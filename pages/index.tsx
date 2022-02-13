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
import ManufacturerCard from '../components/ManufacturerCard/ManufacturerCard'

const Home: NextPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const userInfo = useSelector((state: RootState) => state?.auth?.userInfo)
  const { loading, manufacturers, error } = useSelector((state: RootState) => state?.manufacturers)
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
    <div className='position-relative' style={{backgroundColor: '#f2f2f2'}} >

      <Navbar />
      <Sidebar />

      <main className="" style={{padding: '80px 0 0 70px'}}>
        <div className="container">
        <div className='row' style={{}}>
            {
              loading ? (
                <div>loading...</div>
              ) : error ? (
                <div>{error}</div>
              ) : (
                manufacturers?.result?.manufacturers.map((cv: any) => (
                  <ManufacturerCard manufacturer={cv} key={cv._id}/>
                ))
              )
            }
        </div>
        </div>
      </main>
    </div>
  )
}

export default Home
