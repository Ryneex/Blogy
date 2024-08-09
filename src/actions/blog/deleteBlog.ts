"use server"

import { getCurrentUser } from "@/helpers/getCurrentUser"
import { sendError } from "@/helpers/sendError"
import { client } from "@/lib/prismaClient"

export async function deleteBlog(id: string) {
    try {
        if (!id) return sendError("Id is required")
        const res = await getCurrentUser()
        if (!res.success) return sendError("Unauthorized")
        const blog = await client.blog.delete({ where: { id, author_id: res.user.id } })
        return { success: true as true, blog }
    } catch (error) {
        return sendError("Cloudn't delete blog")
    }
}
