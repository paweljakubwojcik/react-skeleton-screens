import React, { useState, useEffect } from 'react'
import SkeletonArticle from '../skeletons/SkeletonArticle'

function Aticles(props) {
    const [articles, setArticles] = useState(null)

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            setArticles(data)
        }, 5000);

    })

    return (
        <div>
            <h2>Articles</h2>

            {articles && articles.map(({ id, title, body }) => (
                <div className="article" key={id}>
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
            ))}


            {!articles && [1, 2, 3, 4, 5].map((n) => (
                <SkeletonArticle key={n} />
            ))}
        </div>
    )
}



export default Aticles

