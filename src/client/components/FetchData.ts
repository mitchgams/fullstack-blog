
const getAuthors = async() => {
    try {
        let res = await fetch('/api/authors/');
        let authors = await res.json();
        return authors;
    } catch (e) {
        console.log(e);
    }
}

const getTags = async() => {
    try {
        let res = await fetch('/api/blogtags/');
        let tags = await res.json();
        return tags;
    } catch (e) {
        console.log(e);
    }
}

export default {
    getAuthors,
    getTags
}