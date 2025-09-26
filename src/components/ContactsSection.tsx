'use client'

import React, { memo } from 'react'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail } from 'lucide-react'

type ContactsSectionProps = {
  mapsHref: string
}

function ContactsSection({ mapsHref }: ContactsSectionProps) {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Зв'яжіться з нами</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Готові надати професійну консультацію та допомогти з незалежною експертною оцінкою</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Зона обслуговування</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    <strong>Основна робота:</strong> м. Дніпро
                    <br />
                    <strong>Виїзди:</strong> вся Дніпропетровська область
                  </p>
                  <p className="text-gray-600 text-sm">
                    Офіс:{' '}
                    <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 underline">
                      смт. Слобожанське, вул. Нижньодніпровська, 1
                    </a>
                  </p>
                </div>
              </div>

              {/* phones */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>

                <div>
                  <h3 className="text-gray-900 mb-2">Телефони</h3>

                  <div className="flex items-center gap-2 text-gray-600">
                    <a href="tel:+380972158437" className="hover:text-blue-600 transition-colors">
                      (097) 215-84-37
                    </a>

                    <a href="https://wa.me/380972158437" target="_blank" rel="noopener noreferrer" title="Написати у WhatsApp" className="inline-flex items-center">
                      <img src="/brands/whatsapp.png" alt="WhatsApp" className="w-5 h-5 align-middle" loading="lazy" />
                    </a>

                    <a href="viber://chat?number=%2B380972158437" title="Написати у Viber" className="inline-flex items-center">
                      <img src="/brands/viber.png" alt="Viber" className="w-5 h-5 align-middle" loading="lazy" />
                    </a>
                  </div>

                  <div className="mt-1 text-gray-600">
                    <a href="tel:+380637961403" className="hover:text-blue-600 transition-colors">
                      (063) 796-14-03
                    </a>
                  </div>
                </div>
              </div>

              {/* email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Електронна пошта</h3>
                  <p className="text-gray-600">
                    <a href="mailto:aiexpert@ua.fm" className="hover:text-blue-600 transition-colors">
                      aiexpert@ua.fm
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-gray-900 mb-3">Потрібна консультація?</h3>
              <p className="text-gray-600 mb-6">Приймаємо у Дніпрі та виїжджаємо по всій області. Зателефонуйте для безкоштовної консультації щодо незалежної експертної оцінки</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  <a href="tel:+380972158437">Зателефонувати</a>
                </Button>

                <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3">
                  <a
                    href={
                      'mailto:aiexpert@ua.fm' +
                      '?subject=' +
                      encodeURIComponent('Запит на оцінку автомобіля') +
                      '&body=' +
                      encodeURIComponent('Доброго дня! Мені потрібна консультація щодо оцінки автомобіля.')
                    }
                  >
                    Написати email
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.8744!2d35.0836!3d48.4647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2f0f0f0f0f0%3A0x0!2z0KHQu9C-0LHQvtC20LDQvdGB0YzQutC1!5e0!3m2!1suk!2sua!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Мапа розташування офісу експерта"
              ></iframe>
            </div>

            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100 max-w-sm">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-900">Судовий незалежний експерт Дніпро</p>
                  <p className="text-xs text-gray-500">Виїзди по області</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(ContactsSection)
