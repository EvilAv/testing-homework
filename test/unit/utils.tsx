import React from 'react';

import { render, screen } from '@testing-library/react';
import events from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ExampleApi, CartApi } from '../../src/client/api';
import { addToCart, initStore } from '../../src/client/store';
import { ProductDetails } from '../../src/client/components/ProductDetails';
import { Product, CheckoutFormData } from '../../src/common/types';
import { Store } from 'redux';

// const basename = '/';

// const api = new ExampleApi(basename);
// const cart = new CartApi();
// const store = initStore(api, cart);

export const testProduct: Product = {
    id: 0,
    name: 'Smth',
    price: 666,
    description: 'Lorem ipsum dolor sit amet',
    material: 'obsidian',
    color: 'black'
}

export function addTestItems(store: Store, count: number = 5){
    for (let i = 0; i < count; i++) {
        store.dispatch(addToCart(testProduct));
    }
}

export async function enterCorrectData(inputName: HTMLInputElement, inputPhone: HTMLInputElement, addressInput: HTMLTextAreaElement){
    await events.type(inputName, 'AAAAAAA');
    await events.type(inputPhone, '12312312345');
    await events.type(addressInput, 'away');
    
}

export const testCorrectForm: CheckoutFormData = {
    name: 'aaa',
    phone: '12312312345',
    address: 'void',
}