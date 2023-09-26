import { serverObj } from './Queryparent';
type QuerydataType = {
  querydata: serverObj[];
};
export default function ReactQuery({ querydata }: QuerydataType) {
  console.log('2');
  return (
    <div>
      ReactQuery
      {querydata.map((elm: serverObj, index: number) => {
        return <div key={index}>{elm.body}</div>;
      })}
    </div>
  );
}
