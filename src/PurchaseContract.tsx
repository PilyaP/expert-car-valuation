='use client';

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  ArrowLeft, 
  Handshake, 
  FileText, 
  Shield, 
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  FileCheck,
  Users
} from 'lucide-react';

export default function PurchaseContract({ onBack, onContact }) {
  const handlePhoneCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:aiexpert@ua.fm?subject=Запит на договір купівлі-продажу&body=Доброго дня! Мені потрібна допомога з оформленням договору купівлі-продажу автомобіля.';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 py-16">
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
              <div className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full mb-4">
                Договори купівлі-продажу
              </div>
              
              <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                Договори купівлі-продажу автомобіля у Дніпрі
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Оформлення та експертна підтримка угод купівлі-продажу автомобіля з офіційними висновками експерта. 
                Юридичний супровід та незалежна оцінка для безпечних автоугод.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3"
                  onClick={() => handlePhoneCall('+380972158437')}
                >
                  Замовити послугу
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3"
                  onClick={handleEmailClick}
                >
                  Написати email
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black/5">
  <ImageWithFallback
                  src="https://images.unsplash.com/photo-1696861270495-7f35c35c3273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBwdXJjaGFzZSUyMHNhbGUlMjBjb250cmFjdCUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NTg4MDIxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Договір купівлі-продажу автомобіля"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-gray-900 mb-8 text-center">
              Договори купівлі-продажу автомобіля з експертним супроводом у Дніпрі
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Купівля або продаж автомобіля потребує професійного підходу та юридичного захисту. Атестований судовий експерт Пилипенко А.І. надає 
                комплексні послуги оформлення договорів купівлі-продажу автомобіля з експертним супроводом у Дніпрі та Дніпропетровській області. 
                30-річний досвід гарантує безпечність та законність автоугод.
              </p>
              
              <p>
                <strong>Послуги включають:</strong> незалежну оцінку ринкової вартості автомобіля, перевірку технічного стану транспортного засобу, 
                юридичну перевірку документів, складання експертного висновку про вартість та стан авто, консультації щодо оформлення угоди, 
                супровід у реєстраційних органах при необхідності.
              </p>
              
              <p>
                <strong>Чому важлива експертна підтримка:</strong> захист від переплати або недоотримання коштів, виявлення прихованих дефектів, 
                підтвердження справедливої ціни, юридичний захист у разі спорів, професійна оцінка для кредитних та страхових програм, 
                мінімізація ризиків при укладенні угоди.
              </p>
              
              <p>
                Працюємо з приватними особами та юридичними особами у Дніпрі та по всій Дніпропетровській області. Можливе термінове оформлення. 
                Надаємо офіційні експертні висновки з юридичною силою. Консультації безкоштовні. Телефонуйте: (097) 215-84-37, (063) 796-14-03.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}