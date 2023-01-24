

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between items-center px-10 py-5 mb-10">
        <div>
            <h1 className="text-5xl font-bold">Chris&apos;s Blog</h1>
            <h3 className="mt-5 md:mt-2">
                Pull up a seat and enjoy a piece of my mind
            </h3>

        </div>
        <p className="mt-5 md:mt-2 text-gray-500 max-w-sm">
            Gaming | Technology | Mental Health |
            Giant Robots | Lego Builds & More!
        </p>
    </div>
  )
}

export default Banner