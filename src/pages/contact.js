import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h2>Get in touch with me</h2>

    <div class="container">

      <div>
        <ul class="ul-contact">
          <li><a href="https://www.linkedin.com/in/nicklas-barklund/" target="_blank">Linkedin</a></li>
          <li><a href="https://github.com/Bikelund" target="_blank">Github</a></li>
        </ul>
        </div>

      <div class="buddy"></div>

    </div>
    
    
  </Layout>
)

export default ContactPage