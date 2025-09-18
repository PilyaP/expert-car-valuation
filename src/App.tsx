import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import logoImage from '@/assets/logo.png';

import React from 'react';
import { 
  Building, 
  Car, 
  FileText, 
  Scale, 
  Calculator, 
  Wrench, 
  Package, 
  Handshake, 
  Shield,
  Award,
  Calendar,
  Badge,
  MapPin,
  Phone,
  Mail,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("смт Слобожанське, вул. Нижньодніпровська, 1, Дніпропетровська обл., Україна");





export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={logoImage}
                  alt="Логотип судового незалежного автоексперта"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl text-gray-900">Судовий незалежний автоексперт Дніпро</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Головна
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Послуги
              </button>
              <button 
                onClick={() => scrollToSection('expert')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Про незалежного експерта
              </button>

              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Контакти
              </button>
              
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                onClick={() => scrollToSection('contacts')}
              >
                Замовити оцінку
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
              <div className="px-4 py-4 space-y-4">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Головна
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Послуги
                </button>
                <button 
                  onClick={() => scrollToSection('expert')}
                  className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Про незалежного експерта
                </button>

                <button 
                  onClick={() => scrollToSection('contacts')}
                  className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Контакти
                </button>
                
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4"
                  onClick={() => scrollToSection('contacts')}
                >
                  Замовити оцінку
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div id="hero" className="bg-gradient-to-br from-slate-50 to-blue-50 pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight">
                Оцінка авто у Дніпрі та визначення збитків при ДТП для суду та офіційних процедур
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-gray-700 leading-relaxed mb-4">
                Від атестованого незалежного судового експерта з понад 29-річним досвідом. Офіційні незалежні висновки та експертні оцінки для МРЕО (сервісних центрів МВС), суду, нотаріусів, страхових компаній, податкових і слідчих органів, ЗСУ та юридичних фірм.
              </h2>
              
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-4">
                Визначення вартості колісних транспортних засобів і розміру збитку, завданого власнику ТЗ. Працюємо у Дніпрі та виїжджаємо по всій Дніпропетровській області.
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100">
                <p className="text-blue-700 text-center mb-2">
                  <span className="text-xl">🔹 Професійна експертна оцінка = справедливе рішення</span>
                </p>
                <p className="text-gray-600 text-center">
                  🔹 Експертні незалежні висновки для всіх установ та організацій
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                <a href="tel:+380972158437">Замовити оцінку</a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              >
                <a href="#contacts">Дізнатися більше</a>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Атестований незалежний експерт</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Офіційні незалежні висновки</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Швидко та якісно</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1695230981824-8edd894a6c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBhcHByYWlzYWwlMjBleHBlcnQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU3MTUzNTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Професійна оцінка автомобіля експертом"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900">Незалежний експерт зі свідоцтвом МЮ</p>
                  <p className="text-sm text-gray-500">29 років експертного стажу</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Key Benefits Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Впевненість у суді та зі страховими</h3>
              <p className="text-gray-600 text-sm">Експертні звіти, які приймають суди та установи</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Розрахунок збитків без зайвих суперечок</h3>
              <p className="text-gray-600 text-sm">Точні розрахунки згідно методології</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Професійно. Об'єктивно. Законно.</h3>
              <p className="text-gray-600 text-sm">29 років експертного досвіду та бездоганна репутація</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Правдива цифра — ваш захист у суді</h3>
              <p className="text-gray-600 text-sm">Професійна оцінка, що захищає ваші інтереси</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-full border border-blue-200">
              <span className="text-blue-700">
                Професійна оцінка збитків — ваш аргумент | Чесна експертиза для чесного рішення
              </span>
            </div>
          </div>

          {/* Service Area Info */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">Судовий незалежний автоексперт Дніпро та область</h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-lg text-gray-900 mb-3 flex items-center">
                    <Building className="w-5 h-5 text-blue-600 mr-2" />
                    Основне місце роботи
                  </h4>
                  <p className="text-gray-600">
                    <strong>м. Дніпро</strong><br />
                    Приймаємо клієнтів, проводимо оцінку, надаємо консультації
                  </p>
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 mb-3 flex items-center">
                    <Car className="w-5 h-5 text-green-600 mr-2" />
                    Виїзна експертиза
                  </h4>
                  <p className="text-gray-600">
                    <strong>Вся Дніпропетровська область</strong><br />
                    Виїжджаємо для проведення експертизи на місці
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-green-200">
                <p className="text-gray-700 text-center">
                  🏢 <strong>Офіс: </strong>
                  <a
    href={mapsHref}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    смт. Слобожанське, вул. Нижньодніпровська, 1
  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Наші послуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Професійна експертна оцінка у Дніпрі та з виїздом по Дніпропетровській області. Офіційні незалежні висновки для всіх сфер застосування
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <Wrench className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-2">Незалежна оцінка авто у Дніпрі при ДТП</h3>
                    <p className="text-gray-600 text-sm">
                      Точне визначення розміру збитку при ДТП. Офіційні експертні висновки для судів та страхових компаній
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Scale className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-2">Оцінка для суду (цивільні та кримінальні справи)</h3>
                    <p className="text-gray-600 text-sm">
                      Судова експертиза при спадкових справах, майнових спорах та кримінальних провадженнях
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Car className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-2">Оцінка для МРЕО (сервісних центрів МВС)</h3>
                    <p className="text-gray-600 text-sm">
                      Експертна оцінка для реєстрації транспортних засобів у сервісних центрах МВС
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <Scale className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-2">Експертна оцінка для нотаріуса (спадщина, розлучення, угоди)</h3>
                    <p className="text-gray-600 text-sm">
                      Нотаріальне оформлення угод купівлі-продажу, дарування та розподілу майна при розлученні
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center group-hover:bg-rose-200 transition-colors">
                    <FileText className="w-6 h-6 text-rose-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-2">Оцінка для страхових компаній</h3>
                    <p className="text-gray-600 text-sm">
                      Незалежні експертні висновки для всіх страхових компаній України при врегулюванні збитків
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <Calculator className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-2">Оцінка для податкових та слідчих органів</h3>
                    <p className="text-gray-600 text-sm">
                      Офіційні незалежні висновки експерта для податкових органів, слідчих органів та адвокатських запитів
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                    <Wrench className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-2">Експертна професійна оцінка для юридичних осіб та компаній</h3>
                    <p className="text-gray-600 text-sm">
                      Професійна оцінка для підприємств, юридичних фірм та комерційних організацій
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                    <Package className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-2">Визначення розміру збитків і пошкоджень авто</h3>
                    <p className="text-gray-600 text-sm">
                      Точне визначення розміру збитку, завданого власнику транспортного засобу при ДТП та інших пошкодженнях
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                    <Handshake className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-2">Договори купівлі-продажу</h3>
                    <p className="text-gray-600 text-sm">
                      Оформлення та експертна підтримка угод купівлі-продажу авто з офіційними висновками експерта
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                    <Shield className="w-6 h-6 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-2">Експертна професійна оцінка обладнання</h3>
                    <p className="text-gray-600 text-sm">
                      Професійна оцінка промислового обладнання та товарів з офіційними експертними висновками
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

<div className="text-center mt-12">
  <Button
    asChild
    size="lg"
    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
  >
    <a href="https://wa.me/380972158437" target="_blank" rel="noopener noreferrer">
      Написати у WhatsApp
    </a>
  </Button>
</div>


        </div>
      </div>

      {/* About Expert Section */}
      <div id="expert" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Expert Photo */}
            <div className="relative">
              <div className="aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1592878995758-02b32ddabdd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjBwcm9mZXNzaW9uYWwlMjBleHBlcnQlMjBzdWl0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU3MTU2NDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Пилипенко Анатолій Іванович - сертифікований судовий незалежний експерт"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Expert credentials floating cards */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Свідоцтво №22</p>
                    <p className="text-xs text-gray-500">МЮ України</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">З 1996 року</p>
                    <p className="text-xs text-gray-500">29+ років експертизи</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expert Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-4">
                    Про незалежного експерта
                  </div>
                  <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
                    Пилипенко Анатолій Іванович
                  </h2>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Дослідження проводить незалежний експерт Пилипенко Анатолій Іванович, який має вищу технічну освіту та кваліфікацію судового незалежного експерта з транспортно-товарознавчої експертизи відповідно до Положення про експертно-кваліфікаційні комісії та атестацію судових незалежних експертів за спеціальністю «12.2 – Визначення вартості колісних транспортних засобів і розміру збитку, завданого власнику транспортного засобу».
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Стаж незалежної експертної діяльності з 1996 року. Свідоцтво Міністерства юстиції України №22 від 27.05.1999 р., безстроково. Стаж роботи за фахом з 1982 року.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Член Союзу незалежних експертів України з 2000 року. Має Сертифікат вищого ступеня Союзу незалежних експертів України А №0025 від 16.10.2009 р. Включений до 
                  <a href="http://rase.minjust.gov.ua/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                    Реєстру атестованих судових незалежних експертів
                  </a>.
                </p>
              </div>

              {/* Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Свідоцтво</h4>
                    <p className="text-gray-600 text-sm">
                      Міністерство юстиції України
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Незалежний експертний стаж</h4>
                    <p className="text-gray-600 text-sm">
                      З 1996 року (29+ років)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Scale className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Членство</h4>
                    <p className="text-gray-600 text-sm">
                      Союз незалежних експертів України з 2000р.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Свідоцтво</h4>
                    <p className="text-gray-600 text-sm">
                      №22 безстроково
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Стаж за фахом</h4>
                    <p className="text-gray-600 text-sm">
                      З 1982 року (43+ роки)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Badge className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Сертифікат СЕУ</h4>
                    <p className="text-gray-600 text-sm">
                      А №0025 вищого ступеню
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  Замовити оцінку
                </Button>
                
 <Button 
  variant="outline" 
  size="lg" 
  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
  onClick={() => window.open('/certificate-22.jpg', '_blank')}
>
  Переглянути сертифікати
</Button>
              </div>
            </div>
          </div>

          {/* Additional Expert Images Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1555140713-973b9f36cd1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwZXhwZXJ0JTIwY2FyJTIwaW5zcGVjdGlvbiUyMG1lY2hhbmljfGVufDF8fHx8MTc1NzE1NjYxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Професійний експерт за роботою"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Wrench className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Технічна експертиза</p>
                    <p className="text-xs text-gray-600">Детальний огляд</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1673187139211-1e7ec3dd60ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkYW1hZ2UlMjBhc3Nlc3NtZW50JTIwdmVoaWNsZSUyMGV4cGVydHxlbnwxfHx8fDE3NTcxNTY2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Процес огляду та оцінки автомобіля"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <Calculator className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Оцінка пошкоджень</p>
                    <p className="text-xs text-gray-600">Точний розрахунок</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Contact Section */}
      <div id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Зв'яжіться з нами
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Готові надати професійну консультацію та допомогти з незалежною експертною оцінкою
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Зона обслуговування</h3>
                    <p className="text-gray-600 leading-relaxed mb-2">
                      <strong>Основна робота:</strong> м. Дніпро<br />
                      <strong>Виїзди:</strong> вся Дніпропетровська область
                    </p>
                    <p className="text-gray-600 text-sm">
                      Офіс:   <a
    href={mapsHref}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    смт. Слобожанське, вул. Нижньодніпровська, 1
  </a>
                    </p>
                  </div>
                </div>
{/* Phone Numbers */}
<div className="flex items-start space-x-4">
  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
    <Phone className="w-6 h-6 text-green-600" />
  </div>

  <div>
    <h3 className="text-gray-900 mb-2">Телефони</h3>

    {/* Первый номер с WhatsApp и Viber */}
<div className="flex items-center gap-2 text-gray-600">
  <a
    href="tel:+380972158437"
    className="hover:text-blue-600 transition-colors"
  >
    (097) 215-84-37
  </a>

  <a
    href="https://wa.me/380972158437"
    target="_blank"
    rel="noopener noreferrer"
    title="Написати у WhatsApp"
    className="inline-flex items-center"
  >
    <img
      src="/brands/whatsapp.png"
      alt="WhatsApp"
      className="w-5 h-5 align-middle"
      loading="lazy"
    />
  </a>

  <a
    href="viber://chat?number=%2B380972158437"
    title="Написати у Viber"
    className="inline-flex items-center"
  >
    <img
      src="/brands/viber.png"
      alt="Viber"
      className="w-5 h-5 align-middle"
      loading="lazy"
    />
  </a>
</div>



    {/* Второй номер без иконок */}
    <div className="mt-1 text-gray-600">
      <a href="tel:+380637961403" className="hover:text-blue-600 transition-colors">
        (063) 796-14-03
      </a>
    </div>
  </div>
</div>



                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Електронна пошта</h3>
                    <p className="text-gray-600">
                      <a href="mailto:aiexpert@ua.fm" className="hover:text-blue-600 transition-colors">
                        aiexpert@ua.fm
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-gray-900 mb-3">Потрібна консультація?</h3>
                <p className="text-gray-600 mb-6">
                  Приймаємо у Дніпрі та виїжджаємо по всій Дніпропетровській області. Зателефонуйте для безкоштовної консультації щодо незалежної експертної оцінки
                </p>
<div className="flex flex-col sm:flex-row gap-3">
  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
    <a href="tel:+380972158437">Зателефонувати</a>
  </Button>

  <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3">
    <a
      href={
        "mailto:aiexpert@ua.fm"
        + "?subject=" + encodeURIComponent("Запит на оцінку автомобіля")
        + "&body=" + encodeURIComponent("Доброго дня! Мені потрібна консультація щодо оцінки автомобіля.")
      }
    >
      Написати email
    </a>
  </Button>
</div>

              </div>
            </div>

            {/* Google Map */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.8744123456789!2d35.0836!3d48.4647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2f0f0f0f0f0%3A0x0!2z0KHQu9C-0LHQvtC20LDQvdGB0YzQutC1!5e0!3m2!1suk!2sua!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Мапа розташування офісу експерта"
                ></iframe>
              </div>
              
              {/* Map overlay info */}
              <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100 max-w-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Судовий незалежний експерт Дніпро</p>
                    <p className="text-xs text-gray-500">Виїзди по області</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-white mb-4">Судовий незалежний автоексперт Дніпро</h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Пилипенко А.І. - атестований судовий незалежний автоексперт з 43-річним досвідом. Працюємо у Дніпрі та виїжджаємо по всій Дніпропетровській області. 
                Офіційні незалежні висновки для всіх державних установ і приватних організацій.
              </p>
 <div className="flex space-x-4">
  <a
    href="tel:+380972158437"
    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
    aria-label="Подзвонити"
  >
    <Phone className="w-4 h-4 text-gray-400" />
  </a>

  <a
    href={
      "mailto:aiexpert@ua.fm"
      + "?subject=" + encodeURIComponent("Запит на оцінку автомобіля")
    }
    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
    aria-label="Написати email"
  >
    <Mail className="w-4 h-4 text-gray-400" />
  </a>

<a
  href={mapsHref}
  target="_blank"
  rel="noopener noreferrer"
  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
  aria-label="Відкрити адресу в Google Maps"
>
  <MapPin className="w-4 h-4 text-gray-400" />
</a>

</div>

              
            </div>

            <div>
              <h4 className="text-white mb-4">Послуги</h4>
<ul className="space-y-2 text-gray-400 text-sm">
  <li>
    <button
      onClick={() => scrollToSection('services')}
      className="hover:text-white transition-colors text-left"
    >
      Оцінка для митниці
    </button>
  </li>
  <li>
    <button
      onClick={() => scrollToSection('services')}
      className="hover:text-white transition-colors text-left"
    >
      Оцінка для МРЕО
    </button>
  </li>
  <li>
    <button
      onClick={() => scrollToSection('services')}
      className="hover:text-white transition-colors text-left"
    >
      Судова експертиза
    </button>
  </li>
  <li>
    <button
      onClick={() => scrollToSection('services')}
      className="hover:text-white transition-colors text-left"
    >
      Оцінка при розлученні
    </button>
  </li>
  <li>
    <button
      onClick={() => scrollToSection('services')}
      className="hover:text-white transition-colors text-left"
    >
      Оцінка при ДТП
    </button>
  </li>
</ul>

            </div>

            <div>
              <h4 className="text-white mb-4">Контакти</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
<ul className="space-y-2 text-gray-400 text-sm">
  <li>
    <a
      href="tel:+380972158437"
      className="hover:text-white transition-colors"
    >
      (097) 215-84-37
    </a>
  </li>
  <li>
    <a
      href="tel:+380637961403"
      className="hover:text-white transition-colors"
    >
      (063) 796-14-03
    </a>
  </li>
  <li>
    <a
      href="mailto:aiexpert@ua.fm"
      className="hover:text-white transition-colors"
    >
      aiexpert@ua.fm
    </a>
  </li>
  <li>
    <a
      href="https://www.google.com/maps/search/?api=1&query=смт+Слобожанське,+вул.+Нижньодніпровська,+1,+Дніпропетровська+обл."
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-colors"
    >
      смт. Слобожанське, вул. Нижньодніпровська, 1
    </a>
  </li>
</ul>

                <li>м. Дніпро та область</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Пилипенко А.І. Всі права захищені. Свідоцтво судового незалежного експерта №22
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}