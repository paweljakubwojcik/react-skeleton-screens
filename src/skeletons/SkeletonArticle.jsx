import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

function SkeletonArticle({ theme }) {
    const themeClass = theme || 'light'
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <SkeletonElement type='title'></SkeletonElement>
            <SkeletonElement type='text'></SkeletonElement>
            <SkeletonElement type='text'></SkeletonElement>
            <SkeletonElement type='text'></SkeletonElement>
            <SkeletonElement type='text'></SkeletonElement>
            <Shimmer />
        </div>
    )
}


export default SkeletonArticle

