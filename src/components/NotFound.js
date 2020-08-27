import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = ()=> (
    <div>
        Page not found 404
        <p> <Link to='./client'> go to the main page </Link> </p>
    </div>
)
export default NotFound;