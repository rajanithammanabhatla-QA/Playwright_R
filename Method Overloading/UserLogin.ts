class UserAuth {
    login(userName: string): void;
    login(userName: string, userPassword: string): void;
    login(userName: string, userPassword: string, loginOtp: number): void;

    login(
        userName: string,
        userPassword?: string,
        loginOtp?: number
    ): void {

        if (userPassword !== undefined && loginOtp !== undefined) {
            console.log(`Login successful for ${userName} using password and OTP ${loginOtp}`);
        } else if (userPassword !== undefined) {
            console.log(`Login attempted for ${userName} using password`);
        } else {
            console.log(`Login attempted for ${userName}`);
        }
    }
}

const userAuthObject = new UserAuth();

userAuthObject.login("rajani");
userAuthObject.login("rajani", "Pass@123");
userAuthObject.login("rajani", "Pass@123", 456789);