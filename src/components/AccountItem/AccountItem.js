import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Image from '../Image';
import { Link } from 'react-router-dom';

export default function AccountItem({ data }) {
    return (
        <Link
            to={`@/${data.nickname}`}
            className="py-[9px] px-4 flex items-center cursor-pointer gap-3 hover:bg-textSecond no-underline"
        >
            <div className="w-10 h-10">
                <Image className="w-full h-full rounded-full object-cover" src={data.avatar} alt={data.full_name} />
            </div>
            <div className="flex-1">
                <p className="text-base text-blackColor font-semibold overflow-hidden leading-5 flex items-center gap-2">
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className="w-[14px] h-[14px] text-[#1693a3]" icon={faCheckCircle} />}
                </p>
                <span className="text-14 font-normal overflow-hidden text-[#16182380] left-4">{data.nickname}</span>
            </div>
        </Link>
    );
}
