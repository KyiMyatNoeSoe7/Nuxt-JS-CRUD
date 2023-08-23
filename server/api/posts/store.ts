import postList from '~/data/postData.json'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    await postList.push(body)
    return 'Data is set'
})