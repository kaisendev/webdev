import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
    return ( 
            <div className="notfound">
                <h1>404 Page not found.</h1>
                <Link to="/">Back to home </Link>
            </div>
     );
}
 
export default NotFound;