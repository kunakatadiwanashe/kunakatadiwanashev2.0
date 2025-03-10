import { useRouter } from "next/router";
import { useSession } from "next-auth/react";



export default function LoginLayout({ children }) {

    const { data: session, status } = useSession();

    const router = useRouter();

    if (status === "loading") {
        return (
            <div className="full-h flex flex-center">
                <div>Loading...</div>
            </div>
        );
    }


    if (!session) {
        router.push("/auth/signin");
        return null;
    }
    if (session) {
       return <div>{children}</div>;
    }

   
}