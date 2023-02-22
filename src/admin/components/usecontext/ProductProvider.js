import { useState } from "react";
import { productContext } from "./productContext";

function ProductProvider({ children }) {
    const [addModal, setAddModal] = useState(false);

    return (<productContext.Provider value={[addModal, setAddModal]}>
        {children}
    </productContext.Provider>);
};

export default ProductProvider;