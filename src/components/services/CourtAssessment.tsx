'use client';

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  ArrowLeft, 
  Scale, 
  FileText, 
  Shield, 
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  Gavel
} from 'lucide-react';

export default function CourtAssessment({ onBack, onContact }) {
  const handlePhoneCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:aiexpert@ua.fm?subject=Запит на судову експертизу&body=Доброго дня! Мені потрібна судова експертиза автомобіля.';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
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
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-4">
                Судова експертиза
              </div>
              
              <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                Судова експертиза автомобілів у Дніпрі
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Офіційні експертні висновки для цивільних та кримінальних справ від атестованого 
                судового експерта. Висновки визнаються всіма судами України.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  onClick={() => handlePhoneCall('+380972158437')}
                >
                  Замовити експертизу
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                  onClick={handleEmailClick}
                >
                  Написати email
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1654588833543-f231a643ee72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydCUyMGV4cGVydCUyMGF1dG9tb3RpdmUlMjBldmFsdWF0aW9uJTIwbGVnYWx8ZW58MXx8fHwxNzU4ODAxMDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Судова експертиза автомобіля професійним експертом"
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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Офіційний статус</h3>
              <p className="text-gray-600 text-sm">Атестований судовий експерт з правом проведення експертиз</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gavel className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Визнання судами</h3>
              <p className="text-gray-600 text-sm">Експертні висновки приймаються всіма судами України</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Юридична сила</h3>
              <p className="text-gray-600 text-sm">Документи мають повну юридичну силу згідно закону</p>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-gray-900 mb-6">Види судових експертиз</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Цивільні справи</h4>
                      <p className="text-gray-600 text-sm">Спадкові справи, розподіл майна при розлученні, майнові спори</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Кримінальні справи</h4>
                      <p className="text-gray-600 text-sm">Визначення вартості для кримінальних проваджень</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Господарські спори</h4>
                      <p className="text-gray-600 text-sm">Оцінка для господарських судів та арбітражу</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-gray-900 mb-1">Адміністративні справи</h4>
                      <p className="text-gray-600 text-sm">Експертизи для адміністративних судів</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl text-gray-900 mb-4">Що входить в експертизу</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Детальний огляд транспортного засобу</li>
                    <li>• Визначення ринкової вартості</li>
                    <li>• Аналіз технічного стану</li>
                    <li>• Оцінка пошкоджень (якщо є)</li>
                    <li>• Складання офіційного висновку</li>
                    <li>• Фотодокументація</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Scale className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-gray-900">Процедура призначення</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">1</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Ухвала суду</h4>
                        <p className="text-gray-600 text-xs">Суд призначає судову експертизу та експерта</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">2</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Отримання постанови</h4>
                        <p className="text-gray-600 text-xs">Експерт отримує офіційну постанову про призначення</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">3</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Проведення експертизи</h4>
                        <p className="text-gray-600 text-xs">Огляд об'єкта та проведення необхідних досліджень</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1">4</div>
                      <div>
                        <h4 className="text-gray-900 text-sm mb-1">Висновок експерта</h4>
                        <p className="text-gray-600 text-xs">Підготовка та подання висновку до суду</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-4">Консультація експерта</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <div>
                        <p className="text-gray-900 text-sm">(097) 215-84-37</p>
                        <p className="text-gray-900 text-sm">(063) 796-14-03</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <p className="text-gray-900 text-sm">aiexpert@ua.fm</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <p className="text-gray-900 text-sm">м. Дніпро та область</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-6">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => handlePhoneCall('+380972158437')}
                    >
                      Консультація
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
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
              Судова автоекспертиза у Дніпрі від атестованого експерта
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Судова автоекспертиза у Дніпрі проводиться атестованим судовим експертом Пилипенком А.І. 
                відповідно до вимог процесуального законодавства України. Експерт має свідоцтво Міністерства 
                юстиції України №22 та включений до офіційного реєстру атестованих судових експертів.
              </p>
              
              <p>
                <strong>Судова експертиза призначається у справах:</strong> спадкових спорах для визначення 
                вартості транспортних засобів, розподілі майна при розлученні, кримінальних провадженнях 
                щодо заподіяння майнової шкоди, господарських спорах, адміністративних справах щодо 
                порушень у сфері автотранспорту.
              </p>
              
              <p>
                <strong>Висновок судового експерта</strong> має статус процесуального документа та є одним 
                з видів доказів у судовому процесі. Експертний висновок складається відповідно до вимог 
                процесуальних кодексів та містить детальне обґрунтування висновків експерта з посиланням 
                на використані методики та нормативні документи.
              </p>
              
              <p>
                Судовий експерт Пилипенко А.І. має 29-річний досвід проведення експертиз та бездоганну 
                репутацію в судових та правоохоронних органах. Для консультацій та узгодження експертизи 
                телефонуйте (097) 215-84-37 або (063) 796-14-03.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}