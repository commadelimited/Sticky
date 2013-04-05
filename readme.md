# Sticky

A simple, lightweight notification plugin for jQuery.

## Overview

Sticky allows developers to quickly and easily display messages to users via a simple and streamlined notification center. Sticky is unique in that it groups multiple messages together to prevent cluttering up your beautiful interface.

Sticky is only 2.6k raw,

## Installation

Using Sticky is easy.

* Include jQuery, sticky.min.js, and sticky.min.css
* Send messages!


### Usage

You can either push a message directly to Sticky:

```
$.sticky('Upload complete');

```

or you can attach Sticky to an existing object;

```
 <div id="commadelimited">
    <img src="http://api.twitter.com/1/users/profile_image?screen_name=commadelimited" style="height:48px;float:left;" />
    <p style="margin:0;padding:0;margin-left:60px;font-size:13px;font-style:italic;">
        Application developer (web, desktop and mobile) + Author + Blogger + Christian + Father + Husband + Music-Lover + Reader + Cook
    </p>
</div>

$('#commadelimited').sticky();
```

Sticky takes an optional callback function which accepts an object containing information about the note just added:

```
$.sticky(note, options, function(response) {
	JSON.stringify(response);
});

var response = {
	'id': uniqID, // Generated ID, an mdg hash of the contents of the note.
	'duplicate': duplicate, // whether this note was a duplicate
	'displayed': display, // whether the note was displayed
};
```

### Configuration

```
var options = {
    'position': 'bottom-right', // top-left, top-right, bottom-left, or bottom-right
    'speed' : 'fast', // animations: fast, slow, or integer
    'allowdupes' : false, // true or false
    'autoclose' : 5000 // integer or false
};
```

## Contributing

You are invited to contribute code and suggestions to this project. The more the merrier.

## Project Info

* Source: https://github.com/commadelimited/Sticky
* Twitter: [http://twitter.com/commadelimited](http://twitter.com/commadelimited)

### 3rd party libraries required:

* jQuery: MIT/GPL license

### Custom bits:

MIT/GPL license