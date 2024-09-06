import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <h2 className="text-4xl text-center mt-10">
            Logged in user Email {session?.user?.email}
          </h2>
          <Image
            className="mx-auto mt-3 rounded-full"
            src={session?.user?.image}
            alt="user-image"
            height={500}
            width={500}
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
