import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';


function ViewPaste() {

  const {p} = useParams();
  const allPaste=useSelector((state)=>state.paste.pastes) 

  const paste=allPaste.filter((p)=>
    p._id===id
  )[0];
  return (
    <div>
        <div className='flex flex-row gap-7 place-content-between'>
      <input
        className='p-2 rounded-2xl mt-2 w-[66%] pl-4'
        type='text'
        placeholder='Enter Title Here'
        value={paste.title}
        disabled
        onChange={(e)=>setTitle(e.target.value)}
        />
        {/* <button 
        onClick={createPaste}
        className='p-2 rounded-2xl mt-2'>
           {
                pasteId ? "Update My Paste":
                "Create My Paste"
          }
        </button > */}
      </div>
      <div className='mt-8'>
        <textarea 
        className="rounded-2xl mt-4 min-w-[500px] p-4"
        value={paste.content} 
        placeholder='Enter Content Here'
        disabled
        onChange={(e)=>setValue(e.target.value)}
        >
        rows={200}
        
            
        </textarea>
      </div>
    </div>
  )
}

export default ViewPaste