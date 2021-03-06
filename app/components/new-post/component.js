import Ember from 'ember';
// var moment = require('moment');
export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow(){
      this.set('addNewPost', true);
    },
    save1(){
      var newDate = new Date();
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        body: this.get('body'),
        author: this.get('author'),
        date: newDate.getFullYear(),
        category: this.get('category'),
      };
      this.set('addNewPost', false);
      this.sendAction('save2', params);
    }
  }
});
