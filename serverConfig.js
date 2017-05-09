
exports.devConfig = {
	CDN_URL: 'http://localhost:8088',
	REDIRECT_URI: 'http://localhost:5000/login/github/callback',
	CLIENT_ID: '411b91fde0088b2efa2a',
	CLIENT_SECRET: '1aef5524c34d0f11c2441e1dce2af8afa7d39ee1'
}

exports.prdConfig = {
	CDN_URL: './',
	REDIRECT_URI: 'https://we-voting-ele.herokuapp.com/login/github/callback',
	CLIENT_ID: '7d6b761d11f8d943d54f',
	CLIENT_SECRET: '94e24dac049b6c7b3cdd754db23d6ba24a33e455'
}