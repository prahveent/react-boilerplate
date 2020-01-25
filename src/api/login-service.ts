import { LoginRequestDTD, LoginResponseDTD } from "./dtd/login.dtd"
import { APIHelper } from "../utils/api-helper";
import APIConstants  from "../config/api-constant";

export class LoginService {

    private constructor() {

    }

    static loginRequest(userName: string, password: string): Promise<LoginResponseDTD> {

        return new Promise((resolve, reject) => {
            const reqBody: LoginRequestDTD = {
                UserName: userName,
                Password: password
            };
            let accessToken = 'sgknsgl'
            APIHelper.api(accessToken).post<LoginResponseDTD>(APIConstants.LOGIN, reqBody)
                .then((data) => {
                    resolve(data.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });

    }

    static fetchData(params: LoginRequestDTD): Promise<LoginResponseDTD> {

        return new Promise((resolve, reject) => {
            const reqBody: LoginRequestDTD = params;
            let accessToken = 'sgknsgl'

            APIHelper.api(accessToken).post<LoginResponseDTD>(APIConstants.LOGIN, reqBody)
                .then((data) => {
                    resolve(data.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

}
