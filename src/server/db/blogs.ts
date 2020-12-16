import { Query } from './index';

const all = async () => {
    return Query('SELECT * FROM blogs');
}

const ofTitle = async(title: string) => {
    return Query('SELECT t.name as tagname, t.id as tagid, b.id as blogid, b.authorid as authorid, b.title as title, b.body as body, b.publishdate as publishdate, a.name as name, a.email as email FROM blogs b join authors a on b.authorid = a.id join blogtags bt on bt.blogid = b.id join tags t on t.id = bt.tagid  WHERE title = ?', [title]);
}

const ofId = async(id: number) => {
    return Query('SELECT t.name as tagname, t.id as tagid, b.id as blogid, b.authorid as authorid, b.title as title, b.body as body, b.publishdate as publishdate, a.name as name, a.email as email FROM blogs b join authors a on b.authorid = a.id join blogtags bt on bt.blogid = b.id join tags t on t.id = bt.tagid  WHERE b.id = ?', [Number(id)]);
}

const tagsOfBlogId = async(id: number) => {
    return Query('SELECT b.blogid as blogid, b.tagid as tagid, t.name as tagname FROM blogtags b JOIN tags t on b.tagid = t.id WHERE blogid = ?', [id]);
}

const postBlog = async(authorid: number, tagid: number, title: string, body: string) => {
    try {
        const makePost = await Query('INSERT INTO blogs (authorid, title, body, publishdate) values (?, ?, ?, current_timestamp)', [authorid, title, body]);
        const blog = await Query('SELECT MAX(id) AS id FROM blogs');
        const postTags = await Query('INSERT INTO blogtags (blogid, tagid) values (?, ?)', [blog[0].id, tagid]);
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

const updateBlog = async(blogid: number, authorid: number, tag: number, title: string, body: string) => {
    try {
        const updatePost = await Query('UPDATE blogs SET authorid = ?, title = ?, body = ? WHERE id = ?', [authorid, title, body, blogid]);
        const updateTags = await Query('UPDATE blogtags SET tagid = ? WHERE blogid = ?', [tag, blogid]);
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

const getAuthors = async() => {
    return Query('SELECT * FROM authors');
}

const getTags = async() => {
    return Query('SELECT * FROM tags');
}

const deleteBlog = async(blogid: number) => {
    try {
        const deleteTag = await Query('DELETE FROM blogtags WHERE blogid = ?', [blogid]);
        const delBlog = await Query('DELETE FROM blogs WHERE id = ?', [blogid]);
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}


export default {
    getTags,
    ofId,
    getAuthors,
    all,
    ofTitle,
    tagsOfBlogId,
    postBlog,
    updateBlog,
    deleteBlog
}