import { CheckCircle2, XCircle } from "lucide-react"

export default function Myths() {
  const factsVsMyths = [
    {
      fact: "Many cancers are now treatable, and survival rates have significantly improved over the years.",
      myth: "Cancer is always a death sentence."
    },
    {
      fact: "Cancer itself is not contagious. You cannot 'catch' cancer from someone else.",
      myth: "Cancer is contagious."
    },
    {
      fact: "Many people who develop cancer have no family history of the disease.",
      myth: "Only people with a family history of cancer get cancer."
    },
    {
      fact: "A balanced diet can help reduce cancer risk as part of an overall healthy lifestyle.",
      myth: "Superfoods can prevent or cure cancer."
    }
  ]

  return (
    <div id="myths" className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-background">
      <h2 className="text-4xl lg:text-6xl text-gray-800 font-bold mb-4 sm:mb-6 md:mb-8 text-primary text-center">Debunking <span className='text-green-700'>Cancer</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="md:contents">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-green-600 mb-2 md:col-span-1 text-center">Facts</h3>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 mb-2 md:col-span-1 text-center">Myths</h3>
        </div>
        {factsVsMyths.map((item, index) => (
          <div key={index} className="md:contents">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg md:col-span-1 border border-green-200 dark:border-green-800">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base lg:text-xl">{item.fact}</span>
              </div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg md:col-span-1 border border-red-200 dark:border-red-800">
              <div className="flex items-start">
                <XCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base lg:text-xl text-black">{item.myth}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}