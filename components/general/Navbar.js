import Link from "next/link";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserActions from "./UserActions";

export default async function Navbar() {

  const {getUser} = getKindeServerSession();

  const user = await getUser()

  return (
    <nav className="py-5 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Blog<span className="text-blue-500">Ravi</span>
          </h1>
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="/"
          >
            Home
          </Link>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </div>
      </div>
      <UserActions user={user}/>
    </nav>
  );
}








