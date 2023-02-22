function IconFilter() {
    // const sortOptions = ["name", "address", "price", "product"]
    return (
        <div className="flex">
            <svg
                className="w-6 h-6 md:mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 
                3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 
                4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 
                0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 
                2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 
                1 0 011-1z" />
            </svg>
            {/* <select
                className="w-full"
                onChange={handleSort}
                value={sortValue}
            >
                <option>
                    {sortOptions.map((item, index) => (
                        <option value={item} key={index}>
                            {item}
                        </option>
                    ))}
                </option>
            </select> */}
        </div>    
    );

};

export default IconFilter;