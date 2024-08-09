import type { Metadata } from "next";
import { Lato } from "next/font/google";

import "./globals.css";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const lato = Lato({ subsets: ["latin"],weight:'400' });

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
      <body className={lato.className}>
      <ApolloWrapper>
         <AntdRegistry>
            {children}
         </AntdRegistry>
      </ApolloWrapper>
      </body>
    </html>
  );
}
