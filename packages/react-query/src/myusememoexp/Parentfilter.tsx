import { ChangeEvent, LegacyRef, useMemo, useRef, useState } from 'react';
import { Child } from './Child';
export type Childpro = {
  vikas: {
    1: boolean;
  }[];
  tiwari: {
    1: string;
    2: (string | number | boolean)[];
  };
};

export default function Parentfilter() {
  const [flag, setFlag] = useState<boolean>(true);
  const inputref = useRef<HTMLInputElement>();
  const valueForchild: Childpro = useMemo(() => {
    return {
      vikas: [{ 1: true }, { 1: false }],
      tiwari: { 1: 'boom', 2: ['sunday', 1, true] },
    };
  }, []);
  console.log(flag);
  const checkvalidfn = () => {
    // if (!inputref?.current?.checkValidity() && inputref.current) {
    //   inputref.current.className = 'invalid';
    // }
  };
  const checkinputfn = () => {
    if (inputref.current) {
      let value = inputref.current.value;
      console.log(value);
      if (value) {
        const myelement = value.split(' ');
        myelement.forEach((elm) => {
          if (elm === 'my') {
            if (inputref.current) {
              const regex = new RegExp(elm, 'g');
              const newval = document.createElement('span');
              newval.id = 'iserror';
              newval.textContent = elm;
              //   const newval = value.replace(
              //     regex,
              //     `<span id="iserror">${elm}</span>`
              //   );
              inputref.current.append(newval);
            }
          }
        });
      }
    }
  };
  return (
    <div>
      Parentfilter
      <div>
        <input
          type="text"
          ref={inputref as LegacyRef<HTMLInputElement>}
          className="error"
          id="error"
          spellCheck="false"
          onBlur={() => checkinputfn()}
        />
      </div>
      <div
        style={{ height: '30px', border: '2px solid grey', margin: '5px' }}
        contentEditable
        spellCheck="false"
        className="editablediv">
        test 0 <span className="editablediv1"> test 1 </span>
        <span className="editablediv2"> test 2 </span>
      </div>
      <button
        onClick={() => {
          let myval =
            document.getElementsByClassName('editablediv')[0].textContent;
          console.log('myval', myval);
          setFlag(!flag);
          checkvalidfn();
        }}>
        click here to change boolean val
      </button>
      <Child valueForchild={valueForchild} />
    </div>
  );
}
