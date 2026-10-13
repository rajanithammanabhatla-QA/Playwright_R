class User {
    username: string;
    role: string;

    constructor(username: string, role: string) {
        this.username = username;
        this.role = role;
    }

    getPermissions(): string {
        return "No Permissions";
    }
}

class Admin extends User {
    constructor(username: string) {
        super(username, "Admin");
    }

    override getPermissions(): string {
        return "Create, Read, Update, Delete";
    }
}

class Editor extends User {
    constructor(username: string) {
        super(username, "Editor");
    }

    override getPermissions(): string {
        return "Read, Update";
    }
}

class Viewer extends User {
    constructor(username: string) {
        super(username, "Viewer");
    }

    override getPermissions(): string {
        return "Read Only";
    }
}

const users: User[] = [
    new Admin("Ravi"),
    new Editor("Priya"),
    new Viewer("Kiran")
];

for (const user of users) {
    console.log(
        `${user.username} - ${user.role} - ${user.getPermissions()}`
    );
}