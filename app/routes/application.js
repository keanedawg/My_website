import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {
        return this.get('session').fetch().catch(function() {});
    },
    actions: {
        signIn: function(username, password) {
            // Essentially the function that makes you "login"
            this.get('session').open('firebase', 
                // Provider - the type of authentication (twitter, facebook, github, etc.)
                // Picking "password" as provider means authenticating with username and password.
                { provider: "password", 
                  email: username,
                  password: password 
                }).then(function(data) {
                    console.log(data.currentUser);  // Log information for debugging
            });
        },
        signOut: function() {
            this.get('session').close();
        }
    }
});
