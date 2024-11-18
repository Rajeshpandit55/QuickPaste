import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";

function Paste() {
  const [searchTerm, setSearchTerm] = useState("");
  const pastes = useSelector((state) => state.paste.pastes);
  console.log(pastes);
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) => 
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleDelete = (id) => {
    dispatch(removeFromPastes(id));
  };

  return (
    <div>
      <input
        className="p-2 rounded-2xl min-w-[600px] mt-5"
        type="search"
        placeholder="Search here"
        value={setSearchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div className="border" key={paste?._id}>
                <div>{paste.title}</div>
                <div>{paste.content}</div>
                <div>
                  <button>
                   <a href={`/?pasteId=${paste?._Id}`}>
                   Edit
                   </a>
                    </button>
                  <button>
                    <a href={`/pastes/${paste?._id}`}>
                      view
                    </a>
                  </button>
                  <button onClick={()=>handleDelete(paste?._id)}>delete</button>
                  <button onClick={()=>{
                    navigator.clipboard.writeText(paste?.content)
                    toast.success("Copy to clipboard")
                  }}>copy</button>
                  <button>share</button>
                </div>
                <div>
                  {paste.createdAt}
                </div>
               
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Paste;
