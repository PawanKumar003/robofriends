import React, { useState, useEffect } from "react";
import { FcPlus, FcFullTrash } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, removeAll } from "../../actions/Action";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.Reducer.list);

  return (
    <div className="container w-full mx-auto h-screen pt-[100px] ">
      <div className="relative max-w-[250px] mx-auto text-[20px] text-center ">
        <p className="pb-[8px] text-white">Add Your List Here ✍️</p>
        <input
          onChange={(e) => setInputData(e.target.value)}
          value={inputData}
          className="outline-0 w-[250px]  h-[35px] pl-[6px] text-base rounded-lg font-semibold"
          type="text"
          placeholder="✍️Add Item"
        />
        <button
          onClick={() => dispatch(addItem(inputData), setInputData(""))}
          className="absolute top-[43px] right-[10px] cursor-pointer"
        >
          <FcPlus className="text-[1.5rem]" />
        </button>
      </div>

      {list.map((elem) => {
        return (
          <div
            className="relative max-w-[250px] mx-auto text-[20px]"
            key={elem.id}
          >
            <h3 className="hover:bg-sky-500 hover:text-white bg-white pl-3 text-left p-[5px] mt-5 outline-0 w-[250px]  h-[35px] pl-[6px] text-base rounded-lg font-semibold">
              {elem.data}
            </h3>
            <button
              onClick={() => dispatch(deleteItem(elem.id), setInputData(""))}
              className="absolute top-[5px] right-[10px] cursor-pointer"
            >
              <FcFullTrash className="text-[1.5rem]" />
            </button>
          </div>
        );
      })}
      <div className="relative max-w-[250px] mx-auto text-center mt-5 text-[20px]">
        <button onClick={() => dispatch(removeAll())} className="text-black font-semibold rounded-lg cursor-pointer bg-[#3ab7bf] hover:text-white px-[20px] py-[5px] hover:bg-sky-700">Check List</button>
      </div>
    </div>
  );
};

export default Todo;
