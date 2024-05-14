export const slugify = (value: string) => {
    let slug = value.split(" ")
    return String(slug.join("-").toLowerCase());
}