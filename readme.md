# Sticky

A simple, lightweight notification plugin for jQuery.

## Overview

Sticky allows developers to quickly and easily display messages to users via a simple and streamlined notification center. Sticky is unique in that it groups multiple messages together to prevent cluttering up your beautiful interface.

Sticky is only 2.6k raw, 

## Installation

Using Sticky is easy.

* Include jQuery, sticky.min.js, and sticky.min.css
* Send messages!


## Usage

You can either push a message directly to Sticky:

```
$.sticky('Upload complete');

```

or you can attach Sticky to an existing object;

```
 <div id="commadelimited"><img src="http://api.twitter.com/1/users/profile_image?screen_name=commadelimited" style="height:48px;float:left;" /><p style="margin:0;padding:0;margin-left:60px;font-size:13px;font-style:italic;">Application developer (web, desktop and mobile) + Author + Blogger + Christian + Father + Husband + Music-Lover + Reader + Cook</p></div>
 
$('#commadelimited').sticky();
```