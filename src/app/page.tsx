// src/app/page.tsx
import Link from "next/link"; // Import Link from Next.js for navigation
import LoginForm from "@/components/auth/LoginForm"; // Your Login Form component

const AuthPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-md w-full space-y-8">
        <LoginForm />
        <div className="text-center">
          <p className="text-sm">
            Forgot your password?{" "}
            <Link
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Reset it here
            </Link>
          </p>
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
