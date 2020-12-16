import * as React from 'react';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';

export interface IBlog {
    blogid: number,
    tagname: string,
    tagid: number,
    name: string,
    email: string,
	authorid: number,
	title: string,
	body: string,
	publishdate: string,
	created: string;
}

export interface IBlogParams {
    id: string;
}

const Blog = (props: AppProps) => {
    const { id } = useParams<IBlogParams>();
    const [blog, setBlog] = React.useState<IBlog>();

	React.useEffect(() => {
		(async () => {
			try {
				const res = await fetch('/api/blogs/' + id);
                const blog = await res.json();
                setBlog(blog[0]);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

    if(blog === undefined) {
        return <>Loading...</>;
    } else {
        return (
            <>
            <div className="d-flex justify-content-center align-items-center">
                {
                        <article key={blog.blogid} className="card m-2 border-dark shadow" style={{width: '100%'}}>
                            <h3 className="card-title m-1">{blog.title}</h3>
                            <p className="card-title m-1">Written by {blog.name} on {moment(blog.publishdate).utc().format('MM-DD-YYYY')}</p>
                            <div className="card-title m-1"><span className="badge badge-secondary">{blog.tagname}</span></div>
                            <p className="card-body">{blog.body}</p>
                            <div className="card-footer p-1 d-flex justify-content-around border-dark shadow-sm">
                                <Link to={'/'} className="btn btn-secondary border-dark shadow">Back</Link>
                                <Link to={`/edit/${blog.title}/${blog.blogid}`} className="btn btn-secondary border-dark shadow">Edit Blog</Link>
                            </div>
                        </article>
                    }
            </div>
            </>
        );
    }
}

interface AppProps {}

export default Blog;
