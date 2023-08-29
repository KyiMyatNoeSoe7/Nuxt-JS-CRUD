import * as data from '~/data/postData.json'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const posts:any = data;
    const post = posts.default.find((p:any) => p.id == id);
    return post;
})