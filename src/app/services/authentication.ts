import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest , HTTP_INTERCEPTORS} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";



@Injectable()
export class authentication implements HttpInterceptor 
{
   constructor(private login:LoginService)
   {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let Request = req;
        const token = this.login.getToken();
        console.log("To check Intercepter");
        if(token!=null){
            Request = Request.clone({setHeaders:{Authorization:`Bearer ${token}`},});
        }

        return next.handle(Request);
    }
 
}

export const authInterceptorProviders = [

    {
        provide:HTTP_INTERCEPTORS,
        useClass:authentication,
        multi:true,


    },
];