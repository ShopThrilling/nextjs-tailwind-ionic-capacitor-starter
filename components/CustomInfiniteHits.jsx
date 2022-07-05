import { IonButton, IonIcon, IonImg, IonItem, IonNavLink } from '@ionic/react';
import { heartOutline } from 'ionicons/icons';
import { useInfiniteHits } from 'react-instantsearch-hooks-web';
import { useHistory } from 'react-router-dom';
import imgixUtil from '../util/imgixUtil';
import Product from './pages/Product';

const CustomInfiniteHits = (props) => {
	const { hits, isFirstPage, isLastPage, showPrevious, showMore } = useInfiniteHits(props);
	const history = useHistory();

	return (
		<>
			{!isFirstPage && (
				<IonButton
					expand="full"
					color="dark"
					className="mb-4 square-border"
					onClick={() => showPrevious()}
				>
					Show Previous
				</IonButton>
			)}

			<ul className="grid grid-cols-2 gap-2">
				{hits.map((hit) => (
					<li
						className="w-full rounded overflow-hidden p-2 bg-gray-100 relative"
						key={hit.objectID}
						onClick={() => {
							history.push({
								pathname: `/feed/${hit.sku}`,
								state: { product: hit }
							})
						}
						}
					>
						<IonImg
							src={
								hit.images
									? imgixUtil.getImgSrc({
										url: hit.images[0].src,
										ratio: 'square',
										opts: {
											bg: 'f3f4f6',
											fit: 'fill',
										},
									})
									: 'https://s3.amazonaws.com/logos.ecountabl.com/49c44803-4f5d-4d4c-a943-d98ed18254a9-thrilling.png'
							}
							className="w-full"
						/>

						<IonButton
							fill="clear" size="small" className="absolute right-0 bottom-1 text-black">
							<IonIcon icon={heartOutline} size="small" />
						</IonButton>
						<IonNavLink component={Product} />
					</li>
				))}
			</ul>

			{!isLastPage && (
				<IonButton
					expand="full"
					color="dark"
					className="mt-4 square-border"
					onClick={() => showMore()}
				>
					Show More
				</IonButton>
			)}
		</>
	);
};

export default CustomInfiniteHits;
