'use client'

import React, { memo } from 'react'
import { Scale, Calculator, Award, Shield } from 'lucide-react'

const ADVANTAGES: { icon: React.ReactNode; title: string; text: string }[] = [
  {
    icon: <Scale className="w-8 h-8 text-blue-600" />,
    title: 'Впевненість у суді та зі страховими',
    text: 'Експертні звіти, які приймають суди та установи',
  },
  {
    icon: <Calculator className="w-8 h-8 text-green-600" />,
    title: 'Розрахунок збитків без зайвих суперечок',
    text: 'Точні розрахунки згідно методології',
  },
  {
    icon: <Award className="w-8 h-8 text-purple-600" />,
    title: "Професійно. Об'єктивно. Законно.",
    text: '29 років досвіду та репутація',
  },
  {
    icon: <Shield className="w-8 h-8 text-orange-600" />,
    title: 'Правдива цифра — ваш захист у суді',
    text: 'Професійна оцінка захищає ваші інтереси',
  },
]

function Advantages() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVANTAGES.map((a, i) => (
            <div className="text-center" key={i}>
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                {a.icon}
              </div>
              <h3 className="text-gray-900 mb-2">{a.title}</h3>
              <p className="text-gray-600 text-sm">{a.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-full border border-blue-200">
            <span className="text-blue-700">
              Професійна оцінка збитків — ваш аргумент | Чесна експертиза для чесного рішення
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Advantages)
