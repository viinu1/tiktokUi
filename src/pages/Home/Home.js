import { faBookmark, faCheck, faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import * as httpRequest from '~/api/httpRequest';
import { CheckIcon } from '~/components/Icons';
import Image from '~/components/Image';

function Home() {
    const [listVideos, setListVideos] = useState([]);

    useEffect(() => {
        const getListVideos = async () => {
            const result = await httpRequest.get('videos?type=for-you&page=1');
            setListVideos(result.data);
            console.log(result.data);
        };
        getListVideos();
    }, []);

    return (
        <div className="w-[700px]">
            {listVideos?.map((video, index) => (
                <div className="flex gap-4 pt-4 border-b pb-4" key={index}>
                    <div className="w-14 h-14 ">
                        <Image
                            src={video.user.avatar}
                            alt={video.user.nickname}
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    <div className="flex flex-col w-[624px]">
                        <div className="flex justify-between relative">
                            <div className="flex flex-col flex-1">
                                <div className="flex gap-2 items-center justify-start">
                                    <span className="text-lg font-bold">
                                        {video.user.first_name} {video.user.last_name}
                                    </span>
                                    {video?.user?.tick ? (
                                        <span className="w-[14px] h-[14px] rounded-full bg-[#20d5ec] flex items-center justify-center">
                                            <CheckIcon />
                                        </span>
                                    ) : (
                                        ''
                                    )}
                                    <span className="text-sm font-normal">{video.user.nickname}</span>
                                </div>
                                <div className="flex relative text-base pe-[102px] line-clamp-3 h-12">
                                    {video.description}
                                </div>
                                {video.music === '' ? (
                                    ''
                                ) : (
                                    <div className="flex items-center gap-2 w-full overflow-hidden relative text-sm font-normal">
                                        <FontAwesomeIcon icon={faMusic} />
                                        <span className="hover:underline">{video.music}</span>
                                    </div>
                                )}
                            </div>
                            <button className="absolute right-0 flex items-center justify-center text-lg px-4 text-seconde border border-seconde rounded-[2px] hover:text-seconde hover:bg-[#fe2c5529]">
                                Follow
                            </button>
                        </div>
                        {/* video */}
                        <div className="flex items-end gap-3 mt-3">
                            <ReactPlayer
                                url={video.file_url}
                                width={320}
                                height={500}
                                controls
                                playing={true}
                                // light={video.thumb_url}
                            />

                            <div className="flex flex-col gap-3">
                                <div className="flex items-center flex-col gap-2">
                                    <span className="bg-gray-300 rounded-full w-12 h-12 cursor-pointer flex items-center justify-center">
                                        <FontAwesomeIcon icon={faHeart} className="text-2xl" />
                                    </span>
                                    <span className="text-xs text-[#161823bf]">{video.likes_count}</span>
                                </div>
                                <div className="flex items-center flex-col gap-2">
                                    <span className="bg-gray-300 rounded-full w-12 h-12 cursor-pointer flex items-center justify-center">
                                        <FontAwesomeIcon icon={faCommentDots} className="text-2xl" />
                                    </span>
                                    <span className="text-xs text-[#161823bf]">{video.comments_count}</span>
                                </div>
                                <div className="flex items-center flex-col gap-2">
                                    <span className="bg-gray-300 rounded-full w-12 h-12 cursor-pointer flex items-center justify-center">
                                        <FontAwesomeIcon icon={faBookmark} className="text-2xl" />
                                    </span>
                                    <span className="text-xs text-[#161823bf]">{video.likes_count}</span>
                                </div>
                                <div className="flex items-center flex-col gap-2">
                                    <span className="bg-gray-300 rounded-full w-12 h-12 cursor-pointer flex items-center justify-center">
                                        <FontAwesomeIcon icon={faShare} className="text-2xl" />
                                    </span>
                                    <span className="text-xs text-[#161823bf]">{video.shares_count}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
