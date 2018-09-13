import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FirstComponent} from './first.component';

import {DataModel} from './first.model';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {FirstService} from './first.service';


@Injectable()
class MockDataSource {
  public data: DataModel[] = [
    {name: 'Test John', username: 'john-test', access: 'test'}
  ];

  getData(): Observable<DataModel[]> {
    return of(this.data)
      .pipe(delay(1000));
  }
}

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;
  const dataSource = new MockDataSource();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirstComponent],
      providers: [
        {provide: FirstService, useValue: dataSource}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponent) as ComponentFixture<FirstComponent>;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('performs async operations', async(() => {
    dataSource.data.push({name: 'Test Alex', username: 'alex-test', access: 'test'});

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.data.length).toBe(2);
    });
  }));

  it('should create three li-elements', async(() => {
    dataSource.data.push({name: 'Test Peter', username: 'peter-test', access: 'test'});
    const compiled = fixture.debugElement.nativeElement;

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(compiled.querySelectorAll('li').length).toBe(3);
    });
  }));
});
