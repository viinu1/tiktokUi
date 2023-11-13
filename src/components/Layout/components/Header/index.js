import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import {
    faArrowRightFromBracket,
    faBookmark,
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faLightbulb,
    faMoon,
    faPlus,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DownloadIcon, Logo, MessageIcon, NofiIcon, ShareIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from '~/components/Popper/MenuItem';
import Search from '../Search';
import Image from '~/components/Image';
import routesConfig from '~/until/router';
import { useEffect, useState } from 'react';

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon className="w-full h-full" icon={faLightbulb} />,
        title: 'Trung Tâm Nhà Sáng tạo live',
    },
    {
        icon: <FontAwesomeIcon className="w-full h-full" icon={faEarthAsia} />,
        title: 'Tiếng việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vn',
                    title: 'Việt Nam',
                },
                {
                    type: 'Language',
                    code: 'chi',
                    title: 'China',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon className="w-full h-full" icon={faCircleQuestion} />,
        title: 'Phản hổi và trợ giúp',
    },
    {
        icon: <FontAwesomeIcon className="w-full h-full" icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <FontAwesomeIcon className="w-full h-full" icon={faMoon} />,
        title: 'Chế độ tối',
    },
];

function Header() {
    const userToken = localStorage.getItem('userToken');
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        if (!!userToken) {
            setIsLogin(true);
        }
    }, [isLogin, userToken]);

    const userMenu = [
        {
            icon: <FontAwesomeIcon className="w-full h-full" icon={faUser} />,
            title: 'Xem hồ sơ',
            to: `@/${userInfo?.nickname}`,
        },
        {
            icon: <FontAwesomeIcon className="w-full h-full" icon={faBookmark} />,
            title: 'Yêu thích',
        },
        {
            icon: <FontAwesomeIcon className="w-full h-full" icon={faCoins} />,
            title: 'Nhận Xu',
            to: '/coins',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon className="w-full h-full" icon={faArrowRightFromBracket} />,
            title: 'Đăng xuất',
            clickMouse: true,
            to: '/logout',
        },
    ];

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    return (
        <div className="border-b border-[1px] shadow-sm h-16 flex items-center px-6 fixed top-o left-0 right-0 z-20 bg-white">
            <div className="container flex items-center justify-between mx-auto">
                <Link to={routesConfig.home} className="flex items-center">
                    <Logo />
                    <div></div>
                </Link>
                {/* search */}
                <Search />

                {/* action */}
                <div className="relative flex items-center gap-3">
                    <button className="border px-4 py-2 text-16 font-semibold text-blackColor rounded-[2px] hover:bg-[#16182308] me-2">
                        <FontAwesomeIcon icon={faPlus} className="text-base font-bold text-blackColor me-3" />
                        Tải lên
                    </button>
                    {!isLogin && (
                        <Link
                            to={`/login`}
                            className="bg-seconde px-4 py-2 text-white text-base font-[600] rounded-md hover:bg-gradient-to-b from-[#0000000f] to-[#fe2c55] no-underline login__header-hover"
                        >
                            Đăng nhập
                        </Link>
                    )}

                    <HeadlessTippy
                        interactive
                        render={(attrs) => (
                            <div className="w-[216px]" tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    {' '}
                                    <div className="flex flex-col items-center">
                                        <ShareIcon className="w-[116px] h-[100px]" />
                                        <p className="mt-2 text-base font-bold leading-5 text-center text-blackColor">
                                            Ứng dụng TikTok cho máy tính
                                        </p>
                                        <button className="border-0 text-white bg-seconde m-w-[168px] max-h-12 flex items-center justify-center py-1 px-3 w-full h-12 cursor-pointer text-sm font-bold mt-5 hover:opacity-90">
                                            Tải Về
                                        </button>
                                    </div>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div>
                            <DownloadIcon className="cursor-pointer" width="32px" height="32px" />
                        </div>
                    </HeadlessTippy>
                    {isLogin ? (
                        <div className="flex items-center gap-3">
                            <Tippy content="Tin nhắn">
                                <div className="cursor-propointer">
                                    <MessageIcon width="32px" height="32px" />
                                </div>
                            </Tippy>
                            <Tippy content="Hộp thư">
                                <div className="cursor-pointer">
                                    <NofiIcon width="32px" height="32px" />
                                </div>
                            </Tippy>
                            <MenuItem items={userMenu} onChange={handleMenuChange}>
                                <div className="w-10 h-10 cursor-pointer">
                                    <Image
                                        className="object-cover w-full h-full rounded-full"
                                        src="https://dwww.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg"
                                        alt="avatar"
                                        fallBack="https://img.pikbest.com/png-images/qiantu/cute-cartoon-avatar-fat-boy-eating-watermelon-element_2514723.png!sw800"
                                    />
                                </div>
                            </MenuItem>
                        </div>
                    ) : (
                        <MenuItem items={MENU_ITEM} onChange={handleMenuChange}>
                            <FontAwesomeIcon icon={faEllipsisVertical} className="p-2 text-2xl cursor-pointer" />
                        </MenuItem>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
