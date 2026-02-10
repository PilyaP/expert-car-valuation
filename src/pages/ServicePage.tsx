import React from "react";
import { useNavigate, useParams } from "react-router-dom";

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
import VinDecodingCustomsCourt from "@/components/services/VinDecodingCustomsCourt";

type Props = { onContact: () => void };

export default function ServicePage({ onContact }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const onBack = () => navigate("/");

  const pages: Record<string, React.ReactElement> = {
    "accident-assessment": <AccidentAssessment onBack={onBack} onContact={onContact} />,
    "court-assessment": <CourtAssessment onBack={onBack} onContact={onContact} />,
    "mreo-assessment": <MreoAssessment onBack={onBack} onContact={onContact} />,
    "notary-assessment": <NotaryAssessment onBack={onBack} onContact={onContact} />,
    "insurance-assessment": <InsuranceAssessment onBack={onBack} onContact={onContact} />,
    "tax-investigation-assessment": <TaxInvestigationAssessment onBack={onBack} onContact={onContact} />,
    "corporate-assessment": <CorporateAssessment onBack={onBack} onContact={onContact} />,
    "damage-assessment": <DamageAssessment onBack={onBack} onContact={onContact} />,
    "purchase-contract": <PurchaseContract onBack={onBack} onContact={onContact} />,
    "equipment-assessment": <EquipmentAssessment onBack={onBack} onContact={onContact} />,
    "customs-assessment": <CustomsAssessment onBack={onBack} onContact={onContact} />,
    "vin-decoding-customs-court": <VinDecodingCustomsCourt onBack={onBack} onContact={onContact} />,
  };

  if (!id || !pages[id]) return <div className="p-8">Послуга не знайдена</div>;
  return pages[id];
}
