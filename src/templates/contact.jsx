import { graphql } from 'gatsby'
import React from 'react'
import Footer from '../Layout/footer'
import Layout from '../Layout/layout'
import '../styles/contact.css'

// const container = css``

//This is where the page layout is
export default props => {
  const { data } = props
  const content = data.prismicContact.data
  const pageName = content.title.text
  const address = content.address.text
  const email = content.email.text

  //Changes to the address so It can fit into the google API
  var googleAddress = ''
  var i
  var addressContainer = address.split(' ')

  for (i = 0; i < addressContainer.length; i++) {
    //if last char is "," and it isnt last element in array
    if (
      addressContainer[i].slice(-1) !== ',' &&
      i !== addressContainer.length - 1
    ) {
      googleAddress += addressContainer[i] + '+'

      //if last char is ","
    } else if (addressContainer[i].slice(-1) === ',') {
      googleAddress += addressContainer[i]
    } else {
      googleAddress += addressContainer[i]
    }
  }

  console.log(process.env)
  return (
    <div>
      <Layout {...props}>
        <div className="content-contact">
          <h1>{pageName}</h1>
          <div className="info">
            <iframe
              width="750"
              height="450"
              src={`https://www.google.com/maps/embed/v1/search?key=${process.env.GOOGLE_KEY}&q=${googleAddress}`}
              allowfullscreen
            ></iframe>
          </div>
          <div className="info">
            <div className="address-email">
              <p>Address: {address}</p>
              <p>Email: {email}</p>
            </div>
            <div className="email-form">
              <form action={`https://formspree.io/${email}`} method="POST">
                <h5> Need Help ? </h5>
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
                <button class="button" type="submit" value="Submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
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
