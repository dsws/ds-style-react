import React from 'react';
import { Layout, Cell } from '../../Layout';
import Box from '../../Box';
var skinBackgroundRules = [{
  when: function when(skin) {
    return skin === 'standard';
  },
  output: ''
}, {
  when: function when(skin) {
    return skin === 'inverted';
  },
  output: ''
}, {
  when: function when(skin) {
    return skin === 'destructive';
  },
  output: ''
}, {
  when: function when(skin) {
    return skin === 'premium';
  },
  output: ''
}, {
  when: function when(skin) {
    return skin === 'light';
  },
  output: '#162d3d'
}, {
  when: function when(skin) {
    return skin === 'transparent';
  },
  output: '#4eb7f5'
}, {
  when: function when(skin) {
    return skin === 'dark';
  },
  output: '#fef0ba'
}, {
  when: function when(skin) {
    return skin === 'premium-light';
  },
  output: '#162d3d'
}, {
  when: function when() {
    return true;
  },
  output: ''
}];
export var getSkinBackground = function getSkinBackground(skin) {
  return skinBackgroundRules.find(function (_ref) {
    var when = _ref.when;
    return when(skin);
  }).output;
};
export var renderButtonBlock = function renderButtonBlock(_ref2) {
  var Component = _ref2.Component,
      _ref2$props = _ref2.props,
      props = _ref2$props === void 0 ? {} : _ref2$props,
      skins = _ref2.skins;
  return React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#f0f4f7'
    }
  }, React.createElement(Box, {
    width: "400px"
  }, React.createElement(Layout, null, React.createElement(Cell, {
    span: 6
  }, skins.map(function (_ref3, index) {
    var skin = _ref3.skin,
        background = _ref3.background;
    return React.createElement("div", {
      key: index,
      style: {
        background: background,
        margin: '5px 0'
      }
    }, React.createElement(Component, Object.assign({
      children: skin
    }, props, {
      fullWidth: true,
      skin: skin
    })));
  })), React.createElement(Cell, {
    span: 6
  }, skins.map(function (_ref4, index) {
    var skin = _ref4.skin,
        background = _ref4.background;
    return React.createElement("div", {
      key: index,
      style: {
        background: background,
        margin: '5px 0'
      }
    }, React.createElement(Component, Object.assign({
      children: skin
    }, props, {
      fullWidth: true,
      skin: skin,
      disabled: true
    })));
  })))));
};