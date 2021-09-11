export default function Custom404() {
  return (
    <div id="main">
      <h1>Error 404</h1>
      <style jsx>
        {`
          #main {
            display: grid;
            place-content: center;
            height: calc(100vh - 5rem);
          }

          #main h1 {
            font-size: 50px;
            padding-right: 12px;
            animation: type 0.5s alternate infinite;
          }

          @keyframes type {
            from {
              box-shadow: inset -3px 0px 0px #888;
            }
            to {
              box-shadow: inset -3px 0px 0px transparent;
            }
          }
        `}
      </style>
    </div>
  );
}
