import React from 'react';
import { useHistory, useParams, useLocation } from 'react-router';

function Movie() {

    const {id} = useParams();
    const {goBack} = useHistory();
    const {search} = useLocation();

    return (
        <div>
            <h1>Some movie with {id} {search}</h1>
            <button className="btn" onClick={goBack}>Go back</button>
        </div>
    );
}

export default Movie;