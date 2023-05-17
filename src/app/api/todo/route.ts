
//import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from "next/server";
import {db, todoTable} from "@/lib/drizzle";

export async function GET(request: NextRequest) {
/*    try {
        const res = await db.SELECT().from(todoTable)
        console.log(res)
        return NextResponse.json({data:res})
    } catch (error) {
        return NextResponse.json({ error }, {
        status: 500,
      });
  }*/
}