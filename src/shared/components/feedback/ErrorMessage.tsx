import { Info } from 'lucide-react';

interface ErrorMessageProps {
  message?: string;
}
export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-2 p-3 bg-red-50 border border-red-200 rounded-lg animate-shake">
      <Info />
      <p className="text-red-700 text-sm font-medium">{message}</p>
    </div>
  );
}
