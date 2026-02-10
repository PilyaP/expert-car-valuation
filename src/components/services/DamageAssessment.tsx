import React from "react";
import { Helmet } from "react-helmet-async";

import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

import {
  ArrowLeft,
  Calculator,
  Camera,
  Shield,
  Phone,
  Mail,
} from "lucide-react";

type Props = {
  onBack: () => void;
  onContact?: () => void;
};

export default function DamageAssessment({ onBack }: Props) {
  const canonical =
    "https://expert-car-ai.vercel.app/service/damage-assessment";

  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href =
      "mailto:aiexpert@ua.fm?subject=Запит%20на%20визначення%20розміру%20збитків&body=Доброго%20дня!%20Мені%20потрібне%20визначення%20розміру%20збитків%20і%20пошкоджень%20автомобіля.%20Прошу%20підказати%20перелік%20документів%20та%20вартість%20послуги.";
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Визначення розміру збитків і пошкоджень автомобіля у Дніпрі",
    serviceType: "Визначення розміру збитків та пошкоджень транспортного засобу",
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
      "Професійне визначення розміру збитків і пошкоджень автомобіля у Дніпрі: огляд, фотофіксація, розрахунок вартості відновлювального ремонту/збитків та підготовка офіційного експертного висновку для суду, страхової та інших установ.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "У яких випадках потрібне визначення розміру збитків авто?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Після ДТП, вандалізму, стихійних лих (град, повінь), падіння предметів, пожежі, крадіжки деталей, а також при спорах зі страховою компанією або винуватцем.",
        },
      },
      {
        "@type": "Question",
        name: "Скільки часу займає підготовка експертного висновку?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Зазвичай 1–3 робочі дні після огляду та отримання необхідних даних/документів.",
        },
      },
      {
        "@type": "Question",
        name: "Чи підходить висновок для суду та страхової компанії?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Так. Висновок містить опис пошкоджень, фотофіксацію та розрахунки і використовується у судових справах та для врегулювання страхових випадків.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          Визначення розміру збитків авто у Дніпрі — експертний висновок |
          Пилипенко А.І.
        </title>
        <meta
          name="description"
          content="Визначення розміру збитків і пошкоджень автомобіля у Дніпрі та області: огляд, фотофіксація, розрахунок вартості ремонту/збитків, офіційний експертний висновок для суду та страхової. 1–3 дні."
        />
        <link rel="canonical" href={canonical} />
        <meta
          property="og:title"
          content="Визначення розміру збитків і пошкоджень авто у Дніпрі"
        />
        <meta
          property="og:description"
          content="Огляд, фотофіксація та точний розрахунок збитків. Офіційний експертний висновок для суду та страхової. Дніпро та область."
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
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
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
              <div className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full mb-4">
                Визначення збитків
              </div>

              <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                Визначення розміру збитків і пошкоджень автомобіля у Дніпрі
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Точне визначення розміру збитку власнику транспортного засобу
                при ДТП, вандалізмі, стихійних лихах та інших пошкодженнях.
                Офіційні розрахунки й експертний висновок.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3"
                  onClick={() => handlePhoneCall("+380972158437")}
                >
                  Замовити оцінку
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3"
                  onClick={handleEmailClick}
                >
                  Написати email
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black/5">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1662541547523-118842914aa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkYW1hZ2UlMjBpbnNwZWN0aW9uJTIwYXNzZXNzbWVudHxlbnwxfHx8fDE3NTg4MDIwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Визначення розміру збитків і пошкоджень автомобіля"
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
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Точні розрахунки</h3>
              <p className="text-gray-600 text-sm">
                Детальний розрахунок усіх видів збитків та втрат
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Професійна фіксація</h3>
              <p className="text-gray-600 text-sm">
                Повна фотофіксація всіх пошкоджень та дефектів
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Правова захищеність</h3>
              <p className="text-gray-600 text-sm">
                Експертні висновки з повною юридичною силою
              </p>
            </div>
          </div>

          {/* SEO Content Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-gray-900 mb-8 text-center">
              Професійне визначення розміру збитків автомобіля у Дніпрі та області
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Коли автомобіль отримав пошкодження внаслідок ДТП, вандалізму,
                стихійного лиха або інших обставин, важливо точно визначити
                розмір завданих збитків. Атестований судовий експерт проводить
                огляд, фіксацію пошкоджень та розрахунки за діючими методиками.
              </p>

              <p>
                <strong>Визначення збитків включає:</strong> детальний огляд і
                фіксацію пошкоджень, фотофіксацію, розрахунок вартості
                відновлювального ремонту, визначення втрати товарної вартості
                та складання офіційного експертного висновку.
              </p>

              <p>
                <strong>Коли потрібне визначення збитків:</strong> ДТП, пошкодження
                від стихійних лих (град, повінь), падіння предметів, пожежа,
                крадіжка деталей, спори зі страховою компанією або винуватцем.
                Висновок використовується для компенсації збитків.
              </p>

              <p>
                Працюємо у Дніпрі та виїжджаємо по Дніпропетровській області для
                огляду пошкодженого транспорту. Готовність висновку — 1–3 робочі
                дні. Консультації безкоштовні. Телефонуйте: (097) 215-84-37,
                (063) 796-14-03.
              </p>
            </div>

            {/* маленький контакт-блок, чтобы дублировать CTA внизу текста */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
                onClick={() => handlePhoneCall("+380972158437")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Зателефонувати
              </Button>
              <Button
                variant="outline"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                onClick={handleEmailClick}
              >
                <Mail className="w-4 h-4 mr-2" />
                Написати email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
