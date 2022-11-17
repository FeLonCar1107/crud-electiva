import React from 'react'
import { Link } from 'react-router-dom';
import MoviesTable from '../components/MoviesTable'

const movies = () => {
  return (
    <div>
      <h1 className='text-center' style={{ padding: '30px 0px 30px 0px', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>CRUD ELECTIVA1 UM</h1>
      <div className="d-flex justify-content-between align-items-center">
        <h3 style={{ padding: '25px 50px 25px 50px' }}>Inventario de peliculas</h3>
        <Link style={{ position: 'absolute', right: '70px', top: '145px' }}to = "/add-movie" className='btn bg-secondary text-white mt-3'>Añadir pelicula</Link>
      </div>
      <MoviesTable />
    </div>
  )
}

export default movies;