---
title: First Post
growthState: 'budding'
dateTended: 2021-02-01
datePlanted: 2021-02-01
tags: ['rxjs', 'observables']
---

  

# Reactive Programming

You can't get very far as a front end engineer without knowing how to deal with asynchronous behavior. Before working in Angular, my way of handling anything async-related was limited to callbacks and promises. In Angular, however, I was inevitably introduced to a new development model for asynchronous data streams known as reactive programming. My first hurdle was wrapping my head around this new paradigm in the context of the RxJS library and it's core type, the Observable.

## Definitions

### Observable

**An observable is a function that produces a stream of values**.

By definition, anything "observable" requires an "observer". So it makes sense that the Observable type goes hand it hand with the concept of the Observer. This Observer is responsible for listening or "subscribing" to the values produced by the Observable. Programatically, the **observer is an object with three methods: next, error, and complete**. These methods are responsible for consuming values, consuming errors, and consuming the notification that the Observable has no remaining values to send.

Observer

```js
{
	next(value){
		console.log(value);
	},
	error(err){
		console.error(err);
	},
	complete(){
		console.info('done');
	}
}
```

When an observable is created, the observer is passed as an argument. Let's take a look at the constructor function for the Observable class:

```js
constructor(subscribe: (subscriber: Subscriber) => TeardownLogic) {
	this._subscribe = subscribe;
}
```

Upon initialization of the observable, the observer is passed as an argument and saved as a method to the  
Observable class.

```js
const observable$ = new Observable((observer) => {
	observer.next(1);
	observer.next(2);
});

console.log('before');
observable$.subscribe((val) => {
	console.log(val);
});
console.log('after');

This would output the following:

'before'
1
2
'after'
```
<br />
<hr />

Considering the order of outputs above, it's important to note that observables are not inherently asynchronous.  
The principle difference between functions and observables is that observables can return multiple values over time while functions cannot.

Observables can however return values asynchronously:

```js
const observable$ = new Observable((observer) => {
	observer.next(1);
  	observer.next(2);
 	setTimeout(() => {
		observer.next(3);
	}, 1000);
});

console.log('before');
observable$.subscribe((val) => {
	console.log(val);
});
console.log('after');

This would output the following:

'before'
1
2
'after'
3
```