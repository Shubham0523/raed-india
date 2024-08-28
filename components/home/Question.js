'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Component() {
  const [isHovered, setIsHovered] = useState(null)

  const cards = [
      {
        title: 'AM I AWARE OF THE EARLY SIGNS OF CANCER?',
        content: 'Early detection of cancer significantly increases the chances of successful treatment. Familiarize yourself with common symptoms like unexplained weight loss, persistent fatigue, lumps, unusual bleeding, or changes in skin appearance. While these signs can be related to other health issues, it\'s crucial to consult a healthcare provider if you notice any persistent or unusual changes in your body. Being proactive and informed about these early signs can lead to timely intervention and potentially life-saving treatment.'
      },
    {
      title: 'MY RISK FACTORS FOR DEVELOPING CANCER?',
      content: 'Cancer risk factors vary widely and can be influenced by genetics, lifestyle, and environmental factors. Some common risk factors include a family history of cancer, smoking, excessive alcohol consumption, poor diet, lack of physical activity, and exposure to harmful chemicals. Understanding your personal risk factors empowers you to make informed decisions about lifestyle changes and screening practices. Regular check-ups and discussions with your healthcare provider can help you assess and manage your risk effectively.'
    },
    {
      title: 'CAN I SUPPORT A LOVED ONE THROUGH CANCER?',
      content: 'Supporting someone through their cancer journey requires emotional strength, patience, and understanding. It\'s important to educate yourself about the disease, treatment options, and potential side effects. Providing a listening ear, offering practical help, and being emotionally available can make a significant difference in their experience. Additionally, encouraging them to seek professional psychological support and joining support groups can help both you and your loved one navigate this challenging time with resilience and hope.'
    }
  ]

  return (
    <div id='questions' className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.h1 
        className="text-4xl lg:text-6xl font-bold mb-8 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
       <span className='text-green-700'>Questions</span> To Ask
      </motion.h1>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full max-w-6xl xl:text-justify">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onMouseEnter={() => setIsHovered(card.title)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <motion.h2
              className="text-2xl font-semibold mb-4 text-gray-700"
              animate={{
                scale: isHovered === card.title ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {card.title}
            </motion.h2>
            <motion.div
              className="w-full h-1 bg-gray-300 mb-4"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
            />
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
            >
              {card.content}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}