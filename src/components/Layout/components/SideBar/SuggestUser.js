import React from 'react';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';

export default function SuggestUser({ title, data }) {
    return (
        <div className="py-4 text-sm font-semibold ps-0">
            <h2 className="px-2 text-sm text-gray-700 font-semibold">{title}</h2>
            <ul className="list-none ps-0">
                <li>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="p-2 flex items-center gap-2 rounded-md transition ease-in-out delay-200 hover:bg-gray-100 cursor-pointer"
                        >
                            <Link to="/acount" className="w-8 h-8">
                                <Image
                                    src={item.avatar}
                                    alt={item.nickname}
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </Link>
                            <Link to="/acount" className="flex flex-col justify-center no-underline">
                                <div className="text-blackColor font-bold text-base">{item.nickname}</div>
                                <div className="text-xs text-[#161823bf] font-normal leading-4">
                                    {item.first_name} {item.last_name}
                                </div>
                            </Link>
                        </div>
                    ))}
                </li>
            </ul>
        </div>
    );
}
