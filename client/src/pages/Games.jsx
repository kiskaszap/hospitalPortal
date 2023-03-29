import React from 'react';

function Games() {
  return (
    <div style={{display:'flex', width:'100vw', flexDirection:'row'}}>

      <div style={{ height: '300px', width: '400px' }}>
        <iframe
          style={{ height: '100%', width: '100%' }}
          src='https://html5gameshq.com/iframed/streetrace-fury'
        ></iframe>
        <div style={{ height: '300px', width: '400px' }}>
          <iframe
            style={{ height: '100%', width: '100%' }}
            src='https://html5gameshq.com/iframed/cannons-and-soldiers'
          ></iframe>
          <a
            href='https://html5gameshq.com/?r=embed-ref'
            target='_blank'
          ></a>
        </div>
      </div>
      <div style={{ height: '300px', width: '202px', position: 'relative' }}>
        <iframe
          style={{ height: '100%', width: '100%' }}
          src='https://html5gameshq.com/iframed/jewelish'
        ></iframe>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            textAlign: 'center',
          }}
        ></div>
      </div>
    </div>
  );
}

export default Games;
