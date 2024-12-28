import { connect } from "@/utilities/dbConfig";
import { NextResponse } from "next/server";
export async function GET() {
    const con  =  await connect()
    return new NextResponse('conneccted')
}