import React from "react";
import { Helmet } from "react-helmet-async";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";

import {
  ArrowLeft,
  Car,
  FileText,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  Clipboard,
} from "lucide-react";

type Props = {
  onBack: () => void;
  onContact?: () => void;
};

export default function MreoAssessment({ onBack }: Props) {
  const canonical = "https://expert-car-ai.vercel.app/service/mreo-assessment";

  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href =
      "mailto:aiexpert@ua.fm?subject=Запит%20на%20оцінку%20для%20СЦ%20МВС%20(МРЕО)&body=Доброго%20дня!%20Мені%20потрібна%20оцінка%20автомобіля%20для%20реєстрації%20в%20сервісному%20центрі%20МВС.%20Прошу%20підказати%20які%20документи%20потрібні%20та%20терміни%20виконання.";
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Оцінка авто для сервісних центрів МВС (МРЕО) у Дніпрі",
    serviceType: "Оцінка транспортного засобу для реєстраційних дій у СЦ МВС",
    provider: {
      "@type": "ProfessionalService",
      name: "Судовий автоексперт — Пилипенко Анатолій Іванович",
      telephone: "+380972158437",
      email: "aiexpert@ua.fm",
      areaServed: ["Дніпро", "Дніпропетровська область"],
      url: "https://expert-car-ai.vercel.app/",
    },
    areaServed: ["Дніпро", "Дніпропетровська область"],
    url: canonical,
    description:
      "Оцінка автомобіля для сервісних центрів МВС (МРЕО) у Дніпрі: огляд, фіксація характеристик, визначення ринкової вартості та підготовка офіційного експертного висновку для реєстраційних дій.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Коли потрібна оцінка авто для сервісного центру МВС (МРЕО)?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Найчастіше — при переоформленні/зміні власника, першій реєстрації (у тому числі імпорт), відновленні документів або інших реєстраційних діях, коли потрібне підтвердження ринкової вартості.",
        },
      },
      {
        "@type": "Question",
        name: "Скільки часу займає підготовка висновку?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Залежить від ситуації та комплекту документів. Часто можливо зробити швидко, у тому числі терміново — за домовленістю.",
        },
      },
      {
        "@type": "Question",
        name: "Що потрібно з документів для оцінки?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Зазвичай потрібні документи власника, документи на авто (за наявності) та підстава реєстраційної дії (договір/інвойс тощо). Точний перелік підкажемо після короткої консультації.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          Оцінка авто для МРЕО (СЦ МВС) у Дніпрі — експертний висновок | Пилипенко
          А.І.
        </title>
        <meta
          name="description"
          content="Оцінка автомобіля для сервісних центрів МВС (МРЕО) у Дніпрі та області: огляд, фіксація характеристик, визначення ринкової вартості, офіційний експертний висновок. Можлива термінова оцінка."
        />
        <link rel="canonical" href={canonical} />

        <meta
          property="og:title"
          content="Оцінка авто для МРЕО (СЦ МВС) у Дніпрі — експертний висновок"
        />
        <meta
          property="og:description"
          content="Офіційна оцінка для реєстраційних дій у сервісних центрах МВС: огляд, визначення ринкової вартості, експертний висновок. Дніпро та область."
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
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
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
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full mb-4">
                Оцінка для СЦ МВС (МРЕО)
              </div>

              <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                Оцінка авто для сервісних центрів МВС у Дніпрі
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Експертна оцінка транспортних засобів для реєстраційних дій у СЦ
                МВС у Дніпрі та області. Офіційний експертний висновок.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                  onClick={() => handlePhoneCall("+380972158437")}
                >
                  Замовити оцінку
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
                  onClick={handleEmailClick}
                >
                  Написати email
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black/5">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1630406144797-821be1f35d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx2ZWhpY2xlJTIwcmVnaXN0cmF0aW9uJTIwaW5zcGVjdGlvbiUyMGRvY3VtZW50fGVufDF8fHx8MTc1ODgwMTA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Оцінка авто для реєстрації у сервісному центрі МВС"
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
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Оперативно</h3>
              <p className="text-gray-600 text-sm">
                Оцінка для реєстраційних дій — без зайвих затримок
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Офіційні документи</h3>
              <p className="text-gray-600 text-sm">
                Висновок з описом та вартістю станом на дату оцінки
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Терміново за домовленістю</h3>
              <p className="text-gray-600 text-sm">
                Можливо виконати швидко, якщо “потрібно на сьогодні”
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-gray-900 mb-6">
                  Коли потрібна оцінка для СЦ МВС
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      t: "Перша реєстрація",
                      d: "Зокрема, транспортний засіб після імпорту або інші випадки першої реєстрації.",
                    },
                    {
                      t: "Зміна власника",
                      d: "Переоформлення транспортного засобу на нового власника.",
                    },
                    {
                      t: "Відновлення документів",
                      d: "Коли потрібно відновити/замінити свідоцтво про реєстрацію (за потреби).",
                    },
                    {
                      t: "Реєстраційні дії",
                      d: "Інші випадки, коли потрібне підтвердження ринкової вартості для оформлення.",
                    },
                  ].map((x) => (
                    <div key={x.t} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-gray-900 mb-1">{x.t}</h4>
                        <p className="text-gray-600 text-sm">{x.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl text-gray-900 mb-4">
                  Що зазвичай потрібно (для старту)
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Документ власника (паспорт/ID)</li>
                    <li>• Документи на авто (техпаспорт — якщо є)</li>
                    <li>• Підстава оформлення (договір / інвойс тощо)</li>
                    <li>• Дані авто (VIN, пробіг, комплектація — якщо відомо)</li>
                    <li>• Фото авто (за потреби) або огляд на місці</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Clipboard className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-gray-900">Процедура оцінки</h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        n: "1",
                        t: "Заявка",
                        d: "Зателефонуйте або напишіть — узгодимо час та перелік документів.",
                      },
                      {
                        n: "2",
                        t: "Огляд авто",
                        d: "Фіксуємо характеристики, стан та особливості комплектації.",
                      },
                      {
                        n: "3",
                        t: "Визначення вартості",
                        d: "Розрахунок ринкової вартості станом на дату оцінки.",
                      },
                      {
                        n: "4",
                        t: "Оформлення висновку",
                        d: "Підготовка офіційного експертного документа.",
                      },
                    ].map((x) => (
                      <div key={x.n} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">
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

              <Card className="border-gray-200 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-4">Зв&apos;яжіться з експертом</h3>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-green-600" />
                      <div>
                        <p className="text-gray-900 text-sm">(097) 215-84-37</p>
                        <p className="text-gray-900 text-sm">(063) 796-14-03</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-green-600" />
                      <p className="text-gray-900 text-sm">aiexpert@ua.fm</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-green-600" />
                      <p className="text-gray-900 text-sm">м. Дніпро та область</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-6">
                    <Button
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => handlePhoneCall("+380972158437")}
                    >
                      Зателефонувати
                    </Button>
                    <Button
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-50"
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
              Оцінка авто для СЦ МВС (МРЕО) у Дніпрі
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Оцінка транспортного засобу для сервісних центрів МВС у Дніпрі
                потрібна у випадках, коли необхідно підтвердити ринкову вартість
                авто станом на дату оформлення. Експертний висновок містить
                характеристики авто, опис стану та визначену вартість.
              </p>

              <p>
                <strong>Найпоширеніші ситуації:</strong> переоформлення/зміна
                власника, перша реєстрація (у тому числі імпорт), інші
                реєстраційні дії. Працюємо у Дніпрі та по області.
              </p>

              <p>
                За потреби можливе термінове виконання. Щоб уточнити перелік
                документів саме під ваш випадок — телефонуйте (097) 215-84-37 або
                (063) 796-14-03, або пишіть на aiexpert@ua.fm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
