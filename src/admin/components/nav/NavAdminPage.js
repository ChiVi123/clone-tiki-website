import clsx from "clsx";
import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";

import { ADMIN_CONTEXT } from "../usecontext";
import { NavButton } from './navbutton';
import { NAV_BUTTONS } from './constraint';

function NavAdminPage() {
    const [actived, setActived] =
        useState(useLocation().pathname.split('/')[2]);
    const { toggleNav } = useContext(ADMIN_CONTEXT);

    const handleClick = (pathName) => {
        setActived(pathName);
    };

    //'overflow-auto',
    return (<nav
        className={clsx('w-[13.125rem]',
            'bg-white',
            'shadow-[4px_4px_4px_rgba(0,0,0,0.25)]',
            'hidden', {
            'md:block': toggleNav
        })}>
        <ul>{NAV_BUTTONS.map((item, index) => (
            <NavButton
                key={index}
                clicked={(item.link || undefined) === actived}
                data={item}
                setClick={() => {
                    handleClick(item.link || undefined);
                }}
            />)
        )}</ul>
    </nav>);
};

export default NavAdminPage;