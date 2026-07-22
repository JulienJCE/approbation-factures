'use client';

import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from '@/lib/azure-config';
import { PublicClientApplication } from '@azure/msal-browser';

const pca = new PublicClientApplication(msalConfig);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MsalProvider instance={pca}>
      {children}
    </MsalProvider>
  );
}
