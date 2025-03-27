
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
