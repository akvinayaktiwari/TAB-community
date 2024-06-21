// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:'449756990440-9jsev05a1567fofdkmedi56mci2f5re1.apps.googleusercontent.com',
      clientSecret: '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',
    }),
],
secret: "DrsyetaCodesWillWork",
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
        console.log("Sign-in callback:", { user, account, profile });
      return true;
    },
    async redirect({ url, baseUrl }) {
        console.log("Redirect callback:", { url, baseUrl });
      return baseUrl;
    },
    async session({ session, token, user }) {
        console.log("Session callback:", { session, user });

      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
});