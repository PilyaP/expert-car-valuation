'use client';

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  ArrowLeft,
  Hash,
  CheckCircle2,
  Shield,
  FileCheck,
  MapPin,
  Gauge,
  Calendar,
  Car,
  Package,
  Award,
  AlertCircle,
  Globe,
  Calculator,
  Mail,
  Phone,
} from "lucide-react";

interface VinDecodingProps {
  onBack: () => void;
  onContact?: () => void;
}

export default function VinDecodingCustomsCourt({ onBack, onContact }: VinDecodingProps) {
  const handleCall = () => {
    window.location.href = "tel:+380972158437";
  };

  const handleEmail = () => {
    window.location.href =
      "mailto:aiexpert65@gmail.com?subject=Запит на розшифрування VIN (митниця/суд)&body=Доброго дня! Мені потрібно розшифрування VIN для митниці або суду. VIN: ________";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 border-b-4 border-blue-700">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button
            onClick={onBack}
            variant="outline"
            className="mb-6 bg-white/90 hover:bg-white border-gray-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Повернутися до послуг
          </Button>

          <div className="flex items-center space-x-6 mb-6">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl">
              <Hash className="w-12 h-12 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl text-white mb-2">
                Розшифрування VIN для митниці та суду
              </h1>
              <p className="text-lg text-blue-100">
                Професійне розшифрування VIN-коду для офіційних процедур з використанням ліцензійних програм
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Ukraine Coverage Section */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 mb-8 border-2 border-green-300">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <Globe className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl lg:text-3xl text-gray-900">
              Працюємо по всій Україні
            </h2>
          </div>

          <p className="text-lg text-gray-700 text-center leading-relaxed mb-4">
            Розшифрування VIN-коду з офіційними експертними висновками для клієнтів з усіх регіонів України.
            Документи надаємо в електронному вигляді або поштою.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white rounded-xl p-5 text-center border border-green-200">
              <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="text-gray-900 font-medium mb-2">Будь-яке місто</h4>
              <p className="text-gray-600 text-sm">
                Київ, Харків, Одеса, Львів та інші міста України
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 text-center border border-green-200">
              <FileCheck className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="text-gray-900 font-medium mb-2">Дистанційно</h4>
              <p className="text-gray-600 text-sm">
                Отримайте висновок без виїзду з дому
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 text-center border border-green-200">
              <Calendar className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="text-gray-900 font-medium mb-2">Швидко</h4>
              <p className="text-gray-600 text-sm">
                Готовність документів 1-2 робочих дні
              </p>
            </div>
          </div>
        </div>

        {/* Key Info Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-200">
          <h2 className="text-2xl text-gray-900 mb-6 flex items-center">
            <Shield className="w-7 h-7 text-blue-600 mr-3" />
            Офіційне розшифрування VIN-коду
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            VIN (Vehicle Identification Number) — це унікальний 17-значний код, який містить важливу інформацію про ТЗ.
            Експертна розшифровка VIN надає точні дані для митного оформлення, судових справ та інших процедур.
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-300">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg text-gray-900 mb-2">Тільки ліцензійні програми</h3>
                <p className="text-gray-700">
                  Використовуємо офіційні ліцензійні програми — це гарантує точність та юридичну придатність висновку.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Provide */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white shadow-lg border-2 border-blue-200 hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <FileCheck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900">Що ми розшифровуємо</h3>
              </div>

              <div className="space-y-4">
                {[
                  ["Країна походження", "Точне визначення країни-виробника автомобіля"],
                  ["Точний об'єм двигуна", "Робочий об'єм у см³ та літрах для розрахунку мита"],
                  ["Рік та дата випуску", "Точна дата виробництва транспортного засобу"],
                  ["Потужність двигуна", "Потужність у кВт та к.с."],
                  ["Тип кузова", "Седан, універсал, хетчбек, позашляховик тощо"],
                  ["Тип палива", "Бензин, дизель, гібрид, електро"],
                  ["Комплектація", "Базова/стандарт/преміум та опції"],
                ].map(([title, text]) => (
                  <div key={title} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-900 font-medium">{title}</p>
                      <p className="text-gray-600 text-sm">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border-2 border-indigo-200 hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                  <Package className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl text-gray-900">Для чого потрібно</h3>
              </div>

              <div className="space-y-4">
                {[
                  ["Розрахунок митних платежів", "Точні дані для акцизу, мита та ПДВ"],
                  ["Митне оформлення", "Офіційні дані для проходження митного контролю"],
                  ["Судові справи", "Експертні висновки для спорів щодо ТЗ"],
                  ["Реєстрація в МРЕО", "Підтвердження технічних характеристик авто"],
                  ["Перевірка авто", "Виявлення підробок та невідповідностей"],
                  ["Купівля авто з-за кордону", "Попередній розрахунок витрат на розмитнення"],
                ].map(([title, text]) => (
                  <div key={title} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-medium">{title}</p>
                      <p className="text-gray-600 text-sm">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Customs Calculation Section */}
        <Card className="bg-gradient-to-br from-orange-50 to-red-50 shadow-xl border-2 border-orange-300 mb-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                <Calculator className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl text-gray-900">
                Розрахунок митних платежів на основі VIN
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Точний об'єм двигуна, визначений через VIN, критично важливий для розрахунку акцизу.
              Помилка в об'ємі може дати значну різницю в сумі платежів.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 border border-orange-200">
                <Gauge className="w-8 h-8 text-orange-600 mb-3" />
                <h4 className="text-gray-900 font-medium mb-2">Точний об'єм</h4>
                <p className="text-gray-600 text-sm">Визначаємо робочий об'єм двигуна в см³</p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-orange-200">
                <Calculator className="w-8 h-8 text-orange-600 mb-3" />
                <h4 className="text-gray-900 font-medium mb-2">Розрахунок</h4>
                <p className="text-gray-600 text-sm">Акциз залежить від об'єму та віку авто</p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-orange-200">
                <FileCheck className="w-8 h-8 text-orange-600 mb-3" />
                <h4 className="text-gray-900 font-medium mb-2">Офіційний акт</h4>
                <p className="text-gray-600 text-sm">Документ для митниці з підписом і печаткою</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-8 text-center">
          <h3 className="text-2xl lg:text-3xl text-white mb-4">Потрібно розшифрувати VIN?</h3>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Зв'яжіться з нами для отримання експертного висновку для митниці, суду або інших процедур
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg" onClick={handleCall}>
              <Phone className="w-5 h-5 mr-2" />
              Подзвонити
            </Button>

            <Button size="lg" variant="outline" className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 text-lg" onClick={handleEmail}>
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Button>

            <Button size="lg" variant="outline" className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 text-lg" onClick={onBack}>
              Повернутися
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
