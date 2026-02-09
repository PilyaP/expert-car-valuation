'use client'

import React, { memo } from 'react'
import { Award, Calendar, Scale, FileText, Building, Badge, Calculator, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'

function ExpertSection() {
  return (
    <section id="expert" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1592878995758-02b32ddabdd3?auto=format&fit=crop&w=1080&q=80"
                alt="Пилипенко Анатолій Іванович - сертифікований судовий незалежний експерт"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-900">Свідоцтво №22</p>
                  <p className="text-xs text-gray-500">МЮ України</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-900">З 1996 року</p>
                  <p className="text-xs text-gray-500">29+ років експертизи</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-4">Про незалежного експерта</div>
                <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Пилипенко Анатолій Іванович</h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Незалежний судовий експерт з транспортно-товарознавчої експертизи відповідно до Положення про експертно-кваліфікаційні комісії та атестацію судових експертів за спеціальністю «12.2 – Визначення вартості колісних транспортних засобів і розміру збитку, завданого власнику транспортного засобу».
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Член Союзу Експертів України з 2000 року. Сертифікат СЕУ А №0025 від 16.10.2009 р. Включений до{' '}
                <a href="http://rase.minjust.gov.ua/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Державного Реєстру атестованих судових експертів України
                </a>
                .
              </p>
            </div>

            {/* badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                [<Award className="w-6 h-6 text-blue-600" />, 'Свідоцтво', 'Міністерство юстиції України'],
                [<Calendar className="w-6 h-6 text-green-600" />, 'Незалежний стаж', 'З 1996 року (29+ років)'],
                [<Scale className="w-6 h-6 text-purple-600" />, 'Членство', 'Союз експертів України'],
                [<FileText className="w-6 h-6 text-orange-600" />, 'Свідоцтво', '№22 безстроково'],
                [<Building className="w-6 h-6 text-indigo-600" />, 'Стаж за фахом', 'З 1982 року'],
                [<Badge className="w-6 h-6 text-teal-600" />, 'Сертифікат СЕУ', 'А №0025 (вищий ступінь)'],
              ].map(([i, h, t], idx) => (
                <div className="flex items-start space-x-4" key={idx}>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">{i as React.ReactNode}</div>
                  <div>
                    <h4 className="text-gray-900 mb-1">{h as string}</h4>
                    <p className="text-gray-600 text-sm">{t as string}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Замовити оцінку</Button>

              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
               onClick={() => window.open('/certificates/certificate-22.jpg', '_blank')}

              >
                Переглянути сертифікати
              </Button>
            </div>
          </div>
        </div>

        {/* two extra images */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1555140713-973b9f36cd1e?auto=format&fit=crop&w=1080&q=80"
                alt="Професійний експерт за роботою"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Wrench className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-900">Технічна експертиза</p>
                  <p className="text-xs text-gray-600">Детальний огляд</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1673187139211-1e7ec3dd60ec?auto=format&fit=crop&w=1080&q=80"
                alt="Процес огляду та оцінки автомобіля"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Calculator className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-900">Оцінка пошкоджень</p>
                  <p className="text-xs text-gray-600">Точний розрахунок</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(ExpertSection)
