import { Notegroup } from "./notegroup"
import { User } from "./user"

export class Project {
    id?: number
    creator: User
    projectName: string
    projectMembers?: Array<User>
    noteGroups?: Array<Notegroup>
    
    constructor(creator: User, projectName: string) {
        this.creator = creator
        this.projectName = projectName
    }
}
