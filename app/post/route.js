import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  // model2() {
  //   return this.store.findAll('post');
  // }
  actions: {
    delete(model){
      if(confirm('Are you sure you want to delete this post?')){
        model.destroyRecord();
        this.transitionTo('index');
      }
    }
  }
});
