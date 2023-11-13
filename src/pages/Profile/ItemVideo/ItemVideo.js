import { useEffect, useState } from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPlayer from 'react-player';
import { useHover } from '@uidotdev/usehooks';

export default function ItemVideo({ data }) {
    const [hoverRef, isHovering] = useHover();
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        if (isHovering) {
            setPlaying(true);
        } else {
            setPlaying(false);
        }
    }, [isHovering]);
    // console.log(data);
    return (
        <div className="flex flex-col items-start relative">
            <div className="relative cursor-pointer" ref={hoverRef}>
                <ReactPlayer url={data.file_url} playing={playing} loop width={'100%'} height={'361px'} muted />
                <div className="absolute bottom-0 w-full px-3 pt-16 pb-4 flex items-center text-white gap-2 text-base font-semibold cursor-pointer">
                    <FontAwesomeIcon icon={faPlay} className="w-[18px] h-[18px]" />
                    {data.views_count}
                </div>
            </div>
            <span className="line-clamp-1">{data.description}</span>
        </div>
    );
}
