import { graphql } from 'gatsby'
import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'

// const container = css``

//This is where the page layout is
export default props => {
  const { data } = props
  const content = data.prismicContact.data
  const pageName = content.title.text
  const address = content.address.text
  const email = content.email.text

  return (
    <div>
      <Layout {...props}>
        <h1>{pageName}</h1>
        <p>{address}</p>
        <p>{email}</p>
        <div className="email-form">
          <form action="https://formspree.io/afonseca@mosano.eu" method="POST">
            <div className="form-group">
              <label>Name: </label>
              <input type="text" name="name" />
            </div>
            <div className="form-group">
              <label>Email: </label>
              <input type="name" name="email" />
            </div>
            <div div className="form-group">
              <label>Message: </label>
              <textarea name="message"></textarea>
            </div>
            <input class="button" type="submit" value="Submit" />
          </form>
        </div>
      </Layout>
      <Footer />
    </div>
  )
}

//This is the query that retrieves all the contact page's information
export const pageQuery = graphql`
  query($lang: String!) {
    prismicContact(lang: { eq: $lang }) {
      data {
        title {
          text
        }
        address {
          text
        }
        email {
          text
        }
      }
    }
  }
`
