import { lightGreen } from "@material-ui/core/colors";
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/all.js";
import fakeUserData from "../../api";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  removeUser,
  deleteUser,
} from "../../tookitstore/slice/UserSlice";

const Todolist = () => {
  const [inputData, setInputData] = useState("");
  const dispetch = useDispatch();
  const username = useSelector((state) => {
    return state.users;
  });

  const addNewUser = (data) => {
    dispetch(addUser(data));
  };

  const deleteOneUser = (id) => {
    dispetch(removeUser(id));
  };

  const deleteAllData = () => {
    dispetch(deleteUser());
  };

  return (
    <div className="container w-full mx-auto h-screen pt-[100px] ">
      <div className="relative max-w-[250px] mx-auto text-[20px] text-center ">
        <p className="pb-[8px] text-white">Add Your List Here ✍️</p>
        {/* <input
          onChange={(e) => setInputData(e.target.value)}
          value={inputData}
          className="outline-0 w-[250px]  h-[35px] pl-[6px] text-base rounded-lg font-semibold"
          type="text"
          placeholder="✍️Add Item"
        /> */}
        {/* <button
          onClick={() => addNewUser(fakeUserData())}
          className="absolute top-[43px] right-[10px] cursor-pointer"
        >
          <FcPlus className="text-[1.5rem]" />
        </button> */}
        <button
          onClick={() => addNewUser(fakeUserData())}
          className="text-black font-semibold rounded-lg cursor-pointer bg-[#3ab7bf] hover:text-white px-[20px] py-[5px] hover:bg-sky-700"
        >
          Rendom User Name
        </button>
      </div>
      {username.map((item, index) => {
        return (
          <div
            key={index}
            className="relative max-w-[250px] mx-auto text-[20px]"
          >
            <h3 className="hover:bg-sky-500 hover:text-white bg-white pl-3 text-left p-[5px] mt-5 outline-0 w-[250px]  h-[35px] pl-[6px] text-base rounded-lg font-semibold">
              {item}
            </h3>
            <button
              onClick={() => deleteOneUser(index)}
              className="absolute top-[5px] right-[10px] cursor-pointer"
            >
              <MdDeleteForever className="text-[1.5rem] delete-icon text-red-700" />
            </button>
          </div>
        );
      })}

      <div className="relative max-w-[250px] mx-auto text-center mt-5 text-[20px]">
        <button
          onClick={() => deleteAllData()}
          className="text-black font-semibold rounded-lg cursor-pointer bg-[#3ab7bf] hover:text-white px-[20px] py-[5px] hover:bg-sky-700"
        >
          Check List
        </button>
      </div>
    </div>
  );
};

export default Todolist;
