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
  src="https://tse4.mm.bing.net/th/id/OIP.nVYgmUjfM5AkuY_Lo9_WsgHaFO?pid=Api"
  alt="(Challenger, MT800)"
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
<section className="py-16 bg-white">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
        Процес оцінки обладнання
      </h2>
      <p className="text-lg text-gray-600">
        Комплексний підхід для точного визначення вартості
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
      {/* line on desktop */}
      <div className="hidden md:block absolute top-8 left-8 right-8 h-px bg-gray-200" />

      {[
        {
          step: '1',
          title: 'Заявка',
          text: 'Подача заявки з описом обладнання та мети оцінки',
        },
        {
          step: '2',
          title: 'Огляд',
          text: 'Виїзд експерта та детальний технічний огляд',
        },
        {
          step: '3',
          title: 'Аналіз',
          text: 'Аналіз ринку та розрахунок справедливої вартості',
        },
        {
          step: '4',
          title: 'Звіт',
          text: 'Офіційний експертний звіт (акт) з висновками',
        },
      ].map((item) => (
        <div key={item.step} className="text-center relative">
          <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
            <span className="text-xl font-semibold">{item.step}</span>
          </div>
          <h3 className="text-gray-900 font-medium mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="py-20 bg-gradient-to-br from-pink-600 via-pink-500 to-purple-600">
  <div className="container mx-auto px-4 max-w-5xl text-center text-white">
    <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
      Потрібна оцінка обладнання?
    </h2>

    <p className="text-lg sm:text-xl mb-10 text-white/90">
      Звʼяжіться з нами для безкоштовної консультації
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Button
        asChild
        size="lg"
        className="bg-white text-pink-600 hover:bg-white/90 px-8 py-3 font-medium shadow-md"
      >
        <a href="tel:+380972158437">
          <Phone className="w-5 h-5 mr-2" />
          Зателефонувати
        </a>
      </Button>

<Button
  asChild
  variant="outline"
  size="lg"
  className="border-white bg-transparent text-white hover:bg-white/10 px-8 py-3 font-medium"
>
  <a href="mailto:aiexpert@ua.fm" className="flex items-center">
    <Mail className="w-5 h-5 mr-2 !text-white" />
    Написати на email
  </a>
</Button>

    </div>
  </div>
</section>
    </div>
  )
}