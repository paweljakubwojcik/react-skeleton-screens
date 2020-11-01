import React from 'react'
import SkeletonElement from './SkeletonElement'
import Styled from 'styled-components'

const Wrapper = Styled.div`
display: grid;
grid-template-columns:1fr 1fr;
gap:30px;
align-items:center;
`

export default function SkeletonProfile() {
    return (
        <div className='skeleton-wrapper'>
            <Wrapper >
                <div>
                    <SkeletonElement type='avatar' />
                </div>
                <div>
                    <SkeletonElement type='title' />
                    <SkeletonElement type='text' />
                </div>
            </Wrapper>
        </div >
    )
}
