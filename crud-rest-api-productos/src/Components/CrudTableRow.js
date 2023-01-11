import React from 'react'

const CrudTableRow =({el, setDataToEdit, deleteData}) =>{
  let {nombre, contenido, peso, color, cantidad,  descripcion ,id} = el;

  return (
    <tr className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
     <th className='scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{id}</th>
     <td className='py-4 px-6'>{nombre}</td>
     <td className='py-4 px-6'>{contenido}</td>
     <td className='py-4 px-6'>{peso}</td>
     <td className='py-4 px-6'>{color}</td>
     <td className='py-4 px-6'>{cantidad}</td>
     <td className='py-4 px-6'>{descripcion}</td>


    <td className='py-4 px-6'>
      <button onClick={() => setDataToEdit(el)} className="mr-1 mb-1 w-16 inline-flex justify-center rounded-md border border-transparent bg-lime-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2">Editar</button>
      <button onClick={() => deleteData(id)} className="mt-1 w-16  inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Eliminar</button>
    </td>
    </tr>
  )
}

export default CrudTableRow

