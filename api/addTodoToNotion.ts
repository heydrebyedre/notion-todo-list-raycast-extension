import { getPreferenceValues } from "@raycast/api";
import { Client } from "@notionhq/client"


import parseTodo from "../util/parseTodo"
import parseTags from "../util/parseTag";
import determineIcon from "../util/determineIcon";
import { Tag, TagArray } from "../types/Tags";
import Todo from "../types/Todo"

const preferences = getPreferenceValues();

const notion = new Client({
    auth: "cheese and rice"
})


export async function addTodoToNotion(todoString: string) {
    const todo: Todo = parseTodo(todoString)
    const { todoTitle, tags, date, priority } = todo
    let parsedTags: TagArray = parseTags(tags)
    let icon = determineIcon(todoString, parsedTags)
    const response = await notion.pages.create({
        parent: {
            "type": "database_id",
            database_id: "rice and beans"
        },
        icon: {
            type: "emoji",
            "emoji": icon,
        },
        properties: {
            Name: {
                type: 'title',
                title: [
                    {
                        type: 'text',
                        text: {content: todoTitle}
                    }
                ]
            },
            "Planned": {
                type: 'date',
                date: {start: date.toISOString()}
            },
            Status: {
                type: 'status',
                status: {name: "Inbox"}
            },
            Tags: {"multi_select": parsedTags},
            Priority: {
                type: 'select',
                select: {name: priority}
            }
        }
    })
}