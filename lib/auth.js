import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/db";

// Emails in ADMIN_EMAILS (comma-separated) get the "admin" role, used by the Week 3 admin dashboard
const adminEmails = () =>
  (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);

export const roleFor = (email) => (adminEmails().includes(String(email).toLowerCase()) ? "admin" : "user");

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login", error: "/login" },

  callbacks: {
    // Only accept Google accounts with a verified email
    async signIn({ account, profile }) {
      if (account?.provider === "google") return Boolean(profile?.email_verified);
      return false;
    },

    // Runs at sign-in (user is set) and whenever the session is read
    async jwt({ token, user }) {
      if (user) token.role = roleFor(user.email);
      return token;
    },

    async session({ session, token }) {
      session.user.role = token.role || "user";
      return session;
    },
  },

  events: {
    // Record every sign-in. A database problem must never block signing in, so errors are only logged.
    async signIn({ user }) {
      try {
        await prisma.user.upsert({
          where: { email: user.email },
          create: { email: user.email, name: user.name, image: user.image, role: roleFor(user.email), loginCount: 1 },
          update: {
            name: user.name,
            image: user.image,
            role: roleFor(user.email),
            loginCount: { increment: 1 },
            lastLoginAt: new Date(),
          },
        });
      } catch (err) {
        console.error("[auth] Could not save user:", err.message);
      }
    },
  },
};
