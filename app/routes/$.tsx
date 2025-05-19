import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  // Se a URL começar com /.well-known, retorna 404
  if (request.url.includes("/.well-known")) {
    return json({ error: "Not Found" }, { status: 404 });
  }

  // Para outras URLs não encontradas, você pode redirecionar para a página inicial
  return json({ error: "Not Found" }, { status: 404 });
};

export default function CatchAll() {
  return null;
} 