import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { DatePicker, Button } from 'antd'
import moment from 'moment'

const format = 'YYYY/MM/DD'
class App extends Component {
    render() {
        return (
          <div><DatePicker defaultValue={moment('2015/01/01', format)} />
              <br />
              <Button type="primary">Test</Button>

          </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('main'))