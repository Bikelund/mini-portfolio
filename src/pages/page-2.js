import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h2>My works</h2>
    <div class="x45 works">
      <h3><a class="works-a" href="https://bikelund.github.io/X45-001/" target="_blank">X45-001 Czar'Krang Colossus Transit</a></h3>
    </div>
    <div class="oakley works">
      <h3><a class="works-a-b" href="https://samirergaibi.github.io/oakley/" target="_blank">Oakley</a></h3>
    </div>
    <div class="f4 works">
      <h3><a class="works-a" href="https://tobberos.github.io/Grupp6/" target="_blank">Fantastic Four</a></h3>
    </div>
  </Layout>
)

export default SecondPage
