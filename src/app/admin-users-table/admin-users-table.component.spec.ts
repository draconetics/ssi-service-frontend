
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersTableComponent } from './admin-users-table.component';

describe('AdminUsersTableComponent', () => {
  let component: AdminUsersTableComponent;
  let fixture: ComponentFixture<AdminUsersTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
