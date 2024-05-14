import { SignedIn } from "@clerk/nextjs";
import { ReactNode } from "react";
import Header from "./Header";

export default function ContentWrapper({
    children,
    title
}: {
    children: ReactNode,
    title: string
}) {
    return (
        <section className="flex flex-col gap-3">
            <SignedIn>
                <Header>{title}</Header>
            </SignedIn>

            <div className="mx-4 w-[calc(100%_-_32px)] sm:w-[648px] sm:mx-auto">
                {children}
            </div>
        </section>
    );
}
