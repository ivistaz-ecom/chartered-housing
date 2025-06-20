"use client"

import { Button } from "../ui/button"
import { useFormHandler } from "@/hooks/useFormHandler"
import {
  CheckboxField,
  PhoneInputField,
  SelectField,
  TextAreaField,
  TextInputField,
} from "../Form/FormField"

const ContactForm = () => {
  const { formData, handleChange, handleSelectChange, handleSubmit } =
    useFormHandler()

  return (
    <div className="mt-7 mb-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#646464] text-3xl text-center">
          What can we help you with?
        </h2>

        <form className="mt-10" onSubmit={handleSubmit}>
          <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
            <div className="w-4/6">
              <SelectField
                value={formData.purpose}
                onChange={handleSelectChange}
              />
            </div>

            <div className="border border-[#ED1C25] py-5 px-10 w-full mt-10 flex flex-col items-center gap-8">
              <h3 className="text-3xl text-[#646464] font-playfair text-center">
                Leave a message to buy a property
              </h3>

              <TextInputField
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <PhoneInputField
                value={formData.mobile}
                onChange={(val) => handleSelectChange("mobile", val)}
              />

              <TextInputField
                type="email"
                placeholder="Your Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <TextAreaField
                name="message"
                value={formData.message}
                onChange={handleChange}
              />

              <CheckboxField
                id="contactForm"
                checked={formData.consent}
                onChange={handleSelectChange}
              />
              <Button
                type="submit"
                variant="outline"
                className="border-[#ec1d23] text-lg rounded-none px-10 text-[#ec1d23] hover:bg-[#ec1d23] hover:text-white cursor-pointer"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
