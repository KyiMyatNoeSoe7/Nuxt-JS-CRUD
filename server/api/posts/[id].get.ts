import * as data from '~/data/postData.json'

export default defineEventHandler(async (event) => {

    // const { id } = event.context.params;
    // const body = await readBody(event)
    // const posts = await postList;

    // const post = find(posts, id);
    // return post;

    // return posts.find(post => post.id == id);

    // posts.forEach((post : any) => {
    //     console.log(post);
    //     if (post.id == id) {
    //      return post;
    //     }
    // });

    const id = getRouterParam(event, 'id');
    const posts:any = data;
    const post = posts.default.find((p:any) => p.id == id);
    return post;
})