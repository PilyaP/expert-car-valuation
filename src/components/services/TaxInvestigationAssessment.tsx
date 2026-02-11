'use client';

import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft, Shield, CheckCircle, Clock, MapPin, Phone, Mail, Building, Search } from "lucide-react";

type Props = {
  onBack: () => void;
  onContact?: () => void;
};

const PHONE_MAIN = "+380972158437";
const PHONE_ALT = "+380637961403";
const EMAIL = "aiexpert65@gmail.com";

function buildMailto(subject: string, body: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function TaxInvestigationAssessment({ onBack, onContact }: Props) {
  const mailto = React.useMemo(
    () =>
      buildMailto(
        "Запит на оцінку для податкових/слідчих органів",
        "Доброго дня! Мені потрібна експертна оцінка автомобіля для податкових або слідчих органів."
      ),
    []
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center mb-8">
            <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Назад до послуг</span>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full mb-4">
                Оцінка для державних органів
              </div>

              <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                Оцінка автомобіля для податкових та слідчих органів у Дніпрі
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Офіційні незалежні експертні висновки для податкових органів, слідчих органів, прокуратури,
                адвокатських запитів та інших державних установ.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                  <a href={`tel:${PHONE_MAIN}`} onClick={onContact}>
                    Замовити оцінку
                  </a>
                </Button>

                <Button asChild variant="outline" size="lg" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3">
                  <a href={mailto} onClick={onContact}>
                    Написати email
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black/5">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1654588833543-f231a643ee72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Експертна оцінка автомобіля для державних органів"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Офіційні висновки</h3>
              <p className="text-gray-600 text-sm">Документи з юридичною силою для державних органів</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Детальне дослідження</h3>
              <p className="text-gray-600 text-sm">Повний комплекс досліджень згідно з вимогами органів</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Терміновість</h3>
              <p className="text-gray-600 text-sm">Можливість виконання експертизи у терміновому порядку</p>
            </div>
          </div>

          {/* Details */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-gray-900 mb-6">Для яких органів проводимо оцінку</h2>

                <div className="space-y-4">
                  {[
                    { title: "Податкові органи", text: "ДПС України для податкових перевірок" },
                    { title: "Слідчі органи", text: "Поліція, прокуратура у провадженнях" },
                    { title: "Адвокатські запити", text: "Для захисту у кримінальних та цивільних справах" },
                    { title: "Силові структури", text: "СБУ, військові частини, інші правоохоронні органи" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl text-gray-900 mb-4">Типи експертних досліджень</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Визначення ринкової вартості транспортного засобу</li>
                    <li>• Розрахунок розміру збитків при ДТП</li>
                    <li>• Оцінка втрати товарної вартості</li>
                    <li>• Визначення вартості ремонту</li>
                    <li>• Експертиза технічного стану автомобіля</li>
                    <li>• Оцінка для податкових розрахунків</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Building className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="text-gray-900">Документи для експертизи</h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      { n: 1, title: "Офіційний запит", text: "Запит від органу з підписом/печаткою (за потреби)" },
                      { n: 2, title: "Документи на авто", text: "Техпаспорт, реєстрація, договір купівлі тощо" },
                      { n: 3, title: "Додаткові матеріали", text: "Фото, постанови, протоколи (якщо є)" },
                      { n: 4, title: "Доступ до об'єкта", text: "Можливість огляду авто експертом" },
                    ].map((s) => (
                      <div key={s.n} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">
                          {s.n}
                        </div>
                        <div>
                          <h4 className="text-gray-900 text-sm mb-1">{s.title}</h4>
                          <p className="text-gray-600 text-xs">{s.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-gradient-to-br from-orange-50 to-amber-50">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-4">Зв'яжіться з експертом</h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-orange-600" />
                      <div>
                        <p className="text-gray-900 text-sm">(097) 215-84-37</p>
                        <p className="text-gray-900 text-sm">(063) 796-14-03</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-orange-600" />
                      <p className="text-gray-900 text-sm">{EMAIL}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-orange-600" />
                      <p className="text-gray-900 text-sm">м. Дніпро та область</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-6">
                    <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                      <a href={`tel:${PHONE_MAIN}`} onClick={onContact}>
                        Зателефонувати зараз
                      </a>
                    </Button>

                    <Button asChild variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                      <a href={mailto} onClick={onContact}>
                        Написати email
                      </a>
                    </Button>

                    <Button asChild variant="ghost" className="text-gray-700">
                      <a href={`tel:${PHONE_ALT}`} onClick={onContact}>
                        Додатковий номер: (063) 796-14-03
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* SEO текст можно оставить как у тебя */}
    </div>
  );
}
