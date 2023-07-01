import React from 'react';

import { render, screen } from '@testing-library/react';
import events from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';

import { ExampleApi, CartApi } from '../../src/client/api';
import { initStore, checkout, productsLoad, addToCart } from '../../src/client/store';
import { Product } from '../../src/common/types';
import { ProductDetails } from '../../src/client/components/ProductDetails';

const basename = '/';

const api = new ExampleApi(basename);
const cart = new CartApi();
const store = initStore(api, cart);

describe('Добавление товара',() => {
    it('После добавления товар появляется в корзине', async () => {

        const id = 0, name = 'Smth', price = 666;
        const testProduct = {
            id,
            name,
            price,
            description: 'Lorem ipsum dolor sit amet',
            material: 'obsidian',
            color: 'black'
        }

        // const expectsdResult = {
        //     count: 1,
        //     name,
        //     price,
        // }

        const app = (
            <BrowserRouter basename={basename}>
                <Provider store={store}>
                    <ProductDetails product={testProduct} />
                </Provider>
            </BrowserRouter>
        );

        const { container } = render(app);
        // console.log(store.getState())

        const btn = container.getElementsByClassName('ProductDetails-AddToCart')[0];
        //console.log(btn.outerHTML);

        //console.log(process.env.BUG_ID)

        await events.click(btn);

        //store.dispatch(addToCart(testProduct))
        const res = store.getState()['cart'];

        // screen.logTestingPlaygroundURL();

        // expect(linkToMain.length).toBe(1);
        // const link = linkToMain[0].getAttribute('href');
        // console.log(link);
        // expect(link).toBe(basename);
        expect(res).not.toEqual({});
    });
});
