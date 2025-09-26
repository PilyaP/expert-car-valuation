'use client';

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  ArrowLeft, 
  Building, 
  Calculator, 
  FileText, 
  Shield, 
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  Users
} from 'lucide-react';

export default function CorporateAssessment({ onBack, onContact }) {
  const handlePhoneCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:aiexpert@ua.fm?subject=Запит на корпоративну оцінку автомобіля&body=Доброго дня! Мені потрібна експертна оцінка автомобіля для юридичної особи/компанії.';
  };

  return (
    <div className="min-h-screen bg-white">
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
                Професійна оцінка транспортних засобів для підприємств, юридичних фірм та комерційних організацій. 
                Офіційні експертні висновки для бухгалтерського обліку, аудиту, страхування корпоративного автопарку.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3"
                  onClick={() => handlePhoneCall('+380972158437')}
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1695230981824-8edd894a6c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMGNhciUyMGFzc2Vzc21lbnR8ZW58MXx8fHwxNzU4ODAxOTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Корпоративна експертна оцінка автомобіля"
                  className="w-full h-full object-cover"
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
              <p className="text-gray-600 text-sm">Оцінка для постановки на баланс та переоцінки основних засобів</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Юридична підтримка</h3>
              <p className="text-gray-600 text-sm">Експертні висновки для угод, реорганізації, ліквідації</p>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-gray-900 mb-6">Коли потрібна корпоративна оцінка</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Постановка на баланс</h4>
                      <p className="text-gray-600 text-sm">Оцінка транспортних засобів при постановці на баланс підприємства</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Переоцінка основних засобів</h4>
                      <p className="text-gray-600 text-sm">Періодична переоцінка автопарку згідно з обліковою політикою</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Продаж та купівля</h4>
                      <p className="text-gray-600 text-sm">Оцінка при корпоративних угодах купівлі-продажу транспорту</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Страхування автопарку</h4>
                      <p className="text-gray-600 text-sm">Оцінка для корпоративного страхування КАСКО та ОСЦПВ</p>
                    </div>
                  </div>
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
                    <li>• Експрес-оцінка для терміново угод</li>
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
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">1</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Досвід роботи з бізнесом</h4>
                        <p className="text-gray-600 text-xs">29 років досвіду експертної роботи з юридичними особами</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">2</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Розуміння потреб бізнесу</h4>
                        <p className="text-gray-600 text-xs">Знання специфіки корпоративного обліку та аудиту</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">3</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Гнучкість у роботі</h4>
                        <p className="text-gray-600 text-xs">Можливість масової оцінки, працюємо із термінами замовника</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">4</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Конфіденційність</h4>
                        <p className="text-gray-600 text-xs">Гарантована конфіденційність корпоративної інформації</p>
                      </div>
                    </div>
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
                      <p className="text-gray-900 text-sm">aiexpert@ua.fm</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-yellow-600" />
                      <p className="text-gray-900 text-sm">м. Дніпро та область</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-6">
                    <Button 
                      className="bg-yellow-600 hover:bg-yellow-700 text-white"
                      onClick={() => handlePhoneCall('+380972158437')}
                    >
                      Зателефонувати зараз
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-yellow-600 text-yellow-600 hover:bg-yellow-50"
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
              Корпоративна експертна оцінка автомобіля для юридичних осіб у Дніпрі
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Юридичні особи та комерційні організації потребують професійної оцінки транспортних засобів для різних цілей: постановки на баланс, 
                переоцінки основних засобів, корпоративних угод, страхування автопарку. Атестований судовий експерт Пилипенко А.І. надає комплексні 
                послуги корпоративної оцінки для підприємств Дніпра та Дніпропетровської області з 1996 року.
              </p>
              
              <p>
                <strong>Корпоративна оцінка включає:</strong> професійну оцінку ринкової вартості транспортних засобів, визначення залишкової вартості 
                для балансу, розрахунок амортизації та зносу, складання експертних висновків для бухгалтерського обліку та аудиту. Всі розрахунки 
                виконуються згідно з національними стандартами оцінки та вимогами обліку в Україні.
              </p>
              
              <p>
                <strong>Для яких цілей проводимо корпоративну оцінку:</strong> постановка транспорту на баланс підприємства, періодична переоцінка 
                основних засобів, корпоративні угоди купівлі-продажу, страхування автопарку, лізингові операції, реорганізація та ліквідація підприємств, 
                аудиторські перевірки, судові спори щодо корпоративного майна.
              </p>
              
              <p>
                Працюємо з підприємствами будь-якої форми власності: ТОВ, ПрАТ, ПП, кооперативи, державні установи. Можлива масова оцінка автопарку 
                з наданням знижок. Виїжджаємо для огляду транспорту у Дніпрі та по всій області. Готовність звітів 1-5 робочих днів. 
                Зв'язок: (097) 215-84-37, (063) 796-14-03.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}