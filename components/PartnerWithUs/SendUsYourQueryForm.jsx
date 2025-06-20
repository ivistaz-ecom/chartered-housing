"use client"
import { useFormHandler } from "@/hooks/useFormHandler"
import {
  CheckboxField,
  PhoneInputField,
  SelectField,
  TextInputField,
} from "../Form/FormField"
import { Button } from "../ui/button"
import Link from "next/link"

const SendUsYourQueryForm = () => {
  const { formData, handleChange, handleSelectChange, handleSubmit } =
    useFormHandler()

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-[777px] border border-[#ED1C25] px-10 py-5 flex flex-col items-center gap-8">
        <h3 className="text-3xl text-[#646464] font-playfair self-start">
          Send us your query
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

        <SelectField
          value={formData.purpose}
          onChange={handleSelectChange}
          fontSize="text-lg"
        />
        <CheckboxField
          id="sendUsYourQueryForm"
          checked={formData.consent}
          onChange={handleSelectChange}
        />

        <Button
          type="submit"
          variant="outline"
          className="w-full border-[#ec1d23] text-lg rounded-none px-10 text-[#ec1d23] hover:bg-[#ec1d23] hover:text-white cursor-pointer"
        >
          Submit
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
          <Link href="/privacy-policy" className="underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </form>
  )
}

export default SendUsYourQueryForm
