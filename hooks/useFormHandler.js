"use client"

import { useState } from "react"

// Custom Hook For Form Submission Logic

const defaultFormData = {
  purpose: "",
  name: "",
  email: "",
  mobile: "",
  message: "",
  consent: false,
}

export const useFormHandler = () => {
  const [formData, setFormData] = useState(defaultFormData)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData(defaultFormData)
  }

  return {
    formData,
    setFormData,
    handleChange,
    handleSelectChange,
    handleSubmit,
  }
}
