import React from 'react';

import { render, screen } from '@testing-library/react';
import events from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ExampleApi, CartApi } from '../../src/client/api';
import { addToCart, clearCart, initStore, checkout, checkoutComplete } from '../../src/client/store';
import { Cart } from '../../src/client/pages/Cart'
import { Form } from '../../src/client/components/Form';
import { addTestItems, enterCorrectData, testCorrectForm, testProduct } from './utils';
import userEvent from '@testing-library/user-event'

const basename = '/';

const api = new ExampleApi(basename);
const cart = new CartApi();
const store = initStore(api, cart);

describe('Действия в корзине',() => {

    it('Данные обрабатываются корректно', async () => {

        addTestItems(store);

        const app = (
            <BrowserRouter basename={basename}>
                <Provider store={store}>
                    <Form onSubmit={() => {}}/>
                </Provider>
            </BrowserRouter>
        );

        const { container } = render(app);
        
        const inputName = container.querySelector('#f-name') as HTMLInputElement;
        const inputPhone = container.querySelector('#f-phone') as HTMLInputElement;
        const inputAddress = container.querySelector('#f-address') as HTMLTextAreaElement;

        await events.type(inputName, 'aaaa');
        await events.type(inputPhone, '12312312345');
        await events.type(inputAddress, 'away');

        const btn = container.getElementsByClassName('Form-Submit')[0];

        await events.click(btn);

        const inputNameClasses = Array.from(inputName.classList);
        const inputPhoneClasses = Array.from(inputPhone.classList);
        const inputAddressClasses = Array.from(inputAddress.classList);

        const res = inputAddressClasses.concat(inputNameClasses).concat(inputPhoneClasses);

        // console.log(res);

        expect(res).not.toContain('is-invalid');
        store.dispatch(clearCart());

    });

    // it('После оформления получаем правильный номер заказа', async () => {

    //     addTestItems(store);
    //     store.dispatch(checkout(testCorrectForm, cart.getState()))
    //     //store.dispatch(checkoutComplete(1));
    //     const app = (
    //         <BrowserRouter basename={basename}>
    //             <Provider store={store}>
    //                 <Cart/>
    //             </Provider>
    //         </BrowserRouter>
    //     );

    //     const { container } = render(app);
    //     console.log(container.outerHTML);

        
    //     console.log(store.getState());

    //     // console.log(res);

    //     //expect(res).not.toContain('is-invalid');

    // });
});
