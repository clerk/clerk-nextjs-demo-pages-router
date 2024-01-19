import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedDashboardRoute = createRouteMatcher([/dashboard.*/]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedDashboardRoute(req) && !auth().userId) {
    auth().protect();
  }

  return NextResponse.next();
});
