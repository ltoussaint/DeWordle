import SignInWithGoogle from "@/components/auth/sigInWithGoogle";
import SignInForm from "@/components/auth/SignInForm";

export default function SignInPage() {
  return (
    <div className="w-full min-h-screen  items-center justify-center px-4 py-12 bg-white">
      <SignInForm />
      <div className="max-w-md mx-auto my-4">
        <SignInWithGoogle />
      </div>
    </div>
  );
}
