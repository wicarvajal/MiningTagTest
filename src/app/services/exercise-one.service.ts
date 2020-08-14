import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { ExerciseOneResponse } from '../models/exerciseOneResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseOneService {

  constructor(private http: HttpClient) { }

  getExerciseOneArray(): Observable<ExerciseOneResponse> {
    return this.http.get<ExerciseOneResponse>(environment.exercise1EndPoint);
  }

}
