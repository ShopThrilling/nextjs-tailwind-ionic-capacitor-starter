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
} from '@ionic/react'


const products = [
	{
		"createdAt": "2019-11-22T00:29:06Z",
		"price": 45, "title": "70s/80s Coors Lite Bomber Jacket By Celebrity Stars",
		"images": [{
			"graphqlAdminId": "gid://shopify/ProductImage/19079506460825",
			"src": "https://storage.googleapis.com/thrilling-portal.appspot.com/auto-edited-image/product-image__L7FEkP-compressed.png",
			"createdAt": "2022-06-29T01:11:51.825Z"
		}],
		"id": "07IdmnI98Gd8yTbh39HZ",
		"brand": "Celebrity Stars",
		"sku": "TS60"
	},
	{
		"id": "08mulRi3cp9ftm65T66v",
		"createdAt": "2019-05-30T17:30:44Z",
		"price": 120,
		"images": [{
			"currentSource": "unedited", "src": "https://cdn.shopify.com/s/files/1/0118/0132/9723/products/additional_images_laa4upy7t.jpg?v=1573448842",
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
	return (
		<IonPage>
			<IonHeader collapse='condense'>
				<IonToolbar>
					<IonTitle>
						BAG
					</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent>
				<IonList>
					{
						products.map((k, i) => (
							<IonItem key={i}>
								<IonGrid>
									<IonRow>
										<IonCol size='4'>
											<div className='bg-gray-100'>
												<img src={k.images[0].src} className="h-40 w-4/4" />
											</div>
										</IonCol>
										<IonCol size='8'>
											<IonRow>
												<div>
													<p className='font-light font-bold text-neutral-400 text-sm'>${k.price}</p>
												</div>
											</IonRow>
											<IonRow>
												<div>
													<p className='font-serif text-slate-450 text-m my-1'>{k.title}</p>
												</div>
											</IonRow>
											<IonRow>
												<div>
													<p className='font-serif font-bold text-xs my-1'>{k.brand}</p>
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
			</IonContent>
		</IonPage>
	)
}

export default Cart
