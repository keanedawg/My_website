import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    publishPost: function() {
      var newPost = this.store.createRecord('post', {
        title: this.get('title'),
        body: this.get('myProperty'),
        date: new Date().getTime()
      });
      newPost.save();
    },
    setAndSave: function(html) {
      // // Triggers save every 3000 ms as long as user is changing post
      // // Amount of ms can be altered below

      console.log(html); // Contains the HTML from the editor
    }
  }
});
