import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Header({ title, onBack }) {
    return (
        <header className="relative h-[42px]">
            <button onClick={onBack} className="h-full w-[42px] bg-transparent cursor-pointer">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{title}</h4>
        </header>
    );
}
