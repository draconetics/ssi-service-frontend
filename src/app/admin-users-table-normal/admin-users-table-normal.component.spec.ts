import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersTableNormalComponent } from './admin-users-table-normal.component';

describe('AdminUsersTableNormalComponent', () => {
  let component: AdminUsersTableNormalComponent;
  let fixture: ComponentFixture<AdminUsersTableNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersTableNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersTableNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
