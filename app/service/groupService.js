import { Group } from '../models/models';

export class GroupService {
    static counter = 0;
    static groups = [new Group({
        id: '1',
        name: 'Room mates',
        users: [{
            id: 1,
            name: "Venkatesh",
            email: 'venkatesh@gmail.com',
            phoneNumber: '9190405060'
        }]
    }), new Group({
        id: '2',
        name: 'School Friends',
        users: [{
            id: 1,
            name: "Venkatesh",
            email: 'venkatesh@gmail.com',
            phoneNumber: '9190405060'
        }]
    }), new Group({
        id: '3',
        name: 'B.Tech Friends',
        users: [{
            id: 1,
            name: "Venkatesh",
            email: 'venkatesh@gmail.com',
            phoneNumber: '9190405060'
        }]
    }), new Group({
        id: '4',
        name: 'Techies!!',
        users: [{
            id: 1,
            name: "Venkatesh",
            email: 'venkatesh@gmail.com',
            phoneNumber: '9190405060'
        }]
    })];

    createGroup(group) {
        group.id = ++GroupService.counter;
        GroupService.Groups.push(Group);
    }

    getGroups() {
        return GroupService.groups;
    }

    updateGroup(Group) {
        GroupService.groups = GroupService.groups.map((e) => {
            return e.id == Group.id ? Group : e;
        });
    }
}