// src/types/pages.ts
export type PageId =
  | 'accident-assessment'
  | 'court-assessment'
  | 'mreo-assessment'
  | 'notary-assessment'
  | 'insurance-assessment'
  | 'tax-investigation-assessment'
  | 'corporate-assessment'
  | 'damage-assessment'
  | 'purchase-contract'
  | 'equipment-assessment'
  | 'customs-assessment'

// Для навігації по секціях (NavBar, скрол)
export type SectionId = 'hero' | 'services' | 'expert' | 'contacts'
