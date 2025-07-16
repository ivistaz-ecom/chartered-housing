"use client"

import { useState } from "react"
import { visionaryLeadership } from "@/lib/constants/VisionaryLeadership"
import Image from "next/image"
import { Button } from "../ui/button"
import { Modal, ModalHeader, ModalBody } from "flowbite-react"

const VisionaryLeadership = () => {
  const [activeModalIndex, setActiveModalIndex] = useState(null)

  return (
    <div className="mt-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-primary-gray text-4xl text-center">
          Visionary Leadership
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {visionaryLeadership.map((item, i) => (
            <li key={i} className="flex flex-col gap-5">
              <Image
                src={item.imageUrl}
                width={350}
                height={350}
                className="w-full"
                alt={item.name}
              />

              <div className="space-y-1">
                <p className="text-primary-red text-2xl font-bold">
                  {item.name}
                </p>
                <p className="text-primary-gray">{item.designation}</p>
              </div>

              <Button
                onClick={() => setActiveModalIndex(i)}
                variant="outline"
                className="self-start border-[#ec1d23] rounded-none px-4 py-1.5 text-[#ec1d23] hover:bg-[#ec1d23] hover:text-white cursor-pointer"
              >
                Know More
              </Button>

              {/* Modal */}
              <Modal
                show={activeModalIndex === i}
                onClose={() => setActiveModalIndex(null)}
              >
                <ModalHeader>
                  <div className="space-y-1">
                    <p className="text-primary-red font-bold">{item.name}</p>
                    <p className="text-sm text-primary-gray">
                      {item.designation}
                    </p>
                  </div>
                </ModalHeader>
                <ModalBody>
                  <div className="space-y-4">
                    <p className="leading-relaxed font-light">{item.desc1}</p>
                    {item.highlightedPara && (
                      <p className="text-primary-red leading-relaxed font-bold">
                        {item.highlightedPara}
                      </p>
                    )}
                    <p className="leading-relaxed font-light">{item.desc2}</p>
                  </div>
                </ModalBody>
              </Modal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default VisionaryLeadership
