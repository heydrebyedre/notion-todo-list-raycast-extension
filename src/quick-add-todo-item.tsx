import { Action, ActionPanel, Form, getPreferenceValues, LaunchProps } from "@raycast/api";
import { Client } from "@notionhq/client";
import { addTodoToNotion } from "../api/addTodoToNotion"

const { notionToken, databaseId } = getPreferenceValues();

const notion = new Client({
    auth: notionToken
})


export default function QuickAddTodo(props: LaunchProps<{arguments: Arguments.QuickAddTodoItem}>) {
    const { task } = props.arguments
    addTodoToNotion(notion, databaseId, task)
    return (
        <Form />
    )
}