'use client'

import React, { memo } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export type ServiceItem = {
  id: string
  title: string
  desc: string
  icon: React.ReactNode
  iconBg?: string
  iconHoverBg?: string
  ariaLabel?: string
}

type ServicesSectionProps = {
  services: ServiceItem[]
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Наші послуги</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Професійна експертна оцінка у Дніпрі та з виїздом по області. Офіційні незалежні висновки для всіх сфер.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link
              key={s.id}
              to={`/service/${s.id}`}
              aria-label={s.ariaLabel ?? `Детальніше: ${s.title}`}
              className="group block text-left h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"

            >
              <div className="h-full flex flex-col rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow bg-white">
         
                <div className="pointer-events-none">
                  <div className={`w-12 h-12 ${s.iconBg ?? 'bg-blue-50'} rounded-lg flex items-center justify-center mb-4`}>
                    {s.icon}
                  </div>

                  <h3 className="text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>

                  <div className="mt-4">
                    <span className="text-blue-600 font-medium group-hover:underline">Детальніше →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            <a href="https://wa.me/380972158437" target="_blank" rel="noopener noreferrer">
              Написати у WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default memo(ServicesSection)
