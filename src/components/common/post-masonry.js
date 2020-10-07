import React from 'react';
import {MasonryPost} from './'

// 상단 포스트 (왼쪽)
export default function PostMasonry ({posts, columns, tagsOnTop}) {
    return (
        <section className="masonry" style={{gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr)))`}}>
            {posts.map((post, index) => 
               <MasonryPost {...{post, index, tagsOnTop, key: index}} /> 
            )}
        </section>
    )
}