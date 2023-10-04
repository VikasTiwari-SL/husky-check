import React from 'react';
import { Childpro } from './Parentfilter';
type Childtype = {
  valueForchild: Childpro;
};
function Childnode({ valueForchild }: Childtype) {
  console.log('i am here');
  return <div>Child</div>;
}
export const Child = React.memo(Childnode);
