import React from 'react';
import {categoryColors} from './styles';

// 포스트 태그 컬러 설정
export default function TagRow({tags}) {
    return (
        <div className="tags-container">
            {tags.map((tag, ind) => 
                <span key={ind} className="tag" style={{backgroundColor: categoryColors[tag]}}>
                    {tag.toUpperCase()}
                </span>
            )}
        </div>
    )
}