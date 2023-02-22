import SliderImage from "./components_listorder_today/SliderImage";
import SliderNoFound from "./components_listorder_today/SliderNoFound";
import { SLIDERIMAGE } from "./constrainSlider";
import axios from "axios";
import React, { useState } from "react";

function ListSlider() {
  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:3000/uploadFile";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <div className="px-4 py-8 lg:px-9">
      <div className="pb-10">
        <div>
          <span className="absolute float-left pt-1 pl-4 text-2xl font-bold">
            Shop Slider Images
          </span>
        </div>
        {/* <div className='relative float-right pr-4'>
                    <ButtonExit />
                </div> */}
      </div>
      <hr className="border-orange-500 w" />
      <div className="flex mt-2 mb-3" onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleChange}
          className="h-10 w-[25rem] mr-3 text-black text-lg font-semibold  flex items-center justify-center hover:opacity-80 active:h-9"
        />

        <button
          type="submit"
          className="h-10 w-[10rem] text-white text-lg rounded-xl font-semibold bg-green-500 flex items-center justify-center hover:opacity-80 active:h-9"
        >
          <span>Upload File</span>
        </button>
      </div>
      <div className="pb-2 font-bold text-center">
        <span>Silder Images</span>
      </div>
      <table className="w-full border-collapse">
        <tbody>
          {SLIDERIMAGE.length === 0 ? (
            <SliderNoFound />
          ) : (
            SLIDERIMAGE.map((sliders, index) => (
              <SliderImage key={index} slider={sliders} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListSlider;
