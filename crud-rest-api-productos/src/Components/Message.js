import React from 'react'

const Message = ({msg}) => {

  return (
<div className='  flex justify-center mt-28 text-center'>
<div id="toast-danger" className=" flex  items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-red-700 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div className=" inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span className="sr-only">Error icon</span>
    </div>
    <div className=" ml-4 text-2xl font-bold text-white">{msg}</div>
    
</div>
</div>

    
  )
}

export default Message