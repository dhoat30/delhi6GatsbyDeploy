import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
function Pattern() {
    return (

        <StaticImage src="../../../images/luxury-pattern.svg" alt="luxury pattern" placeholder="blurred"
            layout="constrained"
            width={200}

        />
    )
}

export default Pattern
