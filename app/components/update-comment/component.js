import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm(){
      this.set('updateCommentForm', true);
    },
    updateComment1(comment){
      var params = {
        name: this.get('name'),
        body: this.get('body'),
        post: this.get('post')
      };
      this.set('updateCommentForm', false);
      this.sendAction('updateComment2', comment, params);
    }
  }
});
