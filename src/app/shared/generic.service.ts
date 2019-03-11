import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class GenericService<T> {

  protected HEADERS = new HttpHeaders(
    { 'Content-Type': 'application/json', 'WWW-Authenticate': 'Basic realm=Works' });

  protected entityName = '';
  protected URL = 'http://localhost:8080/spring_boot_rest_api_jpa_security-1.0-LTS/';

  public manipulatedList;

  constructor(protected httpClient: HttpClient, public entity: T,

    protected otherURL?: string, protected otherHEADERS?: HttpHeaders) {

      
    this.entityName = entity.constructor.name.toLowerCase();

    if (otherURL) this.URL = otherURL;
    if (otherHEADERS) this.HEADERS = otherHEADERS;

    this.URL += this.entityName + '/';
  }

  insert(data: T): Observable<{}> {
    return this.httpClient.post(this.URL + "insert", data, { headers: this.HEADERS });
  };

  update(data: T): Observable<{}> {
    return this.httpClient.post(this.URL + "update", data, { headers: this.HEADERS });
  };

  findAll(): Observable<{}> {
    return this.httpClient.get(this.URL + "findAll", { headers: this.HEADERS });
  };

  findById(id: number): Observable<{}> {
    return this.httpClient.get(this.URL + "findById/" + id, { headers: this.HEADERS });
  };

  delete(id: number): Observable<{}> {
    return this.httpClient.get(this.URL + "delete/" + id, { headers: this.HEADERS });
  };

}