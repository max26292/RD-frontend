import { InitialDeclaration } from 'app/containers/InitialDeclaration/Loadable';
import React from 'react';
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom';


export const RouteList = (props: any) => {
    return (
        <Switch>
            <Route exact path='/init-decalre' component={InitialDeclaration} />
            <Redirect from='*' to='/404' />
        </Switch>
    )

}
// export class RouteList<T extends RouteProps = RouteProps> extends React.Component<T, any> {
//     render(){
//         return (
//             <Switch>
//                 <Route exact path='/init-decalre' component={InitialDeclaration} />
//             </Switch>
//         )
//     }
//  }