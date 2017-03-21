import React from "react";
import { observer, inject } from "mobx-react";

function Authenticated(Component) {
    return inject("repoStore", "sessionStore")(
        observer(function({sessionStore}) {
            if (sessionStore.authenticated) {
                return <Component/>;
            } else {
                return null;
            }
        })
    );
}

export default Authenticated(
    inject("sessionStore")(
    observer(function({sessionStore}) {
    const currentUser = (window.currentUser = sessionStore.currentUser);
        return (
            <div>
                <h3>User: {currentUser.login}</h3>
                <p>Mail: {currentUser.email}</p>
                <p>Followers: {currentUser.followers}</p>
            </div>
        );
    })
    )
);