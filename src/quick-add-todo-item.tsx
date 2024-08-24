import { Detail } from "@raycast/api";
import capitalCase from "../util/capitalCase"
import parseTodo from "../util/parseTodo"

let todo: string = "make dinner for esa #prs /tomorrow 8:29pm p1"

export default function Command() {
    console.log(parseTodo(todo))
    return <Detail markdown={"Hi"} />
}