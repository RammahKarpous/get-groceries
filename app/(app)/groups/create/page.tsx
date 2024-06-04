"use client";

import Button from "@/components/ui/Button";
import ContentWrapper from "@/components/ui/ContentWrapper";
import TextInput from "@/components/ui/forms/elements/TextInput";
import { slugify } from "@/utils/slugify";
import React, { useState } from "react";
import createGroup from "@/actions/createGroup";
import ErrorMessage from "@/components/ui/forms/elements/ErrorMessage";
import { groupSchema } from "@/lib/schemas";

export default function CreateGroup() {

    const [errors, setErrors] = useState<string[]>([]);

    const validateGroupFormData = async (formData: FormData) => {

        const newGroup = {
            role: formData.get("role"),
            'group-name': formData.get("group-name"),
            slug: slugify(formData.get("group-name")?.toString()!),
        }

        const result = groupSchema.safeParse(newGroup);

        if (!result.success) {
            setErrors(result.error.errors.map(error => error.message));
            return;
        }

        const response = await createGroup(newGroup);

        if (response?.errors) {
            // setErrors(response?.errors.map(error => error.message));
            console.log(response?.errors);
            return;
        }
    }

    return (
        <ContentWrapper title="Create a group">
            <form action={validateGroupFormData} className="flex flex-col gap-3 items-start">
                <TextInput type="hidden" forAttr="role" value="owner" />
                
                <TextInput type="text" forAttr="group-name" label="Group name" />
                {errors.length > 0 && <ErrorMessage message={errors[0]} />}

                <Button type="primary" text="Create group" />
            </form>
        </ContentWrapper>
    );
}
