webpackHotUpdate("main",{

/***/ "./src/client/Components/Partials/Header.js":
/*!**************************************************!*\
  !*** ./src/client/Components/Partials/Header.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Container = __webpack_require__(/*! ./Container */ "./src/client/Components/Partials/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Header = function Header() {
    return _react2['default'].createElement(
        'header',
        null,
        _react2['default'].createElement(
            'nav',
            { className: 'navbar navbar-expand-lg navbar-dark bg-default' },
            _react2['default'].createElement(
                _Container2['default'],
                null,
                _react2['default'].createElement(
                    'a',
                    { className: 'navbar-brand', href: '#' },
                    'Logo'
                ),
                _react2['default'].createElement(
                    'button',
                    {
                        className: 'navbar-toggler',
                        type: 'button',
                        'data-toggle': 'collapse',
                        'data-target': '#navbarSupportedContent',
                        'aria-controls': 'navbarSupportedContent',
                        'aria-expanded': 'false',
                        'aria-label': 'Toggle navigation'
                    },
                    _react2['default'].createElement('span', { className: 'navbar-toggler-icon' })
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'collapse navbar-collapse', id: 'navbarSupportedContent' },
                    _react2['default'].createElement(
                        'ul',
                        { className: 'navbar-nav ml-auto' },
                        _react2['default'].createElement(
                            'li',
                            { className: 'nav-item active' },
                            _react2['default'].createElement(
                                'a',
                                { className: 'nav-link', href: '#' },
                                'Home ',
                                _react2['default'].createElement(
                                    'span',
                                    { className: 'sr-only' },
                                    '(current)'
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            { className: 'nav-item' },
                            _react2['default'].createElement(
                                'a',
                                { className: 'nav-link', href: '#' },
                                'Notice ',
                                _react2['default'].createElement(
                                    'span',
                                    { className: 'sr-only' },
                                    '(current)'
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            { className: 'nav-item ' },
                            _react2['default'].createElement(
                                'a',
                                { className: 'nav-link', href: '#' },
                                'Blog ',
                                _react2['default'].createElement(
                                    'span',
                                    { className: 'sr-only' },
                                    '(current)'
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            { className: 'nav-item' },
                            _react2['default'].createElement(
                                'a',
                                { className: 'nav-link', href: '#' },
                                'Events ',
                                _react2['default'].createElement(
                                    'span',
                                    { className: 'sr-only' },
                                    '(current)'
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            { className: 'nav-item' },
                            _react2['default'].createElement(
                                'a',
                                { className: 'nav-link', href: '#' },
                                'Gallery ',
                                _react2['default'].createElement(
                                    'span',
                                    { className: 'sr-only' },
                                    '(current)'
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            { className: 'nav-item' },
                            _react2['default'].createElement(
                                'a',
                                { className: 'nav-link', href: '#' },
                                'Newsfeed ',
                                _react2['default'].createElement(
                                    'span',
                                    { className: 'sr-only' },
                                    '(current)'
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            { className: 'nav-item' },
                            _react2['default'].createElement(
                                'a',
                                { className: 'nav-link', href: '#' },
                                'Contact ',
                                _react2['default'].createElement(
                                    'span',
                                    { className: 'sr-only' },
                                    '(current)'
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            { className: 'nav-item' },
                            _react2['default'].createElement(
                                'a',
                                { className: 'nav-link', href: '#' },
                                'About ',
                                _react2['default'].createElement(
                                    'span',
                                    { className: 'sr-only' },
                                    '(current)'
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            { className: 'nav-item dropdown' },
                            _react2['default'].createElement(
                                'a',
                                { className: 'nav-link dropdown-toggle', href: '#', id: 'navbarDropdown', role: 'button', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
                                'Dropdown'
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'dropdown-menu', 'aria-labelledby': 'navbarDropdown' },
                                _react2['default'].createElement(
                                    'a',
                                    { className: 'dropdown-item', href: '#' },
                                    'Action'
                                ),
                                _react2['default'].createElement(
                                    'a',
                                    { className: 'dropdown-item', href: '#' },
                                    'Another action'
                                ),
                                _react2['default'].createElement('div', { className: 'dropdown-divider' }),
                                _react2['default'].createElement(
                                    'a',
                                    { className: 'dropdown-item', href: '#' },
                                    'Something else here'
                                )
                            )
                        )
                    )
                )
            )
        ),
        _react2['default'].createElement(
            _Container2['default'],
            null,
            _react2['default'].createElement(
                'h1',
                null,
                'Hello Header'
            ),
            _react2['default'].createElement(
                _reactBootstrap.Button,
                null,
                'Hello'
            )
        )
    );
};
exports['default'] = Header;

/***/ })

})
//# sourceMappingURL=main.cdaccc43fc99e95415d4.hot-update.js.map