import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    
    const articlePosts = posts.map((post) => {
        return <Article title = {post.title} date = {post.date} preview = {post.preview} />
    })

    return (
        <main>
            {articlePosts}
        </main>
    )
}

export default ArticleList;