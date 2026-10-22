import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaMultiplicarV2 } from './tabla-multiplicar-v2';

describe('TablaMultiplicarV2', () => {
  let component: TablaMultiplicarV2;
  let fixture: ComponentFixture<TablaMultiplicarV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaMultiplicarV2],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaMultiplicarV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
