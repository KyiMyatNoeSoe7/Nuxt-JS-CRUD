import * as data from '~/data/postData.json';
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const posts: any = data;
  const index = posts.default.findIndex((p: any) => p.id == id);
  posts.default.splice(index, 1);
  return { success: true };
});
