import { signOutAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/server';

export default async function Header() {
  const {
    data: { user },
  } = await createClient().auth.getUser();
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-bold">
              Samples List
            </a>
          </div>
          <div className="flex items-center">
            {user ? (
              <form action={signOutAction}>
                <Button
                  type="submit"
                  className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Sign out
                </Button>
              </form>
            ) : (
              <a
                href="/auth/signin"
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Sign In
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
