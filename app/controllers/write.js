import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    publishPost: function() {
      var newPost = this.store.createRecord('post', {
        title: this.get('title'),
        body: this.get('body'),
        date: new Date().getTime()
      });
      newPost.save();
    },
    setAndSave: function(html) {
            // Triggers save every 3000 ms as long as user is changing post
            // Amount of ms can be altered below

            console.log(html); // Contains the HTML from the editor

            let thisModel = this.get('model');
            console.log(thisModel);
            let id = thisModel.id;
            this.store.findRecord('post', id).then(function (post) {
                let thisId = post.get('id');
                let thisTitle = post.get('title');
                let thisContent = post.get('content');
                console.log(thisId, thisTitle, thisContent);
                post.set('content', html);
                post.save();
            });
            this.store.findRecord('post', id).then(function (post) {
                let thisContent2 = post.get('content');
                console.log(thisContent2);
            });
            let thisModel2 = this.get('model');
            console.log(thisModel2);

            this.set('model.someProp', html);
            Ember.run.debounce(
                this,
                this.getModelSave,
                3000
            );
        },
  }
});
