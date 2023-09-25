import React, { useRef } from 'react';
import loginImg from 'assets/images/loginImg.svg'
import foodyLogo from 'assets/images/foodyLogo.svg'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUserData } from 'hooks/useUserData';

export const Admin = () => {
    const mailRef = useRef()
    const passwordRef = useRef()

    const signInUserData = useUserData()

    const signInUser = () => {
        const mail = mailRef.current.value;
        const pass = passwordRef.current.value;
        const userData = {
            'email': mail,
            'password': pass,
        }
        signInUserData.mutate(userData)
    }


    return (
        <>
            <div>
                <h1 className="ml-9px text-24 mt-11px sm:mt-57px sm:ml-32px font-mukta font-weight800 sm:text-28 text-logocolor"><img src={foodyLogo} alt="foody-loho" /></h1>
                <div className='flex justify-center mt-75px sm:mt-99px'>
                    <div className='flex flex-col-reverse sm:flex-row'>
                        <div className='sm:bg-loginBgc flex flex-col'>
                            <h1 className="sm:mt-58px mt-18px mb-23px font-montserrat text-center text-24 sm:text-35 text-gray1 font-weight700 sm:ml-40px sm:mr-48px sm:mb-40px">Welcome Admin</h1>
                            <input ref={mailRef} type='email' placeholder='E-mail' className='sm:pl-40 pl-19 inline mx-auto h-resinput w-207 text-14 sm:text-18 items-center text-gray1 font-weight400 sm:rounded-4 sm:ml-47px sm:mr-58px sm:w-318 bg-inputBg sm:h-input mb-13px sm:mb-26px outline-pink' />
                            <input ref={passwordRef} type='password' placeholder='Password' className='sm:pl-40 pl-19 inline mx-auto h-resinput w-207 text-14 sm:text-18 items-center text-gray1 font-weight400 sm:rounded-4 sm:ml-47px sm:mr-58px sm:w-318 bg-inputBg sm:h-input mb-23px sm:mb-26px outline-pink' />
                            <button type="button" onClick={signInUser} className=' text-white rounded-5 sm:rounded-4 sm:mb-58px sm:ml-47px sm:mr-58px font-medium text-14 sm:text-25 hover:bg-pink00 bg-loginBtn py-6 sm:py-10'>Sign in</button>
                        </div>
                        <div className='flex sm:w-405 sm:bg-white justify-center'><img src={loginImg} className='w-174 sm:w-346  sm:mt-55 sm:ml-30 sm:mb-52 sm:mr-30' alt='login img' /></div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>

    )
}
