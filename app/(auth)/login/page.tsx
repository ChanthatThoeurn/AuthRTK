import { LoginForm } from "@/components/forms/login-forms";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <p className="text-sm text-muted-foreground">
        Enter your email and password to login.
      </p>
      <div className="w-full max-w-sm rounded-lg border bg-popover p-4">
        <LoginForm />
      </div>
    </div>
  )
}