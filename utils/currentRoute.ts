export const currentRouteIs = (pathname: string, route: string): boolean | undefined => {
    if (pathname == route) { return true }else{ false }
}