function Docs({ params }: {
    params: {
        slug: string[]
    }
}) {
    let content = <h1>Docs Home Page</h1>

    if (params.slug?.length === 2) {
        content = <h1>Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
    } else if (params.slug?.length === 1) {

        content = <h1>Viewing docs for feature {params.slug[0]}</h1>
        console.log(params.slug)
    } 

    return (
        <div>
            {content}
        </div>
    );
}

export default Docs;