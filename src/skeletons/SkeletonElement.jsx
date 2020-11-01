import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

//do it in typescript ? 


function SkeletonElement({ type }) {
    return (
        <div className={`skeleton ${type}`}>

        </div>
    )
}

SkeletonElement.propTypes = {
    type: PropTypes.oneOf(['avatar', 'text', 'title', 'thumbnail'])
}

export default SkeletonElement

