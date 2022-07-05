import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonButtons,
    IonContent,
    IonItem,
    IonModal,
    IonIcon,
    IonFooter,
    IonList,
    IonLabel,
    IonNote,
} from '@ionic/react';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { chevronBackOutline, closeOutline } from 'ionicons/icons';
import { InstantSearch } from 'react-instantsearch-hooks-web';
import { history } from 'instantsearch.js/es/lib/routers';
import { simple } from 'instantsearch.js/es/lib/stateMappings';
import '@algolia/autocomplete-theme-classic';
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

import CustomInfiniteHits from '../CustomInfiniteHits';
import CustomRefinementList from '../CustomRefinementList';
import SortFilterButtons from '../SortFilterButtons';
import FILTER_FACETS from '../../mock/filterFacets';
import { VirtualRefinementList } from '../VirtualRefinementList';
import Autocomplete from '../Autocomplete';
import CustomStats from '../CustomStats';

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
    server: {
        apiKey: 'tnSic3TuqlLH6QoPzXragHKPZXSh6AZV', // Be sure to use a Search API Key
        nodes: [
            {
                host: 'tlez1uhkagf3rvi9p-1.a1.typesense.net', // where xxx is the ClusterID of your Typesense Cloud cluster
                port: '443',
                protocol: 'https',
            },
        ],
    },
    // The following parameters are directly passed to Typesense's search API endpoint.
    //  So you can pass any parameters supported by the search endpoint below.
    //  queryBy is required.
    additionalSearchParameters: {
        query_by: 'title,description',
    },
});

const searchClient = typesenseInstantsearchAdapter.searchClient;

const routing = {
    router: history(),
    stateMapping: simple(),
};

const Feed = () => {
    const [selectedFacet, setSelectedFacet] = useState(null);
    const modal = useRef(null);

    const [searchState, setSearchState] = useState(routing.router.read());
    const timerRef = useRef(null);

    useEffect(() => {
        clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            routing.router.write(searchState);
        }, 400);
    }, [searchState]);

    const FilterRoot = () => (
        <>
            <IonHeader translucent={true}>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton
                            color="dark"
                            onClick={() => {
                                modal.current?.dismiss();
                                setSelectedFacet(null);
                            }}
                        >
                            <IonIcon slot="icon-only" icon={closeOutline} />
                        </IonButton>
                    </IonButtons>

                    <IonTitle>Filter</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonList>
                    {FILTER_FACETS.map((filter) => (
                        <IonItem
                            key={filter.value}
                            detail={false}
                            button
                            onClick={() => setSelectedFacet(filter)}
                        >
                            <IonLabel>{filter.title}</IonLabel>

                            <IonNote className="ion-text-capitalize truncate">
                                {searchState?.products?.refinementList?.[filter.value]?.join(', ') ?? 'All'}
                            </IonNote>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </>
    );

    const FilterFacet = () => (
        <>
            <IonHeader translucent={true}>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton color="dark" onClick={() => setSelectedFacet(null)}>
                            <IonIcon slot="icon-only" icon={chevronBackOutline} />
                        </IonButton>
                    </IonButtons>

                    <IonTitle>{selectedFacet.title}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <CustomRefinementList attribute={selectedFacet.value} limit={1000} sortBy={['name']} />
            </IonContent>
        </>
    );

    const ModalFooter = () => (
        <IonFooter className="ion-no-border">
            <IonToolbar>
                <IonButton
                    expand="full"
                    color="dark"
                    className="square-border"
                    onClick={() => {
                        modal.current?.dismiss();
                        setSelectedFacet(null);
                    }}
                >
                    View Items
                </IonButton>
            </IonToolbar>
        </IonFooter>
    );

    return (
        <InstantSearch
            searchClient={searchClient}
            indexName="products"
            searchState={searchState}
            onSearchStateChange={setSearchState}
            routing={routing}
        >
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>New Arrivals</IonTitle>
                    </IonToolbar>

                    <Autocomplete
                        placeholder="Search products"
                        detachedMediaQuery="none"
                        initialState={{
                            query: searchState.query,
                        }}
                        openOnFocus
                        className='ion-padding-start ion-padding-end bg-white'
                    />

                    <div className='w-100% bg-white'>
                        <CustomStats />
                    </div>
                </IonHeader>

                <IonContent className="ion-padding" fullscreen>
                    <SortFilterButtons />

                    <CustomInfiniteHits />

                    {FILTER_FACETS.map((filter) => (
                        <VirtualRefinementList key={filter.value} attribute={filter.value} />
                    ))}

                    <IonModal
                        ref={modal}
                        trigger="open-modal"
                        onWillDismiss={() => setSearchState(routing.router.read())}
                    >
                        {selectedFacet ? FilterFacet() : FilterRoot()}

                        {ModalFooter()}
                    </IonModal>
                </IonContent>
            </IonPage>
        </InstantSearch>
    );
};

export default Feed;
