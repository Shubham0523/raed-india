import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Breast', newCases: 192020, deaths: 98337, prevalence: 526248 },
  { name: 'Lip, oral cavity', newCases: 143759, deaths: 79979, prevalence: 370106 },
  { name: 'Cervix uteri', newCases: 127526, deaths: 79906, prevalence: 339589 },
  { name: 'Lung', newCases: 81748, deaths: 75031, prevalence: 113990 },
  { name: 'Oesophagus', newCases: 70637, deaths: 66410, prevalence: 111545 },
  { name: 'Colorectum', newCases: 70038, deaths: 40993, prevalence: 175979 },
  { name: 'Stomach', newCases: 64611, deaths: 57727, prevalence: 102829 },
  { name: 'Leukaemia', newCases: 49883, deaths: 36871, prevalence: 136123 },
  { name: 'Ovary', newCases: 47333, deaths: 32978, prevalence: 119183 },
  { name: 'NHL', newCases: 39736, deaths: 22972, prevalence: 108866 },
];

export default function GraphInsight() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Incidence, Mortality and Prevalence by Cancer Site</h1>
      <div className="h-[500px] w-full mb-12"> {/* Added mb-12 for extra bottom margin */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={90} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="newCases" fill="#8884d8" name="New Cases" />
            <Bar dataKey="deaths" fill="#82ca9d" name="Deaths" />
            <Bar dataKey="prevalence" fill="#ffc658" name="5-year Prevalence" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Key Insights:</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Breast cancer has the highest incidence, mortality, and 5-year prevalence among all cancer types.</li>
          <li>Lip and oral cavity cancer ranks second in new cases and deaths, but third in 5-year prevalence.</li>
          <li>Lung cancer has a high mortality rate compared to its incidence, indicating a potentially more aggressive or difficult-to-treat cancer type.</li>
          <li>Colorectal cancer has a relatively high 5-year prevalence compared to its incidence and mortality, suggesting potentially better treatment outcomes or earlier detection.</li>
          <li>NHL (Non-Hodgkin Lymphoma) has the lowest incidence and mortality among the top 10, but still maintains a significant 5-year prevalence.</li>
        </ul>
        <p className="text-sm text-gray-600 mt-4">
          Note: This graph shows data for the top 10 cancer types by new cases. The full dataset includes more cancer types not displayed here. The data is taken from the WHO report on India, as part of the Global Cancer Observatory Report.
        </p>
      </div>
    </div>
  );
}