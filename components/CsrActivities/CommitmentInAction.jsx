import { csrActivities } from "@/lib/constants/CsrActivities"
import Image from "next/image"

const CommitmentInAction = () => {
  return (
    <div className="mt-10 mb-16">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-primary-red text-4xl text-center">
            Commitment in Action
          </h2>
          <p className="text-primary-gray text-3xl text-center mt-5">
            Our Recent Initiative
          </p>
        </div>
        {/* CSR Activities */}
        <div className="flex items-center mt-10">
          <Image
            src="/csr-activities/image01.png"
            width={800}
            height={700}
            alt="Nalkemar School"
          />
          <div className="w-full h-[400px] border border-primary-red bg-white text-primary-gray text-lg p-5 flex flex-col gap-5 -ml-20">
            <h3 className="text-3xl text-primary-red">Nalkemar School</h3>
            <p>
              In 2023, through the Aerya Alva Foundation, we adopted Nalkemar
              School in Dakshin Kannada.
            </p>
            <ul className="list-disc pl-5 marker:text-primary-red space-y-3">
              <li>
                Built classrooms, modern desks, and upgraded infrastructure
              </li>
              <li>
                Enhanced teacher salaries and distributed learning materials
              </li>
              <li>
                Introduced gymnastics, cultural programs, and open-air ‘katte’
                learning
              </li>
              <li>Achieved approval for English-medium instruction</li>
            </ul>
            <p className="font-[600]">
              Empowering children through education is one of the most enduring
              ways to build better lives. This initiative is just the beginning.
            </p>
          </div>
        </div>

        <p className="text-primary-gray text-3xl text-center mt-10">
          Our Past Initiatives
        </p>
        {/* CSR Activities */}
        <ul className="flex flex-col gap-10">
          {csrActivities.map((item, i) => (
            <li key={i} className="flex items-center mt-10">
              <Image
                src={item.imageUrl}
                width={800}
                height={700}
                alt={item.title}
              />
              <div className="w-full h-[400px] border border-primary-red bg-white text-primary-gray text-lg p-5 flex flex-col justify-center gap-5 -ml-20">
                <h3 className="text-3xl text-primary-red">{item.subtitle}</h3>
                <p>We don't just build on land - we honour it.</p>
                <ul className="list-disc pl-5 marker:text-primary-red space-y-3">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{ __html: point }}
                    ></li>
                  ))}
                </ul>
                <p className="font-[600]">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CommitmentInAction
