import React from "react";
import { Helmet } from "react-helmet-async";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";

import {
  ArrowLeft,
  FileText,
  Calculator,
  Shield,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  DollarSign,
} from "lucide-react";

type Props = {
  onBack: () => void;
  onContact?: () => void;
};

export default function InsuranceAssessment({ onBack }: Props) {
  const canonical =
    "https://expert-dp.com/service/insurance-assessment";

  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href =
      "mailto:aiexpert65@gmail.com?subject=Запит%20на%20оцінку%20для%20страхової%20компанії&body=Доброго%20дня!%20Мені%20потрібна%20незалежна%20експертна%20оцінка%20автомобіля%20для%20страхової%20компанії.%20Прошу%20підказати%20перелік%20документів%20та%20терміни.";
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Незалежна оцінка автомобіля для страхових компаній у Дніпрі",
    serviceType: "Оцінка збитків / вартості ремонту для страхових випадків",
    provider: {
      "@type": "ProfessionalService",
      name: "Судовий автоексперт — Пилипенко Анатолій Іванович",
      telephone: "+380972158437",
      email: "aiexpert65@gmail.com",
      areaServed: ["Дніпро", "Дніпропетровська область"],
      url: "https://expert-dp.com/",
    },
    areaServed: ["Дніпро", "Дніпропетровська область"],
    url: canonical,
    description:
      "Незалежна оцінка автомобіля для страхових компаній у Дніпрі: огляд пошкоджень, фотофіксація, розрахунок вартості відновлювального ремонту/збитків та підготовка офіційного експертного висновку для врегулювання страхових випадків.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Коли потрібна незалежна оцінка для страхової компанії?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Коли страхова занижує суму відшкодування, відмовляє у виплаті, є спір щодо переліку/обсягу пошкоджень або потрібна повторна експертиза (КАСКО/ОСЦПВ).",
        },
      },
      {
        "@type": "Question",
        name: "Скільки часу займає підготовка експертного висновку?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Зазвичай 1–3 робочі дні після огляду та отримання необхідних документів/даних.",
        },
      },
      {
        "@type": "Question",
        name: "Чи підходить висновок для суду та страхової компанії?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Так. Висновок містить опис пошкоджень, фотофіксацію та розрахунки і може використовуватися для врегулювання страхового випадку та у судових справах.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          Оцінка авто для страхової у Дніпрі — незалежний експертний висновок |
          Пилипенко А.І.
        </title>
        <meta
          name="description"
          content="Незалежна оцінка автомобіля для страхових компаній у Дніпрі та області: огляд, фотофіксація, розрахунок вартості ремонту/збитків, офіційний експертний висновок. 1–3 дні."
        />
        <link rel="canonical" href={canonical} />

        <meta
          property="og:title"
          content="Незалежна оцінка авто для страхової у Дніпрі"
        />
        <meta
          property="og:description"
          content="Огляд пошкоджень, фотофіксація та точні розрахунки. Офіційний експертний висновок для врегулювання страхового випадку. Дніпро та область."
        />
        <meta property="og:url" content={canonical} />
      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center mb-8">
            <Button
              variant="outline"
              onClick={onBack}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Назад до послуг</span>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 bg-rose-100 text-rose-800 text-sm rounded-full mb-4">
                Оцінка для страхових компаній
              </div>

              <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                Незалежна оцінка автомобіля для страхових компаній у Дніпрі
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Професійна експертна оцінка для врегулювання страхових випадків.
                Об’єктивний розрахунок збитків та офіційний висновок.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3"
                  onClick={() => handlePhoneCall("+380972158437")}
                >
                  Замовити оцінку
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-3"
                  onClick={handleEmailClick}
                >
                  Написати email
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black/5">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1687139731336-faba74190494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBjYXIlMjBjbGFpbSUyMGFzc2Vzc21lbnR8ZW58MXx8fHwxNzU4ODAxNzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Незалежна оцінка автомобіля для страхової компанії"
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
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Незалежна експертиза</h3>
              <p className="text-gray-600 text-sm">
                Об’єктивна оцінка без конфлікту інтересів
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Точні розрахунки</h3>
              <p className="text-gray-600 text-sm">
                Розрахунки вартості ремонту/збитків за методиками
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Офіційні документи</h3>
              <p className="text-gray-600 text-sm">
                Експертний висновок з фотофіксацією та обґрунтуванням
              </p>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-gray-900 mb-6">
                  Коли потрібна незалежна оцінка для страхової
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      title: "Занижена компенсація",
                      text: "Коли пропонують суму відшкодування, яка не покриває реальні витрати на ремонт.",
                    },
                    {
                      title: "Відмова у виплаті",
                      text: "Коли є сумніви в обґрунтованості відмови або потрібні підтверджені розрахунки.",
                    },
                    {
                      title: "КАСКО і ОСЦПВ",
                      text: "Для врегулювання страхових випадків за КАСКО та ОСЦПВ.",
                    },
                    {
                      title: "Спірні ситуації",
                      text: "Коли є розбіжності щодо переліку/обсягу пошкоджень або вартості ремонту.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ВАЖНО: лучше без списка брендов (чтобы не ловить претензии “почему нет X”).
                  Если хочешь оставить — скажи, и я сделаю корректно. */}
              <div>
                <h3 className="text-2xl text-gray-900 mb-4">
                  Для яких страхових випадків робимо оцінку
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• ДТП (пошкодження кузову, ходової, скла)</li>
                    <li>• Приховані дефекти та додаткові пошкодження</li>
                    <li>• Втрата товарної вартості (за потреби)</li>
                    <li>• Повторна/додаткова експертиза</li>
                    <li>• Досудове врегулювання або підготовка до суду</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-rose-600" />
                    </div>
                    <h3 className="text-gray-900">
                      Що впливає на вартість оцінки
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        n: "1",
                        t: "Тип транспортного засобу",
                        d: "Легковий/вантажний/мотоцикл/автобус тощо.",
                      },
                      {
                        n: "2",
                        t: "Складність пошкоджень",
                        d: "Обсяг пошкоджень, необхідність додаткового огляду/демонтажу.",
                      },
                      {
                        n: "3",
                        t: "Термін виконання",
                        d: "Стандартний або терміновий підготовки висновку.",
                      },
                      {
                        n: "4",
                        t: "Місце проведення",
                        d: "У Дніпрі або з виїздом по області (за узгодженням).",
                      },
                    ].map((x) => (
                      <div key={x.n} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">
                          {x.n}
                        </div>
                        <div>
                          <h4 className="text-gray-900 text-sm mb-1">{x.t}</h4>
                          <p className="text-gray-600 text-xs">{x.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-gradient-to-br from-rose-50 to-pink-50">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-4">Зв&apos;яжіться з експертом</h3>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-rose-600" />
                      <div>
                        <p className="text-gray-900 text-sm">(097) 215-84-37</p>
                        <p className="text-gray-900 text-sm">(063) 796-14-03</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-rose-600" />
                      <p className="text-gray-900 text-sm">aiexpert65@gmail.com</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-rose-600" />
                      <p className="text-gray-900 text-sm">м. Дніпро та область</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-6">
                    <Button
                      className="bg-rose-600 hover:bg-rose-700 text-white"
                      onClick={() => handlePhoneCall("+380972158437")}
                    >
                      Зателефонувати зараз
                    </Button>
                    <Button
                      variant="outline"
                      className="border-rose-600 text-rose-600 hover:bg-rose-50"
                      onClick={handleEmailClick}
                    >
                      Написати email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-gray-900 mb-8 text-center">
              Незалежна оцінка авто для страхових компаній у Дніпрі та області
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Якщо страхова компанія занижує суму компенсації або відмовляє у
                виплаті, незалежна експертна оцінка допомагає обґрунтувати
                реальний розмір збитків. Проводимо огляд, фотофіксацію та
                розрахунок вартості відновлювального ремонту з підготовкою
                офіційного висновку.
              </p>

              <p>
                <strong>Оцінка для страхової включає:</strong> огляд пошкоджень,
                фотофіксацію, розрахунки вартості ремонту/збитків, за потреби —
                визначення втрати товарної вартості, а також оформлення
                експертного документа з обґрунтуванням.
              </p>

              <p>
                <strong>Коли потрібна експертиза:</strong> спір зі страховою,
                повторна оцінка, незгода з сумою виплати, підготовка до
                досудового врегулювання або судового розгляду.
              </p>

              <p>
                Працюємо у Дніпрі та виїжджаємо по Дніпропетровській області.
                Готовність висновку — 1–3 робочі дні. Консультації безкоштовні.
                Телефонуйте (097) 215-84-37 або (063) 796-14-03.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
