import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberListDialog } from './member-list-dialog';

describe('MemberListDialog', () => {
  let component: MemberListDialog;
  let fixture: ComponentFixture<MemberListDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberListDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberListDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
