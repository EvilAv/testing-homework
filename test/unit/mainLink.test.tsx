import React from 'react';

import { render } from '@testing-library/react';
import { Application } from "../../src/client/Application";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ExampleApi, CartApi } from '../../src/client/api';
import { initStore } from '../../src/client/store';

const basename = '/';

const api = new ExampleApi(basename);
const cart = new CartApi();
const store = initStore(api, cart);

describe('Шапка', () => {
    it('Название магазина в шапке ведет на главную страницу', () => {
        const app = (
            <BrowserRouter basename={basename}>
                <Provider store={store}>
                    <Application />
                </Provider>
            </BrowserRouter>
        );

        const { container } = render(app);

        const linkToMain = container.getElementsByClassName('Application-Brand');

        const link = linkToMain[0].getAttribute('href');

        expect(link).toBe(basename);
    });
});
