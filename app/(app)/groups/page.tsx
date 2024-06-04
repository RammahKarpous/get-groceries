import React from "react";
import ContentWrapper from "@/components/ui/ContentWrapper";
import { getGroups } from "@/actions/getGrroups";
import List from "@/components/ui/List";

export default async function Groups() {
    const groups = await getGroups();

    return (
        <ContentWrapper title="Groups">
            <ul>
                {groups?.map((group) => (
                    <List key={group.id} name={group.name} slug={group.slug} />
                ))}
            </ul>
        </ContentWrapper>
    );
}
