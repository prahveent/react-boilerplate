export interface LoginRequestDTD {
    UserName: string;
    Password: string;
}

export interface LoginResponseDTD {
    UserId: number;
    PhoneNumber: string;
    Name: string;
    Email: string;
    Gender: 0 | 1;
    /**
      *  format : 2019-10-16T06:39:37.162667
      */
    DateOfBirth: string;
    Address: UserLocationDTD;
}


export interface UserLocationDTD {

    City: string,
    Country: string,
    CountryCode: string

}
