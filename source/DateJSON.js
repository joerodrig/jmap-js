// -------------------------------------------------------------------------- \\
// File: DateJSON.js                                                          \\
// Module: API                                                                \\
// -------------------------------------------------------------------------- \\

'use strict';

( function () {

const toJSON = function ( date ) {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const hour = date.getUTCHours();
    const minute = date.getUTCMinutes();
    const second = date.getUTCSeconds();

    return (
        ( year < 1000 ?
            '0' + ( year < 100 ? '0' + ( year < 10 ? '0' : '' ) : '' ) + year :
            '' + year ) + '-' +
        ( month < 10 ? '0' + month : '' + month ) + '-' +
        ( day < 10 ? '0' + day : '' + day ) + 'T' +
        ( hour < 10 ? '0' + hour : '' + hour ) + ':' +
        ( minute < 10 ? '0' + minute : '' + minute ) + ':' +
        ( second < 10 ? '0' + second : '' + second )
    );
};

const toUTCJSON = function ( date ) {
    return toJSON( date ) + 'Z';
};

const toTimezoneOffsetJSON = function ( date ) {
    var offset = date.getTimezoneOffset();
    return offset ?
        toJSON( new Date( date ).add( -offset, 'minute' ) ) +
            date.format( '%z' ) :
        toUTCJSON( date );
};

// --- Export

Date.prototype.toJSON = function () {
    return toJSON( this );
};

Date.toUTCJSON = toUTCJSON;
Date.toTimezoneOffsetJSON = toTimezoneOffsetJSON;

}() );
