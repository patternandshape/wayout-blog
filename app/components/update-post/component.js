import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm(){
      this.set('updatePostForm', true);
    },
    update1(post) {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        body: this.get('body'),
        author: this.get('author'),
        category: this.get('category'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update2', post, params);
    }
  }
});
