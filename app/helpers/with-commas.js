import { helper } from '@ember/component/helper';

export function withCommas(params/*, hash*/) {
  return params[0].toLocaleString();
}

export default helper(withCommas);
