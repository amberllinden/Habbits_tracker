import React from "react";
import ReactDOM from "react-dom";
import './app/styles/App.css';
import { useRoutes, A } from "hookrouter"
import routes from "./app/routes/Routes";

export function App() {
    const routeResult = useRoutes(routes);

    return (
        <>
        <div className="menu">
            <A  className="menu--item" href="/first_tracker">First Tracker</A>
            <A  className="menu--item" href="/second_tracker">Second Tracker</A>
            <A  className="menu--item" href="/third_tracker">Third Tracker</A>
        </div>
            {routeResult}
        </>
    )
}

export default App;

ReactDOM.render(<App />, document.getElementById("root")); 