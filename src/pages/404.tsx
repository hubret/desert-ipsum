import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../layout/index'

import Image from '../components/Image'
import Heading from '../components/Heading'

import { GatsbyImageFluidProps } from 'gatsby-image'

interface IndexPageProps {
  location: {
    pathname: string
  }
  data: {
    image: {
      childImageSharp: GatsbyImageFluidProps
    }
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export default ({ data, location }: IndexPageProps) => {
  const { image, site } = data
  return (
    <Layout location={location}>
      <Wrapper>
        <Image img={image.childImageSharp} />
        <Heading
          title="404 Page not found!"
          subtitle={site.siteMetadata.description}
        />
      </Wrapper>
    </Layout>
  )
}

export const NotFoundQuery = graphql`
  query NotFoundPageQuery {
    image: file(relativePath: { eq: "icon1.jpg" }) {
      ...fluidImage
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
