'use client';

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  ArrowLeft, 
  FileText, 
  Calculator, 
  Shield, 
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  DollarSign,
  Car
} from 'lucide-react';

export default function InsuranceAssessment({ onBack, onContact }) {
  const handlePhoneCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:aiexpert@ua.fm?subject=Запит на оцінку для страхової компанії&body=Доброго дня! Мені потрібна незалежна експертна оцінка автомобіля для страхової компанії.';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 py-16">
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
              <div className="inline-flex items-center px-3 py-1 bg-rose-100 text-rose-800 text-sm rounded-full mb-4">
                Оцінка для страхових компаній
              </div>
              
              <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                Незалежна оцінка автомобіля для страхових компаній у Дніпрі
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Професійні експертні висновки для всіх страхових компаній України при врегулюванні страхових випадків. 
                Атестований судовий експерт з 29-річним досвідом гарантує об'єктивну оцінку.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3"
                  onClick={() => handlePhoneCall('+380972158437')}
                >
                  Замовити оцінку
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-3"
                  onClick={handleEmailClick}
                >
                  Написати email
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1687139731336-faba74190494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBjYXIlMjBjbGFpbSUyMGFzc2Vzc21lbnR8ZW58MXx8fHwxNzU4ODAxNzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Незалежна оцінка автомобіля для страхової компанії"
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
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Незалежна експертиза</h3>
              <p className="text-gray-600 text-sm">Об'єктивна оцінка без конфлікту інтересів зі страховою компанією</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Точні розрахунки</h3>
              <p className="text-gray-600 text-sm">Детальні розрахунки згідно з методиками, прийнятими страховиками</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Офіційні документи</h3>
              <p className="text-gray-600 text-sm">Експертні висновки, які визнають всі страхові компанії</p>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-gray-900 mb-6">Коли потрібна незалежна оцінка для страхової</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Занижена компенсація</h4>
                      <p className="text-gray-600 text-sm">Коли страхова компанія пропонує заниження суми відшкодування</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Відмова у виплаті</h4>
                      <p className="text-gray-600 text-sm">При необґрунтованій відмові страхової у відшкодуванні збитків</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">КАСКО і ОСЦПВ</h4>
                      <p className="text-gray-600 text-sm">Експертиза для врегулювання страхових випадків за КАСКО та ОСЦПВ</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Спірні ситуації</h4>
                      <p className="text-gray-600 text-sm">При розбіжностях в оцінці пошкоджень між клієнтом і страховиком</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl text-gray-900 mb-4">Страхові компанії, з якими працюємо</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="grid grid-cols-2 gap-2 text-gray-700 text-sm">
                    <li>• PZU Україна</li>
                    <li>• УНІКА</li>
                    <li>• АХА Страхування</li>
                    <li>• АРСЕНАЛ Страхування</li>
                    <li>• Providna</li>
                    <li>• ІНГО Україна</li>
                    <li>• ТАС СГ</li>
                    <li>• Українська страхова група</li>
                    <li>• Альфа Страхування</li>
                    <li>• VUSO</li>
                    <li>• Європейське страхове товариство</li>
                    <li>• Інші страхові компанії</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-rose-600" />
                    </div>
                    <h3 className="text-gray-900">Що впливає на вартість оцінки</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">1</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Тип транспортного засобу</h4>
                        <p className="text-gray-600 text-xs">Легковий автомобіль, вантажний, мотоцикл, автобус</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">2</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Складність пошкоджень</h4>
                        <p className="text-gray-600 text-xs">Обсяг та характер пошкоджень, необхідність демонтажу</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">3</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Термін виконання</h4>
                        <p className="text-gray-600 text-xs">Стандартний або термінових терміни підготовки висновку</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">4</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Місце п��оведення</h4>
                        <p className="text-gray-600 text-xs">В офісі експерта у Дніпрі або з виїздом по області</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-gradient-to-br from-rose-50 to-pink-50">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-4">Зв'яжіться з експертом</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-rose-600" />
                      <div>
                        <p className="text-gray-900 text-sm">(097) 215-84-37</p>
                        <p className="text-gray-900 text-sm">(063) 796-14-03</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-rose-600" />
                      <p className="text-gray-900 text-sm">aiexpert@ua.fm</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-rose-600" />
                      <p className="text-gray-900 text-sm">м. Дніпро та область</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-6">
                    <Button 
                      className="bg-rose-600 hover:bg-rose-700 text-white"
                      onClick={() => handlePhoneCall('+380972158437')}
                    >
                      Зателефонувати зараз
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-rose-600 text-rose-600 hover:bg-rose-50"
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
              Незалежна оцінка автомобіля для страхових компаній у Дніпрі та області
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Коли страхова компанія занижує суму компенсації або відмовляє у виплаті, незалежна експертна оцінка автомобіля стає вашим надійним захистом. 
                Атестований судовий експерт Пилипенко А.І. проводить об'єктивну оцінку пошкоджень транспортних засобів для всіх страхових компаній України 
                з 1996 року. Свідоцтво Міністерства юстиції України №22 гарантує високу якість та юридичну силу експертних висновків.
              </p>
              
              <p>
                <strong>Експертна оцінка для страхових включає:</strong> детальний огляд пошкоджень автомобіля, професійну фотофіксацію, точні розрахунки 
                вартості ремонту або втрати товарної вартості згідно з методиками, прийнятими страховими компаніями, скла��ання офіційного експертного 
                висновку з обґрунтуванням всіх позицій. Документ має юридичну силу та приймається всіма страховими компаніями та судами.
              </p>
              
              <p>
                <strong>Коли потрібна незалежна експертиза:</strong> занижена компенсація від страхової компанії, відмова у виплаті по КАСКО або ОСЦПВ, 
                спірні питання щодо розміру збитків, необхідність проведення повторної експертизи, досудове врегулювання суперечок із страховиком. 
                Незалежний експерт захищає ваші інтереси та гарантує справедливу оцінку.
              </p>
              
              <p>
                Працюємо з усіма страховими компаніями України: PZU, УНІКА, АХА, АРСЕНАЛ, Providna, ІНГО, ТАС СГ та іншими. Виїжджаємо для проведення 
                експертизи у Дніпрі та по всій Дніпропетровській області. Готовність експертного висновку 1-3 робочих дні. Консультації безкоштовні. 
                Телефонуйте (097) 215-84-37 або (063) 796-14-03.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}