import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";

export default function TestUpload() {
    const [data, setvalue] = useState({}); 

    useEffect(() => {
        Tabletop.init({
          key: "1htNWisiShjd235o2oh2yMiELi8bYB05X3XyHJSH2WRY",
          simpleSheet: true,
        }).then(function (data) {
            setvalue(data);
        });
      }, []);

      //const sheetdata = Array.from(data);  

  return (
    <>
      <h1>data from google sheets</h1>
      
    </>
  );
}