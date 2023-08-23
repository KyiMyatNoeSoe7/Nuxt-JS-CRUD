import postList from '~/data/postData.json'

export default defineEventHandler((event) => {
  return postList;
})