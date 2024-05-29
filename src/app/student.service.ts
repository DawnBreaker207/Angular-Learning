import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interface/Student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}
  API_URL: string = 'http://localhost:3000/students';
  Get_All_Students = (): Observable<any> => {
    return this.http.get(this.API_URL);
  };
  Get_Student_By_ID = (id: string): Observable<any> => {
    return this.http.get(this.API_URL + '/' + id);
  };
  Add_Student = (data: Student) => {
    return this.http.post(this.API_URL, data);
  };
  Update_Student = (id: string, data: Student): Observable<any> => {
    return this.http.put(this.API_URL + `/${id}`, data);
  };
  Delete_Student = (id: string): Observable<any> => {
    return this.http.delete(this.API_URL + `/${id}`);
  };
}
