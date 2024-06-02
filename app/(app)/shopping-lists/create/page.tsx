import createShoppingList from "@/actions/createShoppingList";
import Button from "@/components/ui/Button";
import ContentWrapper from "@/components/ui/ContentWrapper";
import TextInput from "@/components/ui/forms/elements/TextInput";
import React from "react";

export default async function Create() {

    return (
        <ContentWrapper title="Create shoppinglist">
            <form action={createShoppingList} className="flex flex-col gap-3 items-start">
                <TextInput type="hidden" forAttr="role" value="admin" />
                <TextInput type="text" forAttr="list-name" label="Shopping list name" />
                <Button type="primary" text="Add shopping list" />
            </form>
        </ContentWrapper>
    );
}
