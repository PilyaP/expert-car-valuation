import React from "react";
import { Helmet } from "react-helmet-async";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";

import {
  ArrowLeft,
  Building,
  Calculator,
  Shield,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Briefcase,
} from "lucide-react";

type Props = {
  onBack: () => void;
  onContact?: () => void;
};

export default function CorporateAssessment({ onBack }: Props) {
  const PHONE_MAIN = "+380972158437";
  const PHONE_ALT = "+380637961403";
  const EMAIL = "aiexpert65@gmail.com";

  // IMPORTANT: постав правильний URL сторінки (роут)
  const URL = "https://expert-dp.com/service/corporate-assessment";
  const HOME = "https://expert-dp.com/";

  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Запит на корпоративну оцінку автомобіля");
    const body = encodeURIComponent(
      "Доброго дня! Мені потрібна експертна оцінка автомобіля для юридичної особи/компанії. Підкажіть, будь ласка, які документи потрібні та строки виконання."
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Експертна оцінка автомобіля для юридичних осіб у Дніпрі",
    serviceType: "Корпоративна оцінка транспортних засобів",
    areaServed: ["Дніпро", "Дніпропетровська область"],
    url: URL,
    provider: {
      "@type": "ProfessionalService",
      name: "Судовий автоексперт — Пилипенко Анатолій Іванович",
      url: HOME,
      telephone: PHONE_MAIN,
      email: EMAIL,
      areaServed: ["Дніпро", "Дніпропетровська область"],
      alternateName: [
        "оценка авто для юридических лиц Днепр",
        "оценка автопарка Днепр",
        "оценка транспорта для предприятия Днепр",
      ],
    },
    description:
      "Корпоративна оцінка автомобіля для юридичних осіб у Дніпрі: постановка на баланс, переоцінка основних засобів, страхування автопарку, угоди купівлі-продажу. Офіційний експертний висновок.",
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          Корпоративна оцінка авто у Дніпрі — для юридичних осіб | Пилипенко А.І.
        </title>
        <meta
          name="description"
          content="Експертна оцінка автомобіля для юридичних осіб у Дніпрі: постановка на баланс, переоцінка ОЗ, страхування автопарку, угоди купівлі-продажу. Офіційний висновок. 1–5 робочих днів."
        />
        <link rel="canonical" href={URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Корпоративна оцінка авто у Дніпрі — для юридичних осіб" />
        <meta
          property="og:description"
          content="Професійна оцінка транспорту для підприємств: баланс, переоцінка, страхування, угоди. Офіційний експертний висновок."
        />
        <meta property="og:url" content={URL} />
      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center mb-8">
            <Button variant="outline" onClick={onBack} className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Назад до послуг</span>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full mb-4">
                Корпоративна оцінка
              </div>

              <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                Експертна оцінка автомобіля для юридичних осіб та компаній у Дніпрі
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Професійна оцінка транспортних засобів для підприємств та організацій. Офіційні висновки
                для бухгалтерського обліку, аудиту, страхування корпоративного автопарку.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3"
                  onClick={() => handlePhoneCall(PHONE_MAIN)}
                >
                  Замовити оцінку
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 px-8 py-3"
                  onClick={handleEmailClick}
                >
                  Написати email
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black/5">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFjY291bnRpbmclMjBmaW5hbmNlfGVufDF8fHx8MTc1ODgwMTk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Корпоративна експертна оцінка автомобіля"
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
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Для бізнесу</h3>
              <p className="text-gray-600 text-sm">Оцінка корпоративного автопарку та комерційного транспорту</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Бухгалтерський облік</h3>
              <p className="text-gray-600 text-sm">Для постановки на баланс та переоцінки основних засобів</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Юридична підтримка</h3>
              <p className="text-gray-600 text-sm">Висновки для угод, реорганізації, ліквідації</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-gray-900 mb-6">Коли потрібна корпоративна оцінка</h2>
                <div className="space-y-4">
                  {[
                    ["Постановка на баланс", "Оцінка транспортних засобів при постановці на баланс підприємства"],
                    ["Переоцінка основних засобів", "Періодична переоцінка автопарку згідно з обліковою політикою"],
                    ["Продаж та купівля", "Оцінка при корпоративних угодах купівлі-продажу транспорту"],
                    ["Страхування автопарку", "Оцінка для корпоративного страхування КАСКО/ОСЦПВ"],
                  ].map(([title, text]) => (
                    <div key={title} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-gray-900 mb-1">{title}</h4>
                        <p className="text-gray-600 text-sm">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl text-gray-900 mb-4">Типи корпоративних оцінок</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Оцінка легкового корпоративного транспорту</li>
                    <li>• Оцінка вантажного автопарку</li>
                    <li>• Оцінка спеціальної техніки</li>
                    <li>• Оцінка автобусів та мікроавтобусів</li>
                    <li>• Оцінка для лізингових операцій</li>
                    <li>• Масова оцінка автопарку</li>
                    <li>• Експрес-оцінка для термінових угод</li>
                    <li>• Консультативна оцінка ринкової вартості</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-yellow-600" />
                    </div>
                    <h3 className="text-gray-900">Переваги роботи з нами</h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      ["Досвід роботи з бізнесом", "29+ років роботи з юридичними особами"],
                      ["Розуміння потреб бізнесу", "Знання специфіки обліку та аудиту"],
                      ["Гнучкість у роботі", "Масова оцінка, терміни під замовника"],
                      ["Конфіденційність", "Гарантована конфіденційність даних компанії"],
                    ].map(([t, d], idx) => (
                      <div key={t} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="text-gray-900 text-sm mb-1">{t}</h4>
                          <p className="text-gray-600 text-xs">{d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-gradient-to-br from-yellow-50 to-amber-50">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-4">Зв'яжіться з експертом</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-yellow-600" />
                      <div>
                        <p className="text-gray-900 text-sm">(097) 215-84-37</p>
                        <p className="text-gray-900 text-sm">(063) 796-14-03</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-yellow-600" />
                      <p className="text-gray-900 text-sm">{EMAIL}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-yellow-600" />
                      <p className="text-gray-900 text-sm">м. Дніпро та область</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-6">
                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-white" onClick={() => handlePhoneCall(PHONE_MAIN)}>
                      Зателефонувати зараз
                    </Button>
                    <Button variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-50" onClick={handleEmailClick}>
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
              Корпоративна оцінка авто для юридичних осіб у Дніпрі
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Юридичні особи потребують професійної оцінки транспортних засобів для постановки на баланс,
                переоцінки основних засобів, страхування автопарку, угод купівлі-продажу та аудиту.
              </p>
              <p>
                Проводимо оцінку ринкової та залишкової вартості, враховуємо знос, складаємо офіційний експертний висновок
                для бухгалтерського обліку та юридичних процедур.
              </p>
              <p>
                Працюємо у Дніпрі та з виїздом по області. Строк — 1–5 робочих днів. Телефонуйте: (097) 215-84-37, (063) 796-14-03.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
