export const dynamic = 'force-dynamic';

'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { isAuthenticated, logout, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <div className="text-center py-8">Redirection...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Bienvenue</h2>
          <p className="text-gray-600">{user?.name}</p>
        </div>
        <button onClick={logout} className="btn btn-primary">
          Déconnexion
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Volet 1: Approbation Factures</h3>
              <p className="text-gray-600 text-sm mb-4">Gestion des factures fournisseurs.</p>
            </div>
            <span className="text-3xl">📄</span>
          </div>
          <Link href="/volet1/comptabilite" className="btn btn-primary inline-block">
            Accéder au Volet 1
          </Link>
        </div>

        <div className="card p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Volet 2: Dépenses Visa</h3>
              <p className="text-gray-600 text-sm mb-4">Soumission et approbation des dépenses Visa.</p>
            </div>
            <span className="text-3xl">💳</span>
          </div>
          <Link href="/volet2/employe" className="btn btn-primary inline-block">
            Accéder au Volet 2
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <div className="card p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Dashboard Comptabilité</h3>
          <p className="text-gray-600 text-sm mb-4">Vue d&apos;ensemble de toutes les factures et dépenses.</p>
          <Link href="/dashboard" className="btn btn-primary inline-block">
            Ouvrir le Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
