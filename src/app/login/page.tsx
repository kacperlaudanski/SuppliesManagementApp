import Link from "next/link";
import LoginForm from "../components/login/LoginForm";

export default function LoginPage() {
  return (
    <main className={`bg-neutral-100 min-h-screen`}>
      <div className="flex justify-center w-full">
        <div className="min-h-screen w-3/4 flex justify-center items-center">
          <div className="sm:w-full md:w-1/2">
            <LoginForm /> 
            <p className="mt-8">
              {" "}
              Dont have an account?{" "}
              <Link href={'/register'} className='text-red-400 hover:text-red-600'>Join free today</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
