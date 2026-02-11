import React from "react";
import { Helmet } from "react-helmet-async";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";

import {
  ArrowLeft,
  Shield,
  CarFront,
  Calculator,
  FileText,
  CheckCircle,
  Phone,
  Mail,
  Building,
  Globe,
  Clock,
  Award,
} from "lucide-react";

type Props = {
  onBack: () => void;
  onContact?: () => void;
};

export default function CustomsAssessment({ onBack }: Props) {
  const canonical =
    "https://expert-car-ai.vercel.app/service/customs-assessment";

  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href =
      "mailto:aiexpert65@gmail.com?subject=Запит%20на%20оцінку%20для%20митниці&body=Доброго%20дня!%20Мені%20потрібна%20експертна%20оцінка%20транспортного%20засобу%20для%20митного%20оформлення.%20Прошу%20повідомити%20вартість%20та%20перелік%20документів.";
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Оцінка транспортних засобів для митниці України",
    serviceType: "Митна оцінка транспортних засобів",
    provider: {
      "@type": "ProfessionalService",
      name: "Судовий автоексперт — Пилипенко Анатолій Іванович",
      telephone: "+380972158437",
      email: "aiexpert65@gmail.com",
      areaServed: ["Дніпро", "Дніпропетровська область", "Україна"],
      url: "https://expert-car-ai.vercel.app/",
    },
    areaServed: ["Україна"],
    url: canonical,
    description:
      "Митна оцінка транспортних засобів для ввезення в Україну: визначення ринкової вартості, аналіз ринку аналогів та підготовка офіційного експертного висновку для митних органів.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Що дає експертна оцінка для митниці?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Експертна оцінка визначає ринкову вартість транспортного засобу для митного оформлення та підтверджує її офіційним висновком.",
        },
      },
      {
        "@type": "Question",
        name: "Які документи потрібні для митної оцінки?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Зазвичай потрібні: договір купівлі-продажу/інвойс, технічні дані ТЗ, документи про походження та доставку, а також фото (за потреби).",
        },
      },
      {
        "@type": "Question",
        name: "Які транспортні засоби оцінюються для митниці?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Оцінюються легкові авто, комерційний транспорт, спецтехніка, мотоцикли, водний транспорт, причепи та напівпричепи.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Helmet>
        <title>
          Оцінка авто для митниці України — експертний висновок | Дніпро
        </title>
        <meta
          name="description"
          content="Митна оцінка транспортних засобів для ввезення в Україну: визначення ринкової вартості, аналіз ринку аналогів та офіційний експертний висновок для митних органів. Дніпро та область."
        />
        <link rel="canonical" href={canonical} />

        <meta
          property="og:title"
          content="Оцінка транспортних засобів для митниці України"
        />
        <meta
          property="og:description"
          content="Офіційний експертний висновок для митного оформлення: аналіз ринку та визначення ринкової вартості ТЗ."
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

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center h-16">
            <Button
              variant="ghost"
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Назад до головної</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
                  Митна оцінка транспорту
                </div>

                <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                  Оцінка транспортних засобів для митниці України
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Визначення ринкової вартості транспортних засобів, що ввозяться
                  на митну територію України. Офіційні експертні висновки, які
                  використовують для митного оформлення.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
                  onClick={() => handlePhoneCall("+380972158437")}
                >
                  Замовити митну оцінку
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3"
                  onClick={() => handlePhoneCall("+380637961403")}
                >
                  Безкоштовна консультація
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black/5">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1587474260584-136574528ed5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21zJTIwY2FyJTIwaW1wb3J0JTIwYm9yZGVyfGVufDF8fHx8MTc1NzE1ODA4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Митне оформлення транспортних засобів"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">
              Чому обирають нашу митну оцінку
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Офіційне визнання та швидка підготовка висновку
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Офіційне визнання</h3>
              <p className="text-gray-600 text-sm">
                Експертні висновки приймають митні органи
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Швидко та якісно</h3>
              <p className="text-gray-600 text-sm">
                Оперативне виконання для митного оформлення
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Точна вартість</h3>
              <p className="text-gray-600 text-sm">
                Об’єктивна оцінка ринкової вартості
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Досвід експерта</h3>
              <p className="text-gray-600 text-sm">
                Багаторічна практика з оцінки ТЗ
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Types */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">
              Транспортні засоби, що оцінюємо для митниці
            </h2>
            <p className="text-lg text-gray-600">
              Професійна оцінка всіх категорій транспортних засобів
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <CarFront className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Легкові автомобілі</h3>
                    <p className="text-gray-600 text-sm">
                      Нові та вживані легкові автомобілі всіх марок
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Комерційний транспорт</h3>
                    <p className="text-gray-600 text-sm">
                      Вантажівки, автобуси, мікроавтобуси
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Спецтехніка</h3>
                    <p className="text-gray-600 text-sm">
                      Будівельна техніка, сільгосптехніка
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Мотоциклетна техніка</h3>
                    <p className="text-gray-600 text-sm">
                      Мотоцикли, квадроцикли, скутери
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Водний транспорт</h3>
                    <p className="text-gray-600 text-sm">
                      Катери, яхти, човни, гідроцикли
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Причепи та напівпричепи</h3>
                    <p className="text-gray-600 text-sm">
                      Всі типи причепів та напівпричепів
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">Процес митної оцінки</h2>
            <p className="text-lg text-gray-600">
              Швидко та ефективно для вашого митного оформлення
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { n: 1, t: "Заявка", d: "Подача документів на ТЗ та мета ввезення" },
              { n: 2, t: "Аналіз ринку", d: "Дослідження цін на аналогічні ТЗ" },
              { n: 3, t: "Розрахунок", d: "Визначення ринкової вартості ТЗ" },
              { n: 4, t: "Висновок", d: "Офіційний експертний висновок для митниці" },
            ].map((x) => (
              <div key={x.n} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">{x.n}</span>
                </div>
                <h3 className="text-gray-900 mb-2">{x.t}</h3>
                <p className="text-gray-600 text-sm">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Documents Required */}
      <div className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-gray-900 mb-4">
                Необхідні документи для митної оцінки
              </h2>
              <p className="text-lg text-gray-600">
                Підготуйте ці документи для швидкого оформлення
              </p>
            </div>

            <Card className="p-8 border-orange-200">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      Основні документи
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Договір купівлі-продажу</li>
                      <li>• Технічний паспорт ТЗ</li>
                      <li>• Документи про походження ТЗ</li>
                      <li>• Рахунок-фактура (інвойс)</li>
                      <li>• Документи про доставку</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      Додаткові документи
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Фотографії ТЗ</li>
                      <li>• Сертифікат відповідності</li>
                      <li>• Документи про пошкодження (якщо є)</li>
                      <li>• Додаткове обладнання</li>
                      <li>• Документи власника</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl mb-4">Потрібна митна оцінка?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Швидка підготовка висновку для митного оформлення
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3"
              onClick={() => handlePhoneCall("+380972158437")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Термінова оцінка
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-3"
              onClick={handleEmailClick}
            >
              <Mail className="w-5 h-5 mr-2" />
              Написати email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
