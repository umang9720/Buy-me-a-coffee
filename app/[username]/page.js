import React from 'react'
import Image from 'next/image'
import PaymentPay from '../file/PaymentPay'
import { notFound } from 'next/navigation'
import connectDB from '@/db/connectDb'
import User from '@/models/User'
const Username =async ({ params }) => {
//if the username is not in database,show a 404 page
const checkUser=async()=>{
  await connectDB
  let u=await User.findOne({username:params.username})
if(!u){
  return notFound()
}
}
await checkUser()
  return (
    <>
    <PaymentPay username={params.username}/>
      </>
  )
}

export default Username

// or Dynamic metadata
export async function genrateMetadata({params}){
  return{
    title: `Support ${params.username}- Get Me A Coffee`,  }
}