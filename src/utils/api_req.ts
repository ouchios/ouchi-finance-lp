import { useEffect, useState } from 'react';

export function get_API_JSON(urlReq) {
  let [resultFunc, setResultFunc] = useState<any>();
  useEffect(() => {
    let getResultFunc = async () => {
      let response = await fetch(urlReq);
      const data = await response.json();
      setResultFunc(data.value_ouchi);
    };
    getResultFunc();
  }, []);
  return resultFunc;
}
