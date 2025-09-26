import React from "react";
import { useParams, Link } from "react-router-dom";

import AccidentAssessment from "@/components/services/AccidentAssessment";
import CourtAssessment from "@/components/services/CourtAssessment";
import MreoAssessment from "@/components/services/MreoAssessment";
import NotaryAssessment from "@/components/services/NotaryAssessment";
import InsuranceAssessment from "@/components/services/InsuranceAssessment";
import TaxInvestigationAssessment from "@/components/services/TaxInvestigationAssessment";
import CorporateAssessment from "@/components/services/CorporateAssessment";
import DamageAssessment from "@/components/services/DamageAssessment";
import PurchaseContract from "@/components/services/PurchaseContract";
import EquipmentAssessment from "@/components/services/EquipmentAssessment";
import CustomsAssessment from "@/components/services/CustomsAssessment";

const map: Record<string, React.ReactNode> = {
  "accident-assessment": <AccidentAssessment />,
  "court-assessment": <CourtAssessment />,
  "mreo-assessment": <MreoAssessment />,
  "notary-assessment": <NotaryAssessment />,
  "insurance-assessment": <InsuranceAssessment />,
  "tax-investigation-assessment": <TaxInvestigationAssessment />,
  "corporate-assessment": <CorporateAssessment />,
  "damage-assessment": <DamageAssessment />,
  "purchase-contract": <PurchaseContract />,
  "equipment-assessment": <EquipmentAssessment />,
  "customs-assessment": <CustomsAssessment />,
};

export default function ServicePage() {
  const { id } = useParams<{ id: string }>();
  const node = id ? map[id] : null;

  if (!node) {
    return (
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <h1 className="text-2xl font-semibold mb-4">Сторінку не знайдено</h1>
        <p className="text-gray-600 mb-6">
          Ми не знайшли послугу з ідентифікатором <code>{id}</code>.
        </p>
        <Link to="/" className="text-blue-600 hover:underline">
          ⟵ Повернутись на головну
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 max-w-7xl py-12">
      {node}
    </div>
  );
}
