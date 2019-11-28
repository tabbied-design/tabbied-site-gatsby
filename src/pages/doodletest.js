import React from "react"
import "css-doodle"

const doodleStyle = `
css-doodle#demo-doodle {
  /* Default colors */
  --color0:#FFFFFF;
  --color1:#FFA1C6;
  --color2:#3FFFB2;
  --color3:#3EECFF;
  --color4:#1B4075;
  --color5:#326DC9;

  /* Random color generator variable */
  --randomColor: @p(var(--color1), var(--color2), var(--color3), var(--color4), var(--color5));
  --rule: (
    /*Frequency options of 0.2, 0.4, 0.6, 0.8, 1.0 */	
    @random (0.8) { 
      background-color: var(--randomColor);
      -webkit-clip-path: polygon(@pick(
        '0 0, 101% 0, 101% 101%',
        '0 0, 101% 0, 0 101%',
        '0 0, 101% 101%, 0 101%',
        '101% 0, 101% 101%, 0 101%'
      ));
      clip-path: polygon(@pick(
        '0 0, 101% 0, 101% 101%',
        '0 0, 101% 0, 0 101%',
        '0 0, 101% 101%, 0 101%',
        '101% 0, 101% 101%, 0 101%'
      ));
      -webkit-transition: .2s ease @rand(200ms);
      transition: .2s ease @rand(200ms);
      -webkit-transform: clip-path;
      transform: clip-path;
    }

  );
}
`

class DoodleTest extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <style dangerouslySetInnerHTML={{ __html: doodleStyle }} />
            <css-doodle id="demo-doodle" use="var(--rule)">
              {`
            :doodle {
              @grid: 12x8 / 100%;
              width:320px;
              height:480px;
              overflow:hidden;
              -webkit-box-shadow:0 0 5px #ddd;
              box-shadow:0 0 5px #ddd;
              position:absolute;
              left:25%;
              top:0;
              margin-left:-160px;
              text-align:center;
              box-sizing:border-box
            }
            :container {
              background:var(--color0);
              overflow:hidden;
            }
            `}
            </css-doodle>
          </div>
        </div>
      </div>
    )
  }
}

export default DoodleTest
