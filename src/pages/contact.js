import * as React from "react"
import Layout from "../Components/Layout"
import Seo from "../Components/seo"
import Contact from "../Components/Contact/Contact"
// markup
const ContactPage = () => {
    return (
        <Layout>
            <Seo title="Contact - Delhi 6 Indian Restaurant Restaurant" description="Indian restaurant in Paihia" />
            <Contact />

        </Layout>
    )
}

export default ContactPage
