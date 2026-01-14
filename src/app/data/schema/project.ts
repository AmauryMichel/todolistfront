import { User } from "./user"

export class Project {
    id?: number
    creator: User
    projectMembers?: Array<User>
    projectName: string
    
    constructor(creator: User, projectName: string) {
        this.creator = creator
        this.projectName = projectName
    }
}
