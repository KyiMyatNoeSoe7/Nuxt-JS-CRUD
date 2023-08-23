import {sql} from '~/plugins/myPlugin';

export type PostModel = {
    id: number;
    title: string;
    description: string;
    created_at: string;
}

export const read = async() => {
    const result = await sql({
        query: 'SELECT id, title, description, created_at FROM post'
    });

    return result as PostModel[];
}

export const create = async (data: Pick<PostModel, 'title' | 'description' >) => {
    const result = await sql ({
        query: `
        INSERT INTO post (
            title, description
        ) aVALUES (
            ?,
            ?
        ) RETURNING *
        `,
        values: [data.title, data.description]
    }) as any;
    
    return result.length === 1 ? (result[0] as PostModel) : null;
}

export const detail = async(id: string) => {
    const result = await sql({
        query: 'SELECT id, title, description, created_at FROM post WHERE id = ?',
        values: [id]
    }) as any;
    
    return result.length === 1 ? (result[0] as PostModel) : null;
}
