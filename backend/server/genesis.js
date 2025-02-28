import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import '../imports/startup/server';

if (Meteor.users.find().count() === 0) {

    const newUser = {
        username: 'kyle',
        email: 'kyle.herbertson@rmit.edu.au',
        password: 'password',
        roles: [
            'user', 'admin', 'maintainer',
        ],
    };

    Accounts.createUser(newUser);

    console.log('First user created');

}
