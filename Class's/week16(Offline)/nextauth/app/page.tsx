// "use client"

// import { useSession } from "next-auth/react";

// export default function Home() {
//   const session = useSession();
//   return (
//     <div>
//       {JSON.stringify(session.data?.user)}
//     </div>
//   );
// }

import { getServerSession } from "next-auth"

async function getUser() {
  const session = await getServerSession();
  return session;
}

export default async function Home() {
  const session = await getUser();

  return (
    <div>
      {JSON.stringify(session?.user)}
    </div>
  );
}