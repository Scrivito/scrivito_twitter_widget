# ScrivitoTwitterWidget

A Scrivito widget that inserts a Twitter stream into a page. You can add a twitter timeline, or a video or a single tweet.

## Installation

Add this line to your application's Gemfile:

    gem 'scrivito_twitter_widget'

Add this line to your application JavaScript manifest:

    //= require scrivito_twitter_widget

## Localization

The following code represents the default localization for English. Copy it to your `en.yml` and change it if necessary:

```yaml
en:
  scrivito_twitter_widget:
    thumbnail:
      title: Twitter
      description: Add tweets to the Page
    details:
      type: Type
      tweet_id: Id for Tweet
      create: Create a new Timline
      no_tweet_id: No id is present. Insert one in details view.
```