import { faPenToSquare, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Image from '~/components/Image';

export default function Profile() {
    return (
        <div className="px-6 flex py-8 flex-col min-h-[cacl(100vh - 59px)]">
            <div className="flex flex-auto">
                <header className="max-w-[624px] pe-24 min-h-[140px] flex flex-col w-[624px] relative">
                    <div className="flex items-center gap-5">
                        <div className="w-[116px] h-[116px]">
                            <Image
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/7fb725c96b53824c16a18323800db90b~c5_100x100.jpeg?x-expires=1699858800&x-signature=txnYfHWysSwx6iq6mBW1O8Z%2FSys%3D"
                                alt="avatar"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div className="flex flex-col justify-between overflow-visible flex-1 ms-2">
                            <h1 className="font-bold text-[32px] overflow-hidden mb-1 cursor-pointer">tn2k61</h1>
                            <h2 className="text-lg font-semibold max-w-[450px] overflow-hidden cursor-pointer">
                                S Kageyama
                            </h2>
                            <div className="h-9 mt-4 relative">
                                <button className="flex items-center px-4 min-w-[136px] text-base h-9 cursor-pointer font-semibold bg-white text-blackColor border rounded border-[#1618231f] hover:bg-[#f8f8f8] hover:border-[#d0d1d3]">
                                    <FontAwesomeIcon icon={faPenToSquare} className="me-2" />
                                    Sửa hồ sơ
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-6 text-[#121212bf] items-center gap-5">
                        <div>
                            <strong className="text-blackColor">13</strong>
                            <span className="text-[#161823bf] text-base font-normal ml-2">Đang Follow</span>
                        </div>
                        <div>
                            <strong className="text-blackColor">13</strong>
                            <span className="text-[#161823bf] text-base font-normal ml-2">Đang Follow</span>
                        </div>
                        <div>
                            <strong className="text-blackColor">13</strong>
                            <span className="text-[#161823bf] text-base font-normal ml-2">Đang Follow</span>
                        </div>
                    </div>
                    <div className="text-blackColor text-base font-normal mt-[10px]">Chưa có tiểu sử.</div>
                    <div className="absolute top-[11px] cursor-pointer flex gap-4 right-[1px]">
                        <FontAwesomeIcon icon={faShare} className="w-6 h-6" />
                    </div>
                </header>
            </div>
            <div className="flex-auto flex flex-col justify-start min-h-[490px] min-w-[52px] relative"></div>
        </div>
    );
}
