import Controller from '@ember/controller';
import window from 'ember-window-mock';

export default Controller.extend({
  actions: {
    back() {
      this.transitionToRoute('index');
    },
    deleteEmail(email){
      event.preventDefault();
      let confirmed = window.confirm(
        'Are you sure you want to delete this email?'
      )
      if (confirmed){
        email.destroyRecord();
        this.transitionToRoute('index');
      }
    }
  }
});
