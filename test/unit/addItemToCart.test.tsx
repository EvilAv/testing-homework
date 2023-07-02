import React from 'react';

import { render, screen } from '@testing-library/react';
import events from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ExampleApi, CartApi } from '../../src/client/api';
import { clearCart, initStore } from '../../src/client/store';
import { ProductDetails } from '../../src/client/components/ProductDetails';
import { testProduct } from './utils';

const basename = '/';

const api = new ExampleApi(basename);
const cart = new CartApi();
const store = initStore(api, cart);

describe('Добавление товара при помощи интерфейса',() => {
    it('После добавления товар появляется в сторе', async () => {

        const app = (
            <BrowserRouter basename={basename}>
                <Provider store={store}>
                    <ProductDetails product={testProduct} />
                </Provider>
            </BrowserRouter>
        );

        const { container } = render(app);

        const btn = container.getElementsByClassName('ProductDetails-AddToCart')[0];

        await events.click(btn);

        const res = store.getState()['cart'];

        expect(res).not.toEqual({});
        store.dispatch(clearCart());
    });

    it('После добавления товар появляется в корзине', async () => {

        const app = (
            <BrowserRouter basename={basename}>
                <Provider store={store}>
                    <ProductDetails product={testProduct} />
                </Provider>
            </BrowserRouter>
        );

        const { container } = render(app);

        const btn = container.getElementsByClassName('ProductDetails-AddToCart')[0];

        await events.click(btn);

        const res = cart.getState();

        expect(res).not.toEqual({});
    });
});
