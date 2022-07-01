import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonButtons,
    IonContent,
    IonText,
    IonItem,
    IonModal,
    IonIcon,
    IonFooter,
    IonList,
    IonLabel,
    IonNote
} from '@ionic/react';
import { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import { chevronBackOutline, closeOutline, optionsOutline, swapVerticalOutline } from 'ionicons/icons';
import { InstantSearch, useSearchBox } from 'react-instantsearch-hooks-web';
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';

import qs from 'qs';
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import Notifications from './Notifications';
import CustomInfiniteHits from '../CustomInfiniteHits';
import CustomRefinementList from '../CustomRefinementList';
import SearchBoxWithHistory from '../SearchBoxWithHistory';

import '@algolia/autocomplete-theme-classic';

const FILTER_FACETS = [
    {
        title: 'Division',
        value: 'division',
        selected: [],
    },
    {
        title: 'Size',
        value: 'sizes',
        selected: [],
    },
    {
        title: 'Brand',
        value: 'brand',
        selected: [],
    },
    {
        title: 'Color',
        value: 'colors',
        selected: [],
    },
    {
        title: 'Era',
        value: 'eras',
        selected: [],
    },
    {
        title: 'Price',
        value: 'priceBucket',
        selected: [],
    }
];

export const INSTANT_SEARCH_INDEX_NAME = 'products';
export const INSTANT_SEARCH_QUERY_SUGGESTIONS =
    'instant_search_demo_query_suggestions';
// export const INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES = [
//     'hierarchicalCategories.lvl0',
//     'hierarchicalCategories.lvl1',
// ];

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
    server: {
        apiKey: "tnSic3TuqlLH6QoPzXragHKPZXSh6AZV", // Be sure to use a Search API Key
        nodes: [
            {
                host: 'tlez1uhkagf3rvi9p-1.a1.typesense.net', // where xxx is the ClusterID of your Typesense Cloud cluster
                port: '443',
                protocol: 'https'
            },
        ],
    },
    // The following parameters are directly passed to Typesense's search API endpoint.
    //  So you can pass any parameters supported by the search endpoint below.
    //  queryBy is required.
    additionalSearchParameters: {
        query_by: "title,description",
    },
})

const searchClient = typesenseInstantsearchAdapter.searchClient


function createURL(searchState) {
    return qs.stringify(searchState, { addQueryPrefix: true });
}

function searchStateToUrl({ location }, searchState) {
    if (Object.keys(searchState).length === 0) {
        return '';
    }

    // Remove configure search state from query parameters
    const { configure, ...rest } = searchState;
    return `${location.pathname}${createURL(rest)}`;
}

function urlToSearchState({ search }) {
    return qs.parse(search.slice(1));
}

function VirtualSearchBox(props) {
    useSearchBox(props);
  
    return null;
  }

const Feed = () => {
    const [searchState, setSearchState] = useState(() =>
        urlToSearchState(window.location)
    );
    const timerRef = useRef(null);

    useEffect(() => {
        clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            window.history.pushState(
                searchState,
                null,
                searchStateToUrl({ location: window.location }, searchState)
            );
        }, 400);
    }, [searchState]);

    // const currentCategory = useMemo(
    //     () =>
    //         searchState?.hierarchicalMenu?.[
    //         INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES[0]
    //         ] || '',
    //     [searchState]
    // );

    const onSubmit = useCallback(({ state }) => {
        setSearchState((searchState) => ({
            ...searchState,
            query: state.query,
        }));
    }, []);

    const onReset = useCallback(() => {
        setSearchState((searchState) => ({
            ...searchState,
            query: '',
            // hierarchicalMenu: {
            //     [INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES[0]]: '',
            // },
        }));
    }, []);

    const plugins = useMemo(() => {
        // const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
        //     key: 'RECENT_SEARCHES',
        //     limit: 5,
        //     transformSource({ source }) {
        //         return {
        //             ...source,
        //             onSelect({ item }) {
        //                 setSearchState((searchState) => ({
        //                     ...searchState,
        //                     query: item.label,
        //                     // hierarchicalMenu: {
        //                     //     [INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES[0]]:
        //                     //         item.category || '',
        //                     // },
        //                 }));
        //             },
        //         };
        //     },
        // });

        // return [
        //     recentSearchesPlugin,
        // ];
    }, []);

    const [showNotifications, setShowNotifications] = useState(false);
    const [selectedFacet, setSelectedFacet] = useState(null);

    const modal = useRef(null);

    const FilterRoot = () => (
        <>
            <IonHeader translucent={true}>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonButton color='dark' onClick={() => modal.current?.dismiss()}>
                            <IonIcon slot='icon-only' icon={closeOutline} />
                        </IonButton>
                    </IonButtons>

                    <IonTitle>Filter</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className='ion-padding'>
                <IonList>
                    {FILTER_FACETS.map(filter => (
                        <IonItem
                            key={filter.value}
                            detail={false}
                            button
                            onClick={() => setSelectedFacet(filter)}
                        >
                            <IonLabel>{filter.title}</IonLabel>

                            <IonNote>All</IonNote>
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
                    <IonButtons slot='start'>
                        <IonButton color='dark' onClick={() => setSelectedFacet(null)}>
                            <IonIcon slot='icon-only' icon={chevronBackOutline} />
                        </IonButton>
                    </IonButtons>

                    <IonTitle>{selectedFacet.title}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className='ion-padding'>
                <CustomRefinementList attribute={selectedFacet.value} limit={30} />
            </IonContent>
        </>
    )

    return (
        <InstantSearch
            searchClient={searchClient}
            indexName={INSTANT_SEARCH_INDEX_NAME}
            searchState={searchState}
            onSearchStateChange={setSearchState}
            createURL={createURL}
        >
            <IonPage>
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle>New Arrivals</IonTitle>
                    </IonToolbar>

                    <section className='flex bg-white py-2 divide-x divide-solid border-t border-b'>
                        {['Sort', 'Filter'].map(v => (
                            <IonButton
                                key={v}
                                id={v === 'Filter' && 'open-modal'}
                                fill='clear'
                                className='w-full font-semibold text-black m-0 h-7 rounded-none'
                            >
                                <IonIcon slot='start' icon={v === 'Sort' ? swapVerticalOutline : optionsOutline} size='small' />

                                <IonText>
                                    {v}
                                </IonText>
                            </IonButton>
                        ))}
                    </section>
                    <VirtualSearchBox query={searchState.query} onSubmit={onSubmit} />
                    <SearchBoxWithHistory
                        placeholder="Search products"
                        initialState={{
                            query: searchState.query,
                        }}
                        openOnFocus={true}
                        plugins={plugins}
                        onSubmit={onSubmit}
                        onReset={onReset}
                    />
                </IonHeader>

                <IonContent className='ion-padding' fullscreen>
                    <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />

                    <CustomInfiniteHits />

                    <IonModal ref={modal} trigger='open-modal'>
                        {selectedFacet ? FilterFacet() : FilterRoot()}

                        <IonFooter className='ion-no-border'>
                            <IonToolbar>
                                <IonButton expand='full' color='dark' className='square-border' onClick={() => modal.current?.dismiss()}>
                                    View Items
                                </IonButton>
                            </IonToolbar>
                        </IonFooter>
                    </IonModal>
                </IonContent>
            </IonPage>
        </InstantSearch>
    );
};

export default Feed;
