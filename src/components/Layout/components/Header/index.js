import { faEllipsisVertical, faMagnifyingGlass, faPlus, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DownloadIcon, Logo, MessageIcon, uploadIcon } from '~/components/Icons';

function Header() {
    return (
        <div className="border-b border-[1px] shadow-sm h-[60px] flex items-center">
            <div className="container mx-auto flex items-center justify-between">
                <div className="fill-black">
                    <Logo />
                </div>
                <div className="search__header">
                    <input
                        className="flex-1 bg-transparent text-blackColor caret-seconde w-full text-16 font-[400] border-0 outline-0 py-[12px]"
                        type="text"
                        placeholder="Tìm Kiếm"
                        spellCheck={false}
                    />
                    <button className="icon__header-clear">
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <button className="icon__header-loading">
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                    <span className="w-[1px] h-[28px] my-[9px] mx-0 bg-textSecond"></span>

                    <button className="w-[52px] h-full text-text text-20 rounded-tr-[92px] rounded-br-[92px] hover:bg-textSecond">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className="flex items-center gap-3 relative">
                    <button className="border px-4 py-2 text-16 font-[600] text-blackColor rounded-[2px] hover:bg-[#16182308]">
                        <FontAwesomeIcon icon={faPlus} className="text-16 text-blackColor font-bold me-3" />
                        Tải lên
                    </button>
                    <button className="bg-seconde px-4 py-2 text-white text-16 font-[600] rounded-[4px] login__header-hover">
                        Đăng nhập
                    </button>
                    <DownloadIcon />
                    <FontAwesomeIcon icon={faEllipsisVertical} className="text-[24px] cursor-pointer ms-6" />
                </div>
            </div>
        </div>
    );
}

export default Header;
