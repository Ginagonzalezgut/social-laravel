function Index({
    posts,
}: {
    posts: {
        image: string;
        caption: string;
        id: number;
    }[];
}) {
    return posts.map((post) => {
        return <div key={post.id}>{post.caption}</div>;
    });
}

export default Index;
