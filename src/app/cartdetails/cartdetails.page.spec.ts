import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartdetailsPage } from './cartdetails.page';

describe('CartdetailsPage', () => {
  let component: CartdetailsPage;
  let fixture: ComponentFixture<CartdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
