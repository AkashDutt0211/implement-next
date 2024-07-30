import NextAuth from "next-auth";
import GitHubProviders from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProviders({
      clientId: 'Ov23liFbJsWBYKHWu2OP',
      clientSecret: '9a444766497c53082e33a75f39eb8bedfc8036eb',
    }),
  ],
});
