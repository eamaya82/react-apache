/* system js config + SystemJS Babel Plugin */
System.config({
	baseURL: './src/',
	map: {
		'plugin-babel': 'libs/systemjs/plugin-babel.js',
		'systemjs-babel-build': 'libs/systemjs/systemjs-babel-browser.js',
		'css': 'libs/systemjs/css.js',
		'react': 'libs/react.development.js',
		'react-dom': 'libs/react-dom.development.js',
	},
	paths:{
		'react': 'libs/react.development.js',
		'react-dom': 'libs/react-dom.development.js',
	},
	transpiler: 'plugin-babel',
	meta: {
		'*.css': { loader: 'css' },
		'*.js':{
			babelOptions: {
				react: true
			}
		}
	}
});