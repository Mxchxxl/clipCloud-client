import { Link, useNavigate } from "react-router-dom"

import axios from "axios"
import { updateUser } from "../redux/userSlice"
import { useDispatch, } from "react-redux"
import { useState } from "react"

const SignIn = () =>
{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [ mode, setMode ] = useState( "signIn" )
    const [ alternativeMode, setAlternativeMode ] = useState( "signUp" )
    const [ userForm, setUserForm ] = useState( {
        email: "",
        name: "",
        password: ""
    } )

    const setFormMode = () =>
    {
        let temp = mode
        setMode( alternativeMode )
        setAlternativeMode( temp )
        temp = undefined
    }

    const handleInput = ( e ) =>
    {
        setUserForm( { ...userForm, [ e.target.name ]: e.target.value } )
    }


    const signIn = async () =>
    {
        // console.log( 'sign in' )

        try
        {
            const request = await axios.post( '/api/auth/signin', userForm )
            // console.log( request.status )
            dispatch( updateUser( request.data ) )
            console.log( request.data.email )
            // await account.createEmailSession( request.data.email, 'password' )
            //redirect to home

            navigate( '/' )
        } catch ( e )
        {
            console.log( e.message )
        }



    }

    const signUp = async () =>
    {
        // console.log( 'sign up' )
        try
        {
            const request = await axios.post( '/api/auth/signup', userForm )
            // console.log( request.data )
            dispatch( updateUser( request.data ) )
            // await account.createEmailSession( request.data.email, 'password' )
            // redirect to home
            navigate( '/' )
        } catch ( e )
        { console.log( e.message ) }
    }

    const submitForm = ( e ) =>
    {
        e.preventDefault()
        // console.log( userForm )
        mode === "signIn" ? signIn() : mode === "signUp" ? signUp() : ""
    }


    return (
        <div className=" relative w-screen h-screen bg-[#161616] text-white flex flex-col gap-10 justify-center items-center">
            <form
                action=""
                className="signin-form bg-[#202020] p-2 md:p-10 rounded-xl max-w-sm"
            >
                <div>
                    <label htmlFor="name">name</label>
                    <input onChange={handleInput} type="text" name="name" value={userForm.name} />
                </div>

                <div>
                    <label htmlFor="email">email</label>
                    <input onChange={handleInput} type="text" name="email" value={userForm.email} />
                </div>

                <div>
                    <label htmlFor="password">password</label>
                    <input onChange={handleInput} type="password" name="password" value={userForm.password} />
                </div>
                <button
                    onClick={submitForm}
                    className="w-full bg-red-900 rounded-xl font-normal capitalize  md:text-xl  py-1 md:py-2 inline-block"
                >
                    {mode}
                </button>
                <p className="text-xs">
                    or{" "}
                    <span
                        className="font-bold capitalize underline text-blue-600 cursor-pointer"
                        onClick={setFormMode}
                    >
                        {alternativeMode}
                    </span>
                </p>
            </form>

            <p className="text-xs">or signin with</p>

            <div className="flex flex-row w-full  justify-around max-w-sm">
                <Link className="alt-signin-icon">google</Link>
                <Link className="alt-signin-icon">github</Link>
            </div>
        </div>
    )
}

export default SignIn
