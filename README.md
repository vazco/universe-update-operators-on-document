## Abandonware

# universe-update-operators-on-document
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
