import React from 'react';
import {ReactComponent as BackArrow} from '../../assets/icons/backArrow.svg';
import {Link} from 'react-router-dom';

function Page404() {
    return (
        <div className="text-center mt-5">
            <h1>Error 404 </h1>
            <h1>Pagina nu a fost gasita...</h1>
            <h5>Spre pagina principala</h5>
            <Link to='/'>
                <BackArrow/>
            </Link>   
        </div>
    );
}

export default Page404;