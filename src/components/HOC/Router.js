import React from 'react';
import {Route, Switch} from "react-router-dom";
import Persons from "../containers/Persons/Persons";
import {Information} from "../containers/Information";
import Edit from "../containers/Functions/Edit";
import Add from "../containers/Functions/Add";

export const Router = () => {
    return (
        //Роутинг (Для того, чтобы при кликах на ссылки - страница не перезагружалась)
        //Для каждой страницы - свой роут (свой путь)
        <Switch>
            <Route path={'/'} exact>
                <Persons />
            </Route>
            <Route path={'/information'} >
                <Information />
            </Route>
            <Route path={'/edit/:id'} >
                <Edit />
            </Route>
            <Route path={'/add'} >
                <Add />
            </Route>
        </Switch>
    )
};