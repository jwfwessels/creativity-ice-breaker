import React, { useState } from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import { Spinner } from "../components/Spinner"
import { Button } from "../components/Button"

const IndexPage = () => {
  const [start, setStarted] = useState(false)

  return (
    <Layout>
      {/* <SEO title="Home" /> */}

      <Spinner />
    </Layout>
  )
}

export default IndexPage
