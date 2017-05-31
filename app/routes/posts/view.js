import Ember from 'ember';

var siteId;

export default Ember.Route.extend({
    model(params) {
        siteId = params.site_id;
        return this.store.findRecord('post', siteId);
    }
});
