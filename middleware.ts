import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { route } from "./lib/route";

const protectedRoutes = createRouteMatcher([
    route.home,
    route.settings,
    route.profile,
    route.updateProfile,
    route.groups,
    route.createGroup,
    route.shoppingLists,
    route.createShoppingList,
])

export default clerkMiddleware((auth, req) => {
    if ( protectedRoutes(req)) auth().protect()
});

export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
