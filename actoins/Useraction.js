"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()
    //fetch the secret from database
let user=await User.findOne({username:to_username})
const secret=user.razorpaysecret
    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })


    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }
    let x = await instance.orders.create(options)
    // create a payment object which shows pending payment in database
    await Payment.create({
        oid: x.id, amount: amount/100, to_user: to_username, name: paymentform.name, message: paymentform.message,
    })
    return x

}

export const fetchuser = async (username) => {
    await connectDB()
    let u = await User.findOne({ username: username })
    let user = u.toObject({ flattenObjectsIds: true })
    return user
}

export const fetchpayments = async (username) => {
    await connectDB()
    //find all payments sorted by decreasing order of amount and flatten objects
    let p = await Payment.find({ to_user: username,done:true }).sort({ amount: -1 }).limit(10).lean()
    return p
}

export const updateProfile= async(data,oldusername)=>{
    await connectDB()
    let ndata=Object.fromEntries(data)
    //if the username is being updated,check if username is available
    if( oldusername!==ndata.username){
    let u = await User.findOne({username:ndata.username})
    if(u){
        //throw new Error
        return{error:"Username already taken"}
    }
    await User.findOneAndUpdate({email:ndata.email},ndata)
    //now update the username in payments table
    await Payment.updateMany({to_user:oldusername},{to_user:ndata.username})
        }
        else{
//update the user object
        //let u = 
        await User.findOneAndUpdate(
            // {username:oldusername}
             {email:ndata.email},{new:true})
         //end{code}
        }
        
    }


