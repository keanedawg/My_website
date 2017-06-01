import Ember from 'ember';

var postId;

export default Ember.Route.extend({
    model(params) {
        postId = params.post_id;
        return this.store.findRecord('post', postId);
    }
});
