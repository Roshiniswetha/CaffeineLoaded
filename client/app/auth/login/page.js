'use client'

import React,{ useState } from 'react'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { setCookie } from 'cookies-next';
import { getCookie } from 'cookies-next';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from "@/components/ui/checkbox"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { sendLoginData } from '@/store/slices/signinSlice';


const LoginForm = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const [user,setUser] = useState({
        name: '',
        email: '',
        password: '',
    })

    const token = getCookie('token');

    const handleChange = (e) => {
        console.log(e.target.name,e.target.value)
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await dispatch(sendLoginData({email: user.email, password: user.password}))
        const data = response.data;
        if (response.status == 200) {
            localStorage.setItem('token', data.token);
            setCookie('token', data.token);
            setCookie('name', data.username);
            setCookie('email', data.email);
            router.push('/order')
        }
    }

    return(
        <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
            <div className="w-full m-auto bg-white lg:max-w-lg">
                <Card>
                <form className='m-10 flex flex-col justify-center items-center border-solid' onSubmit={handleSubmit}>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center">Sign In</CardTitle>
                    <CardDescription className="text-center">
                    Enter your name and password to login
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input name='email' type='text' placeholder='Enter the Email' value={user.email} onChange={handleChange}/>
                    </div>
                    {/* <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input name='name' type='email' placeholder='Enter the email' value={user.email} onChange={handleChange}/>
                    </div> */}
                    <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input name='password' type='password' placeholder='Enter the Password' value={user.password} onChange={handleChange}/>
                    </div>
                    <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Remember me
                    </label>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                    <Button className="w-full">Login</Button>
                    <p className="mt-2 text-xs text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <span className=" text-blue-600 hover:underline">
                    <Link href='/auth/register'>Sign up</Link>
                    </span>
                    </p>
                </CardFooter>
                </form>
                </Card>
            </div>
        </div>
    )
}

export default LoginForm