import { helper } from '@ember/component/helper';

export function truncateText(params/*, hash*/) {
  let myString = JSON.stringify(params[0]);
  if(myString.length > parseInt(params[1]))
  {
    return myString.substring(0, parseInt(params[1]) - 1) + "...";
  }
  else {
    return params[0];
  }
}

export default helper(truncateText);
