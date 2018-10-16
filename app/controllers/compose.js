import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createEmail() {
      event.preventDefault();
      //read out the input
      //save a post model
      let email = this.store.createRecord('email', {
        from: this.from,
        to: this.to,
        subject: this.subject,
        message: this.message
      })

      email.save().then(() => {
        this.transitionToRoute('index');
      });
    }
  }
});
