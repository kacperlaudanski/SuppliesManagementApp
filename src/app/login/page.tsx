import Input from "../../../components/Input";

export default function LoginPage() {
  return (
    <main className="w-8/12 h-3/5 bg-red-200 flex flex-column justify-center p-8">
      <h1 className="text-4xl">Login</h1>
      <form className="w-5/6 h-full">
        <Input page={'loginForm'}/> 
      </form>
    </main>
  );
}
