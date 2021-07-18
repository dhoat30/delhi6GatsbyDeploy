import React from 'react'
import Accordion from '../../UI/Accordion/Accordion'
import styled from 'styled-components'
import SectionTitle from '../../UI/Titles/SectionTitle'
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allWpFaq {
      edges {
        node {
          title
          content
          id
        }
      }
    }
  }
`
function FAQSection() {
  const data = useStaticQuery(query)

  const dataArray = data.allWpFaq.edges.map(data => {
    return {
      title: data.node.title,
      id: data.node.id,
      content: data.node.content
    }
  })

  const accordion = dataArray.map(data => {
    return <Accordion key={data.id} title={data.title} content={data.content.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "")} />;
  })
  return (
    <React.Fragment>
      {
        dataArray[0].title ?
          <Container>
            <Box>
              <SectionTitle subTitle="Ask us a question">Frequently Asked Questions</SectionTitle>
              <AccordionContainer>

                {accordion}
              </AccordionContainer>
            </Box>

          </Container>
          : null
      }
    </React.Fragment>

  )
}

const Container = styled.section`
background: var(--darkGrey);
`
const Box = styled.div`
max-width: var(--maxWidth);
margin: 0 auto;
width: 95%;
padding: 100px 0;
`
const AccordionContainer = styled.div`
margin: 40px 0 0 0;
`

export default FAQSection
