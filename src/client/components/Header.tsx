import * as React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = props => {

    return (
        <nav style={{width: '80vw;'}} className="card m-0 p-2 bg-info border-dark shadow">
            <div className="row">
                <div className="col-md-8 d-flex justify-content-start">
                    <h3 style={{display: "inline"}}>This is a Blog</h3>
                </div>
                <div className="col-md-4 d-flex justify-content-end">
                    <Link className="btn btn-secondary border-dark shadow mr-1" to="/">Blogs</Link>
                    <Link className="btn btn-secondary border-dark shadow" to="/blogs/add/">Add Blog</Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;