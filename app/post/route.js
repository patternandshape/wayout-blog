import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      singlePost: this.store.findRecord('post', params.post_id),
      allPost: this.store.findAll('post')
    })
  },
  actions: {
    delete(model){
      if(confirm('Are you sure you want to delete this post?')){
        model.destroyRecord();
        this.transitionTo('index');
      }
    },
      deleteComment(comment){
        if(confirm('Are you sure you want to delete your comment?')){
          comment.destroyRecord();
        }
      },
      update3(post, params){
        Object.keys(params).forEach(function(key){
          if(params[key]!==undefined){
            post.set(key,params[key]);
          }
        });
        post.save();
        this.transitionTo('index');
      },
      saveComment3(params){
        var addComment = this.store.createRecord('comment', params);
        var post = params.post;
        post.get('comments').addObject(addComment);
        addComment.save().then(function(){
          return post.save();
        });
        this.transitionTo('model.singlePost', params.post);
      }
    }
});
