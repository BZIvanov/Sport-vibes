import { useEffect, useState } from 'react';
import QRCode from 'qrcode';

const User = ({ id, username, otpauth_url }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const getImageUrl = async () => {
      try {
        setImageUrl(await QRCode.toDataURL(otpauth_url));
      } catch (err) {
        console.log(err);
      }
    };

    if (otpauth_url) getImageUrl();
  }, [otpauth_url]);

  return (
    <div className='user'>
      <h3>{username}</h3>
      <p>id: {id}</p>
      <a href={imageUrl} download>
        <img src={imageUrl} alt='qr code gen' />
      </a>
    </div>
  );
};

export default User;
