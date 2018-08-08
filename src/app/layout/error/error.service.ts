import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ErrorService {

  private updateSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  update$: Observable<string> = this.updateSubject.asObservable();

  public updateMessage(message: string) {
    this.updateSubject.next(message);
  }

}
