import { withAuth } from "next-auth/middleware";

// Protected routes: signed-out visitors are redirected to /login?callbackUrl=...
export default withAuth({ pages: { signIn: "/login" } });

export const config = { matcher: ["/dashboard/:path*"] };
