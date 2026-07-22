import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Approbation Factures - Conteneurs Experts',
  description: 'Plateforme d\'approbation de factures et dépenses Visa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Providers>
          <div className="min-h-screen bg-gray-50">
            <header className="bg-ce-blue text-white shadow">
              <div className="container py-4">
                <h1 className="text-2xl font-bold">Approbation Factures</h1>
                <p className="text-sm opacity-80">Conteneurs Experts Inc.</p>
              </div>
            </header>

            <main className="container py-8">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
