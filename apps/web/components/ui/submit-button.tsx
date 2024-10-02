'use client';

import { type ComponentProps } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

type Props = ComponentProps<typeof Button> & {
  pendingText?: string;
  error?: string;
  message?: string;
};

export function SubmitButton({
  children,
  pendingText = 'Submitting...',
  error,
  message,
  ...props
}: Props) {
  const { pending } = useFormStatus();

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      {message && <p className="text-green-500">{message}</p>}
      {!error && !message && (
        <Button type="submit" aria-disabled={pending} {...props}>
          {pending ? pendingText : children}
        </Button>
      )}
    </>
  );
}
