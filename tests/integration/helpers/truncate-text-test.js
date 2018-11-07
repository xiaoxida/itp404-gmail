import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | truncate-text', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('Text is less than max', async function(assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{truncate-text inputValue 10}}`);

    assert.dom(this.element).hasText('1234');
  });

  test('Text is more than max', async function(assert) {
    this.set('inputValue', 'asdfghjklzx');

    await render(hbs`{{truncate-text inputValue 10}}`);

    assert.dom(this.element).hasText('asdfghjklz...');
  });
});
