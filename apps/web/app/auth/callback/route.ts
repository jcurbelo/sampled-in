import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const requestUrl = new URL(request.url);
  const tokenHash = requestUrl.searchParams.get('token_hash');
  const origin = requestUrl.origin;
  const redirectTo = requestUrl.searchParams.get('redirect_to')?.toString();

  if (tokenHash) {
    const supabase = createClient();
    const { error, data } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type: 'magiclink',
    });

    console.log({ error, data });
  }

  if (redirectTo) {
    return NextResponse.redirect(`${origin}${redirectTo}`);
  }

  return NextResponse.redirect(origin);
}
