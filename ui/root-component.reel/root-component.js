/**
 * @module ui/root-component.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class RootComponent
 * @extends Component
 */
exports.RootComponent = Component.specialize(/** @lends RootComponent# */ {
    constructor: {
        value: function RootComponent() {
            this.super();
        }
    }
});
