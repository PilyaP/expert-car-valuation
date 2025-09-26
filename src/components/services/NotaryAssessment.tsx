'use client';

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  ArrowLeft, 
  FileText, 
  Heart, 
  Users, 
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  Scale
} from 'lucide-react';

export default function NotaryAssessment({ onBack, onContact }) {
  const handlePhoneCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:aiexpert@ua.fm?subject=Запит на оцінку для нотаріуса&body=Доброго дня! Мені потрібна оцінка автомобіля для нотаріального оформлення.';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
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
              <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full mb-4">
                Нотаріальне оформлення
              </div>
              
              <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                Оцінка для нотаріуса у Дніпрі
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Експертна оцінка автомобілів для нотаріального оформлення спадщини, 
                розподілу майна при розлученні та угод купівлі-продажу.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
                  onClick={() => handlePhoneCall('+380972158437')}
                >
                  Замовити оцінку
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3"
                  onClick={handleEmailClick}
                >
                  Написати email
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1666018215790-867b14fe4822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RhcnklMjBsZWdhbCUyMGRvY3VtZW50cyUyMGNvbnRyYWN0JTIwc2lnbmluZ3xlbnwxfHx8fDE3NTg4MDEzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Нотаріальне оформлення документів з оцінкою автомобіля"
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
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Спадкові справи</h3>
              <p className="text-gray-600 text-sm">Оцінка автомобіля для оформлення спадщини у нотаріуса</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Розподіл майна</h3>
              <p className="text-gray-600 text-sm">Оцінка при розлученні та розподілі спільного майна</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Угоди та договори</h3>
              <p className="text-gray-600 text-sm">Оцінка для нотаріального посвідчення угод</p>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-gray-900 mb-6">Нотаріальні послуги з оцінкою</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Оформлення спадщини</h4>
                      <p className="text-gray-600 text-sm">Визначення вартості автомобіля для розрахунку спадкового збору</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Розподіл при розлученні</h4>
                      <p className="text-gray-600 text-sm">Справедливий розподіл спільного майна подружжя</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Договори купівлі-продажу</h4>
                      <p className="text-gray-600 text-sm">Нотаріальне посвідчення угод з визначенням справедливої ціни</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Договори дарування</h4>
                      <p className="text-gray-600 text-sm">Оцінка для нотаріального оформлення дарування автомобіля</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl text-gray-900 mb-4">Особливості нотаріальної оцінки</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Висновок визнається всіма нотаріусами України</li>
                    <li>• Розрахунок спадкового збору та державного мита</li>
                    <li>• Оцінка на дату відкриття спадщини</li>
                    <li>• Врахування зносу та технічного стану</li>
                    <li>• Справедливий розподіл майнових прав</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Scale className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-gray-900">Процедура оцінки</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">1</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Консультація</h4>
                        <p className="text-gray-600 text-xs">Обговорення мети оцінки та необхідних документів</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">2</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Огляд автомобіля</h4>
                        <p className="text-gray-600 text-xs">Технічний огляд та визначення фактичного стану</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">3</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Розрахунок вартості</h4>
                        <p className="text-gray-600 text-xs">Визначення ринкової вартості на потрібну дату</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">4</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Експертний висновок</h4>
                        <p className="text-gray-600 text-xs">Підготовка офіційного документа для нотаріуса</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-4">Консультація експерта</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-purple-600" />
                      <div>
                        <p className="text-gray-900 text-sm">(097) 215-84-37</p>
                        <p className="text-gray-900 text-sm">(063) 796-14-03</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-purple-600" />
                      <p className="text-gray-900 text-sm">aiexpert@ua.fm</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-purple-600" />
                      <p className="text-gray-900 text-sm">м. Дніпро та область</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-6">
                    <Button 
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                      onClick={() => handlePhoneCall('+380972158437')}
                    >
                      Зателефонувати
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-purple-600 text-purple-600 hover:bg-purple-50"
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
              Нотаріальна оцінка автомобіля у Дніпрі
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Нотаріальна оцінка автомобіля у Дніпрі проводиться атестованим експертом для оформлення 
                різних нотаріальних дій. Експертний висновок необхідний для визначення справедливої 
                ринкової вартості транспортного засобу при спадкових справах, розподілі майна при 
                розлученні, нотаріальному посвідченні угод купівлі-продажу та дарування.
              </p>
              
              <p>
                <strong>Нотаріальна оцінка потрібна для:</strong> оформлення спадщини на автомобіль 
                (розрахунок спадкового збору); розподілу спільного майна подружжя при розлученні; 
                нотаріального посвідчення договорів купівлі-продажу автомобілів; оформлення договорів 
                дарування транспортних засобів; визначення розміру компенсації при майнових спорах.
              </p>
              
              <p>
                <strong>Особливості нотаріальної оцінки:</strong> оцінка проводиться на конкретну дату 
                (дату відкриття спадщини, подачі заяви тощо); враховується технічний стан автомобіля, 
                пробіг, комплектність; висновок має офіційний статус та приймається всіма нотаріусами 
                України; розрахунок проводиться згідно з офіційними методиками оцінки.
              </p>
              
              <p>
                Експерт Пилипенко А.І. має великий досвід роботи з нотаріусами та знає всі особливості 
                оформлення експертних висновків для нотаріальних дій. Для консультації та замовлення 
                оцінки телефонуйте (097) 215-84-37 або (063) 796-14-03.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}