define([
    'rcap/js/ui/controls/baseControl', 'rcap/js/ui/controls/properties/textControlProperty',
    'text!rcap/js/ui/controls/child/templates/slider.tpl',
    'ionrangeslider/js/ion.rangeSlider',
    'css!ionrangeslider/css/ion.rangeSlider.css',
    'css!ionrangeslider/css/ion.rangeSlider.skinFlat.css'
], function(BaseControl, TextControlProperty, tpl) {

    'use strict';

    var SliderControl = BaseControl.extend({
        init: function() {
            this._super({
                type: 'slider',
                label: 'Slider',
                icon: 'sort-up',
                controlProperties: [
                    new TextControlProperty({
                        uid: 'label',
                        label: 'Label',
                        defaultValue: 'Label',
                        helpText: 'The label for this control'
                    }),
                    new TextControlProperty({
                        uid: 'variablename',
                        label: 'Variable name',
                        defaultValue: 'variable',
                        helpText: 'The variable associated with this control',
                        isRequired: true
                    }),
                    new TextControlProperty({
                        uid: 'value',
                        label: 'The value for the control',
                        defaultValue: '5',
                        helpText: 'The value',
                        isRequired: true
                    }),
                    new TextControlProperty({
                        uid: 'min',
                        label: 'Minimum',
                        defaultValue: '1',
                        helpText: 'The minimum value',
                        isRequired: true
                    }),
                    new TextControlProperty({
                        uid: 'max',
                        label: 'Maximum',
                        defaultValue: '10',
                        helpText: 'The maximum value',
                        isRequired: true
                    }),
                    new TextControlProperty({
                        uid: 'step',
                        label: 'Increment',
                        defaultValue: '1',
                        helpText: 'The increment size',
                        isRequired: true
                    }),
                ]
            });
        },
        render: function(options) {

            options = options || {};
            options.isInFormBuilder = options.isInFormBuilder || false;

            var template = _.template(tpl);

            return template({
                control: this,
                // to differentiate it from the control that may already exist on the main design surface:
                controlId: options.isInFormBuilder ? this.id + '-formbuilderhosted' : this.id,
                isDesignTime: options.isDesignTime || false
            });
        }
    });

    return SliderControl;

});