'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/useAuth';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [documents, setDocuments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(storedUser));
    
    const fetchDocuments = async () => {
      try {
        const res = await fetch('/api/documents');
        const data = await res.json();
        setDocuments(data);
      } catch (error) {
        console.error('Erreur fetch documents:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchDocuments();
  }, [router]);

  if (loading) return <div style={{ padding: '2rem' }}>Chargement...</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Tableau de Bord</h1>
        <button onClick={handleLogout} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
          Déconnexion
        </button>
      </div>
      {user && <p>Bienvenue, {user.name}!</p>}
      <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        <Link href="/volet1/comptabilite" style={{ padding: '1rem', border: '1px solid #ddd', textDecoration: 'none', color: 'inherit', borderRadius: '4px' }}>
          📤 Volet 1 - Upload Factures
        </Link>
        <Link href="/volet2/employe" style={{ padding: '1rem', border: '1px solid #ddd', textDecoration: 'none', color: 'inherit', borderRadius: '4px' }}>
          💳 Volet 2 - Comptes de Dépenses
        </Link>
        <Link href="/approbateur" style={{ padding: '1rem', border: '1px solid #ddd', textDecoration: 'none', color: 'inherit', borderRadius: '4px' }}>
          ✅ Approbateur - Factures Pending
        </Link>
        <Link href="/notifications" style={{ padding: '1rem', border: '1px solid #ddd', textDecoration: 'none', color: 'inherit', borderRadius: '4px' }}>
          📧 Notifications & Historique
        </Link>
      </div>
    </div>
  );
}
