import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isLaoding: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() { }
}
