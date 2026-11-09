import type { Metadata } from 'next';
import { LegalDocumentPage } from '@/components/legal-document';
import { LEGAL_DOCUMENTS } from '@/data/legal';

const document = LEGAL_DOCUMENTS.cgv;

export const metadata: Metadata = {
  title: document.title,
  description: document.description,
  alternates: { canonical: '/conditions-de-vente' },
};

export default function ConditionsDeVentePage() {
  return <LegalDocumentPage document={document} />;
}
