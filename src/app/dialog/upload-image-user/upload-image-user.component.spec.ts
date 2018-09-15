import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImageUserComponent } from './upload-image-user.component';

describe('UploadImageUserComponent', () => {
  let component: UploadImageUserComponent;
  let fixture: ComponentFixture<UploadImageUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadImageUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
