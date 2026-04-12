import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessaoPage } from './sessao.page';

describe('SessaoPage', () => {
  let component: SessaoPage;
  let fixture: ComponentFixture<SessaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SessaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
