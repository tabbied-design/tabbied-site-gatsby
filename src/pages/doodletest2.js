import React from "react"
import Doodle from "../components/common/Doodle"

class Mixtape extends React.Component {
  render() {
    return (
      <div>
        <h2>Mixtape</h2>
        <style>
          {`
css-doodle {
  --color0:#FFFFFF;
  --color1:#232529;
  --color2:#3E8BFF;
  --color3:#3FFFB2;
  --color4:#3EECFF;
  --color5:#3FFFB2;
  
  /* set custom colors and inject z-index for the specific color to use for association */
  --randomColor: @p(var(--color1), var(--color2), var(--color3), var(--color4), var(--color5));
  --rule: (
    /*Frequency options of 0.2, 0.4, 0.6, 0.8, 1.0 */
    @random(1.0) { 
      background: var(--randomColor);
      -webkit-clip-path: @pick(circle(100% at 0 0), circle(100% at 100% 0), circle(100% at 100% 100%), circle(100% at 0 100%), circle(50% at 50% 50%), circle(25% at 50% 50%), polygon(0 0, 0% 100%, 100% 100%), polygon(100% 0, 0 0, 100% 100%), polygon(100% 0, 0 0, 0 100%), polygon(100% 100%, 100% 0, 0 100%));
      clip-path: @pick(circle(100% at 0 0), circle(100% at 100% 0), circle(100% at 100% 100%), circle(100% at 0 100%), circle(50% at 50% 50%), circle(25% at 50% 50%), polygon(0 0, 0% 100%, 100% 100%), polygon(100% 0, 0 0, 100% 100%), polygon(100% 0, 0 0, 0 100%), polygon(100% 100%, 100% 0, 0 100%));
      overflow:hidden;
      
      /* On or off option for displaying box shadows */
      -webkit-box-shadow:0 0 @pick(0, 40)px rgba(0,0,0,0.2);
      box-shadow:0 0 @pick(0, 40)px rgba(0,0,0,0.2);

      -webkit-transition: ease @rand(200ms, 600ms);
      transition: ease @rand(200ms, 600ms);
    }
    @random(0.2) {
      width:100%;
      height:100%;
      overflow:hidden;
      -webkit-clip-path: @pick(circle(100% at 0 0), circle(100% at 100% 0), circle(100% at 100% 100%), circle(100% at 0 100%));
      clip-path: @pick(circle(100% at 0 0), circle(100% at 100% 0), circle(100% at 100% 100%), circle(100% at 0 100%));
      background: repeating-linear-gradient(
        @pick(45deg, 135deg),
        var(--color0),
        var(--color0) 5%,
        var(--color1) 5%,
        var(--color1) 10%
      );

    }
  );
}
          `}
        </style>
        <css-doodle use="var(--rule)">
          {`
:doodle {
  @grid: 6x4 / 100%;
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
  background: var(--color0);
  overflow:hidden;
}
`}
        </css-doodle>
      </div>
    )
  }
}

export default Mixtape
