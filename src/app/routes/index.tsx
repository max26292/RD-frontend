/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { YearStarting } from 'app/containers/YearStarting/Loadable';
import {DataDeclaration} from 'app/containers/DataDeclaration/Loadable';
import { InitialDeclaration } from 'app/containers/InitialDeclaration/Loadable';
import React from 'react';
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import { ListWarehouse } from 'app/containers/ListWarehouse/Loadable';
import { DeclarationListOfAccounts } from 'app/containers/DeclarationListOfAccounts/Loadable';
import { DeclarationListOfWork } from 'app/containers/DeclarationListOfWork/Loadable';
import { DeclarationTypeOfFinancialPaper } from 'app/containers/DeclarationTypeOfFinancialPaper/Loadable';
import { GeneratedVouchers } from 'app/containers/GeneratedVouchers/Loadable';


export const RouteList = (props: any) => {
    return (
        

        <Switch>
            {/* <Route exact path='/init-declare' component={InitialDeclaration} />
            <Redirect from='*' to='/404' /> */}

            <Route exact path='/data-declare' component={DataDeclaration} />

            <Route path='/year-table' component={YearStarting} />
           
{/* Table 1: */}
            <Route exact path='/list-warehouse' component={ListWarehouse} />
         

            <Route exact path='/list-accounts' component={DeclarationListOfAccounts} />
          
            <Route exact path='/list-works' component={DeclarationListOfWork} />
         
           <Route exact path='/list-financialpaper' component={DeclarationTypeOfFinancialPaper} />

{/* Table 2: */}

            <Route exact path='/generated-vouchers' component={GeneratedVouchers} />
        

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