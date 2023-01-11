import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({data, setDataToEdit, deleteData}) => {

   
   
  return (
    <div className='mb-8 mt-10 flex  justify-center w-full '>
      

     <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
     <div className='text-3xl font-extrabold'>
     <h3 className='text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Tabla de Datos</h3>
     </div>
     <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-center text-xs text-gray-50 uppercase  bg-gray-700 dark:text-gray-400'>
            <tr>
                <th scope="col" className="py-3 px-6">Id</th>
                <th scope="col" className="py-3 px-6">Nombre</th>
                <th scope="col" className="py-3 px-6">Contenido</th>
                <th scope="col" className="py-3 px-6">Peso</th>
                <th scope="col" className="py-3 px-6">Color</th>
                <th scope="col" className="py-3 px-6">Cantidad</th>
                <th scope="col" className="py-3 px-6">Descripcion</th>
                <th scope="col" className="py-3 px-6">Acción</th> 
            </tr>
        </thead>

        <tbody>
         {data.length > 0 ? (
          data.map((el) => (
          <CrudTableRow 
          key={el.id} 
          el={el} 
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
          />
          ))
         ):(
          <tr className='bg-white border-b dark:bg-gray-900 dark:border-gray-700' >
          <td className="text-center py-4 px-6" colSpan={8}>NO HAY DATOS EN LA TABLA</td>
          </tr>
         )}
        </tbody>
      </table>
     </div>
    </div>
  )
}

export default CrudTable

