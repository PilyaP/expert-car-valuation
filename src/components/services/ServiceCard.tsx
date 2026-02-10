'use client';

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  ArrowLeft, 
  Calculator, 
  FileText, 
  Shield, 
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  Building,
  Search
} from 'lucide-react';

export default function TaxInvestigationAssessment({ onBack, onContact }) {
  const handlePhoneCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:aiexpert@ua.fm?subject=Запит на оцінку для податкових/слідчих органів&body=Доброго дня! Мені потрібна експертна оцінка автомобіля для податкових або слідчих органів.';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 py-16">
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
              <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full mb-4">
                Оцінка для державних органів
              </div>
              
              <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                Оцінка автомобіля для податкових та слідчих органів у Дніпрі
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Офіційні незалежні експертні висновки для податкових органів, слідчих органів, прокуратури, адвокатських запитів та інших державних установ. 
                Атестований судовий експерт з 29-річним досвідом.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
                  onClick={() => handlePhoneCall('+380972158437')}
                >
                  Замовити оцінку
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3"
                  onClick={handleEmailClick}
                >
                  Написати email
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black/5">
  <ImageWithFallback
                  src="https://images.unsplash.com/photo-1654588833543-f231a643ee72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGludmVzdGlnYXRpb24lMjBjYXIlMjBhc3Nlc3NtZW50fGVufDF8fHx8MTc1ODgwMTgzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Експертна оцінка автомобіля для державних органів"
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
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Офіційні висновки</h3>
              <p className="text-gray-600 text-sm">Експертні висновки з юридичною силою для всіх державних органів</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Детальне дослідження</h3>
              <p className="text-gray-600 text-sm">Повний комплекс досліджень згідно з вимогами органів</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Терміновість</h3>
              <p className="text-gray-600 text-sm">Можливість виконання експертизи у терміновому порядку</p>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-gray-900 mb-6">Для яких органів проводимо оцінку</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Податкові органи</h4>
                      <p className="text-gray-600 text-sm">Державна податкова служба України для податкових перевірок</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Слідчі органи</h4>
                      <p className="text-gray-600 text-sm">Поліція, прокуратура при кримінальних провадженнях</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Адвокатські запити</h4>
                      <p className="text-gray-600 text-sm">Для захисту у кримінальних та цивільних справах</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Силові структури</h4>
                      <p className="text-gray-600 text-sm">СБУ, військові частини, інші правоохоронні органи</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl text-gray-900 mb-4">Типи експертних досліджень</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Визначення ринкової вартості транспортного засобу</li>
                    <li>• Розрахунок розміру збитків при ДТП</li>
                    <li>• Оцінка втрати товарної вартості</li>
                    <li>• Визначення вартості ремонту</li>
                    <li>• Експертиза технічного стану автомобіля</li>
                    <li>• Оцінка для податкових розрахунків</li>
                    <li>• Експертиза при розслідуванні ДТП</li>
                    <li>• Консультативні висновки експерта</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Building className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="text-gray-900">Документи для експертизи</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">1</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Офіційний запит</h4>
                        <p className="text-gray-600 text-xs">Запит від державного органу з печаткою та підписом</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">2</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Документи на авто</h4>
                        <p className="text-gray-600 text-xs">Техпаспорт, свідоцтво про реєстрацію, договір купівлі</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">3</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Додаткові матеріали</h4>
                        <p className="text-gray-600 text-xs">Фото, довідки, постанови, протоколи (при наявності)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">4</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Доступ до об'єкта</h4>
                        <p className="text-gray-600 text-xs">Можливість огляду автомобіля експертом</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-gradient-to-br from-orange-50 to-amber-50">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-4">Зв'яжіться з експертом</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-orange-600" />
                      <div>
                        <p className="text-gray-900 text-sm">(097) 215-84-37</p>
                        <p className="text-gray-900 text-sm">(063) 796-14-03</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-orange-600" />
                      <p className="text-gray-900 text-sm">aiexpert@ua.fm</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-orange-600" />
                      <p className="text-gray-900 text-sm">м. Дніпро та область</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-6">
                    <Button 
                      className="bg-orange-600 hover:bg-orange-700 text-white"
                      onClick={() => handlePhoneCall('+380972158437')}
                    >
                      Зателефонувати зараз
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-orange-600 text-orange-600 hover:bg-orange-50"
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
              Експертна оцінка автомобіля для податкових та слідчих органів у Дніпрі
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Державні органи України вимагають проведення незалежної експертної оцінки транспортних засобів у різних ситуаціях: податкові перевірки, 
                кримінальні провадження, розслідування ДТП, конфіскації майна. Атестований судовий експерт Пилипенко А.І. проводить офіційні експертизи 
                для всіх державних установ з 1996 року. Свідоцтво Міністерства юстиції України №22 безстроково гарантує юридичну силу висновків.
              </p>
              
              <p>
                <strong>Експертиза для державних органів включає:</strong> детальне дослідження технічного стану автомобіля, визначення ринкової вартості 
                на дату оцінки, розрахунок розміру збитків при пошкодженнях, оцінку втрати товарної вартості, складання офіційного експертного висновку 
                з обґрунтуванням всіх розрахунків. Документ оформлюється згідно з вимогами процесуального законодавства України.
              </p>
              
              <p>
                <strong>Для яких органів проводимо експертизу:</strong> Державна податкова служба України, поліція, прокуратура, СБУ, слідчі органи, 
                військові частини, адвокатські об'єднання, інші правоохоронні та контролюючі органи. Експертні висновки використовуються у кримінальних 
                та цивільних справах, податкових перевірках, розслідуваннях порушень, конфіскаційних провадженнях.
              </p>
              
              <p>
                Працюємо у Дніпрі та виїжджаємо по всій Дніпропетровській області для проведення експертизи. Можливе терміново виконання при необхідності. 
                Готовність експертного висновку 1-5 робочих днів залежно від складності. Консультації безкоштовні. Зв'язок: (097) 215-84-37, 
                (063) 796-14-03, aiexpert@ua.fm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}