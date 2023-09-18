import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from "./seach.svg";
import MovieCard from "./MovieCard";


const API_URL='http://www.omdbapi.com?apikey=99a785e9'

const App=()=>{
        const [movies,setMovies]=useState([]);
        const [searchTerm,setSearchTerm]=useState();
        const searchMovies=async(title)=>{
            const response=await fetch(`${API_URL}&s=${title}`);
            const data=await response.json();

           setMovies(data.Search);
        }
        useEffect(() => {
        searchMovies('Spiderman')
        }, [])
    return (
        <div className="app">
        <h1>Movie-Mafia</h1>

        <div className="search">
            <input placeholder="Search for movies" value={searchTerm} 
            onChange={(e)=>{setSearchTerm(e.target.value)}}/>
            <img src={SearchIcon} alt="search" 
            onClick={()=>{searchMovies(searchTerm)}}/>
        </div>

        {
            movies?.length>0
            ?(<div className="container">

            {movies.map((movie)=>(
                <MovieCard movie={movie}/>
            ))}
     
             </div>)
            :(
                <div className="empty">
                    <h2>No Movies found</h2>
                </div>
            )
        }
        </div>
    );
}

export default App;