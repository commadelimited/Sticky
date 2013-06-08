# Sticky

A simple, lightweight notification plugin for jQuery.

## Overview

Sticky allows developers to quickly and easily display messages to users via a simple and streamlined notification center. Sticky is unique in that it groups multiple messages together to help keep your beautiful interface clutter-free.

Sticky is only 1.4k for the minified version and 3.1k for the full.

## Installation

Using Sticky is easy.

* Include jQuery, sticky.min.js, and sticky.css
* Send messages!

### Usage

Plain note, default options

`$.sticky('I am a plain text note. Nothing special about me.');`

Plain note, default options, html content

`$.sticky('<b>Greetings</b>. I am an HTML note.');`

Plain note, default options, custom callback function

`$.sticky('I am a plain text note. I'll tell you good job!.', callback);`

Overriding classList and speed

`$.sticky('Upload complete', {classList: 'success', speed: 'slow'});`

Overriding position

`$.sticky('I'm at the bottom! Look at me!, {position: 'bottom-center'});`

Overriding classList with warning class.

`$.sticky('Careful, there be dragons ahead', {classList: 'warning'});`

Overriding classList, making note stay open.

`$.sticky('I give up, it just won't work.', {classList: 'important', autoclose: 0});`

Overriding classList, allowing no duplicates.

`$.sticky('I just wanted you to know', {classList: 'info', allowdupes: false});`


Sticky takes an optional callback function which receives an object containing information about the note just added:

```
$.sticky(note, options, function(response) {
    JSON.stringify(response);
});

var response = {
    'id': uniqID, // Generated ID, a hash of the message contents.
    'duplicate': duplicate, // whether this note was a duplicate
    'displayed': display, // whether the note was displayed
};
```

### Configuration

```
var options = {
    position: 'top-right', // top-left, top-center, top-right, bottom-left, bottom-center, or bottom-right
    speed: 'fast', // animations: fast, slow, or integer
    allowdupes: true, // true or false
    autoclose: 5000,  // delay in milliseconds. Set to 0 to remain open.
    classList: '' // arbitrary list of classes. Suggestions: success, warning, important, or info. Defaults to ''.
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