import { faLock, faPenToSquare, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

import Image from '~/components/Image';

import ItemVideo from './ItemVideo';
import * as httpRequest from '~/api/httpRequest';

export default function Profile() {
    const [listVideos, setListVideos] = useState([]);
    useEffect(() => {
        const getListVideos = async () => {
            const result = await httpRequest.get('videos?type=for-you&page=1');
            setListVideos(result.data);
            // console.log(result.data);
        };
        getListVideos();
    }, []);
    const [toggle, setToggle] = useState(1);
    const updateToggle = (id) => {
        setToggle(id);
    };
    return (
        <div className="px-6 flex py-8 flex-col min-h-[cacl(100vh - 59px)]">
            <div className="flex flex-auto flex-col">
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
                <div className="flex-auto flex flex-col justify-start min-h-[490px] min-w-[52px] relative">
                    <div className="flex items-center w-full h-11 mb-2 bg-white relative after:content-[''] after:w-full after:absolute after:h-[2px] after:bg-gray-300 after:bottom-[3px]">
                        <div
                            onClick={() => updateToggle(1)}
                            className={`text-lg font-semibold flex items-center justify-center px-8 pb-2 cursor-pointer ${
                                toggle === 1 ? 'text-blackColor border-b-2' : 'text-[#73747b]'
                            }  hover:border-b-2 border-blackColor z-30`}
                        >
                            Video
                        </div>
                        <div
                            onClick={() => updateToggle(2)}
                            className={`text-lg font-semibold flex items-center justify-center px-8 pb-2 cursor-pointer ${
                                toggle === 2 ? 'text-blackColor border-b-2' : 'text-[#73747b]'
                            } gap-1 hover:border-b-2 border-blackColor z-30`}
                        >
                            <FontAwesomeIcon icon={faLock} />
                            Yêu thích
                        </div>
                        <div
                            onClick={() => updateToggle(3)}
                            className={`text-lg font-semibold flex items-center justify-center px-8 pb-2  cursor-pointer ${
                                toggle === 3 ? 'text-blackColor border-b-2' : 'text-[#73747b]'
                            } gap-1 hover:border-b-2 border-blackColor z-30`}
                        >
                            <FontAwesomeIcon icon={faLock} />
                            Đã thích
                        </div>
                        {/* <span className="absolute h-[2px] w-[113px] bg-blackColor bottom-0 transition-transform delay-300 ease-in translate-x-0"></span> */}
                    </div>
                    <div className="w-full mt-1">
                        <div className={`grid grid-cols-5 gap-x-4 gap-y-6 ${toggle === 1 ? 'block' : 'hidden'}`}>
                            {listVideos?.map((item, index) => (
                                <ItemVideo data={item} key={index} />
                            ))}
                        </div>
                        <div className={`grid grid-cols-5 gap-x-4 gap-y-6 ${toggle === 2 ? 'block' : 'hidden'}`}>
                            {listVideos?.map((item, index) => (
                                <ItemVideo data={item} key={index} />
                            ))}
                        </div>
                        <div className={`grid grid-cols-5 gap-x-4 gap-y-6 ${toggle === 3 ? 'block' : 'hidden'}`}>
                            {listVideos?.map((item, index) => (
                                <ItemVideo data={item} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
