import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow(){
      this.set('addNewPost', true);
    },
    save1(){
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        body: this.get('body'),
        author: this.get('author'),
        date: new Date(),
        category: this.get('category'),
      };
      this.set('addNewPost', false);
      this.sendAction('save2', params);
    }
  }
});
