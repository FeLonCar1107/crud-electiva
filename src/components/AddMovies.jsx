import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MovieServices from '../services/movieServices';
import { Link } from 'react-router-dom';

const AddMovies = () => {

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [year, setYear] = useState('');
  const navigate = useNavigate();
  const {movieId} = useParams();

  const saveOrUpdateMovie = (e) => {
    e.preventDefault();

    const movie = {name, type, year}

    if(movieId){
      MovieServices.updateMovie(movieId, movie).then((response) =>{
        navigate("/crud");
      }).catch(error =>{
        console.log(error);
      })
    }else{
      MovieServices.createMovie(movie).then((response) =>{
        console.log(response.data);
        navigate("/crud");
  
      }).catch(error => {
        console.log(error);
      })
    }
  }

  useEffect(() => {
    MovieServices.getMovieById(movieId).then((response) =>{
      setName(response.data.name)
      setType(response.data.type)
      setYear(response.data.year)
    }).catch(error => {
      console.log(error)
    })
  },[])

  const title = () => {
    if(movieId){
      return <h2 className='text-center'>Actualizar pelicula</h2>
    }else{
      return <h2 className='text-center'>Añadir pelicula</h2>
    }
  }

  return (
      <div className="row mt-3">
        <div className='card border-0 w-75 shadow mx-auto px-2 py-4'>
         {title()}
          <div className='card-body'>
            <form>
                <div className='form-group py-1 d-flex flex-column justify-content-around'>
                  <label className='form-label'>Nombre</label>
                  <input 
                    className='p-2'
                    type="text" 
                    placeholder="Ingresa la pelicula"
                    name="NombrePelicula"
                    value={name}
                    onChange={(e) => setName(e.target.value)}>
                  </input>
                </div>
              <div className='row'>
                <div className='form-group mb-2 d-flex flex-column justify-content-around col-sm-6 py-1'>
                  <label className='form-label'>Genero</label>
                  <input 
                    className='p-2'
                    type="text" 
                    placeholder="Ingresa el tipo de pelicula"
                    name="TypeMovie"
                    value={type}
                    onChange={(e) => setType(e.target.value)}>
                  </input>
                </div>
              </div>

              <div className='row'>
                <div className='form-group mb-2 d-flex flex-column justify-content-around col-sm-6 py-1'>
                  <label className='form-label'>Año</label>
                  <input 
                    className='p-2'
                    type="text" 
                    placeholder="Ingresa año"
                    name="AñoPelicula"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}>
                  </input>
                </div>
              </div>

              <div className='d-flex justify-content-between'>
                <Link style={{ width: '410px' }} to="/crud" className='btn btn-danger mt-3 p-2'>Cancelar</Link>
                <button style={{ width: '410px' }} className='btn btn-success mt-3 p-2' onClick={(e) => saveOrUpdateMovie(e)}>{ movieId ? 'Actualizar' : 'Agregar'}</button>
              </div>

            </form>
          </div>
        </div>
    </div>
  )
}

export default AddMovies;
