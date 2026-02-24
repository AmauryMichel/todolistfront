import { Note } from "./note"
import { Project } from "./project"

export class Notegroup {
    project: Project
    id?: number
    name: string
    groupOrderNumber: number
    completed?: boolean
    notes?: Array<Note>

    constructor(project: Project, name: string, groupOrderNumber: number) {
        this.project = project
        this.name = name
        this.groupOrderNumber = groupOrderNumber
    }

    static sort(noteGroup1: Notegroup, noteGroup2: Notegroup) {
        return noteGroup1.groupOrderNumber - noteGroup2.groupOrderNumber
    }
}
