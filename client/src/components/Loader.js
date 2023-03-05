import React,{useState} from 'react'
import HashLoader from "react-spinners/HashLoader";
function Loader() {
    let [loading, setLoading] = useState(true);
    // let [color, setColor] = useState("#ffffff");
    const override = CSS `
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      `;
  return (
    <div>
        <div className="sweet-loading">

      <HashLoader
        color='#000'
        loading={loading}
        cssOverride=''
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    </div>
  )
}

export default Loader