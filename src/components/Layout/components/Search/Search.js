import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useEffect, useRef, useState } from 'react';
import { faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import * as httpRequest from '~/api/httpRequest';
import { useDebounce } from '~/hook';

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);
    const inputRef = useRef();

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        const fetchApi = async () => {
            try {
                const result = await httpRequest.get(`users/search?q=${encodeURIComponent(debounce)}&type=less`);
                // console.log(result);
                setSearchResult(result.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, [debounce]);

    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            // visible={false}
            render={(attrs) => (
                <div className="w-[500px]" tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className="py-[5px] px-3 h-7 font-[600] leading-4 text-[#16182380] text-lg">Account</h4>
                        {searchResult.map((account) => (
                            <AccountItem data={account} key={account.id} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className="search__header">
                <input
                    className="flex-1 bg-transparent text-blackColor caret-seconde w-full text-base font-normal border-0 outline-0 py-3"
                    type="text"
                    ref={inputRef}
                    onChange={handleChange}
                    value={searchValue}
                    placeholder="Tìm Kiếm"
                    spellCheck={false}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button
                        className="icon__header-clear"
                        onClick={() => {
                            setSearchValue('');
                            inputRef.current.focus();
                            setSearchResult([]);
                        }}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                )}

                {loading && (
                    <button className="icon__header-loading">
                        <FontAwesomeIcon className="animate-spin" icon={faSpinner} />
                    </button>
                )}
                <span className="w-[1px] h-7 my-[9px] mx-0 bg-textSecond"></span>

                <button className="w-[52px] h-full text-text text-xl rounded-tr-[92px] rounded-br-[92px] hover:bg-textSecond">
                    <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleSubmit} />
                </button>
            </div>
        </HeadlessTippy>
    );
}
