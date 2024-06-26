import { getShoppingLists } from "@/actions/getShoppingLists";
import ContentWrapper from "@/components/ui/ContentWrapper";
import PlusButton from "@/components/ui/PlusButton";
import { route } from "@/lib/route";
import Link from "next/link";
import React from "react";

export default async function ShoppingLists() {
    const shoppingLists = await getShoppingLists();

    return (
        <ContentWrapper title="Shopping lists">
            {shoppingLists!.length > 0 ? (
                <ul className="space-y-2">
                    {shoppingLists!.map((list, i) => (
						<li key={i}><Link className="bg-white p-4 block w-full shadow-sm" href={list.slug}>{list.name}</Link></li>
					))}
                </ul>
            ) : (
                <p>There are no shopping lists</p>
            )}

            <div className="absolute right-2 bottom-16">
                <PlusButton href={route.createShoppingList} />
            </div>
        </ContentWrapper>
    );
}
