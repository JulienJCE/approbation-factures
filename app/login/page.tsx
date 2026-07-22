'use client';

import { useAuth } from '@/lib/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
  const { isAuthenticated, login, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Connexion</h2>
          <p className="text-gray-600">Approbation Factures - Conteneurs Experts</p>
        </div>

        <button
          onClick={login}
          className="w-full bg-ce-blue text-white font-medium py-3 rounded-lg hover:bg-opacity-90 transition"
        >
          Se connecter avec Azure AD
        </button>

        <p className="text-center text-gray-500 text-sm mt-6">
          Utilisez vos identifiants Conteneurs Experts
        </p>
      </div>
    </div>
  );
}
