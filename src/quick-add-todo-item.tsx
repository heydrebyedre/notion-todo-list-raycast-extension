import { Action, ActionPanel, Form, getPreferenceValues, LaunchProps } from "@raycast/api";
import { Client } from "@notionhq/client";
import { addTodoToNotion } from "../api/addTodoToNotion"

const preferences = getPreferenceValues();




export default function QuickAddTodo(props: LaunchProps<{arguments: Arguments.QuickAddTodoItem}>) {
    const { task } = props.arguments
    console.log(preferences)
    addTodoToNotion(task)
    return (
        <Form />
    )
}