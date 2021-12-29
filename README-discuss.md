[![](https://extiverse.com/extension/davwheat/virtual-authors/card.png)](https://extiverse.com/extension/davwheat/virtual-authors)

# davwheat Virtual Authors

![](https://flarum-badge-api.davwheat.dev/v1/compat-latest/davwheat/virtual-authors)

This is a premium extension, which [you can subscribe to on Extiverse](https://extiverse.com/extension/davwheat/virtual-authors). All plans come with a 14 day free trial so you can see if the extension is a match for you and your forum. Cancel within this period with no questions asked.

If you wish to purchase a lifetime license, please get in touch: david+extiverse@davwheat.dev.

This extension is also compatible with `v17development/flarum-blog`, with some caveats. See the "Integrations" section for info.

## Description

Virtual Authors is a Flarum extension which allows you to specify one or more 'virtual authors' for a discussion, and attribute specific credit to them.

This is useful for a Flarum instance which posts stories created by users, or art projects, where multiple people may need to be attributed credit for a piece of work.

## What are 'Virtual Authors'?

'Virtual Authors' are models you can create to assign credit to people for their contribution to a discussion.

## Usage

You can create and edit Virtual Authors on Flarum admin dashboard:

![](https://u.davwheat.dev/FAYpCmDm.gif)

These virtual authors can then be assigned to discussions through the controls dropdown:

![](https://u.davwheat.dev/JFZITMtv.gif)

From the panel at the top of discussions with Virtual Authors set, you can view all discussion which a specific author has contributed to. This page also contains a discussion count, and the Virtual Author's description:

![](https://u.davwheat.dev/WLUnKnZf.gif)

## Options

> **Show link to all discussions by a virtual author in the 'Authors' box**

This toggles the link from the 'Authors' box at the top of a discussion to the virtual author's page listing their discussions.

> **Show authors in sidebar instead of above first post**

This toggles the location of the 'Authors' pane on discussions. This can be set to the discussion sidebar, or above the first post.

> **Show badge on discussions with Virtual Authors**

This toggles the badge shown on discussions with virtual authors.

![](https://u.davwheat.dev/euHOkRRv.png)

## Integrations

This extension is compatible with the Flarum Blog extension, by v17-development. However, you **must use the patched version** created by myself for extensibility improvements that this extension requires, provided [my pull request](https://github.com/v17development/flarum-blog/pull/110) has not been merged.

This patched version is a drop-in replacement for Flarum Blog. If you have other extensions which modify Flarum Blog, you may encounter issues, however.

This can be done by adding this to your `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/bhasvic/flarum-blog"
    }
  ]
}
```

## Future development

If desired, there is an opportunity to allow this extension to also provide the ability to set virtual authors for individual posts instead of discussions.

I don't require this feature for my use case, but if you'd like to sponsor its development, feel free to get in touch: david+flarum-dev@davwheat.dev.

## Links

- [Discuss](https://discuss.flarum.org/d/29753)
- [Extiverse](https://extiverse.com/extension/davwheat/virtual-authors)
