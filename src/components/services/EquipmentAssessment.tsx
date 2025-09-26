import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  ArrowLeft, 
  Shield, 
  Package, 
  Calculator, 
  FileText, 
  CheckCircle, 
  Phone, 
  Mail,
  Building,
  Wrench,
  Settings,
  Award
} from 'lucide-react';

export default function EquipmentAssessment({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center h-16">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Назад до головної</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 bg-pink-100 text-pink-800 text-sm rounded-full">
                  Експертна оцінка обладнання
                </div>
                
                <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                  Професійна оцінка промислового обладнання та товарів
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Незалежна експертна оцінка промислового обладнання, машин, механізмів та товарів 
                  з офіційними експертними актами для юридичних та фізичних осіб.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3">
                  Замовити оцінку обладнання
                </Button>
                <Button variant="outline" size="lg" className="border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3">
                  Безкоштовна консультація
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1558618666-fc6a2df0e2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZXF1aXBtZW50JTIwbWFjaGluZXJ5fGVufDF8fHx8MTc1NzE1Nzg5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Професійна оцінка промислового обладнання"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">
              Переваги нашої оцінки обладнання
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Професійна експертиза з 29-річним досвідом для точного визначення вартості
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Офіційне визнання</h3>
              <p className="text-gray-600 text-sm">Експертні акти приймають всі державні установи</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Широкий спектр</h3>
              <p className="text-gray-600 text-sm">Оцінка всіх видів промислового обладнання</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Точні розрахунки</h3>
              <p className="text-gray-600 text-sm">Обґрунтована оцінка згідно стандартів</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Досвід експерта</h3>
              <p className="text-gray-600 text-sm">29 років професійної експертної діяльності</p>
            </div>
          </div>
        </div>
      </div>

      {/* Types of Equipment */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">
              Види обладнання, що оцінюємо
            </h2>
            <p className="text-lg text-gray-600">
              Професійна оцінка широкого спектру промислового та комерційного обладнання
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Settings className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Промислове обладнання</h3>
                    <p className="text-gray-600 text-sm">
                      Верстати, пресове обладнання, конвеєри, технологічні лінії
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Будівельна техніка</h3>
                    <p className="text-gray-600 text-sm">
                      Екскаватори, крани, бульдозери, навантажувачі
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Комерційне обладнання</h3>
                    <p className="text-gray-600 text-sm">
                      Торгове, ресторанне, медичне, офісне обладнання
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Енергетичне обладнання</h3>
                    <p className="text-gray-600 text-sm">
                      Генератори, трансформатори, електричні машини
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Сільгосптехніка</h3>
                    <p className="text-gray-600 text-sm">
                      Трактори, комбайни, сівалки, культиватори
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Спеціалізоване обладнання</h3>
                    <p className="text-gray-600 text-sm">
                      Лабораторне, наукове, вимірювальне обладнання
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">
              Процес оцінки обладнання
            </h2>
            <p className="text-lg text-gray-600">
              Комплексний підхід для точного визначення вартості
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">1</span>
              </div>
              <h3 className="text-gray-900 mb-2">Заявка</h3>
              <p className="text-gray-600 text-sm">
                Подача заявки з описом обладнання та цілі оцінки
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">2</span>
              </div>
              <h3 className="text-gray-900 mb-2">Огляд</h3>
              <p className="text-gray-600 text-sm">
                Виїзд експерта та детальний технічний огляд
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">3</span>
              </div>
              <h3 className="text-gray-900 mb-2">Аналіз</h3>
              <p className="text-gray-600 text-sm">
                Аналіз ринку та розрахунок справедливої вартості
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">4</span>
              </div>
              <h3 className="text-gray-900 mb-2">Звіт</h3>
              <p className="text-gray-600 text-sm">
                Офіційний експертний акт з висновками
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-br from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl mb-4">
            Потрібна оцінка обладнання?
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Зв'яжіться з нами для безкоштовної консультації
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              Зателефонувати зараз
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3">
              <Mail className="w-5 h-5 mr-2" />
              Написати email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}