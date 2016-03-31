import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment1(){
      var params = {
        name: this.get('name'),
        body: this.get('body'),
        post: this.get('post')
      };
      this.sendAction('saveComment2', params);
    }
  }
});
