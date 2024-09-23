"use client"
import Script from "next/script"
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { fetchuser, fetchpayments, initiate } from "@/actoins/Useraction"
import { useSession } from "next-auth/react"
import { useSearchParams } from "next/navigation" 
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Bounce } from "react-toastify"
import { useRouter } from "next/navigation"

const PaymentPay = ({ username }) => {
  const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
  const [currentUser, setCurrentUser] = useState({})
  const [payments, setPayments] = useState([])
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (searchParams.get("paymentdone") === "true") {
      toast('Payment has been made', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    }
    router.push(`/${username}`)
  }, [])

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  const getData = async () => {
    let u = await fetchuser(username)
    setCurrentUser(u)
    let dbpayments = await fetchpayments(username)
    setPayments(dbpayments)
  }

  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentform)
    let orderId = a.id
    var options = {
      "key": currentUser.razorpayid, 
      "amount": amount, 
      "currency": "INR",
      "name": "Get Me A Coffee", 
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": orderId, 
      "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      "prefill": { 
        "name": "Gaurav Kumar", 
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    }

    var rzp1 = new Razorpay(options)
    rzp1.open()
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="cover w-full bg-red-50 relative">
        <img className="object-cover w-full h-[350px] shadow-blue-700 shadow-sm" src={currentUser.coverpic} alt="banner" />

        <div className="absolute -bottom-20 right-[45%] border-white overflow-hidden border-2 rounded-full w-36 h-36">
          <Image className="rounded-full object-cover w-36 h-36" width={144} height={144} src={currentUser.profilepic} alt="profile" />
        </div>
      </div>

      <div className="info flex justify-center items-center my-24 flex-col gap-2">
        <div className="font-bold text-lg">
          @{username}
        </div>
        <div className="text-slate-400">
          Let`s help {username} get a Coffee
        </div>
        <div className="text-slate-400">
          {payments.length} Payments. {currentUser.name} has raised ₹{payments.reduce((a, b) => a + b.amount, 0)}
        </div>

        <div className="payment flex flex-col md:flex-row gap-3 w-[80%] mt-11">
          <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className="text-2xl font-bold my-5">Top 10 Supporters</h2>
            <ul className="mx-5 text-lg">
              {payments.length === 0 && <li>No payments yet</li>}
              {payments.map((p, i) => (
                <li key={i} className="my-4 flex gap-2 items-center">
                  <img className="object-contain rounded-full ring-2 ring-gray-700 dark:ring-gray-100 w-8 h-8" src="https://loremflickr.com/g/200/200/girl" alt="user avatar" />
                  <span>{p.name} donated <span className="font-bold">₹{p.amount}</span> with a message `{p.message}`</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="makepayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className="text-2xl font-bold my-5">Make a payment</h2>
            <div className="flex gap-2 flex-col">
              <input onChange={handleChange} value={paymentform.name} name="name" type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Name" />
              <input onChange={handleChange} value={paymentform.message} name="message" type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Message" />
              <input onChange={handleChange} value={paymentform.amount} name="amount" type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Amount" />

              <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type="button" className="text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-purple-100" disabled={paymentform.name.length < 3 || paymentform.message.length < 4 || paymentform.amount.length < 1}>Pay</button>
            </div>
            <div className="flex gap-2 mt-5">
              <button className="bg-slate-800 p-3 rounded-lg" onClick={() => pay(1000)}>Pay ₹10</button>
              <button className="bg-slate-800 p-3 rounded-lg" onClick={() => pay(3000)}>Pay ₹30</button>
              <button className="bg-slate-800 p-3 rounded-lg" onClick={() => pay(5000)}>Pay ₹50</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentPay
