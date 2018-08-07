<h1 align="center">
    <a href="https://github.com/vazco">vazco</a>/Universe Update Operators on Document
</h1>

&nbsp;

<h3 align="center">
  -- Abandonware. This package is deprecated! --
</h3>

&nbsp;

Mongo Update operators as a helpers on document

The following modifiers are available for use on any universe document

**$inc, $set, $unset, $addToSet, $pop, $pull, $push**

## Example of use

```
var doc = MyUniverseColl.findOne();
doc.$set(modifierData, options, callback);
```
modifierData - The modifications to apply
options - options normally passed to update method

### Installation
```
$ meteor add vazco:universe-update-operators-on-document
```

### License

<img src="https://vazco.eu/banner.png" align="right">

**Like every package maintained by [Vazco](https://vazco.eu/), Universe Update Operators on Document is [MIT licensed](https://github.com/vazco/uniforms/blob/master/LICENSE).**
