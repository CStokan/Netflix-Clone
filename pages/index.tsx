import { signOut, getSession } from "next-auth/react";
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";

/* Ensures the user cannot access without being logged in  */
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
}


export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
    <h1 className='text-2xl text-green-500'>Netlfix Clone</h1>
    <p className="text-white">Logged in as : {user?.name}</p>
    <button className="h-10 w-full bg-white" onClick={() => signOut()}>Logout</button>
    
    </>
  )
}
