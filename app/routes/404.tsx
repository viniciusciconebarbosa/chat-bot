import { Link } from "@remix-run/react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Ops! A página que você está procurando não foi encontrada.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600 transition-colors"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
} 