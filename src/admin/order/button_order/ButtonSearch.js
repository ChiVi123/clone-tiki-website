import clsx from 'clsx';

function ButtonSearch() {
    return (<button
        className={clsx('md:w-16', 'md:p-1', 'px-1.5', 'text-gray',
            'bg-[#060606]', 'flex', 'items-center', 'justify-center',
            'hover:opacity-75')}
    >
        <svg
            className="rounded-l-full w-9 h-9"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 
              6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 
              1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
            />
        </svg>
    </button>);
};

export default ButtonSearch;