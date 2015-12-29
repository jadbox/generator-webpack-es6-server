'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');
//var mocha = require('mocha'); // placeholder

describe('webpack-es6-server:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withOptions({ skipInstall: true })
      .withPrompts({
        projectName: 'my-project',
        projectDescription: 'my project description',
        authorName: 'Jonathan Dunlap',
        authorEmail: 'jdunlap@outlook.com',
        license: 'Apache 2.0'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      '.editorconfig',
      '.jshintrc',
      '.jscsrc',
      '.gitignore',
      '.eslintrc',
      'webpack.config.js',
      'dist/my-project.js',
      'src/index.js',
      'README.md'
    ]);
  });

  it('templates metadata in package.json', function () {
    assert.fileContent([
      ['package.json', /"name": "my-project",/],
      ['package.json', /"description": "my project description",/],
      ['package.json', /"author": "Jonathan Dunlap <jdunlap@outlook.com>",/],
      ['package.json', /"license": "Apache 2.0",/],
      ['package.json', /"main": "dist\/my-project\.js",/],
      ['webpack.config.js', /filename: "my-project\.js",/],
      ['README.md', /dist\/my-project.js/]
    ]);
  })
});
