// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcryptjs";

// const prisma = new PrismaClient();

// async function findUserByCredentials({ email, password }) {
//   const user = await prisma.user.findUnique({
//     where: { email },
//   });

//   if (user && bcrypt.compareSync(password, user.password)) {
//     return user;
//   }

//   return null;
// }

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const user = await findUserByCredentials(credentials);
//         if (user) {
//           return { id: user.id, name: user.name, email: user.email };
//         }
//         return null;
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.id;
//       }
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// });



// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "yourname" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         console.log("Received credentials:", credentials);
        
//         // Replace with real authentication logic
//         if (credentials.username === "admin" && credentials.password === "password") {
//           return { id: "1", name: "Admin" };
//         }
        
//         throw new Error("Invalid credentials");
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
// });



import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your@email.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Received credentials:", credentials);

        // Simulated user database (Replace with real DB call)
        const user = {
          id: "1",
          name: "Tadiwanashe Kunaka",
          email: "tadiwanashe@uncommon.org",
          password: ".kun@uncommon!", // Hashed password in a real case
        };

        // Check if credentials match
        if (
          credentials.email === user.email &&
          credentials.password === user.password
        ) {
          return { id: user.id, name: user.name, email: user.email };
        }

        console.log("Invalid credentials");
        throw new Error("Invalid email or password");
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
