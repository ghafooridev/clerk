import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export default function Header() {
    return (
        <div className="bg-gray-700 text-white">
            <div className="flex justify-between items-center p-4">
                <Link href='/'>Home</Link>
                <div className="flex gap-2">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                </div>
            </div>
        </div>
    );
}
