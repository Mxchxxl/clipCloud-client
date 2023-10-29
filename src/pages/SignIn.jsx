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


        <div className=" relative w-screen h-screen bg-[#161616] text-white flex flex-col gap-10 justify-center items-center">
          
            
                <form action="" className="signin-form bg-[#202020] p-2 md:p-10 rounded-xl max-w-sm">
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
                    <button onClick={submitForm} className="w-full bg-red-900 rounded-xl font-normal capitalize  md:text-xl  py-1 md:py-2 inline-block">{mode}</button>
                <p className="text-xs" >or <span className="font-bold capitalize underline text-blue-600 cursor-pointer" onClick={setFormMode}>{alternativeMode}</span></p>
                </form>
          
           <p className="text-xs">or signin with</p>

            <div className="flex flex-row w-full  justify-around max-w-sm">
                <Link className="alt-signin-icon" >google</Link>
                <Link className="alt-signin-icon" >github</Link>
            </div>


        </div>
    )
}

export default SignIn