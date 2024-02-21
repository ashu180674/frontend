import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import axios from "axios";

function App() {
  const [url, seturl] = useState("")
  const [start, setstart] = useState(0);
  const [load, setload] = useState(0);

  const submit = async () => {
    if (url !== "") {


      // const data=axios.post("65.0.184.177:5000/deploy",{"github_link":url})
      setload(1);
      setTimeout(() => {
        setstart(1);
        setload(0);
      }, 40000);
      seturl("");

    }
    else {
      alert("Please enter the github link")
    }
  }


  return (
    <body>
      <div class="container">
        {
          load == 1 && <div>
            Loading....
          </div>
        }
        {
          load == 0 &&
          <>
            <h1>Paste Your GitHub URL</h1>
            <div>
              {start === 1 && <a href='http://sparcel.tech.s3-website.ap-south-1.amazonaws.com/'>click to open site</a>}
              {start == 0 && <input value={url} onChange={e => seturl(e.target.value)} type="text" id="github_link" name="github_link" placeholder="Enter your GitHub URL" required />}
              <button onClick={submit}>Submit</button>
            </div>
          </>
        }

      </div>
    </body>
  );
}

export default App;
