import { Notegroup } from "./notegroup"
import { User } from "./user"

export class Note {
    id?: number
    author: User
    group: Notegroup
    text: string
    noteOrderNumber: number
    completed: boolean

    constructor(author: User, group: Notegroup, text: string, noteOrderNumber: number) {
        this.author = author
        this.group = group
        this.text = text
        this.noteOrderNumber = noteOrderNumber
        this.completed = false
    }
}
