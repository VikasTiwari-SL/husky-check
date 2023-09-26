import { serverObj } from './Queryparent';

type ChildType = {
  serverState: serverObj[];
};
export function Querychild({ serverState }: ChildType) {
  console.log('1');

  return (
    <div>
      Querychild
      {serverState ? (
        serverState.map((elm: serverObj, index: number) => {
          return <div key={index}>{elm.body}</div>;
        })
      ) : (
        <p>the server throws no data</p>
      )}
    </div>
  );
}
