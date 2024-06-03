import { checkIfUserIdExistsInDb } from "@/actions/checkIfUserIdExistsInDb";
import PenIcon from "@/components/icons/PenIcon";
import Button from "@/components/ui/Button";
import ContentWrapper from "@/components/ui/ContentWrapper";
import { route } from "@/lib/route";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Profile() {
    const user = await currentUser();
    await checkIfUserIdExistsInDb();

    return (
        <ContentWrapper title="Profile page">
            <div className="relative rounded-md px-3 py-3 bg-orange flex items-center gap-3">
                <Image
                    src={user?.imageUrl!}
                    width={60}
                    height={60}
                    alt=""
                    className="rounded-full"
                />

                <div className="flex flex-col gap-0">
                    <p className="font-bold text-xl">{user?.firstName} {user?.lastName}</p>
                    <p className="text-sm font-light">{user?.emailAddresses[0]?.emailAddress}</p>
                </div>

                <Link href={route.updateProfile}><PenIcon classes="absolute top-2 right-2" color="black" /></Link>
            </div>

            <div className="flex justify-between items-center mt-5">
                <h3 className="font-bold">Member groups</h3>
                <Link href={route.createGroup}><Button type="primary" text="Add a group" /></Link>
            </div>
        </ContentWrapper>
    );
}
