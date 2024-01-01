import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import {Helmet} from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
            <meta charSet={"about"} />
            <title>About</title>
       </Helmet>
    <BreadCrumb title="About" />
    </>
  )
}

export default About;