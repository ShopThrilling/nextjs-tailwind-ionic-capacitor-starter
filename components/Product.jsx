import { useState } from 'react';
import { IonButton, IonIcon, IonImg, IonText } from '@ionic/react';
import { heartOutline, heart } from 'ionicons/icons';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Product = (props) => {
  const { hit } = props;
  const [favorite, setfavorite] = useState(false);
  const history = useHistory();

  const sendFavorites = async (product) => {
    setfavorite(!favorite);
    const userLoggedin = true;

    if (userLoggedin) {
      const data = JSON.stringify({
        attributes: [
          {
            external_id: 'sarah@zzzz.com',
            favorites: [
              {
                id: hit.id,
                date: new Date(),
                title: hit.title,
                sku: hit.sku,
              },
            ],
          },
        ],
      });

      const config = {
        method: 'post',
        url: 'https://rest.iad-05.braze.com/users/track',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 5412080e-83f1-4c4e-8d6a-9ef38d0847dd',
        },
        data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log('add module to prompt user to sign up or log in');
    }
  };

  return (
    <li
      key={hit.objectID}
      className="w-full h-44 rounded overflow-hidden p-2 bg-gray-100 relative"
      onClick={() => {
        history.push({
          pathname: `/feed/${hit.id}`,
          state: { product: hit },
        });
      }}
    >
      <div className="font-semibold truncate">{hit.title}</div>

      <div>{hit.description}</div>

      <div className="ion-text-capitalize">{hit.colors?.join(', ')}</div>
      <div className="ion-text-capitalize">{hit.eras?.join(', ')}</div>
      <div className="ion-text-capitalize">{hit.materials?.join(', ')}</div>

      <IonButton
        fill="clear"
        size="small"
        className="absolute right-0 bottom-1 text-black"
        onClick={(e) => {
          e.stopPropagation();
          sendFavorites(hit);
        }}
      >
        <IonIcon icon={favorite ? heart : heartOutline} size="small" />
      </IonButton>
    </li>
  );
};

export default Product;
