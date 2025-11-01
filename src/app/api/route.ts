import { NextResponse } from "next/server";

//http://localhost:4000/api/
export function GET() {
    return NextResponse.json({
        message: "Hello from API route"
    });
}