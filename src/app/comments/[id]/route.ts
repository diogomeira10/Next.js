import { redirect } from "next/navigation"
import { comments } from "../data"

export async function GET(request: Request, { params }: { params: { id: string } }) {

    const comment = comments.find(comment => comment.id === parseInt(params.id))

    if (comment) {
        return Response.json(comment)
    } else {
        redirect('/comments')
    }

}

export async function PATCH(request: Request, { params }:
    { params: { id: string } }
) {

    const body = await request.json()

    const { text } = body

    const index = comments.findIndex((comment) => {
        return comment.id === parseInt(params.id)
    })

    comments[index].text = text

    return Response.json(comments[index])
}

export async function DELETE(request: Request, { params }:
    { params: { id: string } }
) {

    const index = comments.findIndex((comment) => comment.id === parseInt(params.id))

    comments.splice(index, 1)

    return Response.json(comments[index])
}