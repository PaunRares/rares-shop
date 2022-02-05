import React from 'react';
import {Link} from 'react-router-dom';
import './HomeCategory.css';

function HomeCategory(props) {
    const {route, name, description, image} = props;

    return(
        <div className="HomeCategory col-12 col-md-6 my-3">
            <Link to={`/category/${route}`} className="text-decoration">
                <div 
                    style={{backgroundImage: `url('${image}')`}} 
                    className="ImageContainer w-100"
                >
                </div>
                <h2 className="h4 my-1"><strong>{name}:</strong></h2>
                <p className="m-0">{description}</p>
            </Link>
        </div>
    );
}

export default HomeCategory;