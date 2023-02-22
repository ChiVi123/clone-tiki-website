import React, { useEffect, useRef } from "react";

import { NoFound, Table, TableHead, WrapperList } from "../components";
import { Sample } from "./components_list_category";
const TABLE_HEADER = [
  "id",
  "Name",
  "Url",
  "Created at",
  "Updated at",
  "Actions",
];

export default function ListCategories({ CATEGORIES, setCheck, check, isTop }) {
  const handleCheck = () => {
    setCheck(!check);
  };
  const topRef = useRef();
  const bottomRef = useRef();
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
        <TableHead head={TABLE_HEADER} />
        <tbody>
          {/* Ternary Operator */}
          {CATEGORIES.length === 0 ? (
            <NoFound context={"No product found"} setColSpan={"10"} />
          ) : (
            CATEGORIES.map((category, index) => (
              <Sample key={index} category={category} setCheck={handleCheck} />
            ))
          )}
        </tbody>
      </Table>
      <div ref={bottomRef}></div>
    </WrapperList>
  );
}
