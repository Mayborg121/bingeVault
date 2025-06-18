import React, { useState, useEffect } from 'react';
import './App.css';

import MovieCard from './MovieCard';

//53d38b1

const API_URL ="https://omdbapi.com?apikey=53d38b1";

const App = () => {

    const [Movies, setMovie] = useState([0]);
    const [SearchTerm, setSearchTerm] = useState('');

    const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovie(data.Search);
    }

    useEffect(() =>{
        searchMovies("Superman");
    }, []);

    return(
        <div className = "app">
            <h1>BingeVault.</h1>
            <h4>Lights. Camera. Discover.</h4>
            <div className='search'>
                <input 
                placeholder='Search your movie'
                value={SearchTerm}
                onChange={(e) =>  setSearchTerm(e.target.value)}
                />
                <img 
                src='https://gist.githubusercontent.com/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg'
                alt='Search button'
                onClick= {() => searchMovies(SearchTerm)}
                />
        </div>

            {
                Movies?.length > 0 ?
                (
                    <div className='container'>
                        {
                            Movies.map((movie) => (
                                    <MovieCard movie1 = {movie}/>
                            ))
                        }
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>Sorry, No Movies Found</h2>
                    </div>
                )
            }

        </div>
    );
}

export default App;