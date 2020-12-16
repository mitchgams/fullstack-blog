import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import FetchData from '../../FetchData';


interface ITag {
    blogid: number,
    id: number,
    name: string
}

const Add = (props: AppProps) => {

    
    const history = useHistory();
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
    }, []);

    const handlePost = async() => {
        if(!author || !tag || !title || !body) {
            alert('please make sure all fields are filled out');
        } else {
        const r: Response = await fetch('/blog/post/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({authorid: author, title: title, tagid: tag, body: body}),
            });
            history.push('/');
        }
    }

	return (
        <section className="card mt-2 border border-dark shadow">
            <h5 className="card-title m-1">Create Blog Post</h5>
            <div className="card-body">
                <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">Choose Author</span>
                </div>
                <select onChange={(e) => setAuthor(Number(e.currentTarget.value))} defaultValue={'DEFAULT'} name="author">
                    <option value="DEFAULT" disabled>Choose Author</option>
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
                    <select onChange={(e) => { setTag(Number(e.currentTarget.value));}} defaultValue={'DEFAULT'} name="author">
                        <option value="DEFAULT" disabled>Select Tag</option>
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
                        <button onClick={handlePost} className="btn btn-primary">Submit Blog</button>
            </div>
        </section>
	);
};

interface AppProps {}

export default Add;
