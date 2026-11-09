import type { Metadata } from 'next';
import { LegalDocumentPage } from '@/components/legal-document';
import { LEGAL_DOCUMENTS } from '@/data/legal';

const document = LEGAL_DOCUMENTS.confidentialite;

export const metadata: Metadata = {
  title: document.title,
  description: document.description,
  alternates: { canonical: '/politique-de-confidentialite' },
};

export default function PolitiqueDeConfidentialitePage() {
  return <LegalDocumentPage document={document} />;
}
