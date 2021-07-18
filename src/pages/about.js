import * as React from "react"
import AboutPage from "../Components/AboutPage/AboutPage"
import Layout from "../Components/Layout"
import Seo from "../Components/seo"
// styles

// markup
const About = () => {
    return (
        <Layout>
            <Seo title="About Us - Delhi 6 Indian Restaurant Restaurant" description="Indian restaurant in Paihia" />
            <AboutPage />
        </Layout>
    )
}

export default About
