import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { User } from '../../../../data/schema/user';
import { UserService } from '../../../services/user-service';
import { Project } from '../../../../data/schema/project';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { ProjectService } from '../../../services/project-service';

@Component({
  selector: 'app-member-list-dialog',
  imports: [ReactiveFormsModule],
  templateUrl: './member-list-dialog.html',
  styleUrl: './member-list-dialog.css',
})
export class MemberListDialog {
  userList: User[]

  constructor(
    @Inject(DIALOG_DATA) public data: { project: Project },
    private userService: UserService,
    private projectService: ProjectService,
    private changeDetection: ChangeDetectorRef
  ) { }

  inviteMemberForm = new FormGroup({
    username: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
  })

  protected removeMember(user: User) {
    this.projectService.removeMember(this.data.project.id, user).subscribe(
      result => {
        //Remove user from displayed list
        const index = this.data.project.projectMembers.indexOf(user)
        this.data.project.projectMembers.splice(index, 1)
        this.changeDetection.detectChanges()
      }
    )
  }

  ngOnInit() {

  }
}
