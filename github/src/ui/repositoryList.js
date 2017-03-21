import React from "react";
import { observer, inject } from "mobx-react";
import { PENDING, REJECTED, FULFILLED } from "mobx-utils";
import { Spinner, Button } from "@blueprintjs/core";

function handleClick(){
    console.log('The link was clicked.');
}

export default inject("repoStore", "sessionStore", "viewStore")(
  observer(
    class RepositoryList extends React.Component {
      constructor({ repoStore, sessionStore, viewStore }) {
        super();
        repoStore.fetchRepos();
      }
      renderRepoList() {
        const {sessionStore, repoStore, viewStore} = this.props;

        if (sessionStore.authenticated) {
          const repoDeferred = repoStore.repoDeferred;
          const state = repoDeferred.state;
          switch (state) {
            case PENDING: {
              return <Spinner />;
            }
            case REJECTED: {
              return (
                <div className="pt-non-ideal-state">
                  <div
                    className="pt-non-ideal-state-visual pt-non-ideal-state-icon"
                  >
                    <span className="pt-icon pt-icon-error" />
                  </div> 
                  <h4 className="pt-non-ideal-state-title">Error occured</h4>
                  <div className="pt-non-ideal-state-description">
                    <Button onClick={repoStore.fetchRepos} text="retry"/>
                  </div>
                </div>
              );
            }
            case FULFILLED: {
              const repos = repoDeferred.value;
              // TODO: implement list of repos - check
              const repoItems = repos.map((e) => <li key={e.id}>{e.name}<button onClick={() => viewStore.push(viewStore.routes.issue({repo: e.name}))}>Show Issues</button></li>)
                return (
                    <div>
                        {repoItems}
                    </div>
                );
                break;
            }
            default: {
              console.error("deferred state not supported", state);
            }
          }
        } else {
          return <h1>NOT AUTHENTICATED </h1>;
        }
      }
      render() {
        return (
          <div>
            <h1>Repos</h1>
            {this.renderRepoList()}
          </div>
        );
      }
    }
  )
);
