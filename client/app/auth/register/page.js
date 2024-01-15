'use client'

import React,{ useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import axios from 'axios'
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

import { sendRegisterData } from '@/store/slices/signupSlice';


const LoginForm = () => {
    const dispatch = useDispatch()
    const [user,setUser] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        console.log(e.target.name,e.target.value)
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(sendRegisterData({username: user.name, email: user.email, password: user.password}))
    }

    return(
        <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
            <div className="w-full m-auto bg-white lg:max-w-lg">
                <Card>
                <form className='m-10 flex flex-col justify-center items-center border-solid' onSubmit={handleSubmit}>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
                    <CardDescription className="text-center">
                    Enter your name and password to Register
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">User Name</Label>
                    <Input name='name' type='text' placeholder='Enter the Name' value={user.name} onChange={handleChange}/>
                    </div>
                    <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input name='email' type='email' placeholder='Enter the email' value={user.email} onChange={handleChange}/>
                    </div>
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
                    <Button className="w-full">Register</Button>
                    <p className="mt-2 text-xs text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <span className=" text-blue-600 hover:underline">
                        <Link href='/auth/login'>Login</Link>
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