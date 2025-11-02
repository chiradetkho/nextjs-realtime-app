import { drizzle } from "drizzle-orm/mysql2";
import {user} from "@/db/schema"

export default async function  UserPage() {

    const db = drizzle(process.env.DATABASE_URL!);

    const users = await db.select().from(user);

  return (
    <main>
      <p>{JSON.stringify(users)}</p>
    </main>
  );
}