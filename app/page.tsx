import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="p-24">
      <h1 className="text-red-500">Hello World</h1>
      <ThemeToggle />
      {session ? <p>{session.user.name}</p> : <Button>Login</Button>}
    </div>
  );
}
