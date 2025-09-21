import { prismaClient } from "db/client";

export default async function Home() {
  const users = await prismaClient.user.findMany()
  
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
}

// Force dynamic rendering to avoid database calls during build
export const dynamic = 'force-dynamic'