'use client';

import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  ArrowLeft,
  FileText,
  Heart,
  Users,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Scale,
} from "lucide-react";

type Props = {
  onBack: () => void;
  onContact?: () => void;
};

const PHONE_MAIN = "+380972158437";
const PHONE_ALT = "+380637961403";
const EMAIL = "aiexpert@ua.fm";

function buildMailto(subject: string, body: string) {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return `mailto:${EMAIL}?subject=${s}&body=${b}`;
}

export default function NotaryAssessment({ onBack, onContact }: Props) {
  const mailto = React.useMemo(
    () =>
      buildMailto(
        "Запит на оцінку для нотаріуса",
        "Доброго дня! Мені потрібна оцінка автомобіля для нотаріального оформлення."
      ),
    []
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center mb-8">
            <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Назад до послуг</span>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full mb-4">
                Нотаріальне оформлення
              </div>

              <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                Оцінка для нотаріуса у Дніпрі
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Експертна оцінка автомобілів для нотаріального оформлення спадщини,
                розподілу майна при розлученні та угод купівлі-продажу.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                  <a href={`tel:${PHONE_MAIN}`} onClick={onContact}>
                    Замовити оцінку
                  </a>
                </Button>

                <Button asChild variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3">
                  <a href={mailto} onClick={onContact}>
                    Написати email
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black/5">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1666018215790-867b14fe4822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Нотаріальне оформлення документів з оцінкою автомобіля"
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
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Спадкові справи</h3>
              <p className="text-gray-600 text-sm">Оцінка автомобіля для оформлення спадщини у нотаріуса</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Розподіл майна</h3>
              <p className="text-gray-600 text-sm">Оцінка при розлученні та розподілі спільного майна</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Угоди та договори</h3>
              <p className="text-gray-600 text-sm">Оцінка для нотаріального посвідчення угод</p>
            </div>
          </div>

          {/* Details */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-gray-900 mb-6">Нотаріальні послуги з оцінкою</h2>

                <div className="space-y-4">
                  {[
                    {
                      title: "Оформлення спадщини",
                      text: "Визначення вартості автомобіля для розрахунку спадкового збору",
                    },
                    {
                      title: "Розподіл при розлученні",
                      text: "Справедливий розподіл спільного майна подружжя",
                    },
                    {
                      title: "Договори купівлі-продажу",
                      text: "Нотаріальне посвідчення угод з визначенням справедливої ціни",
                    },
                    {
                      title: "Договори дарування",
                      text: "Оцінка для нотаріального оформлення дарування автомобіля",
                    },
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
                <h3 className="text-2xl text-gray-900 mb-4">Особливості нотаріальної оцінки</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Висновок визнається всіма нотаріусами України</li>
                    <li>• Розрахунок спадкового збору та державного мита</li>
                    <li>• Оцінка на дату відкриття спадщини</li>
                    <li>• Врахування зносу та технічного стану</li>
                    <li>• Справедливий розподіл майнових прав</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Scale className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-gray-900">Процедура оцінки</h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      { n: 1, title: "Консультація", text: "Обговорення мети оцінки та необхідних документів" },
                      { n: 2, title: "Огляд автомобіля", text: "Технічний огляд та визначення фактичного стану" },
                      { n: 3, title: "Розрахунок вартості", text: "Визначення ринкової вартості на потрібну дату" },
                      { n: 4, title: "Експертний висновок", text: "Підготовка офіційного документа для нотаріуса" },
                    ].map((s) => (
                      <div key={s.n} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">
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

              <Card className="border-gray-200 bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-4">Консультація експерта</h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-purple-600" />
                      <div>
                        <p className="text-gray-900 text-sm">(097) 215-84-37</p>
                        <p className="text-gray-900 text-sm">(063) 796-14-03</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-purple-600" />
                      <p className="text-gray-900 text-sm">{EMAIL}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-purple-600" />
                      <p className="text-gray-900 text-sm">м. Дніпро та область</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-6">
                    <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                      <a href={`tel:${PHONE_MAIN}`} onClick={onContact}>
                        Зателефонувати
                      </a>
                    </Button>

                    <Button asChild variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
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

      {/* SEO text (оставил как есть) */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-gray-900 mb-8 text-center">Нотаріальна оцінка автомобіля у Дніпрі</h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Нотаріальна оцінка автомобіля у Дніпрі проводиться атестованим експертом для оформлення
                різних нотаріальних дій...
              </p>
              {/* остальной текст можешь оставить как у тебя */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
