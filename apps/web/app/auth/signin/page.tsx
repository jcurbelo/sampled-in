'use client';

// import { useActionState } from 'react';
import { useFormState } from 'react-dom';
import { ActionResponse, signInWithEmail } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SubmitButton } from '@/components/ui/submit-button';

export default function SignIn() {
  const [state, formAction] = useFormState<ActionResponse, FormData>(
    signInWithEmail,
    {
      error: undefined,
      message: undefined,
    }
  );
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action={formAction}>
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>

            <div>
              <SubmitButton
                error={state.error}
                message={state.message}
                pendingText="Signing In..."
                className="w-full">
                Sign in
              </SubmitButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
