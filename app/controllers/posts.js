import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['date'],
  sortAscending: false, // sorts post by timestamp
  actions: {
    publishPost: function() {
      var newPost = this.store.createRecord('post', {
        title: this.get('title'),
        body: this.get('body'),
        date: new Date().getTime()
      });
      newPost.save();
    }
  }
});