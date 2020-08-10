/* tslint:disable */
/* eslint-disable */
/* @relayHash 6fe0c052f6b9c9f3f3a3e18dffbc9be7 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtworksInSeriesRailTestsQueryVariables = {};
export type ArtworksInSeriesRailTestsQueryResponse = {
    readonly artwork: {
        readonly " $fragmentRefs": FragmentRefs<"ArtworksInSeriesRail_artwork">;
    } | null;
};
export type ArtworksInSeriesRailTestsQueryRawResponse = {
    readonly artwork: ({
        readonly artistSeriesConnection: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly slug: string;
                    readonly artworksConnection: ({
                        readonly edges: ReadonlyArray<({
                            readonly node: ({
                                readonly slug: string;
                                readonly internalID: string;
                                readonly href: string | null;
                                readonly artistNames: string | null;
                                readonly image: ({
                                    readonly imageURL: string | null;
                                    readonly aspectRatio: number;
                                }) | null;
                                readonly sale: ({
                                    readonly isAuction: boolean | null;
                                    readonly isClosed: boolean | null;
                                    readonly displayTimelyAt: string | null;
                                    readonly id: string | null;
                                }) | null;
                                readonly saleArtwork: ({
                                    readonly currentBid: ({
                                        readonly display: string | null;
                                    }) | null;
                                    readonly id: string | null;
                                }) | null;
                                readonly saleMessage: string | null;
                                readonly title: string | null;
                                readonly date: string | null;
                                readonly partner: ({
                                    readonly name: string | null;
                                    readonly id: string | null;
                                }) | null;
                                readonly id: string | null;
                            }) | null;
                        }) | null> | null;
                    }) | null;
                }) | null;
            }) | null> | null;
        }) | null;
        readonly id: string | null;
    }) | null;
};
export type ArtworksInSeriesRailTestsQuery = {
    readonly response: ArtworksInSeriesRailTestsQueryResponse;
    readonly variables: ArtworksInSeriesRailTestsQueryVariables;
    readonly rawResponse: ArtworksInSeriesRailTestsQueryRawResponse;
};



/*
query ArtworksInSeriesRailTestsQuery {
  artwork(id: "some-artwork") {
    ...ArtworksInSeriesRail_artwork
    id
  }
}

fragment ArtworksInSeriesRail_artwork on Artwork {
  artistSeriesConnection(first: 1) {
    edges {
      node {
        slug
        artworksConnection(first: 20) {
          edges {
            node {
              slug
              internalID
              href
              artistNames
              image {
                imageURL
                aspectRatio
              }
              sale {
                isAuction
                isClosed
                displayTimelyAt
                id
              }
              saleArtwork {
                currentBid {
                  display
                }
                id
              }
              saleMessage
              title
              date
              partner {
                name
                id
              }
              id
            }
          }
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "some-artwork"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ArtworksInSeriesRailTestsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": "artwork(id:\"some-artwork\")",
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ArtworksInSeriesRail_artwork",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArtworksInSeriesRailTestsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": "artwork(id:\"some-artwork\")",
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "artistSeriesConnection",
            "storageKey": "artistSeriesConnection(first:1)",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 1
              }
            ],
            "concreteType": "ArtistSeriesConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "ArtistSeriesEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ArtistSeries",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "artworksConnection",
                        "storageKey": "artworksConnection(first:20)",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "first",
                            "value": 20
                          }
                        ],
                        "concreteType": "ArtworkConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "ArtworkEdge",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Artwork",
                                "plural": false,
                                "selections": [
                                  (v1/*: any*/),
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "internalID",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "href",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "artistNames",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "image",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "Image",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "imageURL",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "aspectRatio",
                                        "args": null,
                                        "storageKey": null
                                      }
                                    ]
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "sale",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "Sale",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "isAuction",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "isClosed",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "displayTimelyAt",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      (v2/*: any*/)
                                    ]
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "saleArtwork",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "SaleArtwork",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "currentBid",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "SaleArtworkCurrentBid",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "display",
                                            "args": null,
                                            "storageKey": null
                                          }
                                        ]
                                      },
                                      (v2/*: any*/)
                                    ]
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "saleMessage",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "title",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "date",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "partner",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "Partner",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "name",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      (v2/*: any*/)
                                    ]
                                  },
                                  (v2/*: any*/)
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ArtworksInSeriesRailTestsQuery",
    "id": "bfebd0f476ac12eb7a0282ae511cf20a",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = 'b3301f7c86dc8f69c41558912cff2603';
export default node;
