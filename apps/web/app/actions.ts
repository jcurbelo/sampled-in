'use server';

import { headers } from 'next/headers';
import { createClient } from '@/lib/supabase/server';

export type ActionResponse = {
  message?: string;
  error?: string;
};

export const signInWithEmail = async (
  state: ActionResponse,
  payload: FormData
): Promise<ActionResponse> => {
  const supabase = createClient();
  const email = payload.get('email')?.toString();
  const origin = headers().get('origin');
  if (!email) {
    return { error: 'Email is required.' };
  }
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: true,
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return { error: error.message };
  }

  return { message: 'Email sent.' };
};
