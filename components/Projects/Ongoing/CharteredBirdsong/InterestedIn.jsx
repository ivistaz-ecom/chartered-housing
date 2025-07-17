import React from "react"
import ContactForm from "./ContactForm"

const InterestedIn = () => {
  return (
    <div className="mt-16">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-primary-red text-4xl text-center">
          Interested in Chartered Birdsong?
        </h3>
        <h4 className="text-lg text-primary-gray text-center mt-3">
          Build on a legacy of timely delivery and transparent development.
        </h4>

        <ContactForm />
      </div>
    </div>
  )
}

export default InterestedIn
