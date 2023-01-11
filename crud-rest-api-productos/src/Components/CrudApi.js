import React, {useState , useEffect} from 'react'
import { helpHttp } from '../Helpers/helpHttp';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

         let  api = helpHttp();
         let  url = "http://localhost:5000/productos";

         useEffect(()=> {
          setLoading(true);
          helpHttp()
          .Get(url)
          .then((res) => {
           //console.log(res);
           if(!res.err) {
            setDb(res);
            setError(null);
           }else {
            setDb(null);
            setError(res);
           }

           setLoading(false);
          });
         },[url]);

   

    const createData =(data) => {
      data.id = Date.now();
      //console.log(data)

      let options = {
        body: data,
        headers:{"content-type":"application/json"},
      };

      api.Post(url,options)
      .then((res) => {
      console.log(res);
        if(!res.err) {
          setDb([...db, res]);
        }else {
          setError(res);
        }
    });
    };

    const updateData =(data) => {
      let endpoint = `${url}/${data.id}`;
      console.log(endpoint)
      //let newData = db.map(el => el.id === data.id ? data:el)
      //setDb(newData);

      let options = {
        body:data,
        headers:{ "content-type":"application/json"},
      };
      
      api.Put(endpoint, options).then((res) => {
      //console.log(res);
        if(!res.err) {
          let newData = db.map((el) => (el.id === data.id ? data : el));
          //setDb([...db, res]);
          setDb(newData);
        }else {
          setError(res);
        }
    });
    };

    const deleteData =(id) => {
      let isDelete =window.confirm(`¿Estás seguro de eliminar el registro con id # `+ id +` ?`);

      if(isDelete) {
        let endpoint = `${url}/${id}`;
        let options = {
          headers:{ "content-type":"application/json"},
        };
        api.Delete(endpoint, options).then(res => {
          //console.log(res);
        if(!res.err) {
          let newData = db.filter((el) => el.id !== id)
          setDb(newData)
        }else {
          setError(res);
        }
        })
        
      }else {
        return;
      }

    };



  return (
    <div>
        <div className='flex justify-center mb-4'>
        <h2 className='text-center w-3/6 text-lg text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-5 py-2.5  mr-2  mt-4 '>{dataToEdit?"EDITAR PRODUCTO":"AGREGAR PRODUCTO"}</h2>
        </div>

        <CrudForm
        createData={createData}
         updateData={updateData} 
         dataToEdit={dataToEdit}
         setDataToEdit={setDataToEdit}/>
         {loading&& <Loader/>}
         {error&& <Message msg={`Error ${error.status} ${error.statusText}`}/> }
         {db&& <CrudTable  data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}/>}
        
    </div>
  )
    
  
}

export default CrudApi