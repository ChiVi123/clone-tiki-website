import clsx from "clsx";
import { NavLink } from "react-router-dom";

function NavButton({ data, clicked, setClick }) {
    return (<li className={clsx('w-full', 'h-[7.5rem]',
        'first:border-t-[.031rem]', 'border-b-[0.031rem]',
        'border-[#B3B3B3]', 'hover:bg-gray-200', {
        'border-r-2': clicked,
        'border-r-black': clicked,
        'bg-gray-200': clicked
    })}>
        <NavLink
            className={clsx('w-full', 'h-full', 'flex',
                'flex-col', 'items-center', 'justify-center')}
            to={data.link}
            onClick={setClick}
        >
            <div>
                <svg
                    className={clsx('w-10', 'h-10', 'text-gray-600', 'hover:text-gray-800')}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={data.dPath}
                    />
                </svg>
            </div>
            <div className={clsx('font-semibold', 'not-italic',
                'text-[1.25rem]', 'leading-6')}>
                {data.content}
            </div>
        </NavLink>
    </li>);
};

export default NavButton;