import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNotegroupDialog } from './create-notegroup-dialog';

describe('CreateNotegroupDialog', () => {
  let component: CreateNotegroupDialog;
  let fixture: ComponentFixture<CreateNotegroupDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNotegroupDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNotegroupDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
