import React, { useCallback, useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import Advantages from '@/components/Advantages'
import GeoInfo from '@/components/GeoInfo'
import ServicesSection from '@/components/ServicesSection'
import ExpertSection from '@/components/ExpertSection'
import ContactsSection from '@/components/ContactsSection'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { services } from '@/data/services'
import type { PageId, SectionId } from '@/types/pages'

// сторінки
import AccidentAssessment from '@/components/services/AccidentAssessment'
import CourtAssessment from '@/components/services/CourtAssessment'
import MreoAssessment from '@/components/services/MreoAssessment'
import NotaryAssessment from '@/components/services/NotaryAssessment'
import InsuranceAssessment from '@/components/services/InsuranceAssessment'
import TaxInvestigationAssessment from '@/components/services/TaxInvestigationAssessment'
import CorporateAssessment from '@/components/services/CorporateAssessment'
import DamageAssessment from '@/components/services/DamageAssessment'
import PurchaseContract from '@/components/services/PurchaseContract'
import EquipmentAssessment from '@/components/services/EquipmentAssessment'
import CustomsAssessment from '@/components/services/CustomsAssessment'
import logo from '@/assets/logo.png'
export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | PageId>('home')

  const scrollToSection = useCallback((sectionId: SectionId | string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 64
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [])
  useEffect(() => {
    // "instant" чтобы не было ощущения «прыжка в конец»
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    // если хочется плавно: behavior: 'smooth'
  }, [currentPage])
  const mapsHref =
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('смт Слобожанське, вул. Нижньодніпровська, 1, Дніпропетровська обл., Україна')

const handleServiceClick = (id: string) => setCurrentPage(id as PageId)
  const handleBackToHome  = () => setCurrentPage('home')
  const handleContact = () => scrollToSection('contacts')

  const pages: Record<PageId, React.ReactElement> = {
    'accident-assessment': <AccidentAssessment onBack={handleBackToHome} onContact={handleContact} />,
    'court-assessment': <CourtAssessment onBack={handleBackToHome} onContact={handleContact} />,
    'mreo-assessment': <MreoAssessment onBack={handleBackToHome} onContact={handleContact} />,
    'notary-assessment': <NotaryAssessment onBack={handleBackToHome} onContact={handleContact} />,
    'insurance-assessment': <InsuranceAssessment onBack={handleBackToHome} onContact={handleContact} />,
    'tax-investigation-assessment': <TaxInvestigationAssessment onBack={handleBackToHome} onContact={handleContact} />,
    'corporate-assessment': <CorporateAssessment onBack={handleBackToHome} onContact={handleContact} />,
    'damage-assessment': <DamageAssessment onBack={handleBackToHome} onContact={handleContact} />,
    'purchase-contract': <PurchaseContract onBack={handleBackToHome} onContact={handleContact} />,
    'equipment-assessment': <EquipmentAssessment onBack={handleBackToHome} onContact={handleContact} />,
    'customs-assessment': <CustomsAssessment onBack={handleBackToHome} onContact={handleContact} />,
  }

  const isHome = currentPage === 'home'
  const page = !isHome ? pages[currentPage as PageId] : null

  return (
    <div className="min-h-screen">
      <NavBar
      logoSrc={logo}
  onLinkClick={scrollToSection}
  onLogoClick={() => {
    setCurrentPage('home')
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }}
/>

      {isHome ? (
        <>
          <Hero />
          <Advantages />
          <GeoInfo mapsHref={mapsHref} />
          <ServicesSection services={services} onServiceClick={handleServiceClick} />
          <ExpertSection />
          <ContactsSection mapsHref={mapsHref} />
        </>
      ) : (
        page ?? (setCurrentPage('home'), null)
      )}

      <Footer mapsHref={mapsHref} onServicesClick={() => scrollToSection('services')} />
    </div>
  )
}
