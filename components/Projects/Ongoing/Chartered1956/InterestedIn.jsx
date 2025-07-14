import React from "react"
import ContactForm from "./ContactForm"

const InterestedIn = () => {
  return (
    <div className="mt-16">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-primary-red text-4xl text-center">
          Interested in Chartered 1956?
        </h3>
        <h4 className="text-lg text-primary-gray text-center mt-3">
          Chartered 1956 is more than a home — it’s a statement. A reflection of
          heritage, exclusivity, and meticulous design
        </h4>

        <ContactForm />
      </div>
    </div>
  )
}

export default InterestedIn
