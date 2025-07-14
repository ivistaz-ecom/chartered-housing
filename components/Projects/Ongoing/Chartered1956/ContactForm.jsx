"use client"

import { Button } from "../../../ui/button"
import { useFormHandler } from "@/hooks/useFormHandler"
import {
  CheckboxField,
  PhoneInputField,
  TextAreaField,
  TextInputField,
} from "../../../Form/FormField"
import Link from "next/link"

const ContactForm = () => {
  const { formData, handleChange, handleSelectChange, handleSubmit } =
    useFormHandler()

  return (
    <div className="mb-16">
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="text-[#646464] text-3xl text-center">
          We’d Love to Hear From You
        </h2> */}

        <form onSubmit={handleSubmit}>
          <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
            <div className="border border-[#ED1C25] py-5 px-10 w-full mt-10 flex flex-col items-center gap-8">
              <h3 className="text-3xl text-[#646464] font-playfair text-center">
                We’d Love to Hear From You
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
                className="w-full border-[#ec1d23] text-lg rounded-none px-10 text-[#ec1d23] hover:bg-[#ec1d23] hover:text-white cursor-pointer"
              >
                Request a callback
              </Button>

              <p className="text-[#646464]">
                By continuing, you agree to our{" "}
                <Link
                  href="/terms-and-conditions"
                  className="underline underline-offset-2"
                >
                  T&Cs
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="underline underline-offset-2"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
