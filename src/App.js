import React from 'react';
import Wasm from "react-wasm";

function App() {
  // fetch('../public/test2.wasm').then(bytes => {
  //   console.log('bytes', bytes)
  // })
  const memory = new WebAssembly.Memory({ initial: 256, maximum: 256 });
  const env = {
    'abortStackOverflow': _ => { throw new Error('overflow'); },
    'table': new WebAssembly.Table({ initial: 0, maximum: 0, element: 'anyfunc' }),
    '__table_base': 0,
    'memory': memory,
    '__memory_base': 1024,
    'STACKTOP': 0,
    'STACK_MAX': memory.buffer.byteLength,
  };

  // const importObject = {env};

  // WebAssembly.instantiateStreaming(fetch('../public/add.wasm'), {  })
  //   .then(obj => console.log('obj', obj));
  return (
    <div className="App">
      test
      <Wasm url="../public/add.wasm">
        {({ loading, error, data }) => {
          console.log('error', error)
          if (loading) return "Loading...";
          if (error) return "An error has occurred";
      
          const { module, instance } = data;
          return <div>1 + 2 = {instance.exports.main()}</div>;
        }}
      </Wasm>
    </div>
  );
}

export default App;
