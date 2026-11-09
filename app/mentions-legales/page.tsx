import type { Metadata } from 'next';
import { LegalDocumentPage } from '@/components/legal-document';
import { LEGAL_DOCUMENTS } from '@/data/legal';

const document = LEGAL_DOCUMENTS.mentions;

export const metadata: Metadata = {
  title: document.title,
  description: document.description,
  alternates: { canonical: '/mentions-legales' },
};

export default function MentionsLegalesPage() {
  return <LegalDocumentPage document={document} />;
}
