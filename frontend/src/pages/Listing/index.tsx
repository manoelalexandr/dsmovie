import axios from "axios";
import MovieCard from "components/Navbar/MovieCard";
import Pagination from "components/Navbar/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movies";
import { BASE_URL } from "utils/requests";

function Linting() {

    const[pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=0`)
      .then(response => {
        const data = response.data as MoviePage;
        console.log(data);
        setPageNumber(data.number);
      });
    }, []);


    return (

        <>
        <p>{pageNumber}</p>
            <Pagination />

            <div className="container">

                <div className="row">

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                   
                </div>

            </div>



        </>
    )
}

export default Linting;