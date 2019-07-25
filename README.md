## Mosano-EU

Since the 8th of July to the 31st, I worked along side with **Mosano** in an internship, focusing my work in front-end web development. Mosano provides custom software services and focuses on web and mobile application development.

### Technologies

I used technologies such as Gatsby [![gatsby logo](/gatsby-logo.png)](https://www.gatsbyjs.org/docs "Documentation") , Graphql [![graphql logo](GraphQL_Logo.svg.png)](https://graphql.org/learn "Documentation"), React [![react logo](React.js_logo-512.png)](https://reactjs.org/docs/getting-started.html#learn-react "Documentation"), Prismic [![Prismic logo](prismic-logo.png)](https://prismic.io/docs "Documentation") and Emotion [![Emotion logo](emotion-logo.png)](https://emotion.sh/docs/introduction "Documentation").


#### Gatsby [![gatsby logo](/gatsby-logo.png)](https://www.gatsbyjs.org/docs "Documentation") 

[Gatsby](https://www.gatsbyjs.org/) is a static site generator that are Progressive Web Apps. It is React-based and GraphQL powered. It basically joins the best parts of React, Webpack, React-router, GraphQL and other front-end tools to make a better developer experience. Gatsby follows latest web standards and are optimized to be highly performant.
 
#### GraphQL [![graphql logo](GraphQL_Logo.svg.png)](https://graphql.org/learn "Documentation")

  "[GraphQL](https://graphql.org/) is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools."
  
  GraphQL allows you to declaratively express your data needs. This is done with queries, queries are the representation of the data you need. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data. An example: 
  
  ~~~~
  query {
    prismicHomepage{
      data 
        title {
          text
        }
      }
    }
  }
  ~~~~
  
 This query gets the homepage's title's text. GraphQL in Mosano-EU project accesses Prismic, which is a headless CMS (and I'll talk more about it later on), and gets the content (written by given user).
 
#### React JS [![react logo](React.js_logo-512.png)](https://reactjs.org/docs/getting-started.html#learn-react "Documentation")

[React](https://reactjs.org/) is a JavaScript library that aims to ease UI development and make It simple. React will render the right components when your data changes. It is **component based**, which means It builds encapsulated components and manages them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

##### JSX

Within the project we used [JSX](https://reactjs.org/docs/introducing-jsx.html) files as templates, these files are recommended to use with React and they describe how the UI should look like. JSX is a preprocessor step that adds XML syntax to JavaScript. You can definitely use React without JSX but JSX makes React a lot more elegant. It may remind you of HTML, but It gives you the power to code Javascript pratically anywhere.

#### Prismic [![Prismic logo](prismic-logo.png)](https://prismic.io/docs "Documentation")

[Prismic](https://prismic.io/) in a headless CMS, which is a back-end only content management system (CMS) built from the ground up as a content repository that makes content accessible via a RESTful API for display on any device... which means Prismic provides editing and publishing tools and exposes a powerful API. It is a content database. However, the main focus of Prismic is to give developers the ability to give content freedom to publishers and marketers.

#### Emotion [![Emotion logo](emotion-logo.png)](https://emotion.sh/docs/introduction "Documentation")

[Emotion](https://github.com/emotion-js/emotion) is a performant and flexible CSS-in-JS library. Building on many other CSS-in-JS libraries, it allows you to style apps quickly with string or object styles. It has predictable composition to avoid specificity issues with CSS. With source maps and labels, Emotion has a great developer experience and great performance with heavy caching in production.

### Project Description

During my Mosano-EU project I used a variety of technologies that supported my web application. In my web application I have 6 pages: the Homepage, What, Who, How, Contact and Join Us pages. In each of these the content isn't specified.

![Schema](/schema.png)


**Contributors:** [Mosano](https://mosano.eu/) [![facebook](/facebook-logo-button.png)](https://facebook.com/mosanotech/ "Facebook") [![instagram](/instagram-logo.png)](https://www.instagram.com/mosanotech/?hl=en "Instagram") [![LinkedIn](/linkedin-logo-button.png)](https://www.linkedin.com/company/mosano "LinkedIn")
