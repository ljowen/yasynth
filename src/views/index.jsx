import {React} from 'react';


const App = React.createClass({
    render() {
        return <table className="table">
            <tr><td>1</td></tr>
            <tr><td>1</td></tr>
            <tr><td>1</td></tr>
            <tr><td>1</td></tr>
            <tr><td>1</td></tr>
            <tr><td>1</td></tr>
            <tr><td>1</td></tr>
        </table>
    }
});

ReactDOM.render(<App />, Document.getElementById('app'));