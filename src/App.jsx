import { useState } from "react"
import QRCode from "react-qr-code"
import QRCodeLink, { toDataURL } from 'qrcode';

function App() {
const [link,setLink] = useState('');
const [qrcodelink,setQrCodeLink] = useState('');

const setURl = (e) => {
  setLink(e.target.value);
  handleGenerate(e.target.value);
}
const handleGenerate = (linkurl) => {
  QRCodeLink = toDataURL(linkurl,{
    width:600,
    margin:3
  },function(err,url){
    setQrCodeLink(url);
  })
}
  return (
    <div className="App">
      <div className="container">
        <QRCode
        value={link}
         />
      <div className="area-input">
        <input
        type="text"
        placeholder="Digite aqui..."
        onChange={e => setURl(e)}
        />
      </div>
      <a href={qrcodelink} download={`qrcode.png`}>Baixar QR Code</a>
      </div>
    </div>
  )
}

export default App
