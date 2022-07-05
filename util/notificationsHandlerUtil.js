import { Dialog } from '@capacitor/dialog';
import { useHistory } from 'react-router-dom';

const DEFAULT_PRODUCT = {
	"brand": "Vintage",
	"category": "outerwear",
	"collections": [
		"clothing",
		"outerwear",
		"all",
		"black-book-vintage",
		"size-small",
		"size-medium",
		"basic-products",
		"gift-wrap-available",
		"tax-clothing",
		"debug-recent-self-uploaded-items",
		"coats",
		"back-to-black",
		"new-arrivals",
		"statement-coats",
		"nj-tax-exemption"
	],
	"colors": [
		"black"
	],
	"condition": null,
	"conditionCode": "used",
	"createdAt": "2021-10-25T23:05:05Z",
	"description": "Stunning Jet Black Wool Coat with an incredibly Dramatic Black Fox Faux Fur Shawl Statement Collar! 3/4 Glove Length Sleeves, Clean and Elegant Lines, Fastens with a Hook and Eye Closure at the base of the Fur to form a deep V. Fully Lined in Black Satin. In Excellent Condition. Some of the photographs appear as if the ends of the fur are gray. It is solid Black in color. Shoulder to Shoulder: 15\", Sleeve Length: 21\", Bust: 36\", Waist: Free, Hips: Free, Total Garment Length: 39 1/2\"",
	"division": "women’s",
	"eras": [],
	"id": "YknmSkJgkbuiEp6txL3C",
	"images": [
		{
			"autoEditedSrc": "https://storage.googleapis.com/thrilling-portal.appspot.com/auto-edited-image/product-image__4chUfC.png",
			"createdAt": "2022-07-04T22:59:10.830Z",
			"currentSource": "autoEdited",
			"graphqlAdminId": "gid://shopify/ProductImage/32717416661145",
			"src": "https://cdn.shopify.com/s/files/1/0118/0132/9723/products/product-image__4chUfC.png?v=1656975547",
			"uneditedSrc": "https://storage.googleapis.com/thrilling-portal.appspot.com/product-image__4chUfC.jpeg"
		},
		{
			"autoEditedSrc": "https://storage.googleapis.com/thrilling-portal.appspot.com/auto-edited-image/product-image__jchTTP.png",
			"createdAt": "2022-07-04T22:59:10.830Z",
			"currentSource": "autoEdited",
			"graphqlAdminId": "gid://shopify/ProductImage/32717416300697",
			"src": "https://cdn.shopify.com/s/files/1/0118/0132/9723/products/product-image__jchTTP.png?v=1656975547",
			"uneditedSrc": "https://storage.googleapis.com/thrilling-portal.appspot.com/product-image__jchTTP.jpeg"
		},
		{
			"createdAt": "2022-07-04T22:59:10.830Z",
			"currentSource": "unedited",
			"graphqlAdminId": "gid://shopify/ProductImage/32717417119897",
			"src": "https://cdn.shopify.com/s/files/1/0118/0132/9723/products/product-image__G8MUFj.jpg?v=1656975547",
			"uneditedSrc": "https://storage.googleapis.com/thrilling-portal.appspot.com/product-image__G8MUFj.jpeg"
		},
		{
			"createdAt": "2022-07-04T22:59:10.830Z",
			"currentSource": "unedited",
			"graphqlAdminId": "gid://shopify/ProductImage/32717416497305",
			"src": "https://cdn.shopify.com/s/files/1/0118/0132/9723/products/product-image__bFhP3j.jpg?v=1656975547",
			"uneditedSrc": "https://storage.googleapis.com/thrilling-portal.appspot.com/product-image__bFhP3j.jpeg"
		},
		{
			"createdAt": "2022-07-04T22:59:10.830Z",
			"currentSource": "unedited",
			"graphqlAdminId": "gid://shopify/ProductImage/32717416333465",
			"src": "https://cdn.shopify.com/s/files/1/0118/0132/9723/products/product-image__pGhXHN.jpg?v=1656975547",
			"uneditedSrc": "https://storage.googleapis.com/thrilling-portal.appspot.com/product-image__pGhXHN.jpeg"
		},
		{
			"createdAt": "2022-07-04T22:59:10.830Z",
			"currentSource": "unedited",
			"graphqlAdminId": "gid://shopify/ProductImage/32717417087129",
			"src": "https://cdn.shopify.com/s/files/1/0118/0132/9723/products/product-image__3QxKkn.jpg?v=1656975547",
			"uneditedSrc": "https://storage.googleapis.com/thrilling-portal.appspot.com/product-image__3QxKkn.jpeg"
		},
		{
			"createdAt": "2022-07-04T22:59:10.830Z",
			"currentSource": "unedited",
			"graphqlAdminId": "gid://shopify/ProductImage/32717416464537",
			"src": "https://cdn.shopify.com/s/files/1/0118/0132/9723/products/product-image__fNXGkt.jpg?v=1656975547",
			"uneditedSrc": "https://storage.googleapis.com/thrilling-portal.appspot.com/product-image__fNXGkt.jpeg"
		},
		{
			"createdAt": "2022-07-04T22:59:10.830Z",
			"currentSource": "unedited",
			"graphqlAdminId": "gid://shopify/ProductImage/32717416267929",
			"src": "https://cdn.shopify.com/s/files/1/0118/0132/9723/products/product-image__aANjxP.jpg?v=1656975547",
			"uneditedSrc": "https://storage.googleapis.com/thrilling-portal.appspot.com/product-image__aANjxP.jpeg"
		}
	],
	"inventory": 1,
	"materials": [
		"wool"
	],
	"measurements": {},
	"price": 195,
	"priceBucket": "$100 - $250",
	"size": "M (6 - 8)",
	"sizes": [
		"M (6 - 8)"
	],
	"sku": "BBV512",
	"subcategory": "coat",
	"taxonomicCollection": "coat",
	"title": "Vintage Lustrous Black Faux Fox Collared Wool Coat",
	"totalInventory": 1,
	"vendor": "black-book-vintage",
	"objectID": "YknmSkJgkbuiEp6txL3C",
	"_snippetResult": {
		"brand": {
			"value": "Vintage",
			"matchLevel": "none",
			"matchedWords": []
		},
		"category": {
			"value": "outerwear",
			"matchLevel": "none",
			"matchedWords": []
		},
		"collections": [
			{
				"value": "clothing",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "outerwear",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "all",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "black-book-vintage",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "size-small",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "size-medium",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "basic-products",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "gift-wrap-available",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "tax-clothing",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "debug-recent-self-uploaded-items",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "coats",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "back-to-black",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "new-arrivals",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "statement-coats",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "nj-tax-exemption",
				"matchLevel": "none",
				"matchedWords": []
			}
		],
		"colors": [
			{
				"value": "black",
				"matchLevel": "none",
				"matchedWords": []
			}
		],
		"condition": {
			"value": "null",
			"matchLevel": "none",
			"matchedWords": []
		},
		"conditionCode": {
			"value": "used",
			"matchLevel": "none",
			"matchedWords": []
		},
		"createdAt": {
			"value": "2021-10-25T23:05:05Z",
			"matchLevel": "none",
			"matchedWords": []
		},
		"description": {
			"value": "Stunning Jet Black Wool Coat with an incredibly Dramatic Black Fox Faux Fur Shawl Statement Collar! 3/4 Glove Length Sleeves, Clean and Elegant Lines, Fastens with a Hook and Eye Closure at the base of the Fur to form a deep V. Fully Lined in Black Satin. In Excellent Condition. Some of the photographs appear as if the ends of the fur are gray. It is solid Black in color. Shoulder to Shoulder: 15&quot;, Sleeve Length: 21&quot;, Bust: 36&quot;, Waist: Free, Hips: Free, Total Garment Length: 39 1/2&quot;",
			"matchLevel": "none",
			"matchedWords": []
		},
		"division": {
			"value": "women’s",
			"matchLevel": "none",
			"matchedWords": []
		},
		"eras": [],
		"id": {
			"value": "YknmSkJgkbuiEp6txL3C",
			"matchLevel": "none",
			"matchedWords": []
		},
		"images": [
			{
				"value": "[object Object]",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "[object Object]",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "[object Object]",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "[object Object]",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "[object Object]",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "[object Object]",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "[object Object]",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "[object Object]",
				"matchLevel": "none",
				"matchedWords": []
			}
		],
		"inventory": {
			"value": "1",
			"matchLevel": "none",
			"matchedWords": []
		},
		"materials": [
			{
				"value": "wool",
				"matchLevel": "none",
				"matchedWords": []
			}
		],
		"measurements": {
			"value": "[object Object]",
			"matchLevel": "none",
			"matchedWords": []
		},
		"price": {
			"value": "195",
			"matchLevel": "none",
			"matchedWords": []
		},
		"priceBucket": {
			"value": "$100 - $250",
			"matchLevel": "none",
			"matchedWords": []
		},
		"size": {
			"value": "M (6 - 8)",
			"matchLevel": "none",
			"matchedWords": []
		},
		"sizes": [
			{
				"value": "M (6 - 8)",
				"matchLevel": "none",
				"matchedWords": []
			}
		],
		"sku": {
			"value": "BBV512",
			"matchLevel": "none",
			"matchedWords": []
		},
		"subcategory": {
			"value": "coat",
			"matchLevel": "none",
			"matchedWords": []
		},
		"taxonomicCollection": {
			"value": "coat",
			"matchLevel": "none",
			"matchedWords": []
		},
		"title": {
			"value": "Vintage Lustrous Black Faux Fox Collared Wool Coat",
			"matchLevel": "none",
			"matchedWords": []
		},
		"totalInventory": {
			"value": "1",
			"matchLevel": "none",
			"matchedWords": []
		},
		"vendor": {
			"value": "black-book-vintage",
			"matchLevel": "none",
			"matchedWords": []
		}
	},
	"_highlightResult": {
		"brand": {
			"value": "Vintage",
			"matchLevel": "none",
			"matchedWords": []
		},
		"category": {
			"value": "outerwear",
			"matchLevel": "none",
			"matchedWords": []
		},
		"collections": [
			{
				"value": "clothing",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "outerwear",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "all",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "black-book-vintage",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "size-small",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "size-medium",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "basic-products",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "gift-wrap-available",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "tax-clothing",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "debug-recent-self-uploaded-items",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "coats",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "back-to-black",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "new-arrivals",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "statement-coats",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "nj-tax-exemption",
				"matchLevel": "none",
				"matchedWords": []
			}
		],
		"colors": [
			{
				"value": "black",
				"matchLevel": "none",
				"matchedWords": []
			}
		],
		"condition": {
			"value": "null",
			"matchLevel": "none",
			"matchedWords": []
		},
		"conditionCode": {
			"value": "used",
			"matchLevel": "none",
			"matchedWords": []
		},
		"createdAt": {
			"value": "2021-10-25T23:05:05Z",
			"matchLevel": "none",
			"matchedWords": []
		},
		"description": {
			"value": "Stunning Jet Black Wool Coat with an incredibly Dramatic Black Fox Faux Fur Shawl Statement Collar! 3/4 Glove Length Sleeves, Clean and Elegant Lines, Fastens with a Hook and Eye Closure at the base of the Fur to form a deep V. Fully Lined in Black Satin. In Excellent Condition. Some of the photographs appear as if the ends of the fur are gray. It is solid Black in color. Shoulder to Shoulder: 15&quot;, Sleeve Length: 21&quot;, Bust: 36&quot;, Waist: Free, Hips: Free, Total Garment Length: 39 1/2&quot;",
			"matchLevel": "none",
			"matchedWords": []
		},
		"division": {
			"value": "women’s",
			"matchLevel": "none",
			"matchedWords": []
		},
		"eras": [],
		"id": {
			"value": "YknmSkJgkbuiEp6txL3C",
			"matchLevel": "none",
			"matchedWords": []
		},
		"images": [
			{
				"value": "[object Object]",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "[object Object]",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "[object Object]",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "[object Object]",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "[object Object]",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "[object Object]",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "[object Object]",
				"matchLevel": "none",
				"matchedWords": []
			},
			{
				"value": "[object Object]",
				"matchLevel": "none",
				"matchedWords": []
			}
		],
		"inventory": {
			"value": "1",
			"matchLevel": "none",
			"matchedWords": []
		},
		"materials": [
			{
				"value": "wool",
				"matchLevel": "none",
				"matchedWords": []
			}
		],
		"measurements": {
			"value": "[object Object]",
			"matchLevel": "none",
			"matchedWords": []
		},
		"price": {
			"value": "195",
			"matchLevel": "none",
			"matchedWords": []
		},
		"priceBucket": {
			"value": "$100 - $250",
			"matchLevel": "none",
			"matchedWords": []
		},
		"size": {
			"value": "M (6 - 8)",
			"matchLevel": "none",
			"matchedWords": []
		},
		"sizes": [
			{
				"value": "M (6 - 8)",
				"matchLevel": "none",
				"matchedWords": []
			}
		],
		"sku": {
			"value": "BBV512",
			"matchLevel": "none",
			"matchedWords": []
		},
		"subcategory": {
			"value": "coat",
			"matchLevel": "none",
			"matchedWords": []
		},
		"taxonomicCollection": {
			"value": "coat",
			"matchLevel": "none",
			"matchedWords": []
		},
		"title": {
			"value": "Vintage Lustrous Black Faux Fox Collared Wool Coat",
			"matchLevel": "none",
			"matchedWords": []
		},
		"totalInventory": {
			"value": "1",
			"matchLevel": "none",
			"matchedWords": []
		},
		"vendor": {
			"value": "black-book-vintage",
			"matchLevel": "none",
			"matchedWords": []
		}
	},
	"text_match": 100,
	"__position": 5
};

export default async function notificationHandler(notification) {
	const history = useHistory();

	// type of notification is ActionPerformed
	switch (notification.notification.data.campaign_id) {
		case "30OFF": {
			await Dialog.alert({
				title: '30% off!',
				message: 'Your 30% off coupon is ready!',
			})

			break;
		}

		case "Favorite": {
			history.push({
				pathname: `/feed/fav`,
				state: { product: DEFAULT_PRODUCT }
			})

			break;
		}

		default:
			console.log('No campaign id');
	}
}