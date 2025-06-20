"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"

import {
  CheckboxField,
  PhoneInputField,
  SelectField,
  TextInputField,
} from "../Form/FormField"
import { useFormHandler } from "@/hooks/useFormHandler"

const EnquireNow = () => {
  const { formData, handleChange, handleSelectChange, handleSubmit } =
    useFormHandler()
  return (
    <div className="fixed bottom-1/4 -right-14 -rotate-90">
      <Sheet>
        <SheetTrigger>
          <button className="bg-[#ec1d23] px-7 pb-5 pt-2.5 text-white text-xl rounded-t-xl cursor-pointer">
            Enquire Now
          </button>
        </SheetTrigger>
        <SheetContent className="max-h-[600px] overflow-y-auto my-auto">
          <SheetHeader>
            <SheetDescription className="font-playfair text-3xl text-[#646464]">
              Chartered Housing Project
            </SheetDescription>
            <SheetDescription className="text-[#646464] text-lg">
              Find your dream home today with our expert assistance.
            </SheetDescription>
          </SheetHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid flex-1 auto-rows-min gap-8 px-4">
              <div className="grid gap-3">
                <SelectField
                  value={formData.purpose}
                  onChange={handleSelectChange}
                  fontSize="text-base"
                />
              </div>
              <div className="grid gap-3">
                <TextInputField
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-3">
                <PhoneInputField
                  value={formData.mobile}
                  onChange={(val) => handleSelectChange("mobile", val)}
                />
              </div>
              <div className="grid gap-3">
                <TextInputField
                  type="email"
                  placeholder="Your Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-3">
                <CheckboxField
                  id="enquireNowForm"
                  checked={formData.consent}
                  onChange={handleSelectChange}
                />
              </div>
            </div>
            <SheetFooter>
              <Button
                type="submit"
                className="rounded-none bg-[#ec1d23] text-white hover:bg-[#ec1d23] cursor-pointer"
              >
                Submit
              </Button>
              <SheetClose asChild>
                <Button
                  variant="outline"
                  className="rounded-none border-[#ec1d23] cursor-pointer"
                >
                  Close
                </Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default EnquireNow
