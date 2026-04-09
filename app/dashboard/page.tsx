import { LoginForm } from "@/components/forms/login-forms";
import { getAdminData } from "@/lib/admin-auth";
import { get } from "http";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const cookieStore = await cookies()
  const authToken = cookieStore.get("better-auth.session_data") 
  if(!authToken){
    redirect("/login")
  }
  const token = authToken?.value
  const response = await getAdminData(token)
  if(response.role == "admin"){redirect("/admin")}
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
    
      <h2>wellcome, {response.name}</h2>
      <p>Role: {response.role}</p>
     
    </div>
  )
}