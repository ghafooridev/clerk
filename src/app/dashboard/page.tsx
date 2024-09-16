
import { auth } from "@clerk/nextjs/server";
import { clerkClient } from "../config";

const Dashboard = async () => {
    const { userId }: { userId: string | null } = auth()
    const response = await clerkClient.users.getUser(userId!)

    console.log(response.emailAddresses, response.firstName, response.lastName)
    return (
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-6xl">Dashboard</h1>
            <p>    Hey {response.firstName} {response.lastName}  👋</p>
        </div>
    );
}


export default Dashboard