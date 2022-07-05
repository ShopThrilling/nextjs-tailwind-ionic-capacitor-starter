import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonButton,
	IonButtons,
	IonContent,
	IonBackButton,
} from '@ionic/react';
// import Image from 'next/image';
import { useLocation } from 'react-router-dom';
import Card from '../../components/ui/Card';

const Product = () => {
	const { state: { product } } = useLocation();

	return (
		<IonPage>
			<IonHeader collapse="condense">
				<IonButtons slot="start">
					<IonBackButton defaultHref="/feed" />
				</IonButtons>
				<IonToolbar>
					<IonTitle>Product</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent className="ion-padding" fullscreen>
				<Card className="my-4 mx-auto">
					{/* <div className="h-72 w-full relative">
						<Image className="rounded-t-xl" objectFit="contain" src={product.images[0]?.src} alt="" layout='fill' />
					</div> */}
					<div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
						<h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">{product.title}</h2>
						<h4 className="font-bold py-0 text-s text-gray-400 dark:text-gray-500 uppercase">{product.brand}</h4>
						<h4 className="font-bold py-0 text-s text-black-400 dark uppercase">${product.price}</h4>
						<p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400">{product.description}</p>
						<div className="flex items-center space-x-4">
							<ul className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">
								<li>Vendor: {product.vendor}</li>
								<li>SKU: {product.id}</li>
								<li>Colors: {product.colors?.join(', ')}</li>
								<li>Materials: {product.materials?.join(', ')}</li>
							</ul>
						</div>
					</div>
				</Card>
			</IonContent>
		</IonPage>
	);
};

export default Product;
