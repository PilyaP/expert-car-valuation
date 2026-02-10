// src/data/services.ts
import type React from 'react'
import type { PageId } from '@/types/pages'
import {
 
  Wrench,
  Scale,
  Car,
  FileText,
  Calculator,
  Package,
  Handshake,
  Shield,
  CarFront,
} from 'lucide-react'

export interface ServiceCardData {
  id: PageId
  title: string
  desc: string
  icon: React.ReactNode
  iconBg: string
  iconHoverBg: string
  ariaLabel: string
}

export const services = [
  {
    id: 'accident-assessment',
    title: 'Незалежна оцінка авто у Дніпрі при ДТП',
    desc:
      'Точне визначення розміру збитку при ДТП. Офіційні експертні висновки для судів та страхових компаній',
    icon: <Wrench className="w-6 h-6 text-red-600" />,
    iconBg: 'bg-red-100',
    iconHoverBg: 'group-hover:bg-red-200',
    ariaLabel: 'Незалежна оцінка авто у Дніпрі при ДТП — детальніше',
  },
  {
    id: 'court-assessment',
    title: 'Оцінка для суду (цивільні та кримінальні справи)',
    desc:
      'Судова експертиза при спадкових справах, майнових спорах та кримінальних провадженнях',
    icon: <Scale className="w-6 h-6 text-blue-600" />,
    iconBg: 'bg-blue-100',
    iconHoverBg: 'group-hover:bg-blue-200',
    ariaLabel: 'Оцінка для суду — детальніше',
  },
  {
    id: "mreo-assessment",
    title: 'Оцінка для МРЕО (сервісних центрів МВС)',
    desc:
      'Експертна оцінка для реєстрації транспортних засобів у сервісних центрах МВС',
    icon: <Car className="w-6 h-6 text-green-600" />,
    iconBg: 'bg-green-100',
    iconHoverBg: 'group-hover:bg-green-200',
    ariaLabel: 'Оцінка для МРЕО — детальніше',
  },
  {
    id: 'insurance-assessment',
    title: 'Оцінка для страхових компаній',
    desc:
      'Незалежні експертні висновки для всіх страхових компаній України при врегулюванні збитків',
    icon: <FileText className="w-6 h-6 text-rose-600" />,
    iconBg: 'bg-rose-100',
    iconHoverBg: 'group-hover:bg-rose-200',
    ariaLabel: 'Оцінка для страхових компаній — детальніше',
  },
  {
    id: 'tax-investigation-assessment',
    title: 'Оцінка для податкових та слідчих органів',
    desc:
      'Офіційні незалежні висновки експерта для податкових органів, слідчих органів та адвокатських запитів',
    icon: <Calculator className="w-6 h-6 text-orange-600" />,
    iconBg: 'bg-orange-100',
    iconHoverBg: 'group-hover:bg-orange-200',
    ariaLabel: 'Оцінка для податкових та слідчих органів — детальніше',
  },
  {
    id: 'damage-assessment',
    title: 'Визначення розміру збитків і пошкоджень авто',
    desc:
      'Точне визначення розміру збитку, завданого власнику транспортного засобу при ДТП та інших пошкодженнях',
    icon: <Package className="w-6 h-6 text-indigo-600" />,
    iconBg: 'bg-indigo-100',
    iconHoverBg: 'group-hover:bg-indigo-200',
    ariaLabel: 'Визначення розміру збитків і пошкоджень авто — детальніше',
  },
  {
    id: 'purchase-contract',
    title: 'Договори купівлі-продажу',
    desc:
      'Оформлення та експертна підтримка угод купівлі-продажу авто з офіційними висновками експерта',
    icon: <Handshake className="w-6 h-6 text-teal-600" />,
    iconBg: 'bg-teal-100',
    iconHoverBg: 'group-hover:bg-teal-200',
    ariaLabel: 'Договори купівлі-продажу — детальніше',
  },
  {
    id: 'equipment-assessment',
    title: 'Експертна професійна оцінка обладнання',
    desc:
      'Професійна оцінка промислового обладнання та товарів з офіційними експертними висновками',
    icon: <Shield className="w-6 h-6 text-pink-600" />,
    iconBg: 'bg-pink-100',
    iconHoverBg: 'group-hover:bg-pink-200',
    ariaLabel: 'Експертна професійна оцінка обладнання — детальніше',
  },
  {
    id: 'customs-assessment',
    title: 'Оцінка для митниці',
    desc:
      'Визначення ринкової вартості транспортних засобів, що ввозяться на митну територію України. Офіційні експертні висновки, які приймають митні органи.',
    icon: <CarFront className="w-6 h-6 text-red-600" />,
    iconBg: 'bg-orange-100',
    iconHoverBg: 'group-hover:bg-orange-200',
    ariaLabel: 'Оцінка для митниці — детальніше',
  },
  {
    id: 'notary-assessment',
    title:
      'Експертна оцінка для нотаріуса (спадщина, розлучення, угоди)',
    desc:
      'Нотаріальне оформлення угод купівлі-продажу, дарування та розподілу майна при розлученні',
    icon: <Scale className="w-6 h-6 text-red-600" />,
    iconBg: 'bg-red-100',
    iconHoverBg: 'group-hover:bg-red-200',
    ariaLabel: 'Експертна оцінка для нотаріуса — детальніше',
  },
  {
    id: 'corporate-assessment',
    title:
      'Експертна професійна оцінка для юридичних осіб та компаній',
    desc:
      'Професійна оцінка для підприємств, юридичних фірм та комерційних організацій',
    icon: <Wrench className="w-6 h-6 text-yellow-600" />,
    iconBg: 'bg-yellow-100',
    iconHoverBg: 'group-hover:bg-yellow-200',
    ariaLabel:
      'Експертна професійна оцінка для юридичних осіб — детальніше',
  },
{
  id: 'vin-decoding-customs-court',
  title: 'Розшифрування VIN для митниці та суду',
  desc:
    'Професійне розшифрування VIN-коду з підтвердженням ідентифікаційних та технічних даних транспортного засобу для офіційних процедур.',
  icon: <Car className="w-6 h-6 text-yellow-600" />,
  iconBg: 'bg-blue-100',
  iconHoverBg: 'group-hover:bg-orange-200',
  ariaLabel: 'Розшифрування VIN для митниці та суду — детальніше',
},

] satisfies ServiceCardData[]
