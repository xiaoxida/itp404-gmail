import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render,} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | star-button', function(hooks) {
  setupRenderingTest(hooks);

  test('Star-empty', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs`{{star-button}}`);
    let source = this.element.querySelector('button').querySelector('img').src;
    let index  = source.indexOf('star');
    let strOut = source.substr(index);
    assert.equal(strOut, "star-empty.png");
  });

  test('Star-empty', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs`<StarButton @starred={{true}} />`);
    let source = this.element.querySelector('button').querySelector('img').src;
    let index  = source.indexOf('star');
    let strOut = source.substr(index);
    assert.equal(strOut, "star-filled.png");
  });
});
