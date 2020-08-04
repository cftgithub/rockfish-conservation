import MediaQuery from 'react-responsive'
 
const Desktop = () => (
  <div>
    <h1>Device Test!</h1>
    <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
      <p>You are a desktop or laptop</p>
      <MediaQuery minDeviceWidth={1824}>
        <p>You also have a huge screen</p>
      </MediaQuery>
    </MediaQuery>
    <MediaQuery minResolution='2dppx'>
      {/* You can also use a function (render prop) as a child */}
      {(matches) =>
        matches
          ? <p>You are retina</p>
          : <p>You are not retina</p>
      }
    </MediaQuery>
  </div>
)