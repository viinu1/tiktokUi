import React from 'react';

export default function Wrapper({ children }) {
    return (
        <div className="bg-white rounded-lg w-full shadow-popper max-h-128 min-h-[100px] pt-2  overflow-y-auto">
            {children}
        </div>
    );
}
