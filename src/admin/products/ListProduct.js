import { useEffect, useRef } from "react";

import { NoFound, Table, TableHead, WrapperList } from "../components";
import { Sample } from "./components_list_product";
import { TABLE_HEAD } from "./constraint";

function ListProduct({ products, isTop }) {
  const bottomRef = useRef();
  const topRef = useRef();

  useEffect(() => {
    if (isTop) {
      topRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    } else {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isTop]);

  return (
    <WrapperList>
      <div ref={topRef}></div>
      <Table>
        <TableHead head={TABLE_HEAD} />
        <tbody>
          {/* Ternary Operator */}
          {products.length === 0 ? (
            <NoFound context={"No product found"} setColSpan={"4"} />
          ) : (
            products.map((product, index) => (
              <Sample key={index} product={product} index={index} />
            ))
          )}
        </tbody>
      </Table>
      <div ref={bottomRef}></div>
    </WrapperList>
  );
}

export default ListProduct;
