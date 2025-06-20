"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"

export const TextInputField = ({
  type = "text",
  placeholder,
  name,
  value,
  onChange,
}) => (
  <div className="w-full">
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border-b border-[#64646480] outline-0"
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
)

export const TextAreaField = ({
  name,
  placeholder = "Message",
  value,
  onChange,
}) => (
  <div className="w-full">
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      className="outline-0 w-full border-b border-[#64646480]"
      onChange={onChange}
    ></textarea>
  </div>
)

export const PhoneInputField = ({ value, onChange }) => (
  <div className="w-full border-b border-[#64646480]">
    <PhoneInput
      placeholder="Enter phone number"
      international
      defaultCountry="IN"
      value={value}
      onChange={onChange}
      className="custom-phone-input"
    />
  </div>
)

export const CheckboxField = ({ id, checked, onChange }) => (
  <div className="w-full">
    <div className="flex space-x-2">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={(val) => onChange("consent", val)}
      />
      <Label htmlFor={id}>
        I authorize company representatives to Call, SMS, Email or WhatsApp me
        about its properties and offers.
      </Label>
    </div>
  </div>
)

export const SelectField = ({ value, onChange, fontSize = "text-xl" }) => (
  <Select onValueChange={(val) => onChange("purpose", val)} value={value}>
    <SelectTrigger
      className={`${fontSize} w-full rounded-none border-[#ED1C25] p-4 !text-[#646464] focus:!border-[#ED1C25] focus:!ring-0 focus:!outline-none`}
    >
      <SelectValue placeholder="Choose Property" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Property</SelectLabel>
        <SelectItem value="Chartered 1956">Chartered 1956</SelectItem>
        <SelectItem value="Chartered Birdson">Chartered Birdsong</SelectItem>
        <SelectItem value="Chartered 195">Chartered 1956</SelectItem>
        <SelectItem value="Chartered Bidsong">Chartered Birdsong</SelectItem>
        <SelectItem value="Chartered 196">Chartered 1956</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
)
