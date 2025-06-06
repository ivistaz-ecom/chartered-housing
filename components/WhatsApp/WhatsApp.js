import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton = () => {
  const phoneNumber = "919591596777"
  const message = "Hello! I would like to know more."
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 bg-green-500 text-white text-3xl p-3 rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsAppButton
