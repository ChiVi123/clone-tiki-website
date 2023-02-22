import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProgramTiki } from "../../app/features/productSlice";
import { ExternalLink } from "react-external-link";

const HomeService = () => {
  const dispatch = useDispatch();
  const { programs } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProgramTiki());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-full bg-bgHome">
      <div className="flex justify-between w-full py-4 my-3 text-center bg-white gap-x-3 mx-44">
        <div className="flex justify-between w-full text-center">
          {programs &&
            programs.map((program) => (
              <ExternalLink
                as="a"
                href={program.url}
                target="_blank"
                className="flex flex-col items-center flex-shrink-0 "
                key={program.title}
              >
                <img
                  src={program.image_url}
                  alt=""
                  className="object-contain w-12 h-12"
                />
                <span className="w-20 mt-3 overflow-hidden text-xs font-normal text-ellipsis">
                  {program.title}
                </span>
              </ExternalLink>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeService;
