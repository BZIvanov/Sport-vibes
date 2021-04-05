import { useState } from 'react';
import QRCode from 'qrcode';
import './App.css';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');

  const generate = async () => {
    try {
      const response = await QRCode.toDataURL(
        'otpauth://totp/SecretKey?secret=GV5UONZJNFXD6ZZPMVZHIQKRGBJHGZSVIJUHSJKJKJFS6SKGLZCA'
      );
      setImageUrl(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={generate}>Generate</button>
      {imageUrl && (
        <a href={imageUrl} download>
          <img src={imageUrl} alt='qr code gen' />
        </a>
      )}
    </div>
  );
};

export default App;
