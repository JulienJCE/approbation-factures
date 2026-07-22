import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';

export function useAuth() {
  const { instance, accounts } = useMsal();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (accounts.length > 0) {
      setUser(accounts[0]);
    }
    setLoading(false);
  }, [accounts]);

  const login = async () => {
    try {
      await instance.loginPopup({
        scopes: ['openid', 'profile', 'email'],
      });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = async () => {
    try {
      await instance.logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return { user, loading, login, logout, isAuthenticated: !!user };
}
