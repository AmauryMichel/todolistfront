import { Notegroup } from "./notegroup"
import { User } from "./user"

export class Project {
    id: number
    creator: User
    projectName: string
    projectMembers?: Array<User>
    noteGroups?: Array<Notegroup>
    description?: string
    
    constructor(creator: User, projectName: string) {
        this.creator = creator
        this.projectName = projectName
    }

    static sort(project1: Project, project2: Project) {
        return project1.id - project2.id
    }
}
