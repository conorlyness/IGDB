import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            //https://rapidapi.com/accujazz/api/rawg-video-games-database/details
            //add in the keys for your own personal account
            setHeaders: {
                'x-rapidapi-key': 'ENTER KEY HERE',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            },
            setParams: {
                key: 'ENTER KEY HERE',
            }
        });
        return next.handle(req);
    }
}
