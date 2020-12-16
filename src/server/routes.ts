import * as express from 'express';
import { Query } from './db/index';

import DB from './db';

const router = express.Router();

router.get('/api/blogs/:blogid?', async(req, res) => {
    const blogid = req.params.blogid;
    try {
        if(blogid) {
            res.json(await DB.Blogs.ofId(parseInt(blogid)));
        } else {
            res.json(await DB.Blogs.all());
        }
    } catch (e) {
        console.log(e);
    }
});


router.get('/api/blogtags/:id?', async(req, res) => {
    const id = req.params.id;
    try {
        if(!id)  {
            res.json(await DB.Blogs.getTags());
        } else {
            res.json(await DB.Blogs.tagsOfBlogId(Number(id)));
        }
    } catch (e) {
        console.log(e);
    }
});

router.get('/api/authors/', async(req, res) => {
    try {
        res.json(await DB.Blogs.getAuthors());
    } catch(e) {
        console.log(e);
    }
});

router.get('/api/s/', async(req, res) => {
    res.json(await Query('SELECT MAX(id) AS id FROM blogs'));
});

router.post('/blog/post/', async(req, res) => {
    console.log(req.body);
    const { authorid, tagid, title, body } = req.body;
    if(DB.Blogs.postBlog(authorid, tagid, title, body)) {
        res.status(200).send(`Blog successfully posted.`);
    } else {
        res.status(500).send('Failed to post Blog');
    }
});

router.put('/blog/put/:id?', async(req, res) => {
    const { blogid, authorid, tagid, title, body } = req.body;
    if(DB.Blogs.updateBlog(blogid, authorid, tagid, title, body)) {
        res.status(200).send(`Blog successfully updated.`);
    } else {
        res.status(500).send('Failed to update Blog');
    }
});

router.delete('/blog/delete/:id?', async(req, res) => {
    const { id } = req.params;
    if(id) {
        if(DB.Blogs.deleteBlog(parseInt(id))) {
            res.status(200).send(`Blog successfully deleted.`);
        } else {
            res.status(500).send('Failed to delete Blog');
        }
    }
})

export default router;