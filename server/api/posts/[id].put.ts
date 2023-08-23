import * as data from '~/data/postData.json';
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const body = await readBody(event);
    const posts:any = data;
    const post = posts.default.find((p:any) => p.id == id);
    for(let key in body){
      post[key] = body[key]
    }
  return post;
});