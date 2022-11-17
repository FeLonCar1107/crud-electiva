import { Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import MovieService from '../services/movieServices';
import { Link } from 'react-router-dom';

const MoviesTable = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies();
  },[]);

  const getAllMovies = () => {
    MovieService.getAllMovies().then((response) =>{
      setMovies(response.data)
      console.log(response.data)
    }).catch(error => {
      console.log(error);
    })
  }

  const deleteMovie = (movieId) => {
    MovieService.deleteMovie(movieId).then((response) =>{
      getAllMovies();
    }).catch(error =>{
      console.log(error);
    })
  }

  return (
    <div style={{ padding: '0px 50px 0px 50px' }}>
      <Table striped bordered hover>
        <thead>
            <tr className='text-center'>
              <th>Movie id</th>
              <th>Name</th>
              <th>Genero</th>
              <th>Year</th>
              <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
          {(
              movies.map( movie =>
                <tr className='text-center' key={movie.id}>
                  <td>{movie._id}</td>
                  <td>{movie.name}</td>
                  <td>{movie.type}</td>
                  <td>{movie.year}</td>
                  <td>
                    <div className='d-flex justify-content-around'>
                      <Link style={{ backgroundColor: '#FFB900' }} className='btn text-white' to={`/update-movie/${movie._id}`}>Actualizar</Link>
                      <button className='btn btn-danger' onClick={() => deleteMovie(movie._id)}>Eliminar</button>
                    </div>
                  </td>
                </tr>
              )
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default MoviesTable;
