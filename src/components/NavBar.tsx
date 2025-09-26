'use client'

import React, { useCallback, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import type { SectionId } from '@/types/pages'
// Optional image helper — swap to your project's component if you have one
// import { ImageWithFallback } from '@/components/figma/ImageWithFallback'

interface NavBarProps {
  title?: string
  logoSrc?: string
  onLinkClick?: (id: SectionId) => void; // ← додали
}

const LINKS: { label: string; id: string }[] = [
  { label: 'Головна', id: 'hero' },
  { label: 'Послуги', id: 'services' },
  { label: 'Про незалежного експерта', id: 'expert' },
  { label: 'Контакти', id: 'contacts' },
]

export default function NavBar({
  title = 'Судовий незалежний автоексперт Дніпро',
    logoSrc,
  onLinkClick,
}: NavBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

const scrollToSection = useCallback((id: string) => {
  if (onLinkClick) return onLinkClick(id as SectionId)
  const el = document.getElementById(id)
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
  setIsMobileMenuOpen(false)
}, [onLinkClick])


  return (
    <div className="min-h-[4rem]">
      <nav
        className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50"
        role="navigation"
        aria-label="Головна навігація"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Лого + назва */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-50 border border-gray-200 flex items-center justify-center">
                {logoSrc ? (
                  // If you use Next.js Image, replace with <Image src={logoSrc} alt="Логотип" fill className="object-contain"/>
                  <img src={logoSrc} alt="Логотип судового незалежного автоексперта" className="w-full h-full object-contain" />
                ) : (
                  <span className="text-sm text-gray-400">Лого</span>
                )}
              </div>
              <span className="text-base sm:text-lg md:text-xl text-gray-900 font-medium">{title}</span>
            </div>

            {/* Desktop меню */}
            <div className="hidden lg:flex items-center gap-6">
              {LINKS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {label}
                </button>
              ))}

              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                onClick={() => scrollToSection('contacts')}
              >
                Замовити оцінку
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label={isMobileMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile меню */}
          {isMobileMenuOpen && (
            <div
              id="mobile-menu"
              className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg"
            >
              <div className="px-4 py-4 space-y-2">
                {LINKS.map(({ label, id }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {label}
                  </button>
                ))}

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-2"
                  onClick={() => scrollToSection('contacts')}
                >
                  Замовити оцінку
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer щоб контент не ховався під navbar */}
      <div className="h-16" />
    </div>
  )
}
