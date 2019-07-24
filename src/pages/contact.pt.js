import { graphql } from 'gatsby'
import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'

// const container = css``
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
              <label>Nome: </label>
              <input type="text" name="name" />
            </div>
            <div className="form-group">
              <label>Email: </label>
              <input type="name" name="email" />
            </div>
            <div div className="form-group">
              <label>Mensagem: </label>
              <textarea name="message"></textarea>
            </div>
            <input class="button" type="submit" value="Submeter" />
          </form>
        </div>
      </Layout>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query {
    prismicContact(lang: { eq: "pt-pt" }) {
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
