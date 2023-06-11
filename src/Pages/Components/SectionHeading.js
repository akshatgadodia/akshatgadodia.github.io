import React from 'react'
import "./Stylesheets/SectionHeading.css"

const SectionHeading = (props) => {
  return (
    <>
      <h2 className="section-heading">{props.heading}</h2>
      <div className="quote">
        <p>{props.quote}</p>
        {props.quoteBy && <p>{props.quoteBy}</p>}
      </div>
      <hr />
    </>
  )
}

export default SectionHeading
