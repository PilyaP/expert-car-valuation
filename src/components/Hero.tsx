'use client'

import React, { memo } from 'react'
import { Button } from '@/components/ui/button'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'

type HeroProps = {
  onPrimary?: () => void // optional handler for the primary CTA (call)
  onSecondary?: () => void // optional handler for the secondary CTA (scroll to contacts)
}

const BADGES: { text: string; bg: string; color: string }[] = [
  { text: 'Атестований незалежний експерт', bg: 'bg-green-100', color: 'text-green-600' },
  { text: 'Офіційні незалежні висновки', bg: 'bg-blue-100', color: 'text-blue-600' },
  { text: 'Швидко та якісно', bg: 'bg-purple-100', color: 'text-purple-600' },
]


function Hero({ onPrimary, onSecondary }: HeroProps) {
  return (
    <section id="hero" className="bg-gradient-to-br from-slate-50 to-blue-50/60">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-3 pb-16">
          {/* left */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.08] max-w-2xl">
                Оцінка авто у Дніпрі, визначення збитків при ДТП та оцінка для митниці — офіційні процедури від незалежного експерта
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                Атестований незалежний судовий експерт з понад 29-річним досвідом. Офіційні висновки для митниці, МРЕО, суду, нотаріусів, страхових компаній, податкових і слідчих органів, ЗСУ та юридичних фірм.
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Визначення вартості КТЗ і розміру збитку, завданого власнику. Працюємо по Дніпру та з виїздом по області.
              </p>

              {/* soft card with points */}
<div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100"> <p className="text-blue-700 text-center mb-2"> <span className="text-xl">🔹 Професійна експертна оцінка = справедливе рішення</span> </p> <p className="text-gray-600 text-center">🔹 Експертні незалежні висновки для всіх установ та організацій</p> </div> </div>



            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                asChild={!onPrimary}
                onClick={onPrimary}
              >
                {onPrimary ? (
                  <span>Замовити оцінку</span>
                ) : (
                  <a href="tel:+380972158437">Замовити оцінку</a>
                )}
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                asChild={!onSecondary}
                onClick={onSecondary}
              >
                {onSecondary ? <span>Дізнатися більше</span> : <a href="#contacts">Дізнатися більше</a>}
              </Button>
            </div>

            {/* Badges — без динамічних класів Tailwind */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {BADGES.map((b) => (
                <div key={b.text} className="flex items-center space-x-3">
                  <div className={`w-8 h-8 ${b.bg} rounded-full flex items-center justify-center`}>
                    <svg className={`w-5 h-5 ${b.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">{b.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
<div className="rounded-2xl overflow-hidden shadow-2xl bg-black/5">
  <ImageWithFallback
    src="https://images.unsplash.com/photo-1534953280463-b7b1b04e5fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    alt="Оцінка Дніпро"
    className="w-full h-auto object-contain"
  />
</div>

            {/* floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900">Незалежний експерт зі свідоцтвом МЮ</p>
                  <p className="text-sm text-gray-500">29 років експертного стажу</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    
  )
}

export default memo(Hero)
