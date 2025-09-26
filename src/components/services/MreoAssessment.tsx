'use client';

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  ArrowLeft, 
  Car, 
  FileText, 
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  Clipboard
} from 'lucide-react';

export default function MreoAssessment({ onBack, onContact }) {
  const handlePhoneCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:aiexpert@ua.fm?subject=Запит на оцінку для МРЕО&body=Доброго дня! Мені потрібна оцінка автомобіля для реєстрації в МРЕО.';
  };

  return (
    <div className="min-h-screen bg-white">
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
                Оцінка для МРЕО
              </div>
              
              <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                Оцінка для МРЕО (сервісних центрів МВС)
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Експертна оцінка автомобілів для реєстрації в сервісних центрах МВС у Дніпрі 
                та Дніпропетровській області. Офіційні висновки від атестованого експерта.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                  onClick={() => handlePhoneCall('+380972158437')}
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1630406144797-821be1f35d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx2ZWhpY2xlJTIwcmVnaXN0cmF0aW9uJTIwaW5zcGVjdGlvbiUyMGRvY3VtZW50fGVufDF8fHx8MTc1ODgwMTA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Оцінка автомобіля для реєстрації в МРЕО"
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
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Швидка реєстрація</h3>
              <p className="text-gray-600 text-sm">Оперативна оцінка для швидкої реєстрації в МРЕО</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Офіційні документи</h3>
              <p className="text-gray-600 text-sm">Висновки приймаються всіма сервісними центрами МВС</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Термінова оцінка</h3>
              <p className="text-gray-600 text-sm">Можливість термінового виконання в день звернення</p>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-gray-900 mb-6">Коли потрібна оцінка для МРЕО</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Перша реєстрація</h4>
                      <p className="text-gray-600 text-sm">Реєстрація нового автомобіля, ввезеного з-за кордону</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Зміна власника</h4>
                      <p className="text-gray-600 text-sm">Переоформлення автомобіля на нового власника</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Відновлення документів</h4>
                      <p className="text-gray-600 text-sm">При втраті свідоцтва про реєстрацію ТЗ</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Зміна конструкції</h4>
                      <p className="text-gray-600 text-sm">При внесенні змін до конструкції транспортного засобу</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl text-gray-900 mb-4">Необхідні документи</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Паспорт або ID-карта власника</li>
                    <li>• Техпаспорт автомобіля (якщо є)</li>
                    <li>• Договір купівлі-продажу</li>
                    <li>• Довідка про розмитнення (для імпорту)</li>
                    <li>• Довідка про відсутність обтяжень</li>
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
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">1</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Заявка</h4>
                        <p className="text-gray-600 text-xs">Дзвінок або email для узгодження часу огляду</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">2</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Огляд автомобіля</h4>
                        <p className="text-gray-600 text-xs">Технічний огляд та фіксація основних характеристик</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">3</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Визначення вартості</h4>
                        <p className="text-gray-600 text-xs">Розрахунок ринкової вартості автомобіля</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">4</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Оформлення висновку</h4>
                        <p className="text-gray-600 text-xs">Підготовка офіційного експертного висновку</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-4">Зв'яжіться з експертом</h3>
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
                      onClick={() => handlePhoneCall('+380972158437')}
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

      {/* SEO Content Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-gray-900 mb-8 text-center">
              Оцінка автомобіля для МРЕО у Дніпрі
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Оцінка автомобіля для реєстрації в МРЕО (сервісних центрах МВС) у Дніпрі проводиться 
                атестованим експертом Пилипенком А.І. відповідно до вимог чинного законодавства України. 
                Експертний висновок необхідний для офіційної реєстрації транспортних засобів в органах МВС.
              </p>
              
              <p>
                <strong>Оцінка для МРЕО потрібна у випадках:</strong> першої реєстрації автомобіля, 
                ввезеного з-за кордону; переоформлення права власності на транспортний засіб; 
                відновлення втрачених документів на автомобіль; внесення змін до конструкції ТЗ; 
                зняття з обліку для утилізації.
              </p>
              
              <p>
                <strong>Експертний висновок</strong> містить детальну інформацію про технічні характеристики 
                автомобіля, його технічний стан, ринкову вартість станом на дату оцінки. Документ 
                оформлюється відповідно до вимог нормативних актів МВС України та приймається всіма 
                сервісними центрами МВС.
              </p>
              
              <p>
                Працюємо швидко та якісно. Можливе термінове виконання оцінки в день звернення. 
                Виїжджаємо для огляду автомобіля у Дніпрі та по всій Дніпропетровській області. 
                Для замовлення оцінки телефонуйте (097) 215-84-37 або (063) 796-14-03.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}