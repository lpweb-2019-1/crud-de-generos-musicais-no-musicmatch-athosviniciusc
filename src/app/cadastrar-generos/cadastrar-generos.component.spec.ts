import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarGenerosComponent } from './cadastrar-generos.component';

describe('CadastrarGenerosComponent', () => {
  let component: CadastrarGenerosComponent;
  let fixture: ComponentFixture<CadastrarGenerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarGenerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
