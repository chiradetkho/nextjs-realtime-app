import { user } from "@/db/schema"
import db from "@/app/lib/db"
import { Typography } from "@mui/material";
import { desc } from "drizzle-orm";

export default async function  UserPage() {

    const users = await db.select().from(user).orderBy(desc(user.id));
    const countUser = await db.$count(user);

  return (
    <main>
      <Typography variant="h3">All users {countUser}</Typography>
     {
      users.length > 0 && users.map((item) => {
        return <p key={item.id}>{item.fullname} {item.email} {item.id}</p>
      })
      }
    </main>
  );
}