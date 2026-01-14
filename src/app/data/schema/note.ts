import { User } from "./user"

export class Note {
    id?: number
    author: User
    text: string
    noteOrderNumber: number
    completed: boolean
}
