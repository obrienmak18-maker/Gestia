import Link from 'next/link';
import { Logo } from '@/components/logo';
import { getProducts } from '@/services/products';
import { NAV_LINKS, SITE } from '@/data/site';

const LEGAL_LINKS = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/conditions-de-vente', label: 'Conditions de vente' },
  { href: '/politique-de-confidentialite', label: 'Politique de confidentialité' },
];

export async function SiteFooter() {
  const products = await getProducts();

  return (
    <footer className="bg-brand-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Logo variant="light" />
          <p className="max-w-xs text-sm leading-relaxed text-slate-300">{SITE.tagline}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Produits</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {products.map((product) => (
              <li key={product.slug}>
                <Link href={`/produits/${product.slug}`} className="transition-colors hover:text-white">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Entreprise</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.filter((link) => link.href !== '/produits' && link.href !== '/').map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li>{SITE.whatsappDisplay}</li>
            <li>{SITE.address}</li>
            <li>{SITE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
