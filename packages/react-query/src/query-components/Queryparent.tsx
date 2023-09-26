import { useState } from 'react';

import { useQuery } from 'react-query';

import { Querychild } from './Querychild';
// import ReactQuery from './ReactQuery';
export type serverObj = {
  id: number;
  body: string;
  postId: number;
};
export function Queryparent() {
  const [serverState, setServerState] = useState<serverObj[]>();

  const fetchDataFunction = async () => {
    const data = await fetch('http://localhost:3000/comments');

    const jsondata = await data.json();
    setServerState(jsondata);

    return jsondata;
  };
  const dataQuery = useQuery('react-querydata', fetchDataFunction, {
    cacheTime: 10000,
    staleTime: 10000,
    refetchOnMount: true, // if data is stale..if set to always will always refetch
    refetchOnWindowFocus: true, //by default..refetch when tab looses focus and regain focus
    refetchInterval: false, //if u want data like share market..in ms
    onSuccess: () => {
      console.log('success');
    },
    select: () => {
      return [{ body: 1 }, { body: 2 }, { body: 3 }, { body: 1 }];
    },
  });

  //   useEffect(() => {
  //     fetchDataFunction();
  //   }, []);
  if (dataQuery.isLoading) {
    return <div>...loading</div>;
  } else if (dataQuery.isError) {
    return <div>wtf</div>;
  } else {
    return (
      <div>
        <button onClick={() => dataQuery.refetch()}>
          {' '}
          click me to refetch
        </button>
        Queryparent lets see how state management becomes easy
        {serverState && Object.keys(serverState).length !== 0 ? (
          <Querychild serverState={serverState} />
        ) : (
          <p>no data at server</p>
        )}
        {/* {Object.keys(data.data).length !== 0 ? (
          <ReactQuery querydata={data.data} />
        ) : (
          <p>no data found</p>
        )} */}
      </div>
    );
  }
}
