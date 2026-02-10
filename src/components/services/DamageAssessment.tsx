'use client';

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  ArrowLeft, 
  Package, 
  Calculator, 
  Camera, 
  Shield, 
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  AlertTriangle
} from 'lucide-react';

export default function DamageAssessment({ onBack, onContact }) {
  const handlePhoneCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:aiexpert@ua.fm?subject=Запит на визначення розміру збитків&body=Доброго дня! Мені потрібне визначення розміру збитків і пошкоджень автомобіля.';
  };

  return (
    <div className="min-h-screen bg-white">
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
                Точне визначення розміру збитку, завданого власнику транспортного засобу при ДТП, вандалізмі, стихійних лихах та інших пошкодженнях. 
                Професійна експертиза з 29-річним досвідом.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3"
                  onClick={() => handlePhoneCall('+380972158437')}
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
              <p className="text-gray-600 text-sm">Детальний розрахунок усіх видів збитків та втрат</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Професійна фіксація</h3>
              <p className="text-gray-600 text-sm">Повна фотофіксація всіх пошкоджень та дефектів</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Правова захищеність</h3>
              <p className="text-gray-600 text-sm">Експертні висновки з повною юридичною силою</p>
            </div>
          </div>

          {/* SEO Content Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-gray-900 mb-8 text-center">
              Професійне визначення розміру збитків автомобіля у Дніпрі та області
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Коли ваш автомобіль отримав пошкодження внаслідок ДТП, вандалізму, стихійного лиха або інших обставин, важливо точно визначити розмір 
                завданих збитків. Атестований судовий експерт Пилипенко А.І. проводить професійне визначення розміру збитків транспортних засобів у 
                Дніпрі та Дніпропетровській області з 1996 року. Свідоцтво Міністерства юстиції України №22 гарантує юридичну силу експертних висновків.
              </p>
              
              <p>
                <strong>Визначення збитків включає:</strong> детальний огляд та фіксацію всіх пошкоджень автомобіля, професійну фотофіксацію з різних 
                ракурсів, точний розрахунок вартості відновлювального ремонту, визначення втрати товарної вартості, оцінку прихованих дефектів, 
                складання офіційного експертного висновку з обґрунтуванням усіх розрахунків згідно з діючими методиками.
              </p>
              
              <p>
                <strong>Коли потрібне визначення збитків:</strong> ДТП з винуватцем або без, пошкодження від стихійних лих (град, повінь, буря), 
                вандалізм та навмисне пошкодження, падіння предметів, пожежа, крадіжка деталей автомобіля, заводський брак, гарантійні випадки. 
                Експертний висновок необхідний для отримання компенсації від винуватця, страхової компанії або третіх осіб.
              </p>
              
              <p>
                Працюємо у Дніпрі та виїжджаємо по всій Дніпропетровській области для огляду пошкодженого транспорту. Готовність експертного висновку 
                1-3 робочих дні. Експертні висновки приймають усі суди, страхові компанії та державні установи. Консультації безкоштовні. 
                Телефонуйте: (097) 215-84-37, (063) 796-14-03.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}