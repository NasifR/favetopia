import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebaseConfig"; // Your Firebase config path

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.replace("/login");
        }
      });

      return () => unsubscribe();
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
