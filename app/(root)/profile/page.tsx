import { checkIfUserIdExistsInDb } from "@/actions/check-if-user-id-exists";
import PenIcon from "@/components/icons/PenIcon";
import Header from "@/components/ui/Header";
import { route } from "@/lib/route";
import { SignedIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Profile() {
    const user = await currentUser();
    await checkIfUserIdExistsInDb();

    return (
        <>
            <SignedIn>
                <Header>Profile page</Header>
            </SignedIn>

            <div className="relative mx-4 rounded-md px-3 py-3 bg-orange flex items-center gap-3">
                <Image
                    src={user?.imageUrl!}
                    width={60}
                    height={60}
                    alt=""
                    className="rounded-full"
                />

                <div className="flex flex-col gap-0">
                    <p className="font-bold text-xl">{user?.firstName}</p>
                    <p className="text-sm font-light">rammahkarpous@gmail.com</p>
                </div>

                <Link href={route.updateProfile}><PenIcon classes="absolute top-2 right-2" color="black" /></Link>
            </div>
        </>
    );
}
