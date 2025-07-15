import Image from "next/image"

const Since1989 = () => {
  return (
    <div className="mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20">
        <div>
          <Image
            src="/about/since-1989/image01.png"
            width={700}
            height={520}
            alt="Quality through Transparency"
          />
        </div>

        <div className="flex flex-col gap-5 w-[508px] text-primary-gray">
          <p className="text-2xl">SINCE</p>
          <p className="text-[#64646480] text-8xl">1989</p>
          <p className="text-4xl">Quality through Transparency</p>
          <p className="text-lg">
            Since its inception in 1989, Chartered Housing has operated on the
            principle of uncompromising quality through transparency. This core
            value remains the cornerstone of our success and your peace of mind.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Since1989
