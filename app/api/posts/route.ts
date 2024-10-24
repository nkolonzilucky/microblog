import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// Get /api
export async function GET(request: Request) {
    const posts = await prisma.Post.findMany(
        // {
        //  where: {
        //     published: true,
        //  },
        //  include: {
        //     author: true,
        //  },
        // }
    );
    return NextResponse.json(posts) }