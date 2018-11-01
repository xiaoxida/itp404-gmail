import Component from '@ember/component';

export default Component.extend({
  actions: {
    star(email, newValue) {
      email.set('isStarred', newValue);
      email.save();
    }
  }
});
