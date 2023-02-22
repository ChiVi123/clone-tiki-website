import clsx from 'clsx';
import { ButtonSearch } from "../button_order";
import React from "react";

function SearchOrder() {
    return (<div
        className={clsx('h-12',
            'md:w-[15.438rem]',
            'lg:w-[50rem]',
            'rounded-full',
            'flex',
            'overflow-hidden',
            'shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
            '',)} >
        <ButtonSearch />
        <input
            className={clsx('hidden', 'md:block', 'flex-1', 'py-2',
                'px-2', 'focus:outline-none', 'rounded-r-full')}
            placeholder="Search here..."
            type="text" />
                <div className="bg-white flex flex-col w-full justify-center absolute mt-10 tracking-normal">
        </div>
    </div>);
};

export default SearchOrder;