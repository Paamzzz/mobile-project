import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrilhaPage } from './trilha.page';

describe('TrilhaPage', () => {
  let component: TrilhaPage;
  let fixture: ComponentFixture<TrilhaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrilhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
