import React from "react";
import { Helmet } from "react-helmet-async";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";

import {
  ArrowLeft,
  Scale,
  FileText,
  Shield,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  Gavel,
} from "lucide-react";

type Props = {
  onBack: () => void;
  onContact?: () => void;
};

export default function CourtAssessment({ onBack }: Props) {
  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href =
      "mailto:aiexpert65@gmail.com?subject=Запит%20на%20судову%20автоекспертизу&body=Доброго%20дня!%20Мені%20потрібна%20судова%20автоекспертиза%20транспортного%20засобу.";
  };

  const canonical =
    "https://expert-dp.com/service/court-assessment";

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Судова автоекспертиза у Дніпрі",
    serviceType: "Судова експертиза транспортних засобів",
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
      "Судова автоекспертиза у Дніпрі: огляд транспортного засобу, аналіз пошкоджень, розрахунок збитків та підготовка офіційного експертного висновку для судових справ.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Для яких справ проводиться судова автоекспертиза?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Судова автоекспертиза проводиться у цивільних, адміністративних та кримінальних справах, а також у спорах зі страховими компаніями.",
        },
      },
      {
        "@type": "Question",
        name: "Чи має експертний висновок юридичну силу?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Так, експертний висновок готується відповідно до вимог законодавства України та використовується у судовому процесі.",
        },
      },
      {
        "@type": "Question",
        name: "Чи можливий виїзд експерта у межах області?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Так, можливий виїзд по Дніпру та Дніпропетровській області за попереднім узгодженням.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          Судова автоекспертиза у Дніпрі — експертний висновок для суду |
          Пилипенко А.І.
        </title>
        <meta
          name="description"
          content="Судова автоекспертиза у Дніпрі та області: огляд транспортного засобу, аналіз пошкоджень, розрахунок збитків і підготовка офіційного експертного висновку для суду."
        />
        <link rel="canonical" href={canonical} />

        <meta
          property="og:title"
          content="Судова автоекспертиза у Дніпрі — експертний висновок"
        />
        <meta
          property="og:description"
          content="Офіційний експертний висновок для судових справ. Дніпро та область."
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
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
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
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-4">
                Судова автоекспертиза
              </div>

              <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                Судова автоекспертиза у Дніпрі
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Проведення судової експертизи транспортних засобів для цивільних,
                адміністративних та кримінальних справ. Підготовка офіційного
                експертного висновку атестованим судовим автоекспертом.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  onClick={() => handlePhoneCall("+380972158437")}
                >
                  Замовити експертизу
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                  onClick={handleEmailClick}
                >
                  Написати email
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black/5">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1654588833543-f231a643ee72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydCUyMGV4cGVydCUyMGF1dG9tb3RpdmUlMjBldmFsdWF0aW9uJTIwbGVnYWx8ZW58MXx8fHwxNzU4ODAxMDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Судова автоекспертиза транспортного засобу"
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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Судовий статус</h3>
              <p className="text-gray-600 text-sm">
                Висновки, які використовуються у судових процесах
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Офіційні документи</h3>
              <p className="text-gray-600 text-sm">
                Повний пакет експертної документації
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Оперативність</h3>
              <p className="text-gray-600 text-sm">
                Підготовка експертного висновку у погоджені строки
              </p>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-gray-900 mb-6">
                  Що включає судова автоекспертиза
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">
                        Огляд транспортного засобу
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Детальний технічний огляд та фіксація стану автомобіля
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">
                        Аналіз пошкоджень
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Визначення характеру та причин утворення пошкоджень
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">
                        Розрахунок збитків
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Визначення вартості відновлювального ремонту або втрати
                        товарної вартості
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">
                        Судовий експертний висновок
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Підготовка офіційного висновку для подання до суду
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl text-gray-900 mb-4">
                  Для яких справ проводиться експертиза
                </h3>

                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Цивільні та кримінальні справи</li>
                    <li>• Судові спори після ДТП</li>
                    <li>• Спори зі страховими компаніями</li>
                    <li>• Визначення розміру матеріальних збитків</li>
                    <li>• Судові експертні дослідження за ухвалою суду</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Gavel className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-gray-900">
                      Порядок проведення експертизи
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">
                        1
                      </div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Звернення</h4>
                        <p className="text-gray-600 text-xs">
                          Узгодження завдання експертизи та переліку документів
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">
                        2
                      </div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Огляд ТЗ</h4>
                        <p className="text-gray-600 text-xs">
                          Огляд автомобіля у Дніпрі або з виїздом
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">
                        3
                      </div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Дослідження</h4>
                        <p className="text-gray-600 text-xs">
                          Аналіз матеріалів справи та результатів огляду
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">
                        4
                      </div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Висновок</h4>
                        <p className="text-gray-600 text-xs">
                          Підготовка та передача експертного висновку
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-4">Зв’яжіться з експертом</h3>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <div>
                        <p className="text-gray-900 text-sm">(097) 215-84-37</p>
                        <p className="text-gray-900 text-sm">(063) 796-14-03</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <p className="text-gray-900 text-sm">aiexpert65@gmail.com</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <p className="text-gray-900 text-sm">м. Дніпро та область</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-6">
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => handlePhoneCall("+380972158437")}
                    >
                      Зателефонувати зараз
                    </Button>

                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
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
    </div>
  );
}
