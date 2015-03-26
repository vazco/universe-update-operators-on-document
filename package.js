'use strict';

Package.describe({
    name: 'vazco:universe-update-operators-on-document',
    summary: 'Mongo update operators as a helpers on document',
    version: '1.0.2',
    git: 'https://github.com/vazco/universe-update-operators-on-document.git'
});

Package.on_use(function (api) {
    api.use([
        'underscore@1.0.3',
        'vazco:universe-core@1.5.0'
    ]);


    api.add_files([
        'UniDocExtension.js'
    ]);
});
