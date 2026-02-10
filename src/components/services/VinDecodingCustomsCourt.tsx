import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ArrowLeft, Hash, CheckCircle2, Shield, FileCheck, MapPin, Gauge, Calendar, Car, Package, Award, AlertCircle, Globe } from "lucide-react";

interface VinDecodingProps {
  onBack: () => void;
}

export default function VinDecodingCustomsCourt({ onBack }: VinDecodingProps) {
  const handleCall = () => {
    window.location.href = 'tel:+380503169637';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:expert@example.com';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 border-b-4 border-blue-700">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button
            onClick={onBack}
            variant="outline"
            className="mb-6 bg-white/90 hover:bg-white border-gray-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Повернутися до головної
          </Button>
          
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl">
              <Hash className="w-12 h-12 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl text-white mb-2">
                Розшифрування VIN для митниці та суду
              </h1>
              <p className="text-lg text-blue-100">
                Професійне розшифрування VIN-коду для офіційних процедур з використанням ліцензійних програм
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Ukraine Coverage Section */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 mb-8 border-2 border-green-300">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <Globe className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl lg:text-3xl text-gray-900">
              Працюємо по всій Україні
            </h2>
          </div>
          <p className="text-lg text-gray-700 text-center leading-relaxed mb-4">
            Розшифрування VIN-коду з офіційними експертними висновками для клієнтів з усіх регіонів України. 
            Документи надаємо в електронному вигляді або поштою.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white rounded-xl p-5 text-center border border-green-200">
              <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="text-gray-900 font-medium mb-2">Будь-яке місто</h4>
              <p className="text-gray-600 text-sm">
                Київ, Харків, Одеса, Львів та інші міста України
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 text-center border border-green-200">
              <FileCheck className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="text-gray-900 font-medium mb-2">Дистанційно</h4>
              <p className="text-gray-600 text-sm">
                Отримайте висновок без виїзду з дому
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 text-center border border-green-200">
              <Calendar className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="text-gray-900 font-medium mb-2">Швидко</h4>
              <p className="text-gray-600 text-sm">
                Готовність документів 1-2 робочих дні
              </p>
            </div>
          </div>
        </div>

        {/* Key Info Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-200">
          <h2 className="text-2xl text-gray-900 mb-6 flex items-center">
            <Shield className="w-7 h-7 text-blue-600 mr-3" />
            Офіційне розшифрування VIN-коду
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            VIN (Vehicle Identification Number) — це унікальний 17-значний код, який містить всю важливу інформацію про транспортний засіб. 
            Наша експертна розшифровка VIN надає точні дані, необхідні для митного оформлення, судових справ та інших офіційних процедур.
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-300">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg text-gray-900 mb-2">Тільки ліцензійні програми</h3>
                <p className="text-gray-700">
                  Ми використовуємо виключно офіційні ліцензійні програми для розшифрування VIN, що гарантує 
                  точність даних і юридичну обґрунтованість наших висновків для всіх державних органів.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Provide */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white shadow-lg border-2 border-blue-200 hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <FileCheck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900">Що ми розшифровуємо</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">Країна походження</p>
                    <p className="text-gray-600 text-sm">Точне визначення країни-виробника автомобіля</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">Точний об'єм двигуна</p>
                    <p className="text-gray-600 text-sm">Робочий об'єм у см³ та літрах для розрахунку мита</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">Рік та дата випуску</p>
                    <p className="text-gray-600 text-sm">Точна дата виробництва транспортного засобу</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">Потужність двигуна</p>
                    <p className="text-gray-600 text-sm">Потужність у кВт та к.с. (кінських силах)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">Тип кузова</p>
                    <p className="text-gray-600 text-sm">Седан, універсал, хетчбек, позашляховик тощо</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">Тип палива</p>
                    <p className="text-gray-600 text-sm">Бензин, дизель, гібрид, електро</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">Комплектація</p>
                    <p className="text-gray-600 text-sm">Базова, стандартна, преміум та інші опції</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border-2 border-indigo-200 hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                  <Package className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl text-gray-900">Для чого потрібно</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-900 font-medium">Розрахунок митних платежів</p>
                    <p className="text-gray-600 text-sm">Точні дані для обчислення акцизного збору та ПДВ</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-900 font-medium">Митне оформлення</p>
                    <p className="text-gray-600 text-sm">Офіційні дані для проходження митного контролю</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-900 font-medium">Судові справи</p>
                    <p className="text-gray-600 text-sm">Експертні висновки для суду при спорах щодо ТЗ</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-900 font-medium">Реєстрація в МРЕО</p>
                    <p className="text-gray-600 text-sm">Підтвердження технічних характеристик авто</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-900 font-medium">Перевірка автомобіля</p>
                    <p className="text-gray-600 text-sm">Виявлення підробок та невідповідностей</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-900 font-medium">Купівля авто з-за кордону</p>
                    <p className="text-gray-600 text-sm">Попередній розрахунок витрат на розмитнення</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Customs Calculation Section */}
        <Card className="bg-gradient-to-br from-orange-50 to-red-50 shadow-xl border-2 border-orange-300 mb-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                <Calculator className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl text-gray-900">Розрахунок митних платежів на основі VIN</h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Точний об'єм двигуна, який ми визначаємо через розшифрування VIN, є критично важливим для розрахунку 
              митних платежів при ввезенні автомобіля в Україну. Навіть невелика помилка в об'ємі може призвести до 
              значної різниці в сумі мита.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 border border-orange-200">
                <Gauge className="w-8 h-8 text-orange-600 mb-3" />
                <h4 className="text-gray-900 font-medium mb-2">Точний об'єм</h4>
                <p className="text-gray-600 text-sm">
                  Визначаємо точний робочий об'єм двигуна в см³
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-5 border border-orange-200">
                <Calculator className="w-8 h-8 text-orange-600 mb-3" />
                <h4 className="text-gray-900 font-medium mb-2">Розрахунок мита</h4>
                <p className="text-gray-600 text-sm">
                  Акцизний збір залежить від об'єму та віку авто
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-5 border border-orange-200">
                <FileCheck className="w-8 h-8 text-orange-600 mb-3" />
                <h4 className="text-gray-900 font-medium mb-2">Офіційний висновок</h4>
                <p className="text-gray-600 text-sm">
                  Експертний акт для митниці з печаткою
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* All Brands Coverage */}
        <Card className="bg-white shadow-xl border-2 border-blue-200 mb-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Car className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl text-gray-900">Всі марки автомобілів</h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Наші ліцензійні програми дозволяють розшифровувати VIN-коди автомобілів всіх світових виробників, 
              включаючи європейські, американські, японські, корейські та китайські бренди.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                <p className="text-gray-700 font-medium">🇩🇪 Німецькі</p>
                <p className="text-gray-500 text-sm">BMW, Mercedes, Audi, VW</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                <p className="text-gray-700 font-medium">🇯🇵 Японські</p>
                <p className="text-gray-500 text-sm">Toyota, Honda, Nissan</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                <p className="text-gray-700 font-medium">🇺🇸 Американські</p>
                <p className="text-gray-500 text-sm">Ford, Chevrolet, Tesla</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                <p className="text-gray-700 font-medium">🇰🇷 Корейські</p>
                <p className="text-gray-500 text-sm">Hyundai, Kia, Genesis</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                <p className="text-gray-700 font-medium">🇫🇷 Французькі</p>
                <p className="text-gray-500 text-sm">Renault, Peugeot, Citroën</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                <p className="text-gray-700 font-medium">🇮🇹 Італійські</p>
                <p className="text-gray-500 text-sm">Fiat, Alfa Romeo, Ferrari</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                <p className="text-gray-700 font-medium">🇨🇳 Китайські</p>
                <p className="text-gray-500 text-sm">Geely, BYD, Chery</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                <p className="text-gray-700 font-medium">🇬🇧 Британські</p>
                <p className="text-gray-500 text-sm">Land Rover, Jaguar, Mini</p>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 rounded-xl p-5 border border-blue-200">
              <p className="text-blue-900 text-center">
                <Award className="w-5 h-5 inline mr-2 text-blue-600" />
                <strong>100% покриття всіх марок та моделей</strong> — використовуємо офіційні бази даних виробників
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Licensed Software */}
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl border-2 border-green-300 mb-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl text-gray-900">Тільки ліцензійне програмне забезпечення</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-green-200">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900 font-medium mb-2">Офіційні бази даних виробників</h4>
                    <p className="text-gray-600">
                      Використовуємо ліцензійні програми з прямим доступом до баз даних автовиробників, 
                      що гарантує актуальність та точність інформації.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-green-200">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900 font-medium mb-2">Юридична обґрунтованість</h4>
                    <p className="text-gray-600">
                      Наші висновки мають юридичну силу, оскільки базуються на офіційних даних з ліцензійних джерел.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-green-200">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900 font-medium mb-2">Прийняття державними органами</h4>
                    <p className="text-gray-600">
                      Митниця, суди та інші державні установи приймають наші експертні висновки без заперечень.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-orange-50 rounded-xl p-5 border-2 border-orange-300">
              <p className="text-gray-800 text-center flex items-center justify-center">
                <AlertCircle className="w-5 h-5 mr-2 text-orange-600" />
                <strong>Увага!</strong> Не використовуємо безкоштовні онлайн-сервіси та неліцензійні програми
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <Card className="bg-white shadow-xl border-2 border-blue-200 mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl text-gray-900 mb-6 text-center">Чому обирають нас</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium mb-1">29 років досвіду</h4>
                  <p className="text-gray-600 text-sm">
                    Багаторічний досвід роботи з митницею та судовими органами
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium mb-1">Офіційні документи</h4>
                  <p className="text-gray-600 text-sm">
                    Експертні висновки з печаткою та підписом атестованого експерта
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium mb-1">Швидке виконання</h4>
                  <p className="text-gray-600 text-sm">
                    Розшифрування VIN та підготовка висновку протягом 1-2 робочих днів
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium mb-1">По всій Україні</h4>
                  <p className="text-gray-600 text-sm">
                    Надаємо послуги клієнтам з усіх регіонів України
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-8 text-center">
          <h3 className="text-2xl lg:text-3xl text-white mb-4">
            Потрібно розшифрувати VIN?
          </h3>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Зв'яжіться з нами для отримання професійного експертного висновку з розшифрування VIN-коду 
            для митниці, суду або інших офіційних процедур
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg"
              onClick={handleCall}
            >
              Подзвонити зараз
            </Button>
            <Button 
              onClick={handleEmail}
              size="lg" 
              variant="outline"
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 text-lg"
            >
              Написати на email
            </Button>
            <Button 
              onClick={onBack}
              size="lg" 
              variant="outline"
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 text-lg"
            >
              Повернутися до послуг
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Calculator(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}
