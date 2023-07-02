// import React from 'react';

// import { render, screen } from '@testing-library/react';
// import events from "@testing-library/user-event";
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

// import { ExampleApi, CartApi } from '../../src/client/api';
// import { addToCart, clearCart, initStore } from '../../src/client/store';
// import { Cart } from '../../src/client/pages/Cart'
// import { addTestItems, enterCorrectData, testProduct } from './utils';
// import userEvent from '@testing-library/user-event'

// const basename = '/';

// const api = new ExampleApi(basename);
// const cart = new CartApi();
// const store = initStore(api, cart);

// describe('Добавление товара при помощи интерфейса 78',() => {

//     it('После добавления товар появляется в корзине', async () => {

//         addTestItems(store);
//         const app = (
//             <BrowserRouter basename={basename}>
//                 <Provider store={store}>
//                     <Cart/>
//                 </Provider>
//             </BrowserRouter>
//         );

//         const { container } = render(app);
        
//         const inputName = container.querySelector('#f-name') as HTMLInputElement;
//         const inputPhone = container.querySelector('#f-phone') as HTMLInputElement;
//         const inputAddress = container.querySelector('#f-address') as HTMLTextAreaElement;

//         await events.type(inputName, 'AAAAAAA');
//         await events.type(inputPhone, '12312312345');
//         await events.type(inputAddress, 'away');

//         const btn = container.getElementsByClassName('Form-Submit')[0];
//         // console.log(btn.outerHTML);
//         //await events.click(btn);
//         //console.log(container.outerHTML);

//         //console.log(store.getState())

//         // const btn = container.getElementsByClassName('ProductDetails-AddToCart')[0];
//         // //console.log(btn.outerHTML);

//         // //console.log(process.env.BUG_ID)

//         // await events.click(btn);

//         // // store.dispatch(addToCart(testProduct))
//         // // store.dispatch(addToCart(testProduct))
//         // // store.dispatch(addToCart(testProduct))
//         // const res = cart.getState();
//         // 
//         // //addTestItems();
//         // console.log(store.getState())

//        // screen.logTestingPlaygroundURL();

//         // // expect(linkToMain.length).toBe(1);
//         // // const link = linkToMain[0].getAttribute('href');
//         // // console.log(link);
//         // // expect(link).toBe(basename);
//         // expect(res).not.toEqual({});
//     });
// });
