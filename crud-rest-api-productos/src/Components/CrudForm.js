import React, { useState, useEffect } from 'react'


const initialForm = {
      nombre: "",
      contenido: "",
      peso: [],
      color: "",
      cantidad: [],
      descripcion: "",
      id: null,
};



const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    const [form, setForm] = useState(initialForm);

    useEffect(()=>{
      if(dataToEdit) {
        setForm(dataToEdit);
      }else {
        setForm(initialForm);
      }
    },[dataToEdit]);

    const handleChange =(e) => {
      setForm({
        ...form,
        [e.target.name]:e.target.value,
      });
    };

    const handleSubmit =(e) => {
      e.preventDefault();
      if (!form.nombre || !form.contenido || !form.peso || !form.color || !form.cantidad || !form.descripcion) {
        alert("Datos incompletos");
        return;
      }if (form.id === null) {
        createData(form);
      } else {
        updateData(form);
      } 
      
       
      handleReset(e) 
    };

    const handleReset =(e) => {
      setForm(initialForm)
      setDataToEdit(null);
    };

    

  return (
    
    <div className='mr-10 ml-10 flex  justify-center'>
    

    <div className='w-full max-w-3xl bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
    <form onSubmit={handleSubmit}>
         {/* <div className="ml-5 mr-5 mb-6 mt-5">
        <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Id Producto</label>
        <input type="number" name='id' onChange={handleChange} value={form['id']} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder='Id'/>
        </div>   */}

        <div className="ml-5 mr-5 mb-6 mt-5">
        <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre Producto</label>
        <input type="text" name='nombre' onChange={handleChange} value={form['nombre']} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder='Nombre' />
        </div>

        <div className="ml-5 mr-5 mb-6">
        <label htmlFor="contenido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contenido Producto</label>
        <input type="text" name='contenido' placeholder='Contenido' onChange={handleChange} value={form['contenido']} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

        <div className="mb-6 ml-5 mr-5">
        <label htmlFor="peso" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Peso Producto</label>
        <input type="number" name='peso' placeholder='Peso' onChange={handleChange} value={form['peso']} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <div className="mb-6 ml-5 mr-5">
        <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color Producto</label>
        <input type="text" name='color' placeholder='Color'  onChange={handleChange} value={form['color']} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

        <div className="mb-6 ml-5 mr-5">
        <label htmlFor="cantidad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad Producto</label>
        <input type="number" name='cantidad' placeholder='Cantidad' onChange={handleChange} value={form['cantidad']} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <div className="mb-6 ml-5 mr-5">
        <label htmlFor="descripcion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion Producto</label>
        <input type="text" name='descripcion' placeholder='Descripcion'  onChange={handleChange} value={form['descripcion']} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

       <div className='mb-4 text-center'>
       <input  type="submit"  value="Enviar"  className="mr-1  inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"/>
        <input type="reset" value="Limpiar" onClick={handleReset}  className="ml-1 inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:bg-red-500 focus:ring-offset-2" />
       </div>
    </form>
    </div>


    </div>
    
  )
}

export default CrudForm

