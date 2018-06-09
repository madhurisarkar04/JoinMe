
export class Event{
    constructor(args){
        this.id = args.id;
        this.name = args.name;
        this.description = args.description;
        this.startDate = args.startDate;
        this.endDate = args.endDate;
        this.location = args.location;
        this.isBillable = args.isBillable;
    }
}

export class User{
    constructor(args){
        this.id = args.id;
        this.name = args.name;
        this.email= args.email;
        this.phoneNumber = args.phoneNumber;
    }
}

export class Group{
    constructor(args){
        this.id = args.id;
        this.name = args.name;
        this.users = args.users;
    }
}

