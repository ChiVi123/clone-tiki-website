import clsx from 'clsx';

function Button({ children, content, onClick }) {
    return (<button
        onClick={onClick}
        className={clsx('h-12',
            'md:min-w-[7.5625rem]',
            'rounded-full',
            'text-gray',
            'text-sm',
            'font-semibold',
            'uppercase',
            'bg-[#060606]',
            'p-3',
            'md:py-1',
            'md:px-3',
            'flex',
            'items-center',
            'justify-center',
            'hover:opacity-80',
            'md:active:border-4',
            'md:active:border-slate-800')}
    >
        {children}
        <span className="hidden md:block pr-2">{content}</span>
    </button>);
};

export default Button;