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
        return (
            <div key={post.id}>
                <img src={post.image} alt="" />
                {post.caption}
            </div>
        );
    });
}

export default Index;
