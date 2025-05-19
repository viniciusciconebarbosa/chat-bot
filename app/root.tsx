import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from "@remix-run/react";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import { useState } from "react";
import CartPreview from "./components/cart/CartPreview";
import Chatbot from "./components/chatbot/Chatbot";
import "./tailwind.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export async function loader({ request }: LoaderFunctionArgs) {
  return json({
    ENV: {
      PUBLIC_URL: process.env.PUBLIC_URL,
    },
  });
}

export default function App() {
  const data = useLoaderData<typeof loader>();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <html lang="pt-BR" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-gray-50 dark:bg-gray-900">
        <ThemeProvider>
          <CartProvider>
            <Outlet context={{ isCartOpen, setIsCartOpen }} />
            {isCartOpen && <CartPreview onClose={() => setIsCartOpen(false)} />}
            <Chatbot isOpen={isChatbotOpen} setIsOpen={setIsChatbotOpen} />
            <ScrollRestoration />
            <Scripts />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
