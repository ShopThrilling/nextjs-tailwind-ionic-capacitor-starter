import { useState, useEffect } from 'react';

import {
	IonPage,
	IonHeader,
	IonItem,
	IonToolbar,
	IonTitle,
	IonContent,
	IonList,
	IonToggle,
	IonLabel,
	IonCard,
	IonCardHeader,
	IonGrid,
	IonRow,
	IonCol,
	IonImg,
	IonThumbnail,
	IonButton,
	IonIcon,
	IonText,
	IonModal,
	IonButtons,
	IonInput,
	IonItemDivider,
} from '@ionic/react'

import { closeOutline, heartOutline, logoApple, cardOutline, homeOutline } from 'ionicons/icons';
import imgixUtil from '../../../util/imgixUtil';


const products = [
	{
		"createdAt": "2019-11-22T00:29:06Z",
		"price": 45, "title": "90s/00s Looney Toons Sweatshirt By Looney Tunes",
		"images": [{
			"graphqlAdminId": "gid://shopify/ProductImage/19079506460825",
			"src": "https://cdn.shopify.com/s/files/1/0118/0132/9723/products/product-image__Xjr3Rw-compressed.png?v=1651086871",
			"createdAt": "2022-06-29T01:11:51.825Z"
		}],
		"id": "07IdmnI98Gd8yTbh39HZ",
		"brand": "Looney Tunes",
		"sku": "TS60"
	},
	{
		"id": "08mulRi3cp9ftm65T66v",
		"createdAt": "2019-05-30T17:30:44Z",
		"price": 120,
		"images": [{
			"currentSource": "unedited",
			"src": "https://cdn.shopify.com/s/files/1/0118/0132/9723/products/additional_images_laa4upy7t.jpg?v=1573448842",
			"graphqlAdminId": "gid://shopify/ProductImage/8440787271739",
			"createdAt": "2022-06-29T00:26:32.764Z"
		}],
		"brand": "Bon Jour",
		"sku": "TS68",
		"title": "Red Raincoat by Bon Jour"
	},
	{
		"createdAt": "2021-11-30T17:56:01Z",
		"id": "0EuMyUYyQv6QNnD9r0zp",
		"images": [{
			"currentSource": "autoEdited",
			"uneditedSrc": "https://s3-us-west-1.amazonaws.com/app.listperfectly/20210525152912/CI_OyJOzsxCD4-d43761a3-3e98-4fa2-8bd6-a120c7d046b8.jpeg",
			"createdAt": "2022-06-30T01:13:04.910Z",
			"autoEditedSrc": "https://storage.googleapis.com/thrilling-portal.appspot.com/auto-edited-image/CI_OyJOzsxCD4-d43761a3-3e98-4fa2-8bd6-a120c7d046b8.png",
			"src": "https://cdn.shopify.com/s/files/1/0118/0132/9723/products/CI_OyJOzsxCD4-d43761a3-3e98-4fa2-8bd6-a120c7d046b8.png?v=1638294967",
			"graphqlAdminId": "gid://shopify/ProductImage/33155254943897"
		}],
		"sku": "TS378",
		"price": 48.99,
		"title": "Nwt Tahari Cynthia Womens Dress Sz 10 Black White Cap Sleeves Stretch V-Neck by Tahari",
		"brand": "Tahari"
	}
];
const Cart = () => {
	const [shoppingBag, setShoppingBag] = useState(products);
	const [checkoutModal, showCheckoutModal] = useState(false);
	return (
		<IonPage className='bg-black'>
			<IonHeader>
				<IonToolbar>
					<IonTitle>
						BAG
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<section className='flex bg-white py-2 border-t border-b w-screen justify-center'>
				<p className='flex text-xs font-light'>
					3 Items: Total (excluding delivery + sales tax) <span className='font-semibold px-1'>$ 213.99</span>
				</p>
			</section>

			<IonContent>
				<IonList>
					{
						products.map((k, i) => (
							<IonItem key={i}>
								<IonGrid>
									<IonRow>
										<IonCol size='4'>
											<IonImg src={k.images[0]
												? imgixUtil.getImgSrc({
													url: k.images[0].src,
													ratio: 'square',
													opts: {
														bg: 'f3f4f6',
														fit: 'fill',
													},
												})
												: 'https://s3.amazonaws.com/logos.ecountabl.com/49c44803-4f5d-4d4c-a943-d98ed18254a9-thrilling.png'}
												className='w-full'
											/>
										</IonCol>
										<IonCol size='8'>
											<IonRow>
												<div>
													<p className='font-light font-semibold text-neutral-400 text-sm'>${k.price}</p>
												</div>
											</IonRow>
											<IonRow>
												<div>
													<p className='text-slate-450 text-sm my-1'>{k.title}</p>
												</div>
											</IonRow>
											<IonRow>
												<div>
													<p className='font-semibold text-xs my-1'>{k.brand}</p>
												</div>
											</IonRow>
											{/* <IonRow>
												<IonCol size='6'>
													<IonButton expand="full" color="success">Save</IonButton>
												</IonCol>
												<IonCol size='6'>
													<IonButton expand="full" color="danger">Delete</IonButton>
												</IonCol>
											</IonRow> */}
										</IonCol>
									</IonRow>
								</IonGrid>
							</IonItem>
						))
					}
				</IonList>

				{/** Start of the checkout modal */}
				<IonModal isOpen={checkoutModal} className='h-full'>
					<IonHeader>
						<IonToolbar>
							<IonButtons slot="primary">
								<IonButton onClick={() => showCheckoutModal(false)}>
									<IonIcon slot='icon-only' icon={closeOutline} size='small' color='dark' />
								</IonButton>
							</IonButtons>
							<IonTitle>
								Checkout
							</IonTitle>
						</IonToolbar>
					</IonHeader>
					<IonContent className='my-1'>
						<div className='bg-gray-100'>
							<section className='flex-col bg-white py-2 px-3 border-b w-screen my-3'>
								<p className='text-2xl py-4 font-semibold'>Delivery Address</p>
								<div className='content-center'>
									<span>
										<IonIcon icon={homeOutline} size="small" className='pr-1' />
										<span className='font-semibold text-lg'>Postal Address</span>
									</span>
								</div>
								<div>
									<p className='w-3/4 font-light'>
										Justin Jackson
										<br />
										123 Thrilling Ave
										<br />
										Washington, DC
										<br />
										20002
										<br />
										United States
										<br />
										(123) 456-7890
									</p>
								</div>
							</section>

							<section className='flex-col bg-white py-2 px-3 border-b border-t w-screen my-3'>
								<p className='text-2xl py-4 font-semibold'>Delivery Options</p>
								<div className='mb-5'>
									<input id="standard" type="radio" />
									<label htmlFor="standard">
										<span><span className='font-semibold ml-3'>$4.99</span> Standard Shipping</span>
									</label>
									<p className='ml-7 font-light'>
										Delivered on or before Monday, 10th
									</p>
								</div>
								<div className='mb-5'>
									<input id="express" type="radio" />
									<label htmlFor="express">
										<span><span className='font-semibold ml-3'>FREE</span> Express Delivery</span>
									</label>
									<p className='ml-7'>
										Delivered on or before Monday, 10th
									</p>
								</div>
								<div className='mb-5'>
									<input id="nextday" type="radio" />
									<label htmlFor="nextday">
										<span><span className='font-semibold ml-3'>$7.99</span> Next-Day Delivery</span>
									</label>
									<p className='ml-7'>
										Delivered on or before Monday, 10th
									</p>
								</div>
							</section>

							<section className='flex-col bg-white py-2 px-3 border-b border-t w-screen my-3'>
								<p className='text-2xl py-4 font-semibold'>Payment</p>
								<IonList>
									<IonItem>
										<IonLabel position='stacked'> Card Number </IonLabel>
										<IonInput> <IonIcon icon={cardOutline} />4147123456789123</IonInput>
									</IonItem>
									<IonItem>
										<IonLabel position='stacked'> Expiry Date </IonLabel>
										<IonInput>01/23</IonInput>
									</IonItem>
									<IonItem>
										<IonLabel position='stacked'> Name on Card </IonLabel>
										<IonInput>Justin Jackson</IonInput>
									</IonItem>
									<IonItem>
										<IonLabel position='stacked'> CVV </IonLabel>
										<IonInput>123</IonInput>
									</IonItem>
								</IonList>
							</section>

							<section className='flex-col pt-2 pb-5 px-3 w-screen mt-5'>
								<div className='flex justify-between'>
									<span>Sub-total</span>
									<span>$ 213.99</span>
								</div>
								<div className='flex justify-between'>
									<span>Delivery</span>
									<span>FREE</span>
								</div>
								<div className='flex justify-between'>
									<span>Sales tax</span>
									<span>$ 15.16</span>
								</div>
								<div className='flex justify-between'>
									<span className='font-semibold'>Total to pay</span>
									<span className='font-semibold'>$ 229.15</span>
								</div>
								<div>
									<IonButton className='w-full font-semibold text-black my-5 h-14 rounded-none' color='success'>
										<IonText>
											Place Order
										</IonText>
									</IonButton>
								</div>
								<div>
									<p className='mt-2 font-light text-xs'>
										By placing your order you agree to our terms and conditions, privacy, and returns policies and consent to some of your data being stored by Thrilling which may be used to make future shopping experiences better for you.
									</p>
								</div>
							</section>
						</div>
					</IonContent>

				</IonModal>
				{/** End of the checkout modal */}

			</IonContent>

			<section className='flex bg-white py-2 divide-x divide-solid border-t border-b'>
				{['Checkout', 'Apple Pay'].map(v => (
					<IonButton
						key={v}
						id={v}
						fill='clear'
						className='w-full font-semibold text-black m-0 h-7 rounded-none'
						onClick={(e) => {
							if (v === 'Checkout') {
								return showCheckoutModal(true);
							} else {
								return console.log('test')
							}
						}}
					>
						<IonIcon slot='start' icon={v === 'Checkout' ? cardOutline : logoApple} size='small' />

						<IonText>
							{v}
						</IonText>
					</IonButton>
				))}
			</section>
		</IonPage>
	)
}

export default Cart
