import { User } from '../models/models';

export class UserService {
    static counter = 0;
    static users = [];
    static currentUser = {};

    getAllUsers() {
        return fetch('http://eventjoinme.azurewebsites.net/api/user')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getUserById(id) {
        return fetch('http://eventjoinme.azurewebsites.net/api/user/' + id)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                debugger;
                console.error(error);
            });
    }
}