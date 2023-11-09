import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const defaultFN = () => {};
export default function MenuItem({ children, items = [], hideOnClick = false, onChange = defaultFN }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    return (
        <HeadlessTippy
            offset={[30, 15]}
            interactive
            hideOnClick
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className="w-[266px]" tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {current.data.map((item, index) => {
                            const isParent = !!item.children;
                            let link = '';
                            if (item.to) {
                                link = item.to;
                            }
                            // const className = ;

                            return (
                                <Link
                                    to={link}
                                    key={index}
                                    className="flex flex-column py-3 ps-[16px] pe-[8px] w-full no-underline text-blackColor hover:bg-hoverColor hover:text-blackColor last:border-t"
                                    onClick={() => {
                                        if (isParent) {
                                            setHistory((prev) => [...prev, item.children]);
                                        } else {
                                            onChange(item);
                                        }
                                    }}
                                >
                                    <div className="flex items-center gap-3">
                                        {item.icon && <div className="w-[20px] h-[20px]">{item.icon}</div>}
                                        <p className="text-16 font-[600] leading-5">{item.title}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </HeadlessTippy>
    );
}
