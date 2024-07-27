'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";
import { ApolloWrapper } from "@/lib/apollo-wrapper";

const inter = Inter({ subsets: ["latin"] });

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: "http://localhost:4000/graphql"
// })

// export const { getClient } = registerApolloClient(() => {
//   return new ApolloClient({
//     cache: new InMemoryCache(),
//     link: new HttpLink({
//       uri: "http://localhost:4000/graphql",
//     }),
//   });
// });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ApolloWrapper>
        
        {children}
      </ApolloWrapper>

      </body>
    </html>
  );
}
