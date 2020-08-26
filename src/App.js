import React from 'react';
import Wasm from 'react-wasm';

function App() {
  // WebAssembly.instantiateStreaming(fetch('../public/1.wasm'), {  })
  //   .then((obj) => console.log('instantiateStreaming: ', obj.instance.exports));

  return (
    <div className="App">
      <Wasm url="../public/1.wasm">
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) {
            console.error('error', error);
            return 'An error has occurred';
          }
      
          const { instance } = data;

          console.log('react-wasm: ', instance.exports);

          return <div>5 * 2 = {instance.exports.doubling(5)}</div>;
        }}
      </Wasm>
    </div>
  );
}

export default App;
