import createMiddleware from "next-intl/middleware";
import { localesAsStrings } from "./lib/locales";

export default createMiddleware({
  // A list of all locales that are supported
  locales: localesAsStrings,

  // Used when no locale matches
  defaultLocale: localesAsStrings[0],
});

// matcher: ['/', '/(de|en|fr|it|es)/:path*']
export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|en|fr|it|es)/:path*"],
};
