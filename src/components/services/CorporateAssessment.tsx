import React from "react";
import { Helmet } from "react-helmet-async";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";

import {
  ArrowLeft,
  Building,
  Calculator,
  FileText,
  Shield,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Briefcase
} from "lucide-react";

type Props = {
  onBack: () => void;
  onContact?: () => void;
};

export default function CorporateAssessment({ onBack }: Props) {

  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href =
      "mailto:aiexpert@ua.fm?subject=Запит%20на%20корпоративну%20оцінку%20автомобіля&body=Доброго%20дня!%20Мені%20потрібна%20експертна%20оцінка%20автомобіля%20для%20юридичної%20особи%20або%20компанії.";
  };

  const canonical =
    "https://expert-car-ai.vercel.app/service/corporate-assessment";

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name:
      "Експертна оцінка автомобіля для юридичних осіб та компаній у Дніпрі",
    serviceType:
      "Корпоративна експертна оцінка транспортних засобів",
    provider: {
      "@type": "ProfessionalService",
      name: "Судовий автоексперт — Пилипенко Анатолій Іванович",
      telephone: "+380972158437",
      email: "aiexpert@ua.fm",
      areaServed: ["Дніпро", "Дніпропетровська область"],
      url: "https://expert-car-ai.vercel.app/"
    },
    areaServed: ["Дніпро", "Дніпропетровська область"],
    url: canonical,
    description:
      "Експертна корпоративна оцінка автомобілів для юридичних осіб та компаній у Дніпрі: оцінка автопарку, постановка на баланс, переоцінка основних засобів, корпоративні угоди, страхування та аудит."
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Для яких компаній проводиться корпоративна оцінка автомобілів?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Корпоративна оцінка проводиться для підприємств будь-якої форми власності: ТОВ, ПрАТ, ПП, державних установ та інших юридичних осіб."
        }
      },
      {
        "@type": "Question",
        name: "Для яких цілей потрібна корпоративна оцінка транспорту?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Оцінка використовується для постановки на баланс, переоцінки основних засобів, корпоративних угод купівлі-продажу, страхування автопарку, лізингових операцій, аудиту та судових спорів."
        }
      },
      {
        "@type": "Question",
        name: "Чи можлива масова оцінка автопарку підприємства?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Так, можливе проведення масової корпоративної оцінки автопарку підприємства з виїздом по Дніпру та Дніпропетровській області."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">

      <Helmet>
        <title>
          Оцінка автомобіля для юридичних осіб та компаній у Дніпрі | Корпоративна експертна оцінка
        </title>

        <meta
          name="description"
          content="Корпоративна експертна оцінка автомобілів для юридичних осіб та компаній у Дніпрі: оцінка автопарку, постановка на баланс, переоцінка основних засобів, корпоративні угоди, аудит і страхування."
        />

        <link rel="canonical" href={canonical} />

        <meta
          property="og:title"
          content="Корпоративна оцінка автомобіля для компаній у Дніпрі"
        />
        <meta
          property="og:description"
          content="Експертна оцінка автопарку та корпоративного транспорту для підприємств у Дніпрі та області."
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
      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 py-16">
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
              <div className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full mb-4">
                Корпоративна оцінка
              </div>

              <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                Експертна оцінка автомобіля для юридичних осіб та компаній у Дніпрі
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Професійна оцінка транспортних засобів для підприємств,
                юридичних фірм та комерційних організацій. Офіційні
                експертні висновки для бухгалтерського обліку, аудиту та
                страхування корпоративного автопарку.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3"
                  onClick={() => handlePhoneCall("+380972158437")}
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
                  src="https://images.unsplash.com/photo-1695230981824-8edd894a6c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMGNhciUyMGFzc2Vzc21lbnR8ZW58MXx8fHwxNzU4ODAxOTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Корпоративна експертна оцінка автомобіля"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* дальше твой существующий JSX без изменений */}
      {/* (Features Section, Detailed Information и SEO Content Section — оставь как у тебя было) */}

    </div>
  );
}
