"use server";

import { redirect } from "next/navigation";
import { prisma } from "./utils/db";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function handleSubmission(formData){
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if(!user){
        return redirect("/api/auth/register")
    }

    const title = formData.get('title')
    const content = formData.get('content')
    const url = formData.get('url')

    await prisma.BlogPost.create({
        data:{
            title: title,
            content: content,
            imageUrl: url,
            authorId: user.id,
            authorImage: user.picture,
            authorName: user.given_name,
        }
    })
    return redirect("/dashboard")
}