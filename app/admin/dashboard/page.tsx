import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function SocialLogin() {
    const section = await auth.api.getSession({
        headers: await headers(),
    });
    if (!section) {
        redirect("/login");
    }
    console.log("dashboard section:", section);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard{section.user?.name && `, ${section.user.name}`}</h1>
      <p className="text-gray-600 mb-8">You are successfully logged in!</p>
    </div>
  );
}