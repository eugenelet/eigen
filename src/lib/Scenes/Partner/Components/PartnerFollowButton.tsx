import { PartnerFollowButton_partner } from "__generated__/PartnerFollowButton_partner.graphql"
import { PartnerFollowButtonFollowMutation } from "__generated__/PartnerFollowButtonFollowMutation.graphql"
import { Schema, Track, track as _track } from "lib/utils/track"
import { Button, ButtonProps } from "palette"
import React from "react"
import { commitMutation, createFragmentContainer, graphql, RelayProp } from "react-relay"

interface Props {
  partner: PartnerFollowButton_partner
  relay: RelayProp
  size?: ButtonProps["size"]
}

interface State {
  isFollowedChanging: boolean
}

// @ts-expect-error STRICTNESS_MIGRATION --- 🚨 Unsafe legacy code 🚨 Please delete this and fix any type errors if you have time 🙏
const track: Track<Props, State> = _track

@track()
export class PartnerFollowButton extends React.Component<Props, State> {
  state = { isFollowedChanging: false }

  @track({
    action_name: Schema.ActionNames.FollowPartner,
    action_type: Schema.ActionTypes.Tap,
    context_module: Schema.ContextModules.PartnerContext,
  })
  handleFollowPartner() {
    const { partner, relay } = this.props
    const { slug: partnerSlug, profile } = partner
    // We can only follow partners who have a profile, so we can assume if the follow
    // button is rendered, then we do have a profile.
    const { isFollowed: partnerFollowed, internalID: profileID } = profile!

    this.setState(
      {
        isFollowedChanging: true,
      },
      () => {
        commitMutation<PartnerFollowButtonFollowMutation>(relay.environment, {
          onCompleted: () => this.handleShowSuccessfullyUpdated(),
          onError: (e) => console.log("errors", e),
          mutation: graphql`
            mutation PartnerFollowButtonFollowMutation($input: FollowProfileInput!) {
              followProfile(input: $input) {
                profile {
                  id
                  slug
                  internalID
                  isFollowed
                }
              }
            }
          `,
          variables: {
            input: {
              profileID,
              unfollow: partnerFollowed,
            },
          },
          optimisticResponse: {
            followProfile: {
              profile: {
                id: profile!.id,
                internalID: profileID,
                slug: partnerSlug,
                isFollowed: !partnerFollowed,
              },
            },
          },
        })
      }
    )
  }

  handleShowSuccessfullyUpdated() {
    this.setState({
      isFollowedChanging: false,
    })
  }

  render() {
    const { partner } = this.props

    return (
      <Button
        variant={partner.profile?.isFollowed ? "outline" : "fillDark"}
        onPress={this.handleFollowPartner.bind(this)}
        longestText="Following"
        size="small"
        haptic
      >
        {partner.profile?.isFollowed ? "Following" : "Follow"}
      </Button>
    )
  }
}

export const PartnerFollowButtonFragmentContainer = createFragmentContainer(PartnerFollowButton, {
  partner: graphql`
    fragment PartnerFollowButton_partner on Partner {
      internalID
      slug
      profile {
        id
        internalID
        isFollowed
      }
    }
  `,
})
