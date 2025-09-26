'use client'

import React, { memo } from 'react'
import { Building, Car, MapPin } from 'lucide-react'

type GeoInfoProps = {
  mapsHref: string
  className?: string
}

function GeoInfo({ mapsHref, className = '' }: GeoInfoProps) {
  return (
    <section className={`text-center mt-16 ${className}`}>
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <MapPin className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <h3 className="text-2xl text-gray-900 mb-4">Судовий незалежний автоексперт Дніпро та область</h3>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h4 className="text-lg text-gray-900 mb-3 flex items-center">
              <Building className="w-5 h-5 text-blue-600 mr-2" />
              Основне місце роботи
            </h4>
            <p className="text-gray-600">
              <strong>м. Дніпро</strong>
              <br />Приймаємо клієнтів, проводимо оцінку, надаємо консультації
            </p>
          </div>
          <div>
            <h4 className="text-lg text-gray-900 mb-3 flex items-center">
              <Car className="w-5 h-5 text-green-600 mr-2" />
              Виїзна експертиза
            </h4>
            <p className="text-gray-600">
              <strong>Вся Дніпропетровська область</strong>
              <br />Виїжджаємо для проведення експертизи на місці
            </p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-green-200">
          <p className="text-gray-700 text-center">
            🏢 <strong>Офіс: </strong>
            <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 underline">
              смт. Слобожанське, вул. Нижньодніпровська, 1
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default memo(GeoInfo)
