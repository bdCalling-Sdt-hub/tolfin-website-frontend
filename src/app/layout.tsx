import { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/Provider";
import { Toaster } from "sonner";
import {Toaster as ToasterProvider } from 'react-hot-toast'
import { ConfigProvider } from "antd";
import Script from "next/script";
import { SocketProvider } from "@/context/socketProvider";
export const metadata: Metadata = {
  title: "Tolfin website",
  description: "Join our Christian tolfin platform built on honesty and respect for meaningful relationships. Here real people make real connections! Your next great connection starts here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Translate Meta */}
        <meta
          name="google-translate-customization"
          content="9f841e7780177523-3214ceb76f765f38-gc38c6fe6f9d06436-c"
        />

        {/* Google Translate Script */}
        <Script
          strategy="afterInteractive"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                  {
                    pageLanguage: 'en',
                    includedLanguages: 'en,de',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                  },
                  'google_translate_element'
                );
              }
            `,
          }}
        />
      </head>
      <body>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#004BAD",
              fontFamily: "Tinos, serif",
            },
          }}
        >
          <SocketProvider>
            <Providers>
              <Toaster
                richColors
                position="top-center"
                style={{
                  fontFamily: "Tinos, serif",
                }}
              />
              <ToasterProvider />
              <div id="google_translate_element" />
              {children}
            </Providers>
          </SocketProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
