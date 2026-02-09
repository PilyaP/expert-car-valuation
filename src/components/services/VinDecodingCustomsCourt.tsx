import React from 'react'

export default function VinDecodingCustomsCourt() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Розшифрування VIN для митниці та суду</h1>
      <p className="text-gray-600">
        Професійне розшифрування VIN-коду з підтвердженням ідентифікаційних та технічних даних
        транспортного засобу для офіційних процедур.
      </p>

      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>рік та дата випуску</li>
        <li>країна походження</li>
        <li>потужність двигуна</li>
        <li>тип кузова</li>
      </ul>
    </div>
  )
}
