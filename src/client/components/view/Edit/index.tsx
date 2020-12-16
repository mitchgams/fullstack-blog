import * as React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import FetchData from '../../FetchData';
import { IBlog, IBlogParams } from '../Blog';


interface ITag {
    blogid: number,
    id: number,
    name: string
}

const Edit = (props: AppProps) => {

    
    const history = useHistory();
    
    const [blog, setBlog] = React.useState<IBlog>();
    const { id } = useParams<IBlogParams>();
    const [authorList, setAuthorList] = React.useState<any[]>([]);
    const [tagList, setTagList] = React.useState<ITag[]>([]);
    const [author, setAuthor] = React.useState<number>();
    const [tag, setTag] = React.useState<number>();
    const [title, setTitle] = React.useState<string>('');
    const [body, setBody] = React.useState<string>('');

    React.useEffect(() => {
        (async() => {
            setAuthorList(await FetchData.getAuthors());
            setTagList(await FetchData.getTags());
        })();
        (async () => {
			try {
				const res = await fetch(`/api/blogs/${id}`);
                const blog = await res.json();
                setBody(blog[0].body);
                setTitle(blog[0].title);
                setAuthor(blog[0].authorid);
                setTag(blog[0].tagid);
                setBlog(blog[0]);
			} catch (error) {
				console.log(error);
			}
        })();
    }, []);

    const handlePut = async() => {
        const r: Response = await fetch('/blog/put/'+blog.blogid, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({blogid: blog.blogid, authorid: author, title: title, tagid: tag, body: body}),
            });
            history.goBack();
    }

    const handleDelete = async() => {
        const r: Response = await fetch(`/blog/delete/${id}`, {method: 'DELETE'});
            history.push('/');
    }

	return (
        <section className="card mt-2 border border-dark shadow">
            <h5 className="card-title m-1">Edit Blog Post</h5>
            <div className="card-body">
                <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">Choose Author</span>
                </div>
                <select onChange={(e) => setAuthor(Number(e.currentTarget.value))} defaultValue={author} name="author">
                    {authorList?.map(author => {
                        return <option key={author.id} value={author.id}>{author.name}</option>;
                    })}
                </select>
                </div>
                <div className="input-group mt-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Title</span>
                    </div>
                    <input type="text" placeholder="Blog Title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control"/>
                </div>
                <div className="input-group mt-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Choose Tag</span>
                    </div>
                    <select onChange={(e) => { setTag(Number(e.currentTarget.value));}} defaultValue={tag} name="author">
                        {tagList?.map(tag => {
                            return (<option key={tag.id} value={tag.id}>{tag.name}</option>);
                        })}
                    </select>
                </div>
                <div className="input-group mt-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Content</span>
                    </div>
                    <textarea onChange={(e) => setBody(e.target.value)} className="form-control" rows={10} id="" value={body}></textarea>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-around">
                <Link to={'/'} className="btn btn-primary">Back</Link>
                <button onClick={handleDelete} className="btn btn-primary">Delete Blog</button>
                <button onClick={handlePut} className="btn btn-primary">Submit Edit</button>
            </div>
        </section>
    );

};

interface AppProps {}

export default Edit;
