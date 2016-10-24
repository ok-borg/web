/**
 * Component Generator
 */

const fs = require('fs');
const componentsDir = fs.readdirSync('app/Shared');

module.exports = {
    description: 'Add a new shared component',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Login',
        validate: function (value) {
            if ((/.+/).test(value)) {
                return (componentsDir.indexOf(value) >= 0) ? 'A shared component with this name already exists' : true;
            }

            return 'The name is required';
        }
    }/*, {
        type: 'confirm',
        name: 'wantActionsAndReducer',
        default: true,
        message: 'Do you want an actions/reducer tupel for this component?'
    }*/],
    actions: [
        {
            type: 'add',
            path: '../app/Shared/{{properCase name}}/Component.tsx',
            templateFile: './component/index.tsx.hbs'
        }
    ]
};