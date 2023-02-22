function ProductImage({ img, name }) {
    return (<div className="min-w-[8rem] border border-[#dfd5d5] flex">
        <img
            className="h-[50%]"
            src={img}
            alt={name} />
    </div>);
};

export default ProductImage;