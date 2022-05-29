import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {By} from "@angular/platform-browser";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header content', () => {
    fixture.detectChanges();

    let headerDe = fixture.debugElement.query(By.css('.headerStyle'));
    let headerEl = headerDe.nativeElement;

    expect(headerEl.textContent).toContain('Home')
    expect(headerEl.textContent).toContain('Pricing')
    expect(headerEl.textContent).toContain('FAQ')

  })
});
