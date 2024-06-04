import { getShoppingLists } from "@/actions/getShoppingLists";
import ContentWrapper from "@/components/ui/ContentWrapper";
import List from "@/components/ui/List";
import PlusButton from "@/components/ui/PlusButton";
import { route } from "@/lib/route";
import React from "react";

export default async function ShoppingLists() {
    const shoppingLists = await getShoppingLists();

    return (
        <ContentWrapper title="Shopping lists">
            {shoppingLists!.length > 0 ? (
                <div>
                    <ul className="space-y-2">
                        {shoppingLists!.map((list) => (
                            <List key={list.id} name={list.name} slug={list.slug} />
                        ))}
                    </ul>
                </div>
            ) : (
                <p>There are no shopping lists</p>
            )}

            <div className="absolute right-2 bottom-16">
                <PlusButton href={route.createShoppingList} />
            </div>
        </ContentWrapper>
    );
}
