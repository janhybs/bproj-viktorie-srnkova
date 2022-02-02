import React, { useState } from 'react';

function App() {
  const [jmeno, setJmeno] = useState('');
  const [prijmeni, setPrijmeni] = useState('');
  const [email, setEmail] = useState('');
  const [delkaPobytu, setDelkaPobytu] = useState(1);

  const payload = {
    jmeno,
    prijmeni,
    email,
    delkaPobytu,
  };


  const odeslat = async () => {
    // const odezva = fetch('http://127.0.0.1:5000/registrace', {
    //     method: 'POST',
    //     body: JSON.stringify(payload),
    // });

    // odezva.then(response => response.json()
    //   .then(data => {
    //     debugger;
    //     console.log(data);
    //   })
    // );

    const odezva = await fetch('http://127.0.0.1:5000/registrace', {
        method: 'POST',
        body: JSON.stringify(payload),
    });
    const data = await odezva.json();
    console.log(data);
  }


  return (
    <div>
      <h1>Registrace</h1>
      <div>
        <input type={'text'} placeholder={'Jméno'} value={jmeno} onChange={(e) => setJmeno(e.target.value)} />
        <input type={'text'} placeholder={'Příjmení'} value={prijmeni} onChange={(e) => setPrijmeni(e.target.value)} />
        <input type={'text'} placeholder={'Email'} value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type={'number'} placeholder={'Délka pobytu'} min={1} value={delkaPobytu} onChange={(e) => setDelkaPobytu(e.target.valueAsNumber)} />
        <button onClick={odeslat}>Registrovat</button>
      </div>
      <pre>
        <code>
          {JSON.stringify(payload, null, 2)}
        </code>
      </pre>
    </div>
  );
}

export default App;
