# REACT TOOLTIPS

Hint.css

## Installation

npm install @shubham_17/tooltips --save

```bash
npm i @shubham_17/tooltips
```

## Usage

```reactjs
import React from "react";
import Tooltip from "./Tooltip";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Tooltip text="I'm in top"
              position="top"
              type="success"
              animation="bounce"
              size="medium">
            <div>
              Hello There.!!
            </div>
          </Tooltip>
      </React.Fragment>
    );
  }
}
```
### Tooltip Options

You can contomize this tooltip with disserent available options.
**Note**
All options are in lower case.

| Options | Types |
| ------ | ------ |
| position | top,right,bottom,left,top-right/left,bottom-right/left |
| size | small,medium,large |
| type | info,error,success,warning |
| animation | bounce (more to come) |

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Note
This is a demo package ;)