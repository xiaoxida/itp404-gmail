import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import window, { reset } from 'ember-window-mock';

module('Acceptance | emails', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  hooks.afterEach(function() {
    reset();
  });

  test('visiting / displays a list of emails', async function(assert) {
    server.create('email', {
      isStarred: true,
    });
    server.create('email', {
      isStarred: true,
    });
    server.createList('email', 3);
    await visit('/');
    assert.dom('[data-test="nostar"]').exists({count: 3});
    assert.dom('[data-test="starred"]').exists({count: 2});
  });

  test('viewing the details of a email', async function(assert) {
    server.create('email', {
      from: 'John',
      to: 'Clark',
      subject: 'no',
      message: 'No class',
      isStarred: true,
    });
    await visit('/emails/1');

    assert.dom('[data-test="email-star"]').hasText('true');
    assert.dom('[data-test="email-from"]').hasText('From: John');
    assert.dom('[data-test="email-to"]').hasText('To: Clark');
    assert.dom('[data-test="email-subject"]').hasText('Subject: no');
    assert.dom('[data-test="email-message"]').hasText('Message: No class');
  });

  test('deleting a post', async function(assert) {
    server.createList('email', 2);
    window.confirm = () => true;
    await visit('/emails/2');
    await click('[data-test="delete-email"]');
    assert.equal(currentURL(), '/');
    assert.dom('[data-test="nostar"]').exists({ count: 1 });
  });

  test('create a email', async function(assert) {
    await visit('/compose');
    await fillIn('#from', 'John');
    await fillIn('#to', 'Clark');
    await fillIn('#subject', 'no');
    await fillIn('#message', 'no class');
    await click('[data-test="submit"]');

    assert.equal(currentURL(), '/');
    assert.dom('[data-test="nostar"]').exists({count: 1});

    assert.equal(server.db.emails[0].from, "John");
    assert.equal(server.db.emails[0].to, "Clark");
    assert.equal(server.db.emails[0].message, "no class");
    assert.equal(server.db.emails[0].subject, "no");
    assert.equal(server.db.emails[0].id, "1");
  })

});
