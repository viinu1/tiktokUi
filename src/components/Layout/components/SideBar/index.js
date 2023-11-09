import { faExplosion, faHome, faUser, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import SuggestUser from './SuggestUser';
import { useEffect, useState } from 'react';
import * as httpRequest from '~/api/httpRequest';

function SideBar() {
    const [suggest, setSuggest] = useState([]);

    useEffect(() => {
        try {
            const getSuggestUser = async () => {
                const res = await httpRequest.get('users/suggested?page=1&per_page=5');
                setSuggest(res.data);
            };
            getSuggestUser();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const active =
        'p-2 text-3xl text-seconde rounded-lg flex items-center justify-start gap-3 no-underline transition delay-200 ease-in hover:bg-gray-100 hover:text-seconde';
    const baseActive =
        'p-2 text-3xl text-blackColor rounded-lg flex items-center justify-start gap-3 no-underline transition delay-200 ease-in hover:bg-gray-100 hover:text-blackColor';

    return (
        <div className="mt-14 m-h-full w-[232px] fixed top-0 left-0 bottom-0 py-4 pl-2 mb-0 overflow-auto scrollBar">
            <div className="flex flex-col border-b">
                <NavLink to="/" className={({ isActive }) => (isActive ? active : baseActive)}>
                    <FontAwesomeIcon icon={faHome} className="w-8 h-8" />
                    <span className="text-lg font-bold ">Dành cho bạn</span>
                </NavLink>

                <NavLink to="/following" className={({ isActive }) => (isActive ? active : baseActive)}>
                    <FontAwesomeIcon icon={faUsers} className=" w-8 h-8" />
                    <span className="text-lg font-bold ">Đang Follow</span>
                </NavLink>

                <NavLink to="/explore" className={({ isActive }) => (isActive ? active : baseActive)}>
                    <FontAwesomeIcon icon={faExplosion} className=" w-8 h-8" />
                    <span className="text-lg font-bold ">Khám Phá</span>
                </NavLink>

                <NavLink to="/live" className={({ isActive }) => (isActive ? active : baseActive)}>
                    <FontAwesomeIcon icon={faVideo} className=" w-8 h-8" />
                    <span className="text-lg font-bold ">LIVE</span>
                </NavLink>
                <NavLink to="/live" className={({ isActive }) => (isActive ? active : baseActive)}>
                    <FontAwesomeIcon icon={faUser} className=" w-8 h-8" />
                    <span className="text-lg font-bold ">Hồ sơ</span>
                </NavLink>
            </div>
            <div className="p-3 border-b">
                <h5 className="text-base text-[#16182380]">
                    Đăng nhập để follow các tác giả, thích video và xem bình luận.
                </h5>
                <a
                    href="/"
                    className="w-full flex items-center justify-center text-lg text-seconde px-2 py-[6px] mt-7 border border-seconde rounded-lg hover:text-seconde hover:bg-[#fe2c5510]"
                >
                    Đăng nhập
                </a>
            </div>
            <SuggestUser title="Các tài khoản gợi ý" data={suggest} />
        </div>
    );
}

export default SideBar;
