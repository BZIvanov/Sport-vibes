import axios from 'axios';

const App = () => {
  const download = () => {
    axios
      .get('http://localhost:3001/api/download-file', {
        responseType: 'arraybuffer',
      })
      .then(function (response) {
        const fileURL = window.URL.createObjectURL(new Blob([response.data]));
        const fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', 'target.zip');
        document.body.appendChild(fileLink);
        fileLink.click();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='App'>
      <button onClick={download}>Download</button>
    </div>
  );
};

export default App;
