class App extends React.Component {
    render () {
        return (
            <div>
                <Machine icons = {['x', 'y', 'z']} />
                <Machine icons = {['x', 'y', 'z']} />
                <Machine icons = {['x', 'y', 'z']} />
            </div>
        )
    } 
} 

ReactDOM.render (<App />, document.getElementById('root'))