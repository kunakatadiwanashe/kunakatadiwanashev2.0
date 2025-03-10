import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </SessionProvider>
  );
}

function AuthWrapper({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while session is loading

    // Allow access to sign-in and sign-up pages without a session
    const publicRoutes = ["/auth/signin", "/auth/signup"];
    if (!session && !publicRoutes.includes(router.pathname)) {
      router.replace("/auth/signin");
    }
  }, [session, status, router.pathname]); // Ensure pathname updates

  // Show a loading state while session is being fetched
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return children;
}