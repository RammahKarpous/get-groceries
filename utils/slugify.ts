export const slugify = (value: string): string => {
    let slug = value.split(" ")
    return String(slug.join("-").toLowerCase());
}