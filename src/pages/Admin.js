import React, { useRef} from 'react';
import loginImg from '../assets/images/loginImg.svg'
import { useNavigate } from 'react-router-dom';
import signIn from 'server/firebase';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Admin = () => {
    const navigate=useNavigate();
    const mailRef = useRef()
    const notify = (typ,mes,dur,pos) =>{
      toast(mes, {
        type: typ,
        autoClose: dur,
        position: pos,
      });
    }
    const passwordRef= useRef()
    function signInBtn(){
      const mail = mailRef.current.value
      const password = passwordRef.current.value
      signIn(mail,password).then(()=>{
        notify('success','Sign in Successfully',2000,'top-right')
        setTimeout(()=>{
          navigate('/products')
        },3000)
      })
      .catch(()=>{
        notify('error','Wrong password or email',2000,'top-right')
      })
    }
  return (
    <div>
      <h1 className="ml-9px text-24 mt-11px sm:mt-57px sm:ml-32px font-mukta font-weight800 sm:text-28 text-logocolor">Foody<span className="text-logodotcolor">.</span></h1>
      <div className='flex justify-center mt-75px sm:mt-199px'>
        <div className='flex flex-col-reverse sm:flex-row'>
          <div className='sm:bg-loginBgc flex flex-col'>
            <h1 className="sm:mt-58px mt-18px mb-23px font-montserrat text-center text-24 sm:text-35 text-gray1 font-weight700 sm:ml-40px sm:mr-48px sm:mb-40px">Welcome Admin</h1>
            <input type='file' accept='image/*'/>
            <input ref={mailRef} type='email' placeholder='E-mail' className='sm:pl-40 pl-19 inline mx-auto h-resinput w-207 text-14 sm:text-18 items-center text-gray1 font-weight400 sm:rounded-4 sm:ml-47px sm:mr-58px sm:w-318 bg-inputBg sm:h-input mb-13px sm:mb-26px'/>
            <input ref={passwordRef} type='password' placeholder='Password' className='sm:pl-40 pl-19 inline mx-auto h-resinput w-207 text-14 sm:text-18 items-center text-gray1 font-weight400 sm:rounded-4 sm:ml-47px sm:mr-58px sm:w-318 bg-inputBg sm:h-input mb-23px sm:mb-26px'/>
            <button type="button" onClick={signInBtn} className=' text-white rounded-5 sm:rounded-4 sm:mb-58px sm:ml-47px sm:mr-58px font-medium text-14 sm:text-25 hover:bg-pink00 bg-loginBtn py-6 sm:py-10'>Sign in</button>
          </div>
          <div className='flex sm:w-405 sm:bg-white justify-center'><img src={loginImg} className='w-174 sm:w-346  sm:mt-55 sm:ml-30 sm:mb-52 sm:mr-30' alt='login img'/></div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}
