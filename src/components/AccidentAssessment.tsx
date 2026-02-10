"use client";

import React from "react";
import { Helmet } from "react-helmet-async";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";

import {
  ArrowLeft,
  Car,
  FileText,
  Calculator,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

type Props = {
  onBack: () => void;
  onContact?: () => void;
};

export default function AccidentAssessment({ onBack }: Props) {
  const PHONE_MAIN = "+380972158437";
  const PHONE_ALT = "+380637961403";
  const EMAIL = "aiexpert@ua.fm";
  const URL = "https://expert-car-ai.vercel.app/service/accident-assessment";
  const HOME = "https://expert-car-ai.vercel.app/";

  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Запит на оцінку після ДТП");
    const body = encodeURIComponent(
      "Доброго дня! Мені потрібна незалежна оцінка автомобіля після ДТП. Підкажіть, будь ласка, які документи потрібні та найближчий час огляду."
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Незалежна оцінка авто після ДТП у Дніпрі",
    serviceType: "Оцінка збитків та пошкоджень після ДТП",
    areaServed: ["Дніпро", "Дніпропетровська область"],
    url: URL,
    provider: {
      "@type": "ProfessionalService",
      name: "Судовий автоексперт — Пилипенко Анатолій Іванович",
      url: HOME,
      telephone: PHONE_MAIN,
      email: EMAIL,
      areaServed: ["Дніпро", "Дніпропетровська область"],

      // ВАЖНО: это помогает ловить русские запросы, НЕ добавляя русский текст на страницу
      alternateName: [
        "оценка авто после ДТП Днепр",
        "независимая оценка после ДТП Днепр",
        "оценка ущерба авто Днепр",
        "экспертная оценка ДТП Днепр",
      ],
    },
    description:
      "Незалежна оцінка авто після ДТП у Дніпрі: огляд пошкоджень, фотофіксація, розрахунок вартості ремонту/збитків та офіційний експертний висновок для суду і страхових.",
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Скільки часу займає оцінка авто після ДТП?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Зазвичай підготовка експертного висновку займає 1–3 робочі дні після огляду та збору необхідних даних.",
        },
      },
      {
        "@type": "Question",
        name: "Чи підходить експертний висновок для суду та страхової компанії?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Так. Висновок містить опис пошкоджень, фотофіксацію та розрахунки і використовується для судових справ та врегулювання страхових випадків.",
        },
      },
      {
        "@type": "Question",
        name: "Чи можливий виїзд по Дніпропетровській області?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Так, можливий виїзд по Дніпру та Дніпропетровській області за попереднім узгодженням часу.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          Незалежна оцінка авто після ДТП у Дніпрі — експертний висновок | Пилипенко А.І.
        </title>
        <meta
          name="description"
          content="Незалежна оцінка авто після ДТП у Дніпрі та області: огляд пошкоджень, фотофіксація, розрахунок вартості ремонту/збитків, офіційний експертний висновок для суду та страхових. 1–3 дні."
        />
        <link rel="canonical" href={URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Незалежна оцінка авто після ДТП у Дніпрі — експертний висновок" />
        <meta
          property="og:description"
          content="Огляд пошкоджень, фотофіксація, точний розрахунок збитків. Офіційний експертний висновок для суду та страхових. Дніпро та область."
        />
        <meta property="og:url" content={URL} />
      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
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
              <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full mb-4">
                Незалежна експертиза після ДТП
              </div>

              <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                Незалежна оцінка авто у Дніпрі при ДТП
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Точне визначення розміру збитку при ДТП від атестованого судового експерта.
                Офіційні експертні висновки для судів, страхових компаній та інших установ.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
                  onClick={() => handlePhoneCall(PHONE_MAIN)}
                >
                  Замовити оцінку
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3"
                  onClick={handleEmailClick}
                >
                  Написати email
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black/5">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1687867451910-28941a460f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Професійна оцінка пошкоджень автомобіля після ДТП"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Точний розрахунок збитків</h3>
              <p className="text-gray-600 text-sm">
                Детальна оцінка всіх пошкоджень згідно з офіційними методиками
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Офіційні документи</h3>
              <p className="text-gray-600 text-sm">
                Експертні висновки, які приймають суди та страхові компанії
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Швидке виконання</h3>
              <p className="text-gray-600 text-sm">
                Готовність експертного висновку протягом 1–3 робочих днів
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-gray-900 mb-6">
                  Що включає експертиза після ДТП
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      title: "Огляд пошкоджень",
                      text: "Детальний огляд та фіксація видимих і прихованих пошкоджень автомобіля",
                    },
                    {
                      title: "Розрахунок вартості ремонту",
                      text: "Визначення вартості відновлювального ремонту або втрати товарної вартості",
                    },
                    {
                      title: "Фотофіксація",
                      text: "Професійна фотофіксація пошкоджень з різних ракурсів",
                    },
                    {
                      title: "Експертний висновок",
                      text: "Офіційний документ з описом пошкоджень та розрахунками",
                    },
                  ].map((i) => (
                    <div key={i.title} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-gray-900 mb-1">{i.title}</h4>
                        <p className="text-gray-600 text-sm">{i.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-gray-200 bg-gradient-to-br from-red-50 to-orange-50">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-4">Зв'яжіться з експертом</h3>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-red-600" />
                      <div>
                        <p className="text-gray-900 text-sm">(097) 215-84-37</p>
                        <p className="text-gray-900 text-sm">(063) 796-14-03</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-red-600" />
                      <p className="text-gray-900 text-sm">{EMAIL}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-red-600" />
                      <p className="text-gray-900 text-sm">м. Дніпро та область</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-6">
                    <Button
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => handlePhoneCall(PHONE_MAIN)}
                    >
                      Зателефонувати зараз
                    </Button>

                    <Button
                      variant="outline"
                      className="border-red-600 text-red-600 hover:bg-red-50"
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

      {/* SEO Content Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-gray-900 mb-8 text-center">
              Незалежна оцінка автомобіля після ДТП у Дніпрі
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Якщо ви потрапили в ДТП у Дніпрі або Дніпропетровській області, професійна незалежна
                оцінка автомобіля допомагає обґрунтувати розмір збитків для суду та страхових компаній.
              </p>
              <p>
                Експертний висновок включає огляд пошкоджень, фотофіксацію та розрахунок вартості ремонту
                або втрати товарної вартості згідно з чинними методиками.
              </p>
              <p>
                Працюємо у Дніпрі та з виїздом по області. Орієнтовний строк підготовки висновку — 1–3 робочі дні.
                Телефонуйте: (097) 215-84-37, (063) 796-14-03.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
