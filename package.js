'use strict';

Package.describe({
    name: 'vazco:universe-update-operators-on-document',
    summary: 'Mongo update operators as a helpers on document',
    version: '0.0.1'
});

Package.on_use(function (api) {
    api.versionsFrom('1.0.0');

    api.use([
        'underscore',
        'vazco:universe-core'
    ]);


    api.add_files([
        'UniDocExtension.js'
    ]);
});