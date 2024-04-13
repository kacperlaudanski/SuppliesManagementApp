import Link from "next/link";
import RegisterDecoration from "../components/decorations/RegisterDecoration";
import RegisterForm from "../components/register/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <main className="bg-neutral-100 w-full min-h-screen flex items-center justify-center">
        <div className="lg:flex items-center space-x-16">
          <div className="w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg">
            <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">
              Sign Up
            </h2>
            <p className="text-center text-sm text-gray-600 mt-2">
              Already have an account?{" "}
              <Link href={"/login"} className="text-red-400 hover:text-red-600">
                Sign in here
              </Link>
            </p>
            <RegisterForm />
          </div>
          <div className="flex items-center justify-center">
            <RegisterDecoration />
          </div>
        </div>
      </main>
    </>
  );
}
