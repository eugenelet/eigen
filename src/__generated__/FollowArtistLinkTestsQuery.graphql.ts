/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/* @relayHash 07ff4dc419cbdf0c5f7d6cd0bb12b008 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FollowArtistLinkTestsQueryVariables = {};
export type FollowArtistLinkTestsQueryResponse = {
    readonly artist: {
        readonly " $fragmentRefs": FragmentRefs<"FollowArtistLink_artist">;
    } | null;
};
export type FollowArtistLinkTestsQueryRawResponse = {
    readonly artist: ({
        readonly id: string;
        readonly slug: string;
        readonly internalID: string;
        readonly is_followed: boolean | null;
    }) | null;
};
export type FollowArtistLinkTestsQuery = {
    readonly response: FollowArtistLinkTestsQueryResponse;
    readonly variables: FollowArtistLinkTestsQueryVariables;
    readonly rawResponse: FollowArtistLinkTestsQueryRawResponse;
};



/*
query FollowArtistLinkTestsQuery {
  artist(id: "artistID") {
    ...FollowArtistLink_artist
    id
  }
}

fragment FollowArtistLink_artist on Artist {
  id
  slug
  internalID
  is_followed: isFollowed
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "artistID"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FollowArtistLinkTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FollowArtistLink_artist"
          }
        ],
        "storageKey": "artist(id:\"artistID\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FollowArtistLinkTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "internalID",
            "storageKey": null
          },
          {
            "alias": "is_followed",
            "args": null,
            "kind": "ScalarField",
            "name": "isFollowed",
            "storageKey": null
          }
        ],
        "storageKey": "artist(id:\"artistID\")"
      }
    ]
  },
  "params": {
    "id": "07ff4dc419cbdf0c5f7d6cd0bb12b008",
    "metadata": {},
    "name": "FollowArtistLinkTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();
(node as any).hash = '98d40b3b1d0ef9309dd2e799b8e5c7da';
export default node;