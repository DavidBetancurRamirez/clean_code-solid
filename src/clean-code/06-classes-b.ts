(() => {
    type Gender = "M"|"F";

    interface PersonProps {
        name: string,
        gender: Gender,
        birthday: Date
    }
    class Person {
        public name: string;
        public gender: Gender;
        public birthday: Date

        constructor({name, gender, birthday}: PersonProps) {
            this.name = name,
            this.gender = gender,
            this.birthday = birthday
        }
    }

    interface UserProps {
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthday: Date
    }
    class User extends Person {        
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({
            email,
            role,
            name,
            gender,
            birthday
        }: UserProps ){
            super({name, gender, birthday});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthday: Date;
    }
    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthday
        }: UserSettingsProps) {
            super({email, role, name, gender, birthday});
            this.workingDirectory = workingDirectory
            this.lastOpenFolder = lastOpenFolder
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: "./sa/",
        lastOpenFolder: "",
        email: "sajdanos@aksjnda.com",
        role: "admin",
        name: "joasmd",
        gender: "F",
        birthday: new Date("1945-10-10")
    })
    

})();