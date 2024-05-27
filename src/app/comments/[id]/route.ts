import { comments } from "../data"

export async function GET(request: Request, { params }: { params: { id: string } }) {

    const comment = comments.find(comment => comment.id === parseInt(params.id))

    return Response.json(comment)
}

// export async function PATCH({ params }:
//     { params: { id: string } }
// ) {
//     return ''
// }