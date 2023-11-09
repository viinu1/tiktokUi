import React, { useState } from 'react';
import { useDebounce } from '~/hook';

export default function Login() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleOnchange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    const debounce = useDebounce(user, 500);
    console.log(debounce);

    return (
        <div className="flex items-center justify-center h-screen bg-slate-100">
            <form action="" method="" className="w-1/3 p-3 shadow rounded-lg bg-gray-100">
                <h3 className="text-xl font-semibold text-center">Đăng nhập</h3>
                <div className="flex flex-col mb-2">
                    <label htmlFor="email" className="text-base font-semibold text-blackColor">
                        Email/Username:
                    </label>
                    <input
                        name="email"
                        id="email"
                        className="px-3 py-1 border focus:outline-0 rounded-lg bg-transparent focus:bg-white"
                        type="text"
                        placeholder="Enter your email"
                        onChange={handleOnchange}
                        value={user.email}
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label htmlFor="password" className="text-base font-semibold text-blackColor">
                        Password
                    </label>
                    <input
                        name="password"
                        id="password"
                        className="px-3 py-1 border focus:outline-0 rounded-lg bg-transparent focus:bg-white"
                        type="password"
                        placeholder="Enter your password"
                        onChange={handleOnchange}
                        value={user.password}
                    />
                </div>
                <button className="bg-green-500 w-full p-1 rounded-lg cursor-pointer mt-1">Đăng nhập</button>
            </form>
        </div>
    );
}
