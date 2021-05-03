# Button Reaxio

<p align="center">
  <img src="https://cldup.com/K3-R0bY2T8.gif"/>
</p>
<p align="center">
  <a title="Build Status" href="https://travis-ci.org/carrot/share-button">
    <img src="http://img.shields.io/travis/carrot/share-button.svg?style=flat-square"/>
  </a>
</p>

# An Introduction

React component, easy, simple, small and improved

## Why Should You Use This?

Many of the components for Reactjs are in a single installation, not only the component you need and in many cases very heavy, but this is ideal for:

1. Quick and easy loading
2. They don't inject extra javascript and DOM elements into your page, making it slower.
3. Easy to customize enough to adapt to the design of your site.
4. Reaxion Button, takes up very little space, specific and simple for your project.
5. It does not load any iframes or additional javascript.
6. It can be customized in any way.

## 📦 Install

`npm i @reaxio/button`

## 🔨 Usage

```jsx
import Button from "@reaxio/button";

const onClickActiveFrom = () => {
	setregisterFind(null);
	setstateActiveFrom(!stateActiveForm);
};

const App = () => (
	<Button typeButton="primary" onClick={onClickActiveFrom}>
		Press here
	</Button>
);
```

## ✨ API

| Property   | Description                                                                                                | Type    | Default |
| :--------- | :--------------------------------------------------------------------------------------------------------- | :------ | :------ |
| ref        | Redirect url of link button                                                                                | string  |         |
| className  | Like the target attribute of the class, it works when the css, width, height,size ... properties are specified. | string  |
| disabled   | Disabled state of button                                                                                   | boolean | false   |
| typeButton | Can be set to <span style="background: #01579b;color: white; padding:3px">primary</span> , <span style="  background: #e0e0e0;color: black; padding:3px">second</span>  or <span style="  background: #d71e1e;color: white; padding:3px">alert</span>                                                                         | string  | primary |
|onClick|Set the handler to handle click event|```jsx()=>{}```||



---

## 🔺Examples

Look at our [Button example](https://codesandbox.io/s/stoic-clarke-5qfgd?file=/src/App.js)
 in CodeSandox, easy, simple and fast !!!

Thanks for using it.
😃 👊🏼
