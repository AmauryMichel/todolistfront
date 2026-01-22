import { Note } from "./note"

export class Notegroup {
    id?: number
    name: string
    groupOrderNumber: number
    completed: boolean
    notes: Array<Note>
}
