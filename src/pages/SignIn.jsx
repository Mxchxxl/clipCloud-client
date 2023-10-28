import { Link } from "react-router-dom"
import { useState } from "react"

const SignIn = () =>
{

    const [mode, setMode] = useState('signIn')
const [alternativeMode, setAlternativeMode] = useState('signUp')

const setFormMode = ()=>{
    let temp = mode
    setMode( alternativeMode )
setAlternativeMode(temp)
temp = undefined
}

const submitForm =(e) =>{
    e.preventDefault()
}

   
    return (


        <div className="w-screen h-screen bg-[#161616] text-white flex flex-col gap-10 justify-center items-center">
          
            
                <form action="" className="signin-form bg-[#202020] p-10 rounded-xl">
                    <div>
                        <label htmlFor="name">name</label>
                        <input type="text" name="name" />
                    </div>

                    <div>
                        <label htmlFor="email">email</label>
                        <input type="text" name="email" />
                    </div>

                    <div>
                        <label htmlFor="password">password</label>
                        <input type="password" />
                    </div>
                    <button onClick={submitForm} className="w-full bg-red-900 rounded-xl font-normal capitalize text-xl py-2 inline-block">{mode}</button>
                <p >or <span className="font-bold capitalize underline text-blue-600 cursor-pointer" onClick={setFormMode}>{alternativeMode}</span></p>
                </form>
          
           <p>or signin with</p>

            <div className="flex flex-row gap-5 bg-[#202020] rounded-xl p-5">
                <Link >google</Link>
                <Link >github</Link>
            </div>


        </div>
    )
}

export default SignIn