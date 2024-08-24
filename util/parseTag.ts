import { Tag, TagArray } from "../types/Tags"

export default function parseTags(a: string): TagArray {
    const tagArray: TagArray = []
    if (a.includes("health") || a.includes("fitness")) tagArray.push({ name: "Health and Fitness" })
    if (a.includes("shop") || a.includes("shopping")) tagArray.push({ name: "Shopping"})
    if (a.includes("bill") || a.includes("pay")) tagArray.push({ name: "Finances" })
    if (a.includes("work")) tagArray.push({ name: "Work" })
    return tagArray
}