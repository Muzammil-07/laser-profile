import React from 'react'
import { useState,useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useRouter } from 'next/router'


const Contact = () => {
    const router=useRouter();
    const form1 = useRef()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");


     const emailItem ={
        to_name:name,
        from_name: email,
        message:msg
     }    
     const sendEmail =(e)=>{
        e.preventDefault();
     console.log(name,email,msg);
     emailjs.sendForm('service_zhqh2v9', 'template_npkstlu', form1.current, "5a6GiGucq1q2CkY2w")
     .then((result) => {
       alert("Message Sent");
       router.reload('/')
     }, (error) => {
         alert(error.text);
     });
     }

    return (
        <div className='p-8 flex bg-gray-800 justify-start flex-col text-white'>
            <h1 className='text-3xl text-start text-yellow-400 font-bold my-4'>CONTACT</h1>
               <form ref={form1} onSubmit={sendEmail} className='w-full'>
                <div className='flex justify-start my-2'>

                    <div>
                        <label className='text-3xl '>Name </label>
                        <input className='text-black h-12 w-72 md:w-96 ml-4 rounded-md p-2 text-xl' type='text' name='to_name'  onChange={(e)=>{setName(e.target.value)}}/>
                    </div>
                </div>
                <div className='flex justify-start my-2 '>
                    <div className=''>
                        <label className='text-3xl  mr-2'>Email </label>
                        <input className='text-black h-12 w-72 md:w-96 ml-4 rounded-md p-2 text-xl' type='email' name="from_name" onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                </div>
                <div className='flex justify-start my-2 '>
                    <div>
                        <label className='text-2xl mr-2 align-top'>Message</label>
                        <textarea className='text-amber-700 w-72 md:w-96 ml-4 md:ml-0 rounded-md p-2 mx-auto' name='message' rows="4" onChange={(e)=>{setMsg(e.target.value)}} />
                    </div>

                </div>
                
              
            
           
          
           <button type='submit'  className=' w-[120px] h-[40px] rounded-md text-xl mx-auto md:ml-96 hover:text-slate-950 hover:border-white border-2 border-slate-500 bg-yellow-400 '
               >Submit</button>
                </form>
        </div>
    )
}

export default Contact