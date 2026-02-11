'use client'

import React, { memo } from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'

type SiteFooterProps = {
  mapsHref: string
  onServicesClick?: () => void
}

function Footer({ mapsHref, onServicesClick }: SiteFooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-white mb-4">Судовий незалежний автоексперт Дніпро</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Пилипенко А.І. — атестований судовий незалежний автоексперт. Працюємо у Дніпрі та по області. Офіційні незалежні висновки для державних установ і приватних організацій.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+380972158437" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="Подзвонити">
                <Phone className="w-4 h-4 text-gray-400" />
              </a>

              <a
                href={'mailto:aiexpert65@gmail.com?subject=' + encodeURIComponent('Запит на оцінку автомобіля')}
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Написати email"
              >
                <Mail className="w-4 h-4 text-gray-400" />
              </a>

              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Відкрити адресу в Google Maps"
              >
                <MapPin className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Послуги</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {['Оцінка для митниці', 'Оцінка для МРЕО', 'Судова експертиза', 'Оцінка при розлученні', 'Оцінка при ДТП'].map((label) => (
                <li key={label}>
                  <button
                    onClick={onServicesClick}
                    className="hover:text-white transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Контакти</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="tel:+380972158437" className="hover:text-white transition-colors">
                  (097) 215-84-37
                </a>
              </li>
              <li>
                <a href="tel:+380637961403" className="hover:text-white transition-colors">
                  (063) 796-14-03
                </a>
              </li>
              <li>
                <a href="mailto:aiexpert65@gmail.com" className="hover:text-white transition-colors">
                  aiexpert65@gmail.com
                </a>
              </li>
              <li>
                <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  смт. Слобожанське, вул. Нижньодніпровська, 1
                </a>
              </li>
              <li>м. Дніпро та область</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 Пилипенко А.І. Всі права захищені. Свідоцтво судового незалежного експерта №22</p>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
