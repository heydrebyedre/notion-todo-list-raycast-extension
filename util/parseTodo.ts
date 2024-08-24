import capitalCase from "./capitalCase";
import Sugar from "sugar";

export default function parseTodo(taskTitle: string) {
    let priority: string = "p4";
    let match = /p[1-4]/i.exec(taskTitle)
    if (match) {
        priority = match[0]
        console.log(taskTitle.indexOf(priority))
        taskTitle = taskTitle.replace(/p[1-4]/i, "")
    } else {
        return
    }
    const tagsIndex = taskTitle.indexOf("#")
    const dateIndex = taskTitle.indexOf("/")
    const todoTitle = capitalCase(taskTitle.split("#")[0])
    let tagsString = taskTitle.slice(tagsIndex).split("/")[0]
    tagsString = tagsString.substring(1, tagsString.length)
    let dateString = taskTitle.slice(dateIndex)
    dateString = dateString.substring(1, dateString.length)
    let parsedDate = Sugar.Date.create(dateString)
    return {
        todoTitle,
        tags: tagsString,
        date: parsedDate,
        priority,
    }
}