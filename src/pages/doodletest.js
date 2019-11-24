import React from "react"
import "css-doodle"

class DoodleTest extends React.Component {
  render() {
    return (
      <div style={{ background: "pink" }}>
        Doodle Test
        <css-doodle>
          {`
            :doodle {
              @grid: 18 / 100vmax;
              background: #0a0c27;
            }
            --hue: calc(180 + 1.5 * @row() * @col());
            background: hsl(var(--hue), 50%, 70%);
            margin: -.5px;
            transition: @r(.5s) ease;
            clip-path: polygon(@pick(
              '0 0, 100% 0, 100% 100%',
              '0 0, 100% 0, 0 100%',
              '0 0, 100% 100%, 0 100%',
              '100% 0, 100% 100%, 0 100%'
            ));
          `}
        </css-doodle>
      </div>
    )
  }
}

export default DoodleTest
