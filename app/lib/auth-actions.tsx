'use server';

import { signOut } from '@/auth';

export async function handleSignOut() {
  return signOut({ redirectTo: '/' });
}