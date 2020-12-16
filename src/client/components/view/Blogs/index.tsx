import * as React from 'react';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';

interface IBlogs {
    id: number,
	authorid: number,
	title: string,
	body: string,
	publishdate: string,
	created: string
}

interface IBlogsParams {
    title: string
}
const imgUrl = 'https://cdn.pixabay.com/photo/2016/02/25/16/57/blog-1222465_1280.jpg';

const Blogs = (props: AppProps) => {
	const [blogs, setBlogs] = React.useState<IBlogs[]>([]);

	React.useEffect(() => {
		(async () => {
			try {
				const res = await fetch('/api/blogs');
				const blogs = await res.json();
				setBlogs(blogs);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<>
		<div className="d-flex justify-content-center flex-wrap align-items-center">
			{blogs?.map(blog => {
				return (
					<article key={blog.id} className="card m-2 shadow" style={{width: '18rem'}}>
                        <img src={imgUrl} alt="" className="card-img-top"/>
						<h5 className="card-title m-1">{blog.title}</h5>
						<p className="card-text m-1">Published: {moment(blog.publishdate).utc().format('MM-DD-YYYY')}</p>
						<div className="card-footer p-1 d-flex justify-content-start"><Link to={`/blogs/${blog.title}/${blog.id}`} className="btn btn-secondary">View Blog</Link></div>
					</article>
				);
			})}
		</div>
		</>
	);
};

interface AppProps {}

export default Blogs;
